# Youtube Channel Videos #

Youtube Channel Videos is a library that fetches all the videos within a channel then returns them as one big array. This abstracts away the annoying paging of requests that have to be done when handling the API manually.

The library does not currently emit progress events, however pull requests are welcome.

### Install ###
```
npm install youtube-channel-videos
```

### Usage ###
```
var ypi = require('youtube-channel-videos');
ypi.channelVideos("YOUR_YOUTUBE_API_KEY", "CHANNEL_ID", function(channelItems) {
  console.log(channelItems);
});
```

### Testing this Library ###

```
API_KEY=YOUR_API_KEY node test.js
```

Should just spit out a bunch of items in the channel followed by the length of the channel.
