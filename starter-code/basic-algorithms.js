// Names and Input

var hacker1 = "pepe";
console.log("The driver's name is "+ hacker1);
var hacker2 = prompt("name:");
console.log("The navigato's is " + hacker2);

// Conditionals

if(hacker1.length>hacker2.length){
  console.log("The Driver has the longest name, it has "+ hacker1.length +" characters");
}else if(hacker2.length>hacker1.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}else{
 console.log("wow, you both got equally long names, " + hacker1.length +" characters!!"); 
}

// Loops

var name="";
for(var i = 0; i < hacker1.length; i++){
  name += hacker1[i].toUpperCase()+ " ";
}
console.log(name);

var nameReverse = "";
for(var i = hacker2.length-1; i >= 0; i--){
  nameReverse += hacker2[i];
}
console.log(nameReverse);


var lexicName = hacker1.localeCompare(hacker2);
if (lexicName < 0) {
  console.log("The driver's name goes first");
}else if (lexicName > 0) {
  console.log("Yo, the navigator goes first definitely");
}else{
  console.log("What?! You both got the same name?");
}

//Palindromes

var word = prompt("Whrite a word");
var palindrome = word.toLowerCase() == word.toLowerCase().split('').reverse().join('');
if(palindrome){
  console.log(word + " is palindrome");
}else{
  console.log(word + " isn't palindrome");
}
// Lorem ipsum generator

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac ipsum placerat, dapibus magna id, facilisis ante. Integer diam arcu, efficitur ut egestas quis, scelerisque ac eros. Vestibulum ut lacus elementum eros mollis elementum. Morbi placerat sed magna eu feugiat. Donec enim urna, aliquet nec urna vitae, ullamcorper ultrices nunc. Ut pharetra consequat blandit. Nulla in erat feugiat, fermentum felis quis, posuere nunc. Aliquam elit diam, vulputate vel volutpat quis, finibus sed ligula. Donec tincidunt tempus erat vehicula luctus. Sed luctus scelerisque tellus vel feugiat. Vivamus dignissim velit sit amet leo posuere hendrerit. Duis molestie erat tincidunt ligula ornare elementum. Mauris at tortor diam. Nunc eu ante sapien. Aliquam elit sapien, sagittis a erat id, posuere feugiat dui. Vestibulum sed dolor auctor, dignissim tellus sed, tincidunt diam. Praesent pretium interdum leo, quis placerat orci dignissim vitae. Suspendisse euismod mi mi, a blandit tortor mattis eleifend. Nullam id tincidunt tellus. Praesent tristique elementum porttitor. Praesent luctus maximus nibh a convallis. Sed auctor pellentesque laoreet. Sed ac nulla eu tortor facilisis feugiat. Nunc id odio sit amet odio blandit lobortis. Vestibulum urna ligula, efficitur vitae dapibus sed, euismod sit amet magna. Sed sollicitudin turpis ut ex finibus feugiat. Phasellus dui purus, molestie nec molestie et, ullamcorper eget nunc. Nunc quis nisi laoreet, euismod lectus sit amet, pretium tellus. Nullam mattis, erat ac dapibus blandit, augue nisl feugiat leo, eu pellentesque sapien purus in velit. Quisque iaculis ex at elit convallis aliquam. Praesent eu nulla eget ex varius ornare ac at lacus. Nunc faucibus semper ligula at accumsan. Praesent interdum congue ex et maximus. Cras convallis gravida malesuada. Nullam molestie orci ac justo vulputate, non malesuada lorem lacinia. Maecenas tempus mi maximus convallis dictum.";
// Generated 3 paragraphs, 267 words, 1814 bytes of Lorem Ipsum
console.log(loremIpsum.split(/\s+/).length);
console.log("-et appears " + loremIpsum.match(/et/g).length + " times");