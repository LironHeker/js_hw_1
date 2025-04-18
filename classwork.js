'use strict';

// let infoArray = [// 1 עבודה להגשה בקלאס switch 
//     "יום ראשון - חזרה לשגרה",
//     "יום שני - ישיבת צוות",
//     "יום שלישי - עבודה על פרויקט",
//     "יום רביעי - ספורט בערב",
//     "יום חמישי - סיום משימות",
//     "יום שישי - קניות לשבת",
//     "שבת - מנוחה"
//   ];
// const day=prompt("enter day")
// let dayindex;
// switch(day){
//     case '1':
//     case "sunday":
//     case "ראשון":
//         dayindex=0;
        
//         break;
//         case '2':
//         case "monday":
//         case "שני":
//             dayindex=1;
//             break;
//     case '3':
//     case "tuesday":
//     case "שלישי":
//         dayindex=2;
//         break;
//     case '4':
//     case "thursday":
//     case "רביעי":
//         dayindex=3;
//         break;
//     case '5':
//     case "wensday":
//     case "חמישי":
//         dayindex=4;
//         break;
//     case '6':
//     case "friday":
//     case "שישי":
//         dayindex=5;
//         break;
//     case '7':
//     case "saturday":
//     case "שבת":
//         dayindex=6;
//         break;
//         default:
//         alert("לא הוזן יום תקין")
// }
// if(dayindex !== undefined)
//     alert(infoArray[dayindex])


// if ("0") {//task 1 true or false class work
//     alert('hello');
// }//יהיה אלרט כי באיף יש מחרוזת עם ערך והיא לא ריקה אז זה טרו


// const name=prompt("what is the offical name of javascript?")//task 2 true or false class work
// if (name === "ECMAScript")
//     alert("correct!")
// else
//    alert ("you dont know? ECMAScript!")


// let score = 75;//task 3 true or false class work
// let grade=(score >= 90) ? "A" :
//           (score >= 80) ? "B" :
//           (score >= 70) ? "c" :
//           (score >= 60) ? "D" :
//           "F";
//           console.log(grade);



// const num=prompt('enter a number')//task 4 true or false class work
// if(isNaN(num))
//     alert("is not a number")

// else if(Number(num>0))
//     alert("1")
// else if(Number(num<0))
//     alert("-1")
// else
//     alert('0')



// const a= Number (prompt("enter first number"))//task 5 true or false class work

// const b= Number (prompt("enter secend number"))
// let result= (a + b < 4) ? "not enough" : "A lot"
// console.log(result)



// let login = prompt('Enter Username:')//task 6 true or false class work
// let message = ((['Employee', 'Director']).indexOf(login) > -1 ? 'Hello' : !login.length ? 'No Login' : '')
//  console.log(message)



// console.log(false || 'sdf')//sdf  //task 7 true or false class work
// console.log(false && '')//false
// console.log(true || '')//true
// console.log(true && '')//
// console.log(undefined || null)//null
// console.log(undefined || 0 || null)//null
// console.log(undefined && 0 && null)//undefined
// console.log(1 || 0)//1
// console.log(null || 1)//1
// console.log(null || 0 || 1)//1



// let i=1,sum=0//task 1 loops class work
// while(i <=100){
//     sum+=i
//     i++
// }
// console.log(sum)



// let number = 0;//task 2 loops class work
//  do{
//      let input = prompt("Enter Number:");
//       number = Number(input);
//  } while(isNaN(number) || number <= 0);
//  console.log(number);



// let num=7//task 3 loops class work
// for(let i=1;i<=10;i++){
//     num=7*i
//     console.log(num)
// }



// const secret=7// //task 4 loops class work
// for(let i=1;i<10;i++){
//     const num=prompt("enter a number between 1-10")

//     if(Number(num) === secret){
//         alert("true");
//         break;
//     }
// }



// for(let i=1;i<=30;i++){//task 5 loops class work
//     if(i%3==0)continue
//     console.log(i)
// }



// let i = 3;//task 6 loops class work

// while (i) {
//   alert( i-- );
// }//הערך האחרון הוא 1 כי הלולאה תעבוד כל עוד i=true 0הוא שווה לfalse


// let i=0
// while(++i < 5)
//     console.log(i)
                        //task 7 loops class work //לא הלולאה הראשונה מדפיסה עד 4 כי היא מעלה את הערך לפני הבדיקה כאשר הלולאה השניה מעלה לאחר הבדיקה את הערך ומדפיסה 5
// let i=0
// while(i++ < 5)
//     console.log(i)


// for(let i=0;i < 5;i++)
//     console.log(i)
                        //task 8 loops class work//שני הלולאות יציגו את אותם ערכים כי ההוספה של i מתבצעת בסוף הלולאה
// for(let i=0;i < 5;++i)
//     console.log(i)


// for(let i=2;i<=10;i++){//task 9 loops class work
//     if(i%2 != 0)continue
//     console.log(i)
// }

// for (let i = 0; i < 3; i++) { //task 10 loops class work
//     alert( `number ${i}!` );
//   }
// let i=0
// while(i < 3){
//     alert(`number ${i}!` )
//     i++
// }
