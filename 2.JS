// 1
function promiseFunction1() {
    return Promise.resolve("Function 1 resolved");
}

// 2
function promiseFunction2() {
    return Promise.reject("Function 2 rejected");
}

//  3
function promiseFunction3() {
    return Promise.resolve("Function 3 resolved");
}

// 4
function promiseFunction4() {
    return Promise.resolve("Function 4 resolved");
}

// 5
function promiseFunction5() {
    return Promise.reject("Function 5 rejected");
}

// .then() и .catch()
promiseFunction1().then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});

promiseFunction2().then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});

promiseFunction3().then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});

promiseFunction4().then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});

promiseFunction5().then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});
