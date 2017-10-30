var apiKey = '';
var apiKeyLocation = 

readKeyFile("./keys/key.apikey");

function readKeyFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4) {
			
            if(rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                apiKey = allText;
            }
        }
    }
    rawFile.send(null);
}
