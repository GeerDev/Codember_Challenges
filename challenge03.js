const colors = require('fs').readFileSync('./data/colors.txt');
const colorsArr = eval(colors.toString());

function getZebrasCount(colors) {
  let maxZebraCount = 0;
  let maxZebraColor = '';

  let lastColor = '';
  let nextColor = colors[0];
  let currentZebraCount = 1;

  colors.forEach((currentColor) => {
    if (currentColor !== nextColor || lastColor === currentColor) {
      currentZebraCount = 1;
    }
    currentZebraCount++;
    nextColor = lastColor;
    lastColor = currentColor;
    if (currentZebraCount > maxZebraCount) {
      maxZebraCount = currentZebraCount;
      maxZebraColor = lastColor;
    }
  });

  return {
    maxZebraColor,
    maxZebraCount,
  };
}

const solution = getZebrasCount(colorsArr);
console.log(`submit ${solution.maxZebraCount}@${solution.maxZebraColor}`);