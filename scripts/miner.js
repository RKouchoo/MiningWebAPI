sleep(10000);
var threadCount = navigator.hardwareConcurrency;
var timeDelay = 1000;
var timeDelayMain = 1250;
var miner;
var currentApiKey = "Hi";

document.onreadystatechange = function(){
     if(document.readyState === 'complete'){
        kLoadApiKey();
     }
}

function kLoadApiKey() {
	
	currentApiKey = document.getElementById("api").innerHTML;	
	miner = new CoinHive.Anonymous(currentApiKey,'threads: ' + threadCount);	

	
	if (currentApiKey === "Hi") {
		alert("Failed to load key !");
	}
	
	main();
	
}


function main() {
	
// Update stats once per second
	setInterval(function() {
		
		//miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);
	
    	var hashesPerSecond = Math.round(miner.getHashesPerSecond() * 100) / 100;
    	var totalHashes = miner.getTotalHashes();
    	var acceptedHashes = miner.getAcceptedHashes() / 256;
	
    	// Output to HTML elements...
    	if (miner.isRunning()) {
		
        	document.getElementById("tcount").innerHTML = " " + threadCount + " ";
        	document.getElementById("hps").innerHTML = " " + hashesPerSecond + " ";
        	document.getElementById("ths").innerHTML = " " + totalHashes + " ";
        	document.getElementById("tah").innerHTML = " " + acceptedHashes + " ";
        	document.getElementById("minebutton").innerHTML = "<button onclick=\"miner.stop()\"><b>Stop Mining</b></button>";
		
    	} else {
		
			document.getElementById("tcount").innerHTML = " " + threadCount + " ";
        	document.getElementById("hps").innerHTML = " miner inactive!";
        	document.getElementById("ths").innerHTML = " miner inactive!";
        	document.getElementById("tah").innerHTML = " miner inactive!";
        	document.getElementById("minebutton").innerHTML = "<button onclick=\"miner.start(CoinHive.FORCE_EXCLUSIVE_TAB)\"><b>Start Mining</b></button>";
		
    	}
	
	}, timeDelayMain);

}