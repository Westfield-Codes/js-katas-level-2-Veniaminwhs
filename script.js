/* RANDOM STUDENT KATA:  */

// Who will be gatekeeper and keymaster today?

/* Global Variables */
// Create an array called students, start empty. 
// Create an array called picked, start empty. 
var students = [];
var picked = [];
/* Function Main()
 * Set variable called count to asking how many students there are.
 * Fill global array students by passing count as an argument to addStudents
 * Set gateKeeper = randStudent(count), the name of a random student in the list
 * Set keymaster = randNewStudent(), name of a different random student
 * Display gatekeeper name and keymaster name for this kata
 * @param = none
 * @return = none
 */
function main(){
    let count = prompt("How many students are there?");
    addStudents(count);
    let gateKeeper = randStudent(count);
    let keyMaster = randNewStudent();
    alert ("The gateKeeper = " + gateKeeper + " and the keymaster = " + keyMaster);
}

/* Function addStudents(count) 
 * Use a for loop to add student names to the students array via user input.
 * The loop should run count number of times. 
 * @param = count {integer}
 * @return = none
 */
function addStudents(count){
    students.push("Ven");
    students.push("Igor");
    students.push("Magan");
}

/* Function randStudent(count)
 * Set student = random number, 0 to length of students array.
 * Set name = element in students array at that random index.
 * Add name to picked array. 
 * Return the name of the random student
 * @param = count {integer}
 * @return = name {string}
 */
function randStudent(count){
    return students[1];
}
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
function randNewStudent(){
    return students[2];
}