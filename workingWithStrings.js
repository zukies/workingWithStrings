/*THIS TEST DATA (pasted to textarea)
  
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscore_case       
first_name          
Some_Variable        
calculate_AGE        
delayed_departure     
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;

  const splitText = text.split("\n");

  const arr = [];
  for (const rows of splitText) {
    const indexof = rows.indexOf("_") + 1;

    const nextLetterUpper = rows.replace(
      rows.slice(indexof - 1, indexof + 1),
      rows.slice(indexof - 1, indexof + 1).toUpperCase()
    );
    const slicedFromUpperLetter = nextLetterUpper.slice(indexof);

    const lowerCaseLetters = rows.slice(0, indexof - 1).toLowerCase();

    emoji = "⌛️";
    repeatEmoji = emoji.repeat(arr.length + 1);

    arr.push(lowerCaseLetters + slicedFromUpperLetter + repeatEmoji);
  }

  console.log(arr.join("\n"));
  // const rows = text.split('\n');
});

/*for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }*/
