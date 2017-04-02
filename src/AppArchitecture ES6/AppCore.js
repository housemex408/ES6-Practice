import registry from "./Registry"

//Define App Core
export default class AppCore
{
  constructor(modules, sandbox)
  {
    this._modules = modules;
    this._registry = registry;
    this._sandbox = sandbox;
    this._modules.forEach((item) => this._registry.register(item));
    this.registerSbx();
  }

  addMethod(m, name, fn)
  {
    m.module[name] = fn;
  }

  notification(name, msg)
  {
    console.log(`${name}: ${msg}`);
  }

  register(item)
  {
    this._registry.register(item);
  }

  registerSbx()
  {
    this._registry.register(this._sandbox);
    this.addMethod(this._sandbox, "notify", this.notification);

    for(let i = 0; i < this._modules.length; i++)
    {
      const m = this._modules[i];
      this.addMethod(m, "sandbox", this._sandbox.module);
    }
  }

  getSbx()
  {
    return this._sandbox.module;
  }

  subscribeToNotifications()
  {
    for(let i = 0; i < this._modules.length; i++)
    {
      const m = this._modules[i];
      this.addMethod(m, "notify", this.notification);
    }
  }

  notifyAll(msg)
  {
    this._modules.forEach((pckg) => {
      pckg.module.notify(pckg.name, msg)
    });
  }
}
