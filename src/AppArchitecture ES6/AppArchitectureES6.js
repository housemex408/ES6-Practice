import Sandbox from "./Sandbox";
import AppCore from "./AppCore";

//Module Definition
const aModule = { name: "aModule", module: { }}
const logger = { name: "logger", module: { log: (msg) => console.log(msg) } }
const request = { name: "request", module: { get: (msg) => console.log(msg) } }
const sbx = { name: "sandbox", module: new Sandbox() }
const modules = [aModule, logger, request];


const appCore = new AppCore(modules, sbx);
appCore.subscribeToNotifications();
appCore.notifyAll("OMG This Works!");

const mod = appCore.getSbx();
mod.log("logger: blah");
mod.get("get: http://google.com");

const mod2 = mod.require("logger");
mod2.sandbox.log("logger: blah mod2")
