// ==UserScript==
// @name            Brute Hex Colors
// @namespace       xadamxk
// @description     Brute force hex colors using API
// @require         http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include         https://codebeautify.org/encrypt-decrypt
// @version         1.0.0
// @grant GM_xmlhttpRequest
// ==/UserScript==
// == Settings ==
var encryptedText = "pdt8iEw9pKZZNI%2BpgsQf037V8gQEZR1bf1AApxYUozBMUTUqoKyexreVqn3aFhTTQ9NWyGj0EZdHW8xBNUk%2BhWGotXlOdagmj3zrHP7nOHEIV6nnyQWXjcFTURgPGXtiJfUK%2FlzGDQdAXuE9S%2BAgp4646pKf59MqsMoxwxqHDtldc0STXrAcYe%2BYlZAOhocvrSPwKaVHfIv1YiOrGNwkIXz7qU3ysweLcdYUr5uzIEo%3D";
var keyString = "key=";
var key = "";
var keyString2 = "&alg=twofish&mode=cbc&text=";
// == Script ==

$("#result_ed").after($("<textarea>").attr("id","textarea1").css("height","200px"));
$("#textarea1").after($("<button>").attr("id","submitInfo").text("SUBMIT"));

$( "#submitInfo" ).click(function() {
    // Break text into lines
    var arrayOfLines = $('#textarea1').val().split('\n');
    // Loop through each line
    $.each(arrayOfLines, function(index, item) {
        setTimeout( function timer(){
            // Get HEX Color
            var hexColorName = item.substring(0, item.indexOf(','));
            key = hexColorName;
            // XHTTP Request
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "https://codebeautify.org/encryptDecrypt/decrypt", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
            xhttp.setRequestHeader("Accept", "text/plain, */*; q=0.01");
            xhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            var requestBody = keyString + key + keyString2 + encryptedText;
            xhttp.send(requestBody);
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // If solution
                    if (this.responseText.includes("Hint:")){
                        console.log("SOLUTION: "+hexColorName);
                        console.log("SOLUTION: "+this.responseText);
                    } else{
                        if (index % 100 == 0){ console.log("Index: " + index + "," + hexColorName);}
                    }
                }
            };
            //
        }, index*500 );
    });
});
