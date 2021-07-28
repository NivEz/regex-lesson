
let message = "price is 0.5$, niv.ezra@gmail.com Call me tomorrow, 035555555, this is my phone number: 050-1234567, if i am not available please try contacting me at 052-4443321."

/**
 * Extract the phone numbers from the message above.
 */


function validatePhoneNumber(someString) {
    if (someString.length !== 11) {
        return false;
    }

    for (let i = 0; i < 3; i++) {
        let char = someString[i]
        if (char < 0 && char > 9 || char === " ") return false
    }

    if (someString[3] !== '-') {
        return false;
    }

    for (let i = 4; i < 10; i++) {
        let char = someString[i]
        if (char < 0 && char > 9 || char === " ") return false
    }

    return true;
}


function findPhoneNumbers(myString) {
    let phoneArr = []
    for (let i = 0; i < myString.length; i++) {
        let piece = myString.substr(i, 11);
        console.log(piece)
        if (validatePhoneNumber(piece)) {
            phoneArr.push(piece)
        }
    }
    console.log("Phones arr: ", phoneArr)
    return phoneArr
}

// findPhoneNumbers(message)



// -------------------------------

// finding with regex

// let re = /\d\d\d-\d\d\d\d\d\d\d/g
// console.log("Phones arr: ", message.match(re))


// let re = /\d+-?\d+/g
// same as above
// let re = new RegExp('\\d+-\\d+', 'g')
// console.log("Phones arr: ", message.match(re))


// let re = /[0-9-]+/g
// console.log("Phones arr: ", message.match(re))






