var youtube = require('youtube-api');
var fs = require('fs');

function channelVideosRecursive(channelId, callStackSize, pageToken, currentItems, callback) {
    youtube.search.list({
        type: 'video',
        part: 'snippet',
        pageToken: pageToken,
        maxResults: 50,
        channelId: channelId,
    }, function(err, data) {
        if (err) return console.log('error: ' + err);

        for (var x in data.items) {
            currentItems.push(data.items[x]);
        }

        if (data.nextPageToken) {
            channelVideosRecursive(channelId, callStackSize + 1, data.nextPageToken, currentItems, callback);
        } else {
            callback(currentItems);
        }

    });
}

exports.channelVideos = function(apiKey, channelId, done) {

    youtube.authenticate({
        type: 'key',
        key: apiKey,
    });

    channelVideosRecursive(channelId, 0, null, [], done);
};

