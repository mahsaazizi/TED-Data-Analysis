var margin3 = {left: 30, top: 10, right: 0, bottom: 30},
	width3 = 1000,
	height3 = (width3)/5;

var barchart3 = d3.select("#barchart3").append("svg")
			.attr("width", (width3 + margin3.left + margin3.right))
			.attr("height", (height3 + margin3.top + margin3.bottom));
	
///////////////////////////////////////
/////////////original code/////////////
///////////////////////////////////////

var tooltip = d3.select("body").append("div").attr("class", "toolTip");

var x3 = d3.scaleBand().rangeRound([0, width3]).padding(0.2),
    y3 = d3.scaleLinear().rangeRound([height3, 0]);
  
var colours3 = d3.scaleOrdinal()
    .range(["#2074A0", "#2074A0", "#E01A25", "#E01A25", "#991C71",  "#991C71", "#EFB605", "#EFB605","#10A66E", "#10A66E"]);

var g3 = barchart3.append("g")
    .attr("transform", "translate(" + margin3.left + "," + margin3.top + ")");

d3.json("data3.json", function(error, data) {
    if (error) throw error;

    x3.domain(data.map(function(d) { return d.Tag; }));
    y3.domain([0, d3.max(data, function(d) { return d.Views; })]);

    g3.append("g")
        .attr("class", "axiss3 axis3--x")
        .attr("transform", "translate(0," + height3 + ")")
        .call(d3.axisBottom(x3));

    g3.append("g")
      	.attr("class", "axiss3 axis3--y")
      	.call(d3.axisLeft(y3).ticks(5).tickFormat(function(d) { return parseInt(d ) ; }).tickSizeInner([-width3]))
      .append("text")
    		.attr("class", "axis3-title")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Frequency");

    g3.selectAll(".bar")
      	.data(data)
      .enter().append("rect")
        .attr("x", function(d) { return x3(d.Tag); })
        .attr("y", function(d) { return y3(d.Views); })
        .attr("width", x3.bandwidth())
        .attr("height", function(d) { return height3 - y3(d.Views); })
        .attr("fill", function(d) { return colours3(d.Tag); })
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
