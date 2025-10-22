// Don't Edit! Just copy and paste. 

/* Loops & Arrays Katas */

/* RANDOM STUDENT KATA:  */

// Who will be gatekeeper and keymaster today?

/* Global Variables */
// Create an array called students, start empty. 
// Create an array called picked, start empty. 
[]
/* Function Main()
 * Set variable count to asking how many students there are.
 * Fill global array students by passing count as an argument to addStudents
 * Set gateKeeper = randStudent(), the name of a random student in the list
 * Set keymaster = randNewStudent(), name of a different random student
 * Display gatekeeper name and keymaster name for this kata
 * @param = none
 * @return = none
 * /

/* Function addStudents(count)
 * Use a for loop to add student names to the global students array.
 * The loop should run count number of times. 
 * The loop should ask the user for a name and push it to the students array.
 * Return the array of student names 
 * @param = count {integer}
 * @return = none
 */

/* Function randStudent()
 * Set student = random number, 0 to length of students array.
 * Set name = element in students array at that random index.
 * Add name to picked array. 
 * Return the name of the random student
 * @param = none
 * @return = name {string}
 */
 
/* Function randNewStudent() (start with copy of randStudent)
 * Set student = "" and picked = 0. 
 * Loop while picked is not equal to -1
 * Set student = random number, 0 to length of students array.
 * Set name = element in students array at that random index.
 * Set picked = the index of that name the picked array. 
 * End the while loop.
 * Add name to picked array.
 * Return the name of the new random student
 * @param = none
 * @return = name {string}
 */

 
/* SHOPPING LIST KATA:  */

// Every day, you are sent to buy 5 items. 

/* 1. for loop and string concatenation */

/* Function makeList()
 * Create a shopping list string called shoppingList as "To Buy:"
 * create a five-item loop, and in the loop, 
 * ask for next item to buy (item #), and add it to the list 
 * add a line break after each item added
 * when loop's done, alert the list
 */
 
/* 2. for loop and array with toString */

/* Same function, using previous code, BUT:
 * build shopArray variable for the shopping list
 * adjust loop to work with the array index values (start at 0)
 * ask for next list item and push it to the shopArray
 * no need to add a line break after
 * at end of loop, alert the list title, followed by
 * the list with toString() method (it won't have line breaks)*/

/* 3. for loop and array with join method 

/* Same function, using previous code, BUT:
 * the at end, alert list with array.join() method with line breaks 
 * instead of commas */
 
/* 4. 2D Arrays: add Pricing */

/* Same function, using previous code, but THIS TIME add prices
 * When someone enters an item, prompt them also to enter a price separating by comma (like milk, 1.99)])   
 * Convert that entry to an itemPrice array by using string.split() and use a comma as delimiter
 * Push the itemPrice array to shopArray
 */

/* 5. Total up the prices */

/* Same function, using previous code, but THIS TIME total the prices.
 * After you have built the array, create a NEW loop that adds the price 
 * of each item to a total. Do this before the alert. 
 * Save the first alert content as message. 
 * Add total as a line below message, then alert the message. 
 */


/* MULTIPLICATION FREQUENCY KATA */

/* findTopFactor(array) analyzes an array of integers from 3-9
 * Loop over a list, and use another array, factorCount, to 
 * count how many of those factors appear in the list.  Use a 
 * loop from 0 to one less than array.length to look at
 * the next item and push it to the frequency array.  You'll end
 * up with something like [ 0 1 2 4 2 3 1] for an array [0, 1, 
 * 3, 4, 3, 4, 2, 4, 5, 4, 5, 6, 1, 2].  Output should be (with 
 * line breaks) something like: 0:0 1:1 2:2 3:2 4:4) 
 */


/* GUINEA PIGS KATA:  */

/* Story:  You're breeding a herd of prize short-hair guinea pigs!  
 * You're into the 2nd generation, so you have
 * two parent, a sow (s) and a boar (s), and a litter of 4 pups 
 * (b,b,s,s). You wanted two bloodlines so
 * you bought a matching litter of 4 (s,s,b,b) and bread them all 
 * together.  Now you have 16 grandchildren! How do you keep track 
 * of them all? 
 */ 

/* 1. function makeHerd(pigs)
 * Create myHerd array of [pigs]: 2 parents and pigs-2 children. 
 * Each pig needs to have four attributes:
 * Generation (0 or 1), sex (boar or sow), color (white, black, or 
 * orange) and coat pattern (solid, crest or dutch)
 * As you ask for each pig, include integers for generation, first 
 * letters for other 3 values. Example: [1, b, w, c]
 * Test the array by using array.join to display each pig on
 * a separate line. 
 */

/* 2. function makeHerd()
 * Instead of creating the herd by hand, use a random generator.
 * Write function to add string values based on random number values
 * Use either switches or lookup arrays to assign attributes with  
 * the values - try both! Work with a makePig function that 
 * Returns a pig. makeHerd function asks for how many pigs to make, 
 * which generation, and uses makePig to make them 
 * Use our array.join function to list each pig, separate line
 * Obviously this won't match our herd because the sex and 
 * generation ratios will be off. 
 */

/* 3.herdAnalyzer
 * You've generated a random herd.  Now let's see what's going on 
 * there. Create a herdAnalyzer function that counts how many pig 
 * total, how many of each sex, and generate a report: "Your herd
 * has # pigs with # sows and # boars. 
 */
