(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Observable = factory();
  }
}(this, function () {

  function Observable() {
    if (!(this instanceof Observable)) return new Observable;

    this.listeners = {};
  }

  Observable.prototype.on = function(name, fn) {
    this.listeners[name] = this.listeners[name] || [];
    this.listeners[name].push(fn);
  };

  Observable.prototype.trigger = function(name) {
    if ( ! this.listeners[name]) return;
    var queue = this.listeners[name];
    var length, i;
    for (length = queue.length, i = 0; i < length; i++) {
      queue[i].apply(queue[i], Array.prototype.slice.call(arguments, 1));
    }
  };

  Observable.prototype.off = function(name, fn) {
    if ( ! this.listeners[name]) return;
    var queue = this.listeners[name];
    var length, i;

    if (fn) {
      queue.splice(queue.indexOf(fn), 1);
    } else {
      this.listeners[name] = [];
    }
    
  };

  return Observable;
}));
