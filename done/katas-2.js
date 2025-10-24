
/* ICE CREAM CONE KATA */

/* Var, Alert, Prompt, Conditional, While, Function. Global, Concatenation */

/* Initialize Globals
 * Set a global variable myScoops = "Here's your cone with: "
 */
var  myScoops = "Here's your cone with: "
/* FUNCTION main() 
 * initialize variable scoops, prompt user for "how many scoops (max 3)?"
 * if scoops is less than 4, call scoopLoop with argument scoops
 * otherwise display "oink oink" and call main again.
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main () {
    let scoops = prompt("how many scoops (max 3)?");
    if (scoops < 4) scoopLoop(scoops);
    else {
        alert("Oink oink");
        main();
    }
}
/* FUNCTION scoopLoop(scoops) 
 * start scoop at 1 and loop while scoop is less than or equal to scoops
 * inside the loop add nextScoop(scoop) to myScoops
 * after the loop's done, display myScoops
 * @param: scoops (integer)
 * @return: none
 */
function scoopLoop(scoops){
    let scoop = 1;
    while (scoop <= scoops) {
    myScoops += nextScoop(scoop);
    scoop++;
    }
    alert(myScoops);
    myScoops = "Here's your cone with: "
}
/* FUNCTION nextScoop(scoop)
 * initialize a variable called flavor, prompt for "Flavor for scoop number [scoop]"
 * return flavor 
 * @param: scoop (integer)
 * @return: flavor (string)
 */
function nextScoop(scoop){
    let flavor = prompt("Flavor for scoop number " + scoop);
    return flavor+" ";
}


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
    let gateKeeper = randStudent();
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
     for (let student = 1; student <= count; student++){
        students.push(prompt("next student? "));
    }
}


/* Function randStudent()
 * Set student = random number, 0 to length of students array.
 * Set name = element in students array at that random index.
 * Add name to picked array. 
 * Return the name of the random student
 * @param = count {integer}
 * @return = name {string}
 */
function randStudent(){
    let student = Math.floor(Math.random()*students.length);
    let sName = students[student];
    picked.push(sName);
    return sName;
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
    let sName = "";
    let student = 0;
    let pickedYet = 0;
    while (pickedYet != -1){
        student = Math.floor(Math.random()*students.length);
        sName = students[student];
        pickedYet = picked.indexOf(sName);
    }
    return sName;
}