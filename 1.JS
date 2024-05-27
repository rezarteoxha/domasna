function printFunc(seconds) {
    if (typeof seconds !== 'number') {
        console.log("Please enter number");
    }else if (seconds < 0 || seconds > 9) {
        console.log("Please enter one digit number");
    }else {
        setTimeout(function () {
            console.log("Coading is not that hard!");
        },seconds * 1000);
    }
}
printFunc(3);
