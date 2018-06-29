enum Speed {slowest = 0.25 , slower = 0.75, slow = 0.5 , normal = 1, fast = 1.25 , faster = 1.5 , fastest = 2} //speed of video
enum Subs {off = "off" , english = "english", spanish = "spanish" , japanese = "japanese", hindi = "hindi"} //subtitles
enum Quality { Auto = "Auto", veryLow = "144px", low = "360px" , normal = "480px", good = "720px" , high = "1080px" , veryhigh = "2160p" , ultrahigh = "4320p"} //quality of the video
interface Comment {
    user:string,
    commentDescr:string
} // for user adding the comment with username and comment content
class YtVideo{
    constructor(private title:string,private videoFile:string, private views:number,private likes:number, private dislikes: number, private channel:string,private publishDate:Date,private subscribers:number, private autoplay:boolean, private annotation:boolean, private speed: Speed, private subtitles:Subs, private quality:Quality, private mute:boolean, private fullScreen:boolean, private comments:Comment[], private description?:string){
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
    // getter settters of the instance variables
    getTitle = ()=>{
        return this.title;
    }
    setTitle = (title:string)=>{
        this.title = title;
    }
    getvideoFile = ()=>{
        return this.videoFile;
    }
    setvideoFile = (videoFile:string)=>{
        this.videoFile = videoFile;
    }
    getViews = ()=>{
        return this.views;
    }
    // incrementing view by 1
    setViews = ()=>{
        if(this.views){
            this.views +=1;
        }
        else{
            this.views=0;
            this.views+=1;
        }
    }
    getLikes = ()=>{
        return this.likes;
    }
    //incrementing like by 1
    setLikes = ()=>{
        if(this.likes){
            this.likes +=1;
        }
        else{
            this.likes=0;
            this.likes+=1;
        }
    }
    getDislikes = ()=>{
        return this.dislikes;
    }
    //incrementing dislike by 1
    setDislikes = ()=>{
        if(this.dislikes){
            this.dislikes +=1;
        }
        else{
            this.dislikes=0;
            this.dislikes+=1;
        }
        
    }
    getChannel = ()=>{
        return this.channel;
    }
    setChannel = (channel:string)=>{
        this.channel = channel;
    }
    getPublishedDate = ()=>{
        return this.publishDate;
    }
    setPublishedDate = (publishDate:Date)=>{
        this.publishDate = publishDate;
    }
    getSubscribers = ()=>{
        return this.subscribers;
    }
    //incrementing subscribers by 1
    setSubscribers = ()=>{
        if(this.subscribers){
            this.subscribers +=1;
        }
        else{
            this.subscribers=0;
            this.subscribers+=1;
        }
    }
    getAutoPlay = ()=>{
        return this.autoplay;
    }
    setAutoPlay = (autoplay:boolean)=>{
        this.autoplay = autoplay;
    }
    getAnnotation = ()=>{
        return this.annotation;
    }
    setAnnotation = (annotation:boolean)=>{
        this.annotation = annotation;
    }
    getSpeed = ()=>{
        return this.speed;
    }
    setSpeed = (speed:Speed)=>{
        this.speed = speed;
    }
    getSubtitles = ()=>{
        return this.subtitles;
    }
    setSubtitles = (subtitles:Subs)=>{
        this.subtitles = subtitles;
    }
    getQuality = ()=>{
        return this.quality;
    }
    setQuality = (quality:Quality)=>{
        this.quality = quality;
    }
    getMute = ()=>{
        return this.mute;
    }
    setMute = (mute:boolean)=>{
        this.mute = mute;
    }
    getFullScreen = ()=>{
        return this.fullScreen;
    }
    setFullScreen = (fullScreen:boolean)=>{
        this.fullScreen = fullScreen;
    }
    getComments = ()=>{
        return this.comments;
    }
    //adding comment
    setComments = (comment:Comment)=>{
        if(this.comments){
            this.comments.push(comment)
        }
        else{
            this.comments = [];
            this.comments.push(comment);
        }
    }
    getDescription = ()=>{
        return this.description;
    }
    setDescription = (description:string)=>{
        this.description = description;
    }
    //getting number of comments i.e length of comment array
    getNoOfComments = () => {
        if(this.comments){
            return this.comments.length;
        }
        else{
            this.comments = [];
            return this.comments.length;
        }
    }
    //function to get related videos
    getRelatedVideos = () =>{
        return 'getting the related videos list'
    }
    getUpnextVideo = () => {
        return 'getting the next video to be played'
    }
    getShareButton = () => {
        return 'share button to share the url'
    }
}

let video1 = new YtVideo("Title of the video","video.flv",561561,1515,25,"Channel of the video",new Date("01/01/2018"),5125154,true,false,Speed.normal,Subs.english,Quality.Auto,false,false,[<Comment>{user:"user1", commentDescr:"comment1"},<Comment>{user:"user2",commentDescr:"comment2"}],"This is a new song released by some popular singer")

console.log(`Title: ${video1.getTitle()}`)
console.log(`Video: ${video1.getvideoFile()}`)
console.log(`Likes:${video1.getLikes()}`)
console.log(`Dislikes:${video1.getDislikes()}`)
console.log(`Channel:${video1.getChannel()}`)
console.log(`Published Date:${video1.getPublishedDate()}`)
console.log(`Subscribers:${video1.getSubscribers()}`)
console.log(`Autoplay:${video1.getAutoPlay()}`)
console.log(`Annotations:${video1.getAnnotation()}`)
console.log(`Speed:${video1.getSpeed()}`)
console.log(`Subtitle:${video1.getSubtitles()}`)
console.log(`Quality:${video1.getQuality()}`)
console.log(`Mute:${video1.getMute()}`)
console.log(`Fullscreen:${video1.getFullScreen()}`)
console.log(`Description:${video1.getDescription()}`)
console.log(`Number of comments:${video1.getNoOfComments()}`)
console.log(`Comments:${JSON.stringify(video1.getComments())}`)
console.log(`Up Next:${video1.getUpnextVideo()}`)
console.log(`Share:${video1.getShareButton()}`)
console.log(`Related Videos:${video1.getRelatedVideos()}`)
console.log('')
console.log('adding new comment')
video1.setComments(<Comment>{user:"user3",commentDescr:"comment3"})
console.log(`Number of comments:${video1.getNoOfComments()}`)
console.log(`Comments:${JSON.stringify(video1.getComments())}`)
console.log('')
console.log('another user liking the video')
video1.setLikes()
console.log(`Likes: ${video1.getLikes()}`)
console.log('')
console.log('switching to fullscreen')
video1.setFullScreen(true)
console.log(`Fullscreen:${video1.getFullScreen()}`)