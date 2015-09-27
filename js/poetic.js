var characters = ['d', 'e', 'm', 'o', 's'];
var time = 3000;

var letters = d3.select('.letters').selectAll('.letter')
    .data(characters)
  .enter().append('div')
    .attr('class', 'letter')
    .text(function(d) { return d; });

var letterD = letters.filter(function(d) { return d == 'd'; });
var letterE = letters.filter(function(d) { return d == 'e'; });
var letterM = letters.filter(function(d) { return d == 'm'; });
var letterO = letters.filter(function(d) { return d == 'o'; });

rotation(letterD);
moveRight(letterE);
moveRight(letterM);
moveLeft(letterO);

function rotation(selection) {
  selection.transition('flip').duration(time).each('start', function() { d3.select(this).style('transform', 'rotate(0deg)'); }).style('transform', 'rotate(-180deg) translateY(-25px)');
}

function moveRight(selection) {
  selection.transition().duration(time).each('start', function() { d3.select(this).style('transform', 'translateX(0)') }).style('transform', 'translateX(100px)');
}

function moveLeft(selection) {
  selection.transition().duration(time).each('start', function() { d3.select(this).style('transform', 'translateX(0)') }).style('transform', 'translateX(-215px)');
}

setInterval(function() {
  rotation(letterD);
  moveRight(letterE);
  moveRight(letterM);
  moveLeft(letterO);
}, 6000);
