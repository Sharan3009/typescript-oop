var Speed;
(function (Speed) {
    Speed[Speed["slowest"] = 0.25] = "slowest";
    Speed[Speed["slower"] = 0.75] = "slower";
    Speed[Speed["slow"] = 0.5] = "slow";
    Speed[Speed["normal"] = 1] = "normal";
    Speed[Speed["fast"] = 1.25] = "fast";
    Speed[Speed["faster"] = 1.5] = "faster";
    Speed[Speed["fastest"] = 2] = "fastest";
})(Speed || (Speed = {})); //speed of video
var Subs;
(function (Subs) {
    Subs["off"] = "off";
    Subs["english"] = "english";
    Subs["spanish"] = "spanish";
    Subs["japanese"] = "japanese";
    Subs["hindi"] = "hindi";
})(Subs || (Subs = {})); //subtitles
var Quality;
(function (Quality) {
    Quality["Auto"] = "Auto";
    Quality["veryLow"] = "144px";
    Quality["low"] = "360px";
    Quality["normal"] = "480px";
    Quality["good"] = "720px";
    Quality["high"] = "1080px";
    Quality["veryhigh"] = "2160p";
    Quality["ultrahigh"] = "4320p";
})(Quality || (Quality = {})); //quality of the video
var YtVideo = /** @class */ (function () {
    function YtVideo(title, videoFile, views, likes, dislikes, channel, publishDate, subscribers, autoplay, annotation, speed, subtitles, quality, mute, fullScreen, comments, description) {
        var _this = this;
        this.title = title;
        this.videoFile = videoFile;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.channel = channel;
        this.publishDate = publishDate;
        this.subscribers = subscribers;
        this.autoplay = autoplay;
        this.annotation = annotation;
        this.speed = speed;
        this.subtitles = subtitles;
        this.quality = quality;
        this.mute = mute;
        this.fullScreen = fullScreen;
        this.comments = comments;
        this.description = description;
        // getter settters of the instance variables
        this.getTitle = function () {
            return _this.title;
        };
        this.setTitle = function (title) {
            _this.title = title;
        };
        this.getvideoFile = function () {
            return _this.videoFile;
        };
        this.setvideoFile = function (videoFile) {
            _this.videoFile = videoFile;
        };
        this.getViews = function () {
            return _this.views;
        };
        // incrementing view by 1
        this.setViews = function () {
            if (_this.views) {
                _this.views += 1;
            }
            else {
                _this.views = 0;
                _this.views += 1;
            }
        };
        this.getLikes = function () {
            return _this.likes;
        };
        //incrementing like by 1
        this.setLikes = function () {
            if (_this.likes) {
                _this.likes += 1;
            }
            else {
                _this.likes = 0;
                _this.likes += 1;
            }
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        //incrementing dislike by 1
        this.setDislikes = function () {
            if (_this.dislikes) {
                _this.dislikes += 1;
            }
            else {
                _this.dislikes = 0;
                _this.dislikes += 1;
            }
        };
        this.getChannel = function () {
            return _this.channel;
        };
        this.setChannel = function (channel) {
            _this.channel = channel;
        };
        this.getPublishedDate = function () {
            return _this.publishDate;
        };
        this.setPublishedDate = function (publishDate) {
            _this.publishDate = publishDate;
        };
        this.getSubscribers = function () {
            return _this.subscribers;
        };
        //incrementing subscribers by 1
        this.setSubscribers = function () {
            if (_this.subscribers) {
                _this.subscribers += 1;
            }
            else {
                _this.subscribers = 0;
                _this.subscribers += 1;
            }
        };
        this.getAutoPlay = function () {
            return _this.autoplay;
        };
        this.setAutoPlay = function (autoplay) {
            _this.autoplay = autoplay;
        };
        this.getAnnotation = function () {
            return _this.annotation;
        };
        this.setAnnotation = function (annotation) {
            _this.annotation = annotation;
        };
        this.getSpeed = function () {
            return _this.speed;
        };
        this.setSpeed = function (speed) {
            _this.speed = speed;
        };
        this.getSubtitles = function () {
            return _this.subtitles;
        };
        this.setSubtitles = function (subtitles) {
            _this.subtitles = subtitles;
        };
        this.getQuality = function () {
            return _this.quality;
        };
        this.setQuality = function (quality) {
            _this.quality = quality;
        };
        this.getMute = function () {
            return _this.mute;
        };
        this.setMute = function (mute) {
            _this.mute = mute;
        };
        this.getFullScreen = function () {
            return _this.fullScreen;
        };
        this.setFullScreen = function (fullScreen) {
            _this.fullScreen = fullScreen;
        };
        this.getComments = function () {
            return _this.comments;
        };
        //adding comment
        this.setComments = function (comment) {
            if (_this.comments) {
                _this.comments.push(comment);
            }
            else {
                _this.comments = [];
                _this.comments.push(comment);
            }
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.setDescription = function (description) {
            _this.description = description;
        };
        //getting number of comments i.e length of comment array
        this.getNoOfComments = function () {
            if (_this.comments) {
                return _this.comments.length;
            }
            else {
                _this.comments = [];
                return _this.comments.length;
            }
        };
        //function to get related videos
        this.getRelatedVideos = function () {
            return 'getting the related videos list';
        };
        this.getUpnextVideo = function () {
            return 'getting the next video to be played';
        };
        this.getShareButton = function () {
            return 'share button to share the url';
        };
        this.title = title;
        this.videoFile = videoFile;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.channel = channel;
        this.publishDate = publishDate;
        this.subscribers = subscribers;
        this.autoplay = autoplay;
        this.annotation = annotation;
        this.speed = speed;
        this.subtitles = subtitles;
        this.quality = quality;
        this.mute = mute;
        this.fullScreen = fullScreen;
        this.comments = comments;
        this.description = description;
    }
    return YtVideo;
}());
var video1 = new YtVideo("Title of the video", "video.flv", 561561, 1515, 25, "Channel of the video", new Date("01/01/2018"), 5125154, true, false, Speed.normal, Subs.english, Quality.Auto, false, false, [{ user: "user1", commentDescr: "comment1" }, { user: "user2", commentDescr: "comment2" }], "This is a new song released by some popular singer");
console.log("Title: " + video1.getTitle());
console.log("Video: " + video1.getvideoFile());
console.log("Likes:" + video1.getLikes());
console.log("Dislikes:" + video1.getDislikes());
console.log("Channel:" + video1.getChannel());
console.log("Published Date:" + video1.getPublishedDate());
console.log("Subscribers:" + video1.getSubscribers());
console.log("Autoplay:" + video1.getAutoPlay());
console.log("Annotations:" + video1.getAnnotation());
console.log("Speed:" + video1.getSpeed());
console.log("Subtitle:" + video1.getSubtitles());
console.log("Quality:" + video1.getQuality());
console.log("Mute:" + video1.getMute());
console.log("Fullscreen:" + video1.getFullScreen());
console.log("Description:" + video1.getDescription());
console.log("Number of comments:" + video1.getNoOfComments());
console.log("Comments:" + JSON.stringify(video1.getComments()));
console.log("Up Next:" + video1.getUpnextVideo());
console.log("Share:" + video1.getShareButton());
console.log("Related Videos:" + video1.getRelatedVideos());
console.log('');
console.log('adding new comment');
video1.setComments({ user: "user3", commentDescr: "comment3" });
console.log("Number of comments:" + video1.getNoOfComments());
console.log("Comments:" + JSON.stringify(video1.getComments()));
console.log('');
console.log('another user liking the video');
video1.setLikes();
console.log("Likes: " + video1.getLikes());
console.log('');
console.log('switching to fullscreen');
video1.setFullScreen(true);
console.log("Fullscreen:" + video1.getFullScreen());
