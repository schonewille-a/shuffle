//Array for videoIDs
var vid = [];
function searchVideo(PageToken)
{
    //Searchy text goes here
    var searchText = "Gorillaz";

    //Scary JQuery get statement (note $ is shorthand for JQuery)
    $.get(
        //Youtube Data API request
        "https://www.googleapis.com/youtube/v3/search",{
        //Not certain what part means, but snippet works
        part : 'snippet',
        //Q for query
        q : searchText,
		//Only searching for music videos
		videoCategoryId : 10,
		type: 'video',
        //No clue what a page token is
        pageToken : PageToken,
        //Lovely API key
        key: 'AIzaSyAfwfRNJQRwEKJtea5hcZQ0hswGloi7DUI'},

        //I also have no clue why this function is here
        function populateList(response){
            //Again with the page tokens
            nextPageToken=response.nextPageToken;     
            //The number of results maybe?
            var resultCount = response.pageInfo.totalResults;
            //Or maybe thats what this is        
            itemsLen = response.items.length;
            //This loop populates our vid array
            for (var i=0; i<response.items.length;i++){
                var videoID =response.items[i].id.videoId;
                //If the type is undefined we reject it (how do we know this? who knows)
                if(typeof videoID != 'undefined'){
                    vid.push(videoID);
                }
				if (vid.length == 50) {
					return;
				}
            }
        searchVideo(nextPageToken);
		return;
   }); //End of get nonsense
}

//Call Search Video
searchVideo();
//Setup Player
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//Make the player
var player;
var song=0;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        events: {
            'onReady': onPlayerReady,
			'onStateChange': vidEnd,
			'onError': vidError
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	//Waits for playlist to fill before playing a video
	shuffle(vid);
    event.target.loadVideoById(vid[song]);
}

//Function to advance to the next song if current song has ended
function vidEnd(event) {
	if(event.target.getPlayerState() == 0) {
		event.target.loadVideoById(vid[++song]);
	}
}

//Function to skip video on error
function vidError(event) {
	while (vid.length < song + 1) {
	}
	
	event.target.loadVideoById(vid[++song]);
}

//Function to skip song and play next
function nextVideo() {
	player.loadVideoById(vid[++song]);
}

//Function to play previous song
function previousVideo() {
	player.loadVideoById(vid[--song]);
}

//Function to shuffle array
function shuffle(a) {
	var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

