var channelVideos = require('./run');

// channel has 93 items, should force 2 pages of 50 each
// Full playlst link: https://www.youtube.com/channel?list=PLV34fyAxhmQPnz2obH3cDPjY-whXGBKRp
channelVideos.channelVideos(process.env.API_KEY, 'PLV34fyAxhmQPnz2obH3cDPjY-whXGBKRp', function(channelItems) {
  console.log(channelItems);
  console.log(channelItems.length);
});
