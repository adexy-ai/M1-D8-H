/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */
let myArray = [1, 2, 3, 4, 5]
    console.log("\n(1).", myArray)
/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* WRITE YOUR ANSWER HERE */
let myObject = {
    name: "Ade",
    surname: "Adeniran",
    email: "adeba@gamil.com",
    age: 34,
}
//console.log(`The following is the detail of ${myObject.name};
//${myObject} as recorded in the myObject Array`)
console.log("\n(2).", myObject)
/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR ANSWER HERE */
myObject.hasDriverLicense = "Yes"
console.log("\n(3).", myObject.hasDriverLicense)

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* WRITE YOUR ANSWER HERE */
delete myObject.age
//console.log(`Ade's age has been deleted from myObject: ${myObject}`)
console.log("\n(4). myObject contain other details except age", "\n", myObject) //the line break does not work at this instance!!!
/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR ANSWER HERE */
let myObject2 = {
    name: "Jide",
    surname: "Johnson",
    email: "jide.johnson@yahoo.com",
    age: 45,
}
console.log("\n(5). This is myObject2 email;", myObject2.email)

/* EXERCISE 
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */
let user1 =  "Bayo"
let totalAmountSpent = 60 
let totalShoppingCart = 50
let NoNeedToPay =  0 


   // { user2: "John", totalAmountSpent: 40},
    //{user3: "Joe", totalAmountSpent: 110},
    //{ user4: "Mira", totalAmountSpent: 75},
    //{user5: "Sini", totalAmountSpent: 30},*/
//I was trying to use for loop but it does not seem to tbe the appropriate aproach
    // so I use if condition instead
/*let totalShoppingCart = 50
for (let user = 0; users.totalAmountSpent >= totalShoppingCart; user++) {
    totalShoppingCart -=1
}
console.log("Because your totalAmountSpent is greater then 50, you have to pay", totalShoppingCart )*/

if (totalAmountSpent >= totalShoppingCart) 
    console.log("\n You have won our bonus, so you would be paying", NoNeedToPay, "amount")
else {
    console.log("\n Your total amount is", totalAmountSpent)
    }

    
    
/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */
let user =  "Dele"
let amountSpent = 60 
let totalCost = 0.8 * amountSpent
console.log ("\nThe discounted amount after bonus dudected is;", totalCost)
/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/
let car = {
    brand: "Volkswagon",
    model: "Golf",
    licensePlate: "ABD-456",
}
console.log(car)

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */
//let carsForRent = 
/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
