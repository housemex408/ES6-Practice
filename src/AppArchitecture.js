//Define Registry
const registry = (() =>
{
  const modules = new Map();
  return {
    register: (pckg) => {
      console.log(`Registering module: ${pckg.name}`);
      modules.set(pckg.name, pckg.module);
    },
    require: (module) => modules.get(module)
  }
})();

//Module Definition
const aModule = { name: "aModule", module: { }}
const logger = { name: "logger", module: { log: (msg) => console.log(msg) } }
const request = { name: "request", module: { get: (msg) => console.log(msg) } }
const modules = [aModule, logger, request];

//Define App Core
const appCore = ((registry, modules) =>
{
  modules.forEach((item) => registry.register(item));

  const addMethod = (m, name, fn) => {
    m.module[name] = fn;
  }

  const notification = (name, msg) => {
    console.log(`${name}: ${msg}`);
  }

  return {
    register: (item) => registry.register(item),

    registerSbx: (sbx) => {
      registry.register(sbx);
      addMethod(sbx, "notify", notification)

      for(let i = 0; i < modules.length; i++)
      {
        const m = modules[i];
        addMethod(m, "sandbox", sbx.module);
      }
    },

    getSbx:  () => registry.require("sandbox"),

    subscribeToNotifications: () => {
      for(let i = 0; i < modules.length; i++)
      {
        const m = modules[i];
        addMethod(m, "notify", notification)
      }
    },

    notifyAll: (msg) => modules.forEach((pckg) => {
      pckg.module.notify(pckg.name, msg)
    })
  }
})(registry, modules);

//Define Sandbox
const sandbox = ((registry) =>
{
  const request = registry.require("request");
  const logger = registry.require("logger");

  return {
    log: (msg) => logger.log(msg),
    get: (url) => request.get(url),
    require: (m) => registry.require(m)
  }
})(registry);

appCore.registerSbx({name: "sandbox", module: sandbox});
appCore.subscribeToNotifications();
appCore.notifyAll("OMG This Works!");

const mod = appCore.getSbx();
mod.log("blah");
mod.get("http://google.com");

const mod2 = sandbox.require("logger");
mod2.sandbox.log("blah mod2")
