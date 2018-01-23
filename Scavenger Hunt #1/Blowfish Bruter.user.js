// ==UserScript==
// @name            Encrypt/Decrypt Bruter
// @namespace       xadamxk
// @description     Tool to try list of key options.
// @require         http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @require         http://sladex.org/blowfish.js/ext/blowfish.js
// @include         *://sladex.org/blowfish.js/
// @version         1.1
// ==/UserScript==
// Don't use this, I derp'd

var keyList = "";
var keyArray = keyList.split(',');
var cipherText = "";
//console.log(keyArray);

for (i = 0; i < keyArray.length; i++) {
    console.log(blowfish.decrypt(cipherText, keyList[i], {cipherMode: 1, outputType: 2}).substring(0,20));
}
