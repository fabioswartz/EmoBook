const height = 7633;
const width = 17;
const eachHeight = 17;
const eachWidth = 17;
const baseId = "emo";

var finalCSS = "";
var icon = 0;

for (var h = 0; h < height; h += eachHeight) {
  for (var w = 0; w < width; w += eachWidth ) {
    finalCSS += `#${baseId}${icon} {background-position: ${w}px -${h}px;}\n`;
    icon++;
  }
}

console.log(finalCSS);
