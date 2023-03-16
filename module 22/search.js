const lyrics = "Amar sonar bangla ami tomay valobashi";
//  const doesExist = lyrics.includes("Bangla");
// // const lyricsLowerCase = lyrics.toLowerCase()
const searchString = "Bangla";
const lyricsLowerCase = lyrics.toLowerCase()
const doesExist = lyricsLowerCase.includes(searchString);
console.log(doesExist);
