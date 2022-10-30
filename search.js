/***
 * search (grid, wordlist)
 * This function accepts a grid (a 2d array of letters)
 * and a wordlist (an array of words to search for). The function finds any words
 * that exist in the word search in any of the 8 possible directions (up, down, left, right
 * and all 4 diagonal directions). This function is case-insensitive in its matching.
 *
 * Returns: an array of words that can be found in the word search
 ***/
module.exports = function search(grid, wordlist) {
  const foundWordArr = [];

  const verticalCheck = [""];
  for (let j = 0; j < grid.length; j++) {
    for (let i = 0; i < grid.length; i++) {
      verticalCheck.push(grid[i][j]);
      newArr = verticalCheck
        .join("")
        .toLowerCase()
        .match(/.{1,5}/g);
      for (let w = 0; w < wordlist.length; w++) {
        if (newArr.includes(wordlist[w].toLowerCase())) {
          foundWordArr.push(wordlist[w]);
        } else if (
          verticalCheck
            .reverse()
            .join("")
            .toLowerCase()
            .match(/.{1,5}/g)
            .includes(wordlist[w].toLowerCase())
        ) {
          foundWordArr.push(wordlist[w]);
        }
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < wordlist.length; j++) {
      if (grid[i].join("").toLowerCase().includes(wordlist[j].toLowerCase())) {
        foundWordArr.push(wordlist[j]);
      } else if (
        grid[i]
          .reverse()
          .join("")
          .toLowerCase()
          .includes(wordlist[j].toLowerCase())
      ) {
        foundWordArr.push(wordlist[j]);
      }
    }
  }
  return foundWordArr;
};
