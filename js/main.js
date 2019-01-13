$(document).ready(function () {
    var player = videojs('video');

    player.playlist([
        {
            name: 'Dsports',
            autoplay: true,
            sources: [
                {src: 'http://172.28.28.112/live/antbd1001/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Gazi TV',
            sources: [
                {src: 'http://172.28.28.112/live/antbd1006/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Masranga',
            sources: [
                {src: 'http://103.85.196.10:8080/hls/one.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Gazi Tv 2',
            sources: [
                {src: 'http://boss.bdtv.live:8080/hls/2.m3u8', type: 'application/x-mpegURL'},
            ]
		},
		{
            name: 'Masranga 2',
            sources: [
                {src: 'http://boss.bdtv.live:8080/hls/3.m3u8', type: 'application/x-mpegURL'},
            ]
        },
		{
            name: 'sony six',
            sources: [
                {src: 'http://172.28.28.112/live/antbd1002/index.m3u8', type: 'application/x-mpegURL'},
            ]
        }]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});
