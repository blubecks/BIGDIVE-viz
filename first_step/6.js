//Now I generate svg elements thanks to d3js library 

//rec dimension
var width = 60;
var height = [90, 110, 70];

x0 = 25;

var myGroup1 = d3.select('svg')
    .append('g')
    .attr('transform', 'translate(' + x0 + ',230)')

var myGroup2 = d3.select('svg')
    .append('g')
    .attr('transform', 'translate(' + (x0 + width) + ',210)')

var myGroup3 = d3.select('svg')
    .append('g')
    .attr('transform', 'translate(' + (x0 + width * 2) + ',250)')

myGroup1.append('rect')
    .attr('width', width)
    .attr('height', 0)
    .attr('y', height[0])
    .style('fill', 'blue')
    .style('stroke', 'black')
    .style('stroke-width', 1)
    .transition()
    .duration(3000)
    .delay(2000)
    .ease('bounce')
    .attr('height', height[0])
    .attr('width', width)
    .attr('y', 0)

myGroup1.append('text')
    .text('1')
    .attr('x', 25)
    .attr('y', 110)

myGroup2.append('rect')
    .attr('width', width)
    .attr('height', 0)
    .style('fill', 'orange')
    .style('stroke', 'black')
    .style('stroke-width', 1)
    .transition()
    .duration(3000)
    .delay(2000)
    .ease('bounce')
    .attr('height', height[1])
    .attr('width', width)

myGroup2.append('text')
    .text('2')
    .attr('x', 25)
    .attr('y', 130)

myGroup3.append('rect')
    .attr('width', width)
    .attr('height', 0)
    .attr('y', height[2])
    .style('fill', 'red')
    .style('stroke', 'black')
    .style('stroke-width', 1)
    .transition()
    .duration(3000)
    .delay(2000)
    .ease('bounce')
    .attr('height', height[2])
    .attr('width', width)


myGroup3.append('text')
    .text('3')
    .attr('x', 25)
    .attr('y', 90)

d3.select('svg')
    .append('line')
    .attr('x1', 5)
    .attr('y1', 320)
    .attr('x2', 225)
    .attr('y2', 320)
    .style('stroke', "black")