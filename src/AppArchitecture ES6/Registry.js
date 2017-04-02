//Define Registry

class Registry
{
  constructor()
  {
    this._modules = new Map();
  }

  register(pckg)
  {
    console.log(`Registering module: ${pckg.name}`);
    this._modules.set(pckg.name, pckg.module);
  }

  require(module)
  {
    return this._modules.get(module);
  }
}

const registry = registry || new Registry();

export default registry;
