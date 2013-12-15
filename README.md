# Observable.js

Observable.js is a simple on, off & trigger implementation that can be easily mixed into other objects or leveraged standalone. 

```javascript
var events = Observable();

// Listen to something
events.on('fire', function(isDrill) {
  if (isDrill) return;
  alert('Ahhh!!! A fire!');
});

// Fire a listener
events.trigger('fire', false);

// Unregister the listener(s)
events.off('fire');
```

Arguments passed into observable trigger are forwarded to the corresponding listeners.

## Installation

```bash
bower install iamerrick-observable
```

