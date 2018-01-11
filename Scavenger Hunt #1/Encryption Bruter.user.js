// ==UserScript==
// @name            Encrypt/Decrypt Bruter
// @namespace       xadamxk
// @description     Tool to test list of key options.
// @require         http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include         *://codebeautify.org/encrypt-decrypt
// @version         1.0
// ==/UserScript==

var keyList = "";
var keyArray = keyList.split(',');
var cipherText = "";
//console.log(keyArray);
var delayInMilliseconds = 2000; //2 seconds

console.log("Possible Keys: "+keyArray.length);

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
    if(i < keyArray.length + 1){
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
    console.log("("+ i + ") " + $("#result_ed").val().substring(0,20));
    i++;
}

// Nextkey event listener
$( "#nextKey" ).click(function() {
    tryKey();
});
