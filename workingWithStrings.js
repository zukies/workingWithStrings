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

    const lowerCaseLetters = rows.slice(0, indexof - 1).toLowerCase().trim();

    emoji = "⌛️";
    repeatEmoji = emoji.repeat(arr.length + 1);

    arr.push(lowerCaseLetters + slicedFromUpperLetter + repeatEmoji);
  }

  console.log(arr.join("\n"));
  // const rows = text.split('\n');
});
<<<<<<< Updated upstream

/*for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }*/
=======
// THIS IS A TEST
>>>>>>> Stashed changes
