
window.addEventListener("loadeddata", setYoutube, true);

function setYoutube(event) {
    var video = document.getElementsByClassName("video-stream html5-main-video")[0];
    var count = 0;

    if (localStorage["youtube-settings"]) {
        console.log('got settings');
    } else {
        console.log('no settings');
        localStorage["youtube-settings"] = 2.5;
        return;
    }

    while(video == undefined && count < 1000) {
        video = document.getElementsByClassName("video-stream html5-main-video")[0];
        ++count;
    }
    if (video != undefined) {
        video.playbackRate = localStorage["youtube-settings"];
        /*
        setTimeout(function() {
            video.playbackRate = 2.5;
        }, 1000);
       */
        console.log('should have set, count: ' + count + ' video: ' + video);
    } else {
        console.log('didnt get video, count: ' + count);
    }

}
