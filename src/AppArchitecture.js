const registry = (() =>
{
  const modules = new Map();
  return {
    register: (pckg) => {
      console.log(`Registering module: ${pckg.name}`);

      pckg.module.notify = ((msg) => {
        console.log(`${pckg.name}: ${msg}`);
      });

      modules.set(pckg.name, pckg.module);
    },
    require: (module) => modules.get(module)
  }
})();

const aModule = { name: "aModule", module: { }}
const logger = { name: "logger", module: { log: (msg) => console.log(msg) } }
const request = { name: "request", module: { get: (msg) => console.log(msg) } }
const modules = [aModule, logger, request];

let appCore = ((registry, modules) =>
{
  modules.forEach((item) => registry.register(item));
  return {
    register: (item) => registry.register(item),

    notifyAll: (msg) => modules.forEach((pckg) => {
      pckg.module.notify(msg)
    })
  }
})(registry, modules);


const sandbox = ((registry) =>
{
  const request = registry.require("request");
  const logger = registry.require("logger");

  return {
    log: (msg) => logger.log(msg),
    get: (url) => request.get(url)
  }
})(registry);

appCore.register({name: "sandbox", module: sandbox});
appCore.notifyAll("OMG This Works!");
