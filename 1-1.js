var user = {
    name: "john",
    age: 20,
}

var getAged = function (user, passedTime) {
    var result = {};
    if (typeof user === 'object' && user !== null) {
        for (prop in user) {
            result[prop] = getAged(user[prop])
            if (prop === 'age') {
                result[prop] = passedTime
            }
        }
    } else {
        result = user
    }
    return result
}


var agedUser = getAged(user, 6);

var agedUserMustBeDifferentFromUser = function (user1, user2) {
    if (!user2) {
        console.log("Failed! user2 doesn't exist!");
    } else if (user1 !== user2) {
        console.log("Passed! If you become older, you will be different from you in the past!")
    } else {
        console.log("Failed! User same with past one");
    }
}

agedUserMustBeDifferentFromUser(user, agedUser);