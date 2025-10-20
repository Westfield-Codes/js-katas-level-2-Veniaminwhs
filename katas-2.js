/* RANDOM STUDENT KATA:  */

// Who will be gatekeeper and keymaster today?

/* Global Variables */
// Create an array called students, start empty. 
// Create an array called picked, start empty. 


/* Function Main()
 * Set variable called count to asking how many students there are.
 * Fill global array students by passing count as an argument to addStudents
 * Set gateKeeper = randStudent(count), the name of a random student in the list
 * Set keymaster = randNewStudent(), name of a different random student
 * Display gatekeeper name and keymaster name for this kata
 * @param = none
 * @return = none
 */


/* Function addStudents(count) 
 * Use a for loop to add student names to the students array via user input.
 * The loop should run count number of times. 
 * @param = count {integer}
 * @return = none
 */


/* Function randStudent(count)
 * Set student = random number, 0 to length of students array.
 * Set name = element in students array at that random index.
 * Add name to picked array. 
 * Return the name of the random student
 * @param = count {integer}
 * @return = name {string}
 */

/* Function randNewStudent() (start with copy of randStudent)
 * Set name = "", student = 0 and pickedYet = 0. 
 * Loop while pickedYet is not equal to -1
 * Set student = random number, 0 to length of students array.
 * Set name = element in students array at that random index.
 * Set pickedYet = the index of that name the picked array. 
 * End the while loop.
 * Add name to picked array.
 * Return the name of the new random student
 * @param = none
 * @return = name {string}
 */

 
/* ************************************* */


/* AGE KATA */

/* Var, Alert, Prompt, Function */
`
/* FUNCTION main() 
 * Facebook wants to check if you're 13, so they ask your birth year 
 * set age = "How old are you?"
 * then set born = asking "What year were you born?"
 * If myAge(age) is not equal to born, say, "Underaged", otherwise "Welcome!"
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */


/* FUNCTION myAge(age)
 * define a function called myAge with number parameter age
 * Get thisYear using the date function https://www.w3schools.com/js/js_date_methods.asp
 * set birthYear as thisYear minus age and return that
 * @param: age (integer)
 * @return: birthYear (year)
 */

/* NOTE TO PROGRAMMERS: myAge(age) only works if you have not had your birthday.  
 * An additional checkAlready(birthYear) checks for that and makes an adjustment. 
 * To use it, add birthYear = checkAlready(birthYear); before you return the value.
 * function checkAlready(birthYear) asks if you had your birthday already this year.  
 * If you have, it adds 1 to your birthYear and returns that.
 */

/* ************************************* */


/* PET KATA: Feed the Dog */

/* Var, Alert, Prompt, Function, Global */

/* FUNCTION main()  
 * Ask for the name of a dog (dogName)
 * Ask how many cups of food they get each meal (cups)
 * call feedDog with parameters dogName, cups
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */

/* FUNCTION feedDog(dogName, cups) */
/* Define a function called feedDog with string parameter dogName, number parameter cups.
 * Loop from cup = 1 to cups.  For each cup, display "Here's a cup of kibble, [dogName]!"
 * @param: dogName (string), cups (integer)
 * @return: none
 */ 


/* ************************************* */

/* CALCULATOR KATA */

/* This is best done with a JS switch control, though can also be a chain of conditionals. */

/* FUNCTION main() 
 * Perform basic arithmetic as a calculator
 * @param: none (main never gets params)
 * @return: none (main never gets returns)
 */
 // Ask the user what operation they want (+, -, *, /)
 // Ask the user for the first number (a)
 // Parse a as an integer
 // Ask the user for the second number (b)
 // Parse b as an integer
 // Based on the operation, send the numbers to the right function as arguments 
 // store the returned value in variable called result
 // Alert the equation a + operation + b = result

/* FUNCTION add(a,b)
 * define a function called add with two number parameters a and b
 * @param: a, b (integers)
 * @return: a + b
 */

/* FUNCTION subtract(a,b)
 * define a function called subtract with two number parameters a and b
 * @param: a, b (integers)
 * @return: a - b
 */

/* FUNCTION multiply(a,b)
 * define a function called multiply with two number parameters a and b
 * @param: a, b (integers)
 * @return: a * b (* means multiply)
 */

/* FUNCTION divide(a,b)
 * define a function called divide with two number parameters a and b
 * @param: a, b (integers)
 * @return: a / b (/ means divided by)
 */

/* ************************************* */


/* ICE CREAM CONE KATA */

/* Var, Alert, Prompt, Conditional, While, Function. Global, Concatenation */

/* Initialize Globals
 * Set a global variable myScoops = "Here's your cone with: "
 */

/* FUNCTION main() 
 * initialize variable scoops, prompt user for "how many scoops (max 3)?"
 * if scoops is less than 4, call scoopLoop with argument scoops
 * otherwise display "oink oink" and call main again.
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */

/* FUNCTION scoopLoop(scoops) 
 * start scoop at 1 and loop while scoop is less than or equal to scoops
 * inside the loop add nextScoop(scoop) to myScoops
 * after the loop's done, display myScoops
 * @param: scoops (integer)
 * @return: none
 */

/* FUNCTION nextScoop(scoop)
 * initialize a variable called flavor, prompt for "Flavor for scoop number [scoop]"
 * Return the flavor
 * @param: scoop (integer)
 * @return: flavor (string)
 */

/* ************************************* */

/* COLOR WHEEL KATA */

/* Var Alert Prompt Conditional Switch 3 Functions */

/* FUNCTION main() 
 * create a variable called color and prompt the user for a primary or secondary color (they )
 * if checkColor(color) says false, say "must be primary or secondary" and call main again.
 * otherwise, display "the complementary color of [color] is [complementaryColor(color)]"
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */

/* FUNCTION checkColor (color)
 * set boolean goodColor to false
 * use a compound conditional (or) to check for primary
 * if it's a primary color, set goodColor to true
 * otherwise, use a compound conditional (or) to check for secondary
 * if it's a secondary color, set goodColor to true
 * return goodColor
 * @param: color (string)
 * @return: goodColor (boolean)
 */


/* FUNCTION complementaryColor(color)
 * create a variable called complement, set to ""
 * use a switch function and switch on color
 * (look at this: https://www.canva.com/colors/color-wheel)
 * in the switch, assign the complementary color to complement
 * @param: color (string)
 * @return: complement (string)
 */
