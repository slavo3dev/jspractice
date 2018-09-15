// Destructuring

/*

Destructuring borrows inspiration from languages like Perl and Python by allowing you to specify the elements you want to extract from an array or object on the left side of an assignment. It sounds a little weird, but you can actually achieve the same result as before, but with much less code; and it's still easy to understand.

*/

const userNames = ['Slavo7dev', 'S7Developer', 'MimiCom24'];
const [userName1, userName2, userName3] = userNames;
console.log(`userName1=${userName1}, userName2=${userName2}, userName3==${userName3}`)


// Objects

const gemstone = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29
};

const {
    type,
    color,
    carat
} = gemstone;

console.log(type, color, carat);

/*
 * Programming Quiz: Destructuring Arrays (1-3)
 *
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one, , , two, , , , three] = things;


const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);