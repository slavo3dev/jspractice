let str = "I'm a little tea pot";
let str_new = [];

str.split(" ").forEach(item => {
  str_new.push(item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
});

console.log(str_new.join(" "));
