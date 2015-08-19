// using the web enabled LED example provided by Particle:
// https://docs.particle.io/guide/getting-started/examples/photon/#control-leds-over-the-39-net
//
// We're assuming you've followed their steps to get your photon running and flashed it
// the code provided in their example.
//
// Your next step to activate the LED would be to require and configure particle-beam:
var pb = require('particle-beam')({
  "device": "1234", // use your device id. Consider passing it via an ENV vairable
  "token": "5678" // use your token id. Consider passing it via an ENV variable
});

// Let's turn that LED on!
// first argument is the Spark Function,
// second argument is the command you wish to pass to the function
// and last we have the callback to handle the error or response.
pb('led', 'on', function(err, res, body){
  if(err){
    console.log(err);
    return;
  }

  console.log("Body: ", body);
});
