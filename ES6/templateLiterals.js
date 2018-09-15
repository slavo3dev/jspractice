// Template Literals

/* 

Template literals are essentially string literals that include embedded expressions.

Denoted with backticks (  ) instead of single quotes ( '' ) or double quotes ( "" ), template literals can contain placeholders which are represented using ${expression}. This makes it much easier to build strings.

Here's the previous examples using template literals.

*/

let student = {
    name: 'Slavo'
}

let teacher = {
    name: 'Slavo',
    room: 25
}

let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;