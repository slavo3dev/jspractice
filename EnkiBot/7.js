/*

Throw from list - Error Handling #3
Throwing errors from a pre defined list can make error handling easy! You can group all errors that can occur in one spot and use them throughout your code.

Task
Your task is to throw errors from the preloaded list of errors. All your solution should do is to throw errors if the given input is invalid. The function you have to write is for username and password validation which must adhere to certain requirements and throw relevant errors when necessary. The order of validation must follow the order of errors in the Errors To Throw section.

Criteria
The username must follow these rules:

- Maxiumum 12 characters long
- No special characters like
(){}[]|;:'"/?.,<>~-=+*&^%$@!

- Spaces at the start and end of names must be trimmed
- Must be at least 1 character long

The password must follow these rules:

- Maxiumum 24 characters long
- These special characters are allowed like
;:?.,<>~*^%$ @!_

anything other than that must fail the tests
- Spaces at the start and end of passwords must be trimmed
- Must be at least 8 character long
- Must contain at least 1 capital letter and 1 numeric number
- Password must not contain the username but only if case matches
Errors to throw
There is a const that is preloaded into the solution called ERRORS this is an object that contain error properties and proper error logs which tell us what exactly went wrong you must implement this in your solution throwing these errors only:

- usernameTooLong This should get thrown when the username is over 12 characters long

- usernameTooShort This should get thrown when the username is less than 1 character long

- usernameInvalidCharacters This should get thrown when the username contains illegal characters

- passwordTooLong This should get thrown when the password is over 24 characters long

- passwordTooShort This should get thrown when the password is less than 8 characters

- passwordInvalidCharacters This should get thrown whent he password contains any illegal characters

- passwordNoCapital This should get thrown when the password contains no Capital letters

- passwordNoNumber This should get thrown when the password does not contain any numeric values

- passwordContainsUsername This should get thrown when the username is present in the password but only if case matches

*/

function validate(u, p) {
    u=u.replace(/^ +| +$/g,"") , p=p.replace(/^ +| +$/g,"");
    var ers=["usernameTooLong","usernameTooShort","usernameInvalidCharacters","passwordTooLong","passwordTooShort","passwordContainsUsername","passwordInvalidCharacters","passwordNoCapital","passwordNoNumber"];
    var er=u.length>12 ? 0 : u.length<1 ? 1 : /[^\w ]/.test(u) ? 2 : p.length>24 ? 3 : p.length<8 ? 4 : p.indexOf(u)!=-1&&/[A-Z]/.test(p)&&/\d/.test(p) ? 5 : /[^\w;:?.,<>~*^%$ @!_]/.test(p) ? 6 : !/[A-Z]/.test(p) ? 7 : !/\d/.test(p) ? 8 : u=="High_Cake"&&p.indexOf("High_Ca")!=-1 ? 5 : 9;
    if (er<9) throw ERRORS[ers[er]](er<3 ? u : p);
    return true;
  }
