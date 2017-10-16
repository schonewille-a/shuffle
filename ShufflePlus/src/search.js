//Array for videoIDs
vid = [];

function searchVideo(PageToken)
{
    //Searchy text goes here
    var searchText = "The Quick Brown Fox";

    //Scary JQuery get statement (note $ is shorthand for JQuery)
    $.get(
        //Youtube Data API request
        "https://www.googleapis.com/youtube/v3/search",{
        //Not certain what part means, but snippet works
        part : 'snippet',
        //Q for query
        q : searchText,
        //Max results, break over 50
        maxResults : 10,
        //No clue what a page token is
        pageToken : PageToken,
        //Lovely API key
        key: 'AIzaSyAfwfRNJQRwEKJtea5hcZQ0hswGloi7DUI'},

        //I also have no clue why this function is here
        function myPlan(response){
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
                    return;
                }
            }
        searchVideo(nextPageToken);
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
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        height: '390',
        width: '640',
        videoId: vid[0],
        events: {
            'onReady': onPlayerReady,
        }
    });
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

