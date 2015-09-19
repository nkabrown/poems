var characters = ['d', 'e', 'm', 'o', 's'];

d3.select('.letters').selectAll('.letter')
    .data(characters)
  .enter().append('div')
    .attr('class', 'letter')
    .text(function(d) { return d; });

