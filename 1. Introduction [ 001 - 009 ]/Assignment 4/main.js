// start group 1
console.group("Fruits");
console.log("banana 🍌");
console.log("orange 🍊");
    //  start nested group I
    console.group("apple 🍎");
    console.log("%cred apple","color:red");
    console.log ("%cyellow apple", "color:yellow");
    //  start nested group II
    console.group("%cgreen apple", "color:green");
        console.log("%c one piece", "background-color:#008B8B;color:#7FFFD4;padding:0.25rem");
        console.log("%c three pieces", "background-color:#008B8B;color:#7FFFD4;padding:0.25rem");
        console.log("%c five pieces", "background-color:#008B8B;color:#7FFFD4;padding:0.25rem");
        console.groupEnd();
        // End the nested group II
    console.groupEnd();
    // End the nested group I
console.groupEnd();
// end group 1

// start group 2
console.group("Vegetables");
console.log("carrot 🥕");
console.log("potato 🥔");
console.groupEnd();
// end group 2
