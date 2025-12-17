const reels = [
    {
        username: "dev_she",
        likeCount: 1240,
        isLiked: true,
        commentCount: 86,
        caption: "Built this feature using pure JavaScript 🚀",
        video: "./videos/1.mp4",
        userProfile: "https://randomuser.me/api/portraits/women/21.jpg",
        shareCount: 34,
        isFollowed: true
    },
    {
        username: "code.with.raj",
        likeCount: 980,
        isLiked: true,
        commentCount: 45,
        caption: "React hooks finally make sense 😌",
        video: "./videos/2.mp4",
        userProfile: "https://randomuser.me/api/portraits/men/32.jpg",
        shareCount: 19,
        isFollowed: true
    },
    {
        username: "ui.by.neha",
        likeCount: 2100,
        isLiked: true,
        commentCount: 132,
        caption: "Minimal UI > flashy UI ✨",
        video: "./videos/3.mp4",
        userProfile: "https://randomuser.me/api/portraits/women/45.jpg",
        shareCount: 78,
        isFollowed: true
    },
    {
        username: "backend.bro",
        likeCount: 670,
        isLiked: false,
        commentCount: 28,
        caption: "When API finally returns 200 😭",
        video: "./videos/4.mp4",
        userProfile: "https://randomuser.me/api/portraits/men/41.jpg",
        shareCount: 12,
        isFollowed: false
    },
    {
        username: "ml.diaries",
        likeCount: 3050,
        isLiked: true,
        commentCount: 201,
        caption: "Training my first ML model today 🤖",
        video: "./videos/5.mp4",
        userProfile: "https://randomuser.me/api/portraits/women/18.jpg",
        shareCount: 95,
        isFollowed: true
    },
    {
        username: "daily.dev.fun",
        likeCount: 540,
        isLiked: false,
        commentCount: 19,
        caption: "Debugging is just detective work 🕵️‍♂️",
        video: "./videos/6.mp4",
        userProfile: "https://randomuser.me/api/portraits/men/55.jpg",
        shareCount: 8,
        isFollowed: false
    },
    {
        username: "frontend.joy",
        likeCount: 1875,
        isLiked: true,
        commentCount: 104,
        caption: "CSS Grid made layouts easy 💙",
        video: "./videos/7.mp4",
        userProfile: "https://randomuser.me/api/portraits/women/63.jpg",
        shareCount: 41,
        isFollowed: true
    },
    {
        username: "python.logs",
        likeCount: 890,
        isLiked: false,
        commentCount: 36,
        caption: "One script can save hours ⏱️",
        video: "./videos/8.mp4",
        userProfile: "https://randomuser.me/api/portraits/men/27.jpg",
        shareCount: 22,
        isFollowed: false
    },
    {
        username: "tech.with.komal",
        likeCount: 2600,
        isLiked: true,
        commentCount: 167,
        caption: "Internship project finally completed 🎉",
        video: "./videos/9.mp4",
        userProfile: "https://randomuser.me/api/portraits/women/9.jpg",
        shareCount: 88,
        isFollowed: true
    },
    {
        username: "system.design",
        likeCount: 1120,
        isLiked: false,
        commentCount: 59,
        caption: "Scalability matters more than you think ⚙️",
        video: "./videos/10.mp4",
        userProfile: "https://randomuser.me/api/portraits/men/14.jpg",
        shareCount: 27,
        isFollowed: false
    }
];

var sum = '';
reels.forEach(function (elem) {
    sum = sum + `<div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}"
                                alt="">
                            <h3>${elem.username}</h3>
                            <button>${elem.isFollowed?"Unfollow":"Follow"}</button>

                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon icon">${elem.isLiked?`<i class="love ri-heart-fill"></i>`:`<i class="ri-heart-line"></i></h4>`}
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment-icon icon">
                            <h4 class="comment"><i class="ri-chat-1-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="comment-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></i></h4>
                        </div>
                    </div>
                </div>`;




})

let allReels = document.querySelector('.all-reels')

console.log(allReels);

allReels.innerHTML = sum;

