function exampleLet() {
    let name = "Alice";
    if (true) {
        let name = "Bob"; // different variable, block scoped
        console.log("Inside if:", name); // Bob
    }
    console.log("Outside if:", name); // Alice
}
exampleLet();