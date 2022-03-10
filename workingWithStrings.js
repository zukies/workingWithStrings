document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const splitText = text.split("\n");

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

    repeatEmoji = "⌛️".repeat(i + 1);

    const all = (lowerCaseLetters + slicedFromUpperLetter).padEnd(20);

    console.log(`${all}${repeatEmoji}`);
  }
});
