    // ---------CHAPTER NO 12 to 13------------

// Question NO 01
var user = prompt("Enter a character")
if (user >= 'A' && user <= 'Z') {
  alert("The entered character is an uppercase letter.")
}
else if (user >= 'a' && user <= 'z') {
  alert("The entered character is a lowercase letter.")
}
else if (user >= '0' && user <= '9') {
    alert("The entered character is a number.")
  }
else if(user === "") {
  alert("The entered character is neither a number, uppercase letter nor lowercase letter.")
}


// Question NO 02
var num1 = parseInt(prompt("Enter the first number"));
var num2 = parseInt(prompt("Enter the second number"));
if (num1 > num2) {
  alert("The first number is larger.");
} else if (num1 < num2) {
  alert("The second number is larger.");
} else {
  alert("Both numbers are equal.");
}


// Question NO 03
var num = +prompt("Enter a number");
if (num > 0) {
  alert("The number is positive.");
  } else if (num < 0) {
  alert("The number is negative.");
  } else {
  alert("The number is zero.");
}


// Question NO 04
var userInput = prompt("Enter a character");
var flag = false
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if (userInput == vowels[i]) {
      flag = true;
    }
}
if(flag){
    alert(userInput + " is a vowel.");
}else{
    alert(userInput + " is not a vowel.");
}


// Question NO 05
var CorrPassword = "ijazkhan01";
var userPassword = prompt("Enter your password");

if (userPassword == "") {
  alert("Please enter your password");
} else if (userPassword == CorrPassword) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}


// Question NO 06
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting)
}
else{
greeting = "Good evening";
alert(greeting)
}


// Question No 07
var time = +(prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm): "));
var hours = Math.floor(time / 100);
var minutes = time % 100;
var standered;
if (hours > 12) {
  hours -= 12;
  standered = "pm";
} else if (hours === 12) {
  standered = "pm";
} else {
  standered = "am";
}
alert(`${hours}:${minutes.toString().padStart(2, '0')} ${standered}`);
if (hours < 12) {
  alert("Good morning");
} else if (hours < 17) {
  alert("Good afternoon");
} else {
  alert("Good evening");
}