/*THIS TEST DATA (pasted to textarea)
  
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
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
document.querySelector("button").addEventListener(
  "click",
  function () {
    const text = document.querySelector("textarea").value;

    const splitText = text.split("\n");

    // const arr = [];
    for (const [i, rows] of splitText.entries()) {
      const indexof = rows.indexOf("_") + 1;

      const nextLetterUpper = rows.replace(
        rows.slice(indexof - 1, indexof + 1),
        rows.slice(indexof - 1, indexof + 1).toUpperCase()
      );

      const slicedFromUpperLetter = nextLetterUpper.slice(indexof);

      const lowerCaseLetters = rows
        .slice(0, indexof - 1)
        .toLowerCase()
        .trim();
      repeatEmoji = "⏳".repeat(i + 1);
      const all = (lowerCaseLetters + slicedFromUpperLetter).padEnd(20);

      console.log(`${all}${repeatEmoji}`);
    }
  }
  // const rows = text.split('\n');
);
