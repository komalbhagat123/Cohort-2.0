const users = [
    {
        fullName: "Aarav Patel",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        profession: "Software Developer",
        description: "Passionate full-stack developer specializing in building scalable web apps with modern JavaScript frameworks."
    },
    {
        fullName: "Sophia Sharma",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        profession: "UI/UX Designer",
        description: "Creative designer focused on crafting user-friendly interfaces and meaningful digital experiences."
    },
    {
        fullName: "Natasha Verma",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        profession: "Data Analyst",
        description: "Analytical thinker skilled in transforming raw data into actionable business insights."
    },
    {
        fullName: "Karan Singh",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        profession: "Content Creator",
        description: "Video creator and storyteller producing engaging content across digital platforms."
    }
];

let sum = '';

users.forEach(function (elem) {
    sum += `<div class="card">
            <img src="${elem.image}"alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`;
})
console.log(sum);

let main = document.querySelector('main');
console.log(main);
main.innerHTML = sum;