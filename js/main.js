//instantiation
var api = new Api();
var ui = new UI();
var events = new Events(ui,api);


//Capture events
events.capture();
