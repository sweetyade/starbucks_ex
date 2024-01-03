// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'KGvzp3Ub-X4', //최초 재생할 유튜브 영상 id
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'KGvzp3Ub-X4' // 반복재생할 유튜브 영상id
    },
    events: {
      onReady: function (event) {
        event.target.mute() //음소거
      }
    }
    
  });
}