var characters = ['d', 'e', 'm', 'o', 's'];

d3.select('.letters').selectAll('.letter')
    .data(characters)
  .enter().append('div')
    .attr('class', 'letter')
    .attr('data-index', function(d, i) { return i; })
    .text(function(d) { return d; });
