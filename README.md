# simple-hooks-events

A simple library for [Hooks](http://hooks.events)

## Usage

```
var Hooks = require("simple-hooks-events");

var hook = new Hooks("API key");

hook.send("Message Title", "Message Body", function(sent) {
  if (sent) {
    console.log("Optional callback...");
  } else {
    console.log("...to check if the message was approved by the Hooks server");
  }
});
```

## License
MIT