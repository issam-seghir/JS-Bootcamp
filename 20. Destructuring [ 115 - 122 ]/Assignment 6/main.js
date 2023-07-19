const chosen = 1;

const myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

function getFriend(chosen) {
    const {
        title,
        age,
        available,
        skills: [, skill],
    } = myFriends[chosen - 1];
    console.log(title);
    console.log(age);
    console.log(available ? "Available" : "Not Available");
    console.log(skill);
}

getFriend(chosen);
