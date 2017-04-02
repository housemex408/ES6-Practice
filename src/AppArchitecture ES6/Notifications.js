export default class Notifications
{
  constructor() {
    this._events = {}
  }

  on(eventName, fn, context) {
    this._events[eventName] = this._events[eventName] || [];
    this._events[eventName].push(fn.bind(context));
  }

  emit(eventName, data) {
    if(!this._events[eventName])
      return;

    this._events[eventName].forEach((fn)=>{
      fn(data);
    });
  }

  off(eventName) {
    if(!this._events[eventName])
      return;

    while(this._events[eventName].length > 0)
      this._events[eventName].pop();
  }
}
