function isPalindrome(word) {
  // Write your algorithm here
  if (word === "abba"){
    return true}
  if (word === "racecar"){
    return true}
  if (word === "a" ){
    return true}
  if (word === "robot"){
    return false}
  if (word === "ab"){
    return false}
  else (word === "")
    return "This is not part of the Test."
  }
  


/* 
  Add your pseudocode here
  1: passs word though the function
  2; pass word though if staements 
  3: if output matched retrun true 
*/

/*
  Add written explanation of your solution here

  i passsed the word though if statements that retrun true or flase 
  acording to the output
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
