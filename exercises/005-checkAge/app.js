function checkAge(name, age) {
  // your code here
  if(age<21) return "Go home";
  else return "Welcome";
}
let output = checkAge("adrian",22);
console.log(output);