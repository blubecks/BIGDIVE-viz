var dataset = [{
    label: 'a',
    value: 5
}, {
    label: 'b',
    value: 6
}, {
    label: 'c',
    value: 3
}];


d3.select('svg').attr('width', 600).attr('height', 600)

var groups = d3.select('svg')
    .selectAll('g')
    .data(dataset)
    .enter()
    .append('g')
    .attr('transform', function (d, i) {
        return 'translate(' + i * 50 + ',0)'
    })
    //rect
groups.append('rect')
    .attr('width', 49)
    .attr('height', 0)
    .attr('y', function (d, i) {
        return 70 
    })
    .transition()
    .duration(2000)
    .attr('height', function (d, i) {
        return 70-d.value * 10
    })
    .attr('y', function (d, i) {
        return d.value * 10
    })

//text
groups.append('text')
    .text(function (d, i) {
        return d.label
    })
    .attr('x', 26)
    .attr('y', 80)