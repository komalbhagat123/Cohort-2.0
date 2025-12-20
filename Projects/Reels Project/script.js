const reels = [
    {
        username: "dev_she",
        ismuted: true,
        likeCount: 1240,
        isLiked: true,
        commentCount: 86,
        caption: "Built this feature using pure JavaScript 🚀",
        video: "./video/videoplayback.mp4",
        userProfile: "https://randomuser.me/api/portraits/women/21.jpg",
        shareCount: 34,
        isFollowed: true
    },
    {
        username: "code.with.raj",
        ismuted: true,
        likeCount: 980,
        isLiked: true,
        commentCount: 45,
        caption: "React hooks finally make sense 😌",
        video: "./video/videoplayback (1).mp4",
        userProfile: "https://randomuser.me/api/portraits/men/32.jpg",
        shareCount: 19,
        isFollowed: true
    },
    {
        username: "ui.by.neha",
        ismuted: true,
        likeCount: 2100,
        isLiked: true,
        commentCount: 132,
        caption: "Minimal UI > flashy UI ✨",
        video: "./video/videoplayback (2).mp4",
        userProfile: "https://randomuser.me/api/portraits/women/45.jpg",
        shareCount: 78,
        isFollowed: true
    },
    {
        username: "backend.bro",
        ismuted: true,
        likeCount: 670,
        isLiked: false,
        commentCount: 28,
        caption: "When API finally returns 200 😭",
        video: "./video/videoplayback (3).mp4",
        userProfile: "https://randomuser.me/api/portraits/men/41.jpg",
        shareCount: 12,
        isFollowed: false
    },
    {
        username: "ml.diaries",
        ismuted: true,
        likeCount: 3050,
        isLiked: true,
        commentCount: 201,
        caption: "Training my first ML model today 🤖",
        video: "./video/videoplayback (4).mp4",
        userProfile: "https://randomuser.me/api/portraits/women/18.jpg",
        shareCount: 95,
        isFollowed: true
    },
    {
        username: "daily.dev.fun",
        ismuted: true,
        likeCount: 540,
        isLiked: false,
        commentCount: 19,
        caption: "Debugging is just detective work 🕵️‍♂️",
        video: "./video/videoplayback (5).mp4",
        userProfile: "https://randomuser.me/api/portraits/men/55.jpg",
        shareCount: 8,
        isFollowed: false
    },
    {
        username: "frontend.joy",
        ismuted: true,
        likeCount: 1875,
        isLiked: true,
        commentCount: 104,
        caption: "CSS Grid made layouts easy 💙",
        video: "./video/videoplayback (6).mp4",
        userProfile: "https://randomuser.me/api/portraits/women/63.jpg",
        shareCount: 41,
        isFollowed: true
    },
    {
        username: "python.logs",
        ismuted: true,
        likeCount: 890,
        isLiked: false,
        commentCount: 36,
        caption: "One script can save hours ⏱️",
        video: "./video/videoplayback.mp4",
        userProfile: "https://randomuser.me/api/portraits/men/27.jpg",
        shareCount: 22,
        isFollowed: false
    },
    {
        username: "tech.with.komal",
        ismuted: true,
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
        ismuted: true,
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

let allReels = document.querySelector('.all-reels');

function addData() {
    var sum = '';
    reels.forEach(function (elem, idx) {
        sum = sum + `<div class="reel">
                    <video autoplay loop ${elem.ismuted ? 'muted' : ''} src="${elem.video}"></video>
                    <div class="mute" id="${idx}">
                    ${elem.ismuted ? '<i class="ri-volume-mute-line"></i>' : '<i class="ri-volume-up-line"></i>'}
            
        </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}"
                                alt="">
                            <h3>${elem.username}</h3>
                            <button id="${idx}" class="follow">${elem.isFollowed ? "Unfollow" : "Follow"}</button>

                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like" id="${idx}">
                            <h4 class="like-icon icon">${elem.isLiked ? `<i class="love ri-heart-fill"></i>` : `<i class="ri-heart-line"></i></h4>`}
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-1-line"></i></h4>
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
    allReels.innerHTML = sum;
}

addData();

allReels.addEventListener('click', function (dets) {

    if (dets.target.className === "like") {
        if (!(reels[dets.target.id].isLiked)) {
            reels[dets.target.id].likeCount++;
            reels[dets.target.id].isLiked = true;
        }
        else {
            reels[dets.target.id].likeCount--;
            reels[dets.target.id].isLiked = false;
        }
        addData();

    }
    else if (dets.target.className === "follow") {
        if (!(reels[dets.target.id].isFollowed)) {
            reels[dets.target.id].isFollowed = true;
        }
        else {
            reels[dets.target.id].isFollowed = false;
        }
        addData();
    }
    else if (dets.target.className === "mute") {
        if (!(reels[dets.target.id].ismuted)) {
            reels[dets.target.id].ismuted = true;
        }
        else {
            reels[dets.target.id].ismuted = false;
        }
        addData();
    }


})