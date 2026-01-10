// function afterDelay(time, cb) {
//     setTimeout(() => {
//         cb();
//     }, time);
// }

// afterDelay(5000, function () {
//     console.log("Callback executed ✅");
// })



// function getUser(username, cb) {
//     console.log("fetching data.....")
//     setTimeout(() => {
//         cb({ "id": 123, "username": username });
//     }, 1000);
// }

// getUser("Komal", function (data) {
//     console.log(data.username);
//     console.log("fetching posts....");
//     function getUserPosts(id, cb) {
//         setTimeout(() => {
//             cb(["Post1","Post2","Post3"]);
//         }, 1000);
//     }
//     getUserPosts(data.id,function(post){

//         console.log(post);
//     })
// })



function loginUser(user, cb) {
    setTimeout(() => {
        console.log("Step 1: User Logged In");
        cb({ userId: 123, name: user });
    }, 1000);
}

function fetchPermissions(userId, cb) {
    setTimeout(() => {
        console.log("Step 2: Permissions Fetched");
        cb(["Media", "Contacts", "Storage"]);
    }, 1000);
}

function loadDashboard(permission, cb) {
    setTimeout(() => {
        console.log("Step 3: Dashboard Loaded with " + permission);
        cb();
    }, 1000);
}

loginUser("Komal", function (user) {
    fetchPermissions(user.userId, function (permissions) {
        loadDashboard(permissions, function () {
            console.log("DashBoard Loaded")
        })
    })
})