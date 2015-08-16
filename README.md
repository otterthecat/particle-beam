# Particle-Beam
Send requests to your Particle Photon

## How to use
Particle-beam is just a simple convienence wrapper built around the request module, and lets you post to your photon's api.

Usage is pretty straight forward:
```javascript
var ParticleBeam = require('particle-beam');

// create a new beam, and pass your photon's device id and token id
var beam = ParticleBeam({
  "device": "[your device id here]",
  "token": "[your api token here]"
});

// now that you have a beam configured to your device,
// you can call functions you've registered to your board
beam('[name of function]', [data (optional)], callback);
```
