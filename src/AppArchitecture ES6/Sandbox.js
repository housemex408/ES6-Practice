//Define Sandbox

import registry from "./Registry";

export default class Sandbox
{
  constructor()
  {
    this._registry = registry;
    this._request = this._registry.require("request");
    this._logger = this._registry.require("logger");
  }

  log(msg)
  {
    if(this._logger === undefined)
      this._logger = this._registry.require("logger");
    return this._logger.log(msg);
  }

  get(url)
  {
    if(this._request === undefined)
      this._request = this._registry.require("request");
    return this._request.get(url);
  }

  require(m)
  {
    return this._registry.require(m);
  }
}

