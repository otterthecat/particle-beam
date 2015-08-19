# Particle-Beam
Send requests to your [Particle Photon](https://www.particle.io/prototype#photon)

## How to use
Particle-beam is just a simple convienence wrapper built around the [request module](https://www.npmjs.com/package/request), and lets you post to your [photon's api](https://docs.particle.io/reference/api/).

Usage is pretty straight forward:
```javascript
var ParticleBeam = require('particle-beam');

// create a new beam, and pass your photon's device id and token id
var pewpew = ParticleBeam({
  "device": "[your device id here]",
  "token": "[your api token here]"
});

// Now that you have a beam configured to your device,
// you can call functions you've registered to your board.
pewpew('[name of function]', [dataString (optional)], callback);
```
