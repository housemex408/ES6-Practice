const registry = (() =>
{
  const modules = new Map();
  return {
    register: (moduleName, module) => {
      console.log(`Registering module: ${moduleName}`);
      modules.set(moduleName, module);
    },
    require: (module) => modules.get(module)
  }
})();

const aModule = { name: "aModule", module: {}}
const logger = { name: "logger", module: { log: (msg) => console.log(msg) } }
const request = { name: "request", module: { get: (msg) => console.log(msg) } }
const modules = [aModule, logger, request];

let app = (registry, modules) =>
{
  modules.forEach((item) => registry.register(item.name, item.module));
  return {
    register: (name, module) => registry.register(name, module)
  }
};

app = app(registry, modules);


const sandbox = (registry) =>
{
  const request = registry.require("request");
  const logger = registry.require("logger");

  return {
    log: (msg) => logger.log(msg),
    get: (url) => request.get(url)
  }
}

const sbx = sandbox(registry);
app.register("sandbox", sbx);

sbx.log("blah")
