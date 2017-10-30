var miner = new CoinHive.Anonymous('YOUR_API_KEY_HERE','threads: 1');
var timeDelay = 1000;
	
// Update stats once per second
setInterval(function() {
	
    var threadCount = miner.getNumThreads();
    var hashesPerSecond = Math.round(miner.getHashesPerSecond() * 100) / 100;
    var totalHashes = miner.getTotalHashes();
    var acceptedHashes = miner.getAcceptedHashes() / 256;
	
    // Output to HTML elements...
    if (miner.isRunning()) {
		
        document.getElementById("tcount").innerHTML = " " + threadCount + " ";
        document.getElementById("hps").innerHTML = " " + hashesPerSecond + " ";
        document.getElementById("ths").innerHTML = " " + totalHashes + " ";
        document.getElementById("tah").innerHTML = " " + acceptedHashes + " ";
        document.getElementById("minebutton").innerHTML = "<button onclick=\"miner.stop()\">Stop Mining</button>";
		
    } else {
		
        document.getElementById("hps").innerHTML = " miner inactive!";
        document.getElementById("ths").innerHTML = " miner inactive!";
        document.getElementById("tah").innerHTML = " miner inactive!";
        document.getElementById("minebutton").innerHTML = "<button onclick=\"miner.start(CoinHive.FORCE_EXCLUSIVE_TAB)\">Start Mining</button>";
		
    }
	
}, timeDelay);
	