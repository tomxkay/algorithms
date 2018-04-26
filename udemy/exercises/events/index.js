// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    this.events[eventName] ? this.events[eventName].push(callback) : this.events[eventName] =[callback];
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    this.events[eventName] ? this.events[eventName].forEach(fn => { fn()}) : null;
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.events[eventName] ? delete this.events[eventName] : null;
  }
}

module.exports = Events;
