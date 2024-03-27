const acctId = 23392
let acctEmail = "nishant@google.com"
var acctPassword = "12345"
acctCity = "Haridwar"
let acctState;

// acctId = 2 // not allowed


acctEmail = "np@np.com"
acctPassword = "21212121"
acctCity = "Dehradun"

console.log(acctId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([acctId, acctEmail, acctPassword, acctCity, acctState])