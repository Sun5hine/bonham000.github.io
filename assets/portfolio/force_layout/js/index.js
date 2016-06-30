"use strict";

// Define chart size
var width = 1000;
var height = 600;

// Define force layout variables
var force = d3.layout.force().charge(-65).linkDistance(20).size([width, height]);

// Create SVG
var svg = d3.select("#chart").append("svg").attr("width", width - 25).attr("height", height - 25);

// Retrieve data
d3.json("https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json", function (error, responseData) {
    if (error) console.log("Error in retrieving data");

    // Assign the nodes and links with D3 for the force layout graph:
    force.nodes(responseData.nodes).links(responseData.links).start();

    // Append lines for each link
    var link = svg.selectAll(".link").data(responseData.links).enter().append("line").attr("class", "link").style("fill", "rgb(25,25,25)").style("stroke-width", 1);

    // Append span elements for each node, with a class assigned to each country code for the CSS sprites
    var node = d3.selectAll("body").selectAll('span').data(responseData.nodes).enter().append('span').style('position', 'absolute').style('transform', 'scale(1.25, 1.25)').style('height', '11px').style('width', '16px').attr('class', function (d) {
        return 'flag flag-' + d.code;
    }).call(force.drag);

    // Return coordiantes for the links and nodes
    force.on("tick", function () {
        link.attr("x1", function (d) {
            return d.source.x;
        }).attr("y1", function (d) {
            return d.source.y;
        }).attr("x2", function (d) {
            return d.target.x;
        }).attr("y2", function (d) {
            return d.target.y;
        });

        node.style('top', function (d) {
            return 65 + d.y + 'px';
        }).style('left', function (d) {
            return d.x + 'px';
        });
    });
});