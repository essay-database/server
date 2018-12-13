const fs = require("fs")
const uuidv3 = require('uuid/v3');
const essays = require("./essays.json")
const data = essays.map(essay => transform(essay));

function transform(essay) {
  const newEssay = {
    id: uuidv3('http://essaydatabase.org/essays', uuidv3.URL),
    essay: essay.paragraphs.join("\n\n"),
    prompt: essay.prompt,
    college: essay.college,
    year: essay.yearApplied,
    status: essay.applicationStatus,
    author: essay.author,
    email: "",
    country: "United States",
    state: essay.state,
    featured: essay.featured.toString(),
    image: parseInt(essay.smallImageURL.split("=")[1], 10),
    date: essay.dateUploaded,
    source: "",
    comments: "",
    views: 0,
  }
  return newEssay;
}

fs.writeFile('db.json', JSON.stringify({
  essays: data
}), (err) => {
  if (err) throw err;
});