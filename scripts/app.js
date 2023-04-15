//---Task-01-start---

// var zakatPercentage = "0.025"
// var userInput = prompt("Enter your zakat amount") 
// var result = ("Your Zakat amount is " +userInput * zakatPercentage)
// alert(result) 

//---Task-01-end---


//---Task-02-start---

// var familyMembers = prompt("Write down your Total Family Members");
// var fitrahMethod = prompt("Choose your Fitrah Method: \na) Wheat \nb) Barley \nc) Dates \nd) Raisins");
// var wheat = 250; 
// var barley = 450;
// var dates = 2100;
// var raisins = 2800;
// fitrahMethod = fitrahMethod.toLowerCase()


// if(fitrahMethod == "wheat"){
//     var result = wheat * familyMembers
    
// }
// else if(fitrahMethod == "barley"){
//     var result = barley * familyMembers
    
// }
// else if(fitrahMethod == "dates"){
//     var result = dates*  familyMembers
    
// }
// else if(fitrahMethod == "raisins"){
//     var result = raisins * familyMembers
    
// }

// alert("Your Total Fitrah Amount is " +result)

//---Task-02-end---

//---Task-03-start---

// var secretNumber = 7;
// var guess = prompt("Guess A Secret Number between 1-10");

// if(guess == 7){
//     alert("Congratulations! You guessed the secret number")
// }

// else if(guess <= 5){
//     alert("Oops! Your guess is too low \n Try Again")
// }

// else if(guess == 6){
//     alert("You guess the nearest number but still not right. \n Try Again")
// }

// else if(guess > 7){
//     alert("Your guess is too high. \n Try Again")
// }

//---Task-03-end---


//---Task-04-start---

// var yourName = prompt("Kindly Write Your Name");
// yourName = yourName.toLowerCase();
// var msg = yourName[0].toUpperCase(0) + yourName.slice(1);
// alert(msg);

//---Task-04-end---

//---task-05-start---
 
// var contactName = []
// var contactNumber = []

// var a = prompt("What is your name?")
// var b = +prompt("what is your contact number?")
// contactName.push(a)
// contactNumber.push(b)

// var c = prompt("What is your name?")
// var d = +prompt("what is your contact number?")
// contactName.push(c)
// contactNumber.push(d)

// var e = prompt("What is your name?")
// var f = +prompt("what is your contact number?")
// contactName.push(e)
// contactNumber.push(f)

// var g = prompt("What is your name?")
// var h = +prompt("what is your contact number?")
// contactName.push(g)
// contactNumber.push(h)


// alert(" Name: "+contactName[0]+" "+"Number: "+contactNumber[0]+" \n Name: "+contactName[1]+" "+"Number: "+contactNumber[1]+" \n Name: "+contactName[2]+" "+"Number: "+contactNumber[2]+" \n Name: "+contactName[3]+" "+"Number: "+contactNumber[3]+"")

//---task-05-end---

//---task-06-start---

// var products = ["0. Chair" , "\n1. Table" , "\n2. Stool" , "\n3. Pencil" , "\n4. Board"];
// var position = prompt("Select The Position Of The Item You Want From the List: \n" + products); 

// if(position==0){
//     console.log("Your item is: " +products.splice(0,1))
    
// }
// else if(position==1){
//     console.log("Your item is: " +products.splice(1,1))
    
// }

// else if(position==2){
//     console.log("Your item is: " +products.splice(2,1))
    
// }
//  else if(position==3){
//     console.log("Your item is: " +products.splice(3,1))
    
// }

// else if(position==4){
//     console.log("Your item is: " +products.splice(4,1))
    
// }

// else{
//     console.log("Selected Item is not in the list")
// }

// alert("Remaining Items: \n" + products);
// alert("No. of items left: \n" +products.length);


//---task-06-end---

//---task-07-start---
// var nationality = prompt("Your Nationality Please");
// var Gender = prompt("Your Gender Please");
// var age = +prompt("Your Age Please");

// if(nationality == "pakistani" || nationality == "Pakistani" || nationality == "indian" || nationality == "Indian"){
//     if(Gender == "male" && age >18){
//         alert("you are eligible to vote")
//     }
//     else if(Gender == "female" && age >18) {
//         maritalStatus = prompt("Your Marital Status Please")
//         if(maritalStatus == "Married" || maritalStatus == "married"){
//             alert("Congratulations! You are eligible to vote")    
//     }
//     else{
//         alert("Sorry! You are not eligible to vote")
//     }
//     }
// else if(age <=18){
//     alert("Sorry! You Are not eligible to vote")

// }
// }
// else{
//     alert("Sorry! You Are not eligible to vote")
// }

//---task-07-end---

//---task-08-start---

// var WorldCupSquad = [ "Rameez Raja " , " Shaheen Butt " , " Waseem Akram " , " Waqar Younus " , " Shoaib Akhtar " , " Shaheen Afridi " , " Shahid Afridi " , " Salman Butt " , " Muhammad Asif " , " Muhammad Hafeez " , " Umer Akmal " , " Javed Miandad " , " Kamran Akmal " , " Muhammad Sami " , " Muhammad Younus " ];
// alert("The Selected 15 players of World Cup Squad Are: \n" + WorldCupSquad);

// var b = WorldCupSquad.slice(2,13);
// alert("The Playing 11 squad against India is: \n" + b);


//---task-08-end---
                      