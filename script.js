
/* ICE CREAM CONE KATA */

/* Var, Alert, Prompt, Conditional, While, Function. Global, Concatenation */

/* Initialize Globals
 * Set a global variable myScoops = "Here's your cone with: "
 */
var myScoops = "Here's your cone with: "
/* FUNCTION main() 
 * initialize variable scoops, prompt user for "how many scoops (max 3)?"
 * if scoops is less than 4, call scoopLoop with argument scoops
 * otherwise display "oink oink" and call main again.
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main() {
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
    while (scoop <= scoops){
        myScoops += nextScoop(scoop);
        scoop++;
    }
    alert(myScoops);
    myScoops = "Here's your cone with: ";
}
/* FUNCTION nextScoop(scoop)
 * initialize a variable called flavor, prompt for "Flavor for scoop number [scoop]"
 * Return the flavor
 * @param: scoop (integer)
 * @return: flavor (string)
 */
function nextScoop(scoop){
    let flavor = prompt("Flavor for scoop number " + scoop);
    return flavor+" ";
}