var margin2 = {left: 70, top: 10, right: 150, bottom: 30},
	width2 = 400,
	height2 = (width2)/3;

var barchart2 = d3.select("#barchart2").append("svg")
			.attr("width", (width2 + margin2.left + margin2.right))
			.attr("height", (height2 + margin2.top + margin2.bottom));
	
///////////////////////////////////////
/////////////original code/////////////
///////////////////////////////////////

var tooltip = d3.select("body").append("div").attr("class", "toolTip");

var x2 = d3.scaleBand().rangeRound([0, width2]).padding(0.2),
    y2 = d3.scaleLinear().rangeRound([height2, 0]);
  
var colours2 = d3.scaleOrdinal()
    .range(["#2074A0", "#E01A25", "#991C71", "#EFB605", "#10A66E"]);

var g2 = barchart2.append("g")
    .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

d3.json("data2.json", function(error, data) {
    if (error) throw error;

    x2.domain(data.map(function(d) { return d.Tag; }));
    y2.domain([0, d3.max(data, function(d) { return d.Views; })]);

    g2.append("g")
        .attr("class", "axiss2 axis2--x")
        .attr("transform", "translate(0," + height2 + ")")
        .call(d3.axisBottom(x2));

    g2.append("g")
      	.attr("class", "axiss2 axis2--y")
      	.call(d3.axisLeft(y2).ticks(5).tickFormat(function(d) { return parseInt(d / 1000000) + "M"; }).tickSizeInner([-width2]))
      .append("text")
    		.attr("class", "axis2-title")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Total View");

    g2.selectAll(".bar")
      	.data(data)
      .enter().append("rect")
        .attr("x", function(d) { return x2(d.Tag); })
        .attr("y", function(d) { return y2(d.Views); })
        .attr("width", x2.bandwidth())
        .attr("height", function(d) { return height2 - y2(d.Views); })
        .attr("fill", function(d) { return colours2(d.Tag); })
        .attr("opacity", 0.7)
        .on("mousemove", function(d){
            tooltip
              .style("left", d3.event.pageX - 50 + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
      				.html((d.Tag) + "<br><span>" + (d.Views) + "</span>");
        })
    		.on("mouseout", function(d){ tooltip.style("display", "none");});
    });
