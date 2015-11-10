




/*
     FILE ARCHIVED ON 19:20:08 May 26, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 2:42:21 Nov 10, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
$(window).load(function() {
    getBittrex();
    getCryptsy()
    window.setInterval(function() {
        getBittrex();
        getCryptsy()
    }, 20000);
});

function getBittrex() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var jsonbittrex = xmlhttp.responseText;
            var parsedbittrex = JSON.parse(jsonbittrex);
            document.getElementById("bittrexbid").innerHTML = parsedbittrex.Bid;
            document.getElementById("bittrexask").innerHTML = parsedbittrex.Ask;
            document.getElementById("bittrexlast").innerHTML = parsedbittrex.Last;
            document.getElementById("bittrexvolume").innerHTML = parsedbittrex.Volume;

            var domain = "Sling.pw | ";
            var title = domain.concat(parsedbittrex.Last);
            document.title = title;
        }
    }
    xmlhttp.open("GET", "./scripts/getBittrex.php", true);
    xmlhttp.send();
}

function getCryptsy() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var jsoncryptsy = xmlhttp.responseText;
            var parsedcryptsy = JSON.parse(jsoncryptsy);
            document.getElementById("cryptsybid").innerHTML = parsedcryptsy.Bid;
            document.getElementById("cryptsyask").innerHTML = parsedcryptsy.Ask;
            document.getElementById("cryptsylast").innerHTML = parsedcryptsy.Last;
            document.getElementById("cryptsyvolume").innerHTML = parsedcryptsy.Volume;
        }
    }
    xmlhttp.open("GET", "./scripts/getCryptsy.php", true);
    xmlhttp.send();
}