function slugify(title) {
  let lcTitle = title.toLowerCase();
  let slug = lcTitle.split(" ");

  return slug.join("-");
}

console.log("Task #1");

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-bec
