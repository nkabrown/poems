const characters = ['d', 'e', 'm', 'o', 's'];

const letters = d3.select('.letters').selectAll('.letter')
    .data(characters)
  .enter().append('div')
    .attr('class', 'letter')
    .text(function(d) { return d; });

const letterD = letters.filter(function(d) { return d === 'd'; });
const letterE = letters.filter(function(d) { return d === 'e'; });
const letterM = letters.filter(function(d) { return d === 'm'; });
const letterO = letters.filter(function(d) { return d === 'o'; });

rotation(letterD);
moveRight(letterE);
moveRight(letterM);
moveLeft(letterO);

function rotation(selection) {
  selection.style('animation', 'flip-over 5000ms infinite ease-in-out alternate');
}

function moveRight(selection) {
  selection.style('animation', 'move-right 5000ms infinite ease-in-out alternate');
}

function moveLeft(selection) {
  selection.style('animation', 'move-left 5000ms infinite ease-in-out alternate');
}
