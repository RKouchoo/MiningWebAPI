var threadCount = 1;
miner = new CoinHive.Anonymous(apiKeyHash,'threads: ' + threadCount);
var timeDelay = 1000;
	
// Update stats once per second
setInterval(function() {
	
    threadCount = miner.getNumThreads();
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
		
        document.getElementById("hps").innerHTML = " miner inactive!";
        document.getElementById("ths").innerHTML = " miner inactive!";
        document.getElementById("tah").innerHTML = " miner inactive!";
        document.getElementById("minebutton").innerHTML = "<button onclick=\"miner.start(CoinHive.FORCE_EXCLUSIVE_TAB)\"><b>Start Mining</b></button>";
		
    }
	
}, timeDelay);
	