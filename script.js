/* RANDOM STUDENT KATA:  */

// Who will be gatekeeper and keymaster today?

/* Global Variables */
// Create an array called students, start empty. 
// Create an array called picked, start empty. 
var students = [];
var picked = [];
/* Function Main()
 * Set variable count to asking how many students there are.
 * Fill global array students by passing count as an argument to addStudents
 * Set gateKeeper = randStudent(), the name of a random student in the list
 * Set keymaster = randNewStudent(), name of a different random student
 * Display gatekeeper name and keymaster name for this kata
 * @param = none
 * @return = none
 */ 
function main(){
    let count = prompt("How many students are there?");
    addStudents(count);
    let gateKeeper = randStudent();
    let keymaster = randNewStudent();
    alert("The gateKeeper is " + gateKeeper + " and the keymarter is " + keymaster);
}
/* Function addStudents(count)
 * Use a for loop to add student names to the global students array.
 * The loop should run count number of times. 
 * The loop should ask the user for a name and push it to the students array.
 * @param = count {integer}
 * @return = none
 */
function addStudents(count){
    let sName = "";
    for (let students = 1; students < count; students++){
        sName = prompt("Next student");
        students.push(sName);
    }
    return sName;
}
/* Function randStudent()
 * Set student = random number, 0 to length of students array.
 * Set name = element in students array at that random index.
 * Add name to picked array. 
 * Return the name of the random student
 * @param = none
 * @return = name {string}
 */
 function randStudent(){
    let student = Math.floor(Math.random()*students.length);
    let sName = students[student];
    picked.push(sName)
    return sName;

 }
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
function randNewStudent(){
    let student = "";
    let picked = 0;
    while(pickedYet != -1);{
        student = Math.floor(Math.random()*students.length);
        sName = students[student];
        pickedYet = picked.indexOf[sName];

    }
    return sName;
}