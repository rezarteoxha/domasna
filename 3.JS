// Функција за проверка на бројот
function checkNumber(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve("The number is even");
        } else {
            reject("The number is odd");
        }
    });
}

// Функција за успешно управување
function handleSuccess(message) {
    console.log(message);
}

// Функција за управување со грешки
function handleError(error) {
    console.error(error);
}

// Повик на функцијата checkNumber со различни аргументи
checkNumber(4)
.then(handleSuccess)
.catch(handleError);

checkNumber(7)
.then(handleSuccess)
.catch(handleError);

checkNumber(10)
.then(handleSuccess)
.catch(handleError);
