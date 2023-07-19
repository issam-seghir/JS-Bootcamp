let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let i = 1;


friends.forEach((element , index)=> {
    if (!element.toLowerCase().startsWith(letter)) {
        console.log(`${i} => ${element}`);
        i++;
    }
});
