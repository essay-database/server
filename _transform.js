const fs = require("fs")
const uuidv3 = require('uuid/v3');
const essays = require("./essays.json")
const data = essays.map(essay => transform(essay));

function transform(essay) {
  const newEssay = [
    uuidv3('http://essaydatabase.org/essays', uuidv3.URL),
    essay.paragraphs.join("\n\n"),
    essay.prompt,
    essay.college,
    essay.yearApplied,
    essay.applicationStatus,
    essay.author,
    "",
    "United States",
    essay.state,
    essay.featured,
    parseInt(essay.smallImageURL.split("=")[1], 10),
    essay.dateUploaded,
    "",
    "",
    0,
  ]
  return newEssay;
}

fs.writeFile('db.json', JSON.stringify({
  essays: data
}), (err) => {
  if (err) throw err;
});