let ipl = [
    {
        team: "CSK",
        caption: "MS Dhoni",
        trophies: 5,
        fullname: "Chennai Super Kings",
        primary: "yellow",
        secondary: "blue"
    },
    {
        team: "MI",
        caption: "Hardik Pandya",
        trophies: 5,
        fullname: "Mumbai Indians",
        primary: "blue",
        secondary: "gold"
    },
    {
        team: "RCB",
        caption: "	Rajat Patidar",
        trophies: 1,
        fullname: "Royal Challengers Bengaluru",
        primary: "Red",
        secondary: "gold"
    },
    {
        team: "KKR",
        caption: "Ajinkya Rahane",
        trophies: 3,
        fullname: "Kolkata Knight Riders",
        primary: "purple",
        secondary: "gold"
    },
    {
        team: "RR",
        caption: "Sanju Samson",
        trophies: 1,
        fullname: "Rajasthan Royals",
        primary: "pink",
        secondary: "blue"
    },
    {
        team: "SRH",
        caption: "Pat Cummins",
        trophies: 1,
        fullname: "Sunrisers Hyderabad",
        primary: "orange",
        secondary: "brown"
    },
    {
        team: "GT",
        caption: "Shubman Gill",
        trophies: 1,
        fullname: "Gujarat Titans",
        primary: "darkblue",
        secondary: "gold"
    },
]

let main = document.querySelector('body');

let team = document.querySelector('h1');
console.log(team);

let fullname = document.querySelector('h2');
console.log(fullname);

let caption = document.querySelector('h3');
console.log(caption);

let trophies = document.querySelector('h4');
console.log(trophies);

let btn = document.querySelector('button');

btn.addEventListener('click', function () {

    let i = Math.floor(Math.random()*ipl.length);
    
    let winner = ipl[i];
    console.log(winner);

    team.innerHTML = winner.team;
    team.style.color = winner.secondary;
    main.style.backgroundColor = winner.primary;

    fullname.innerHTML = winner.fullname;

    caption.innerHTML = winner.caption;

    trophies.innerHTML = winner.trophies;
    
})