var dataset = [4, 2, 7, 5, 8, 23, 12, 31, 2, 7, 5, 8, 23, 12, 31, 2, 7, 5, 8, 23, 12, 31, 2, 7, 5, 8, 23, 12, 31];
d3.select('svg')
    .attr('height', 600)
    .selectAll('rect') // It' s a sort of convenction
    .data(dataset)
    .enter() //for each element in the array, it creates a rect in the svg
    .append('rect')
    .attr('width', 100)
    .attr('height', 10)
    .attr('y', function (d, i) { //d stands for data and i stands for index
        return 11 * i;
    })
    .transition()
    .duration(3000)
    .delay(function (d, i) {
        return 200*i;
    })
    .attr('width', function (d, i) {
        return d*20;
    })
    .transition()
    .duration(1000)
    .attr('height',2)