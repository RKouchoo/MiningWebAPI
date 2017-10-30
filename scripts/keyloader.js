var apiKeyHash = "failed to load!";
var timeDelay = 1000;

readKeyFile("./keys/key.apikey");

setInterval(function() {
	document.getElementById("api").innerHTML = apiKeyHash;	
}, timeDelay);

function readKeyFile(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
	
	rawFile.onreadystatechange = function (){
        
		if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                apiKeyHash = rawFile.responseText;
            }
    
		}
    }
    rawFile.send(null);
}
