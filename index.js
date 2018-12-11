const fs = require("fs")
const essays = require("./essays.json")
const data = essays.map(essay => transform(essay));

function transform(essay) {
  const newEssay = [
    essay.id,
    essay.paragraphs.join(" "),
    essay.prompt,
    essay.college,
    essay.yearApplied,
    essay.applicationStatus,
    essay.author,
    "",
    essay.country,
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

fs.writeFile('db.json', JSON.stringify({ essays: data }), (err) => {
  if (err) throw err;
});
