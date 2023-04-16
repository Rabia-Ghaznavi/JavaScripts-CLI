// -------------------------------------------TASK 1-ZAKAAT------------------------------------//
//
//  let zakatPercentage = 0.025; //camelCase
//  let  UserInput= +prompt("Enter Your Amount to see ZakatAmount")   //PascalCase
//  let result_is=(zakatPercentage*UserInput);  //snake_case
//  alert("Your Zakat value is" +result_is);

//----------------------------------------TASK 2-FITRAAH-----------------------------------------//

// let familyMembers = +prompt("Enter Total number of Family Members to see your FITRANA 2023");
// let chooseIs = +prompt("Choose Method for Fitrah by entering 1/2/3/4 :  1 WHEAT =250, #2 RAISIN=2800, #3 DATES=2100, #4 OATS=450");
// if (chooseIs == 1) {
//     fitra1 = 250 * familyMembers;
//     alert("Your Fitra Vlaue By Choosing #1 WHEAT is:    " + fitra1)
// }
// else if (chooseIs == 2) {
//     fitra2 = familyMembers * 2800;
//     alert("Your Fitra Vlaue By Choosing #2 RAISIN is:    " + fitra2)
// }
// else if (chooseIs == 3) {
//     fitra3 = familyMembers * 2100;
//     alert("Your Fitra Vlaue By Choosing #3 DATES is:    " + fitra3)
// }
// else if (chooseIs == 4) {
//     fitra4 = familyMembers * 450;
//     alert("Your Fitra Vlaue By Choosing #4 OATS  is:    " + fitra4)
// }
// else {
//     alert("Please! Choose Again ");
// }

//--------------------------------------------------TASK 3-RANDOM NUMBER -------------------------------------------------//
// let userNum = +prompt("Enter Number 1-10:  To Guess The Secret Number");
// let secretNumber = 7;
// if (userNum === secretNumber) {
//     alert("Congratulation! You Guessed the Right Number")
// }
// else if(userNum<7)
//     alert("TRY AGAIN: your Guess value is Low: the Secret Number is:   " + secretNumber);
// else if(userNum>7)
// alert("TRY AGAIN:   your Guess value is  High: the Secret Num is:   " + secretNumber);
// else{alert("TRY AGAIN!")}

//--------------------------------------------TASK 4-LETTER CAPITALIZED USING SLICE------------------------------------------//

// let nameEnter = prompt("Enter Your NAME");
// let nameIs = nameEnter.slice(0, 1);
// let cap = nameIs.toUpperCase();
// let remaining = nameEnter.slice(1);
// alert("FIRST LETTER CAPITALIZED: " + cap + remaining);


//----------------------------------------------TASK 5--FOR AND ARRAY-------------------------------------------------------------//

// let contactNumbers = []
// let contactNames = []


// for (i = 1; i <= 3; i++) {
//     let number = +prompt(`Enter contact number`)
//     contactNumbers.push(number)
//     let name = prompt(`Enter contact name`)
//     contactNames.push(name)
// }

// for (let a = 0; a < contactNumbers.length; a++) {
//     console.log("Contact Name:");
//     console.log(contactNames[a]);
//     console.log("Contact Number:");
//     console.log(contactNumbers[a]);
// }

//-----------------------------------------------TASK 6--ARRAY--REMOVING PRODUCT----------------------------------------------//

// let product = ["DairyMilk", "KitKat", "Silk", "Lays", "Oreo"];
// console.log("product are:   " + product);
// let show = +prompt("Enter Array That You Want to Remove : 1,2,3,4,5     ");
// let i = (show) - 1;   //variable i chk show-1 i.e prompt kiye gaey number ko -1 matlb poori list main dkhna...
// let remove = product.splice(i, 1);

// console.log("Removed item:" + remove);
// console.log("Remaining items:" + product);
// console.log("Total items remaining: " + product.length);


//------------------------------------------------TASK 7--NESTED ELSE IF------------------------------------------------------------------//

// let nationality = prompt("ENTER YOUR NATIONALITY ! ")
// let n = nationality.toUpperCase();
// if (n == 'PAKISTANI' || n == 'INDIAN') 
// {
//   let gender = prompt("Your Gender? Male/Female")
//   let g = gender.toUpperCase();
//   if (g == 'MALE') 
//   {
//     let age = prompt("Your AGE?")
//     if (age > 18) 
//     {
//       alert("Elligible");

//     }
//     else 
//     {
//       alert("NOT ELLIGIBLE");
//     }

  
//   }
//   else if (g == 'FEMALE') 
//   {
//     let fage = +prompt("Your Age?")
//     if (fage > 18)
//     {
//       let m = prompt("Are you Married or not: Yes/No")
//       if ( m=='YES'|| 'yes')
//       {
//         alert("ELLIGIBLE!")
//       }

//       else if (m=='no'||'No')
//       {
//         alert("NOT ELLIGIBLE!");
//       }
     
//     }

//     else
//     {
//       alert("NOT ELLIGIBLE!");
//     }
//   }
  
 
      
// }
// else 
// {
//   alert("NOT ELLIGIBL!")
// }

//---------------------------------TASK 8---ARRAY COPY---------------------------------------------//

// let WCSquad=["p1","p2","p3","p4","p5","p6","p7","p8","p9","p10","p11","p12","p13","p14","p15             "]
// let copy=WCSquad;
// let finalSelection=WCSquad.slice(0,11)
// alert("copy of WCSquad    : " +copy+"Final Selection of Team         :"  +finalSelection)
