// ==UserScript==
// @name            Encrypt/Decrypt Bruter
// @namespace       xadamxk
// @description     Tool to test list of key options.
// @require         http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include         *://codebeautify.org/encrypt-decrypt
// @version         1.1
// ==/UserScript==

var keyList = ""; // Possible keys go here
var keyArray = keyList.split(',');
var cipherText = ""; // Encrypted message goes here
var delayInMilliseconds = 2000; // 2 seconds for the lulz

console.log("Possible Keys: "+keyArray.length+1);

// Select algorithm dropdown
$("#alg").val("twofish");

// Insert Text
$("#text").val(cipherText);

// Append next value button
$( "input[value='Decrypt']").after('<input type="button" id="nextKey" class="btn span3 btn-large span11" style="margin-left: 15px;" value="Next Key">');

// Loop next button
var i = 0;
runLoop();

function runLoop(){
    if(i < keyArray.length){
        setTimeout( runLoop, delayInMilliseconds );
        tryKey();
    }
}


function tryKey(){
    // Insert key
    $("#key").val(keyArray[i]);
    // Click button
    $( "input[value='Decrypt']").click();
    // Log results
    console.log("Key: "+keyArray[i-1]); // Offset to account for timing delay
    console.log("Message: " + $("#result_ed").val()); //.substring(0,20)
    i++;
}

// Nextkey event listener
$( "#nextKey" ).click(function() {
    tryKey();
});