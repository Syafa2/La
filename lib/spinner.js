var spin = require('spinnies')

var spinner = { 
"interval": 120,
"frames": [
"",
"𝑪",
"𝑪𝒓",
"𝑪𝒓𝒆",
"𝑪𝒓𝒆𝒂",
"𝑪𝒓𝒆𝒂𝒕",
"𝑪𝒓𝒆𝒂𝒕𝒆",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 F",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Fa",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Fat",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Fath",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Fatho",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Fathon",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Fathoni",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Fathon",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Fatho",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Fath",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Fat",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 Fa",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 F",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩",
"𝑪𝒓𝒆𝒂𝒕𝒆𝒅",
"𝑪𝒓𝒆𝒂𝒕𝒆",
"𝑪𝒓𝒆𝒂𝒕",
"𝑪𝒓𝒆𝒂",
"𝑪𝒓𝒆",
"𝑪𝒓",
"𝑪",
""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}