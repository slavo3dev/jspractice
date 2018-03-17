// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

function likes(names) {
  var count = 0;
  if (names.length === 0) {
    return "no one likes me";
  } else if (names.length === 1) {
    return `${names[0]} likes this!`;
  } else if (names.length === 2) {
    return `${names.reduce((a, b) => a + " and " + b)} like this`;
  } else if (names.length === 3) {
    return `${names[0]} and ${names[1]}, ${names[2]} like this`;
  }

  for (var i = 3; i < list.length; i++) {
    count++;
  }

  return `${names[0]} and ${names[1]} and ${count} like this`;
}

console.log(likes([])); // must be "no one likes this"
console.log(likes(["Peter"])); // must be "Peter likes this"
console.log(likes(["Jacob", "Alex"])); // must be "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])); // must be "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // must be "Alex, Jacob and 2 others like this"
