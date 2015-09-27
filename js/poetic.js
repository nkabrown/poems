var characters = ['d', 'e', 'm', 'o', 's'];

var letters = d3.select('.letters').selectAll('.letter')
    .data(characters)
  .enter().append('div')
    .attr('class', 'letter')
    .text(function(d) { return d; });

var letterD = letters.filter(function(d) { return d == 'd'; });

rotation(letterD);

function rotation(selection) {
  selection.transition('flip').duration(4000).each('start', function() { d3.select(this).style('transform', 'rotate(0deg)'); }).style('transform', 'rotate(180deg) translateY(-25px)');
}
