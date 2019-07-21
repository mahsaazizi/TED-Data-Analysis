var margin1 = {left: 30, top: 10, right: 0, bottom: 30},
	width1 = 400,
	height1 = (width1)/3;

var barchart = d3.select("#barchart").append("svg")
			.attr("width", (width1 + margin1.left + margin1.right))
			.attr("height", (height1 + margin1.top + margin1.bottom));
	
///////////////////////////////////////
/////////////original code/////////////
///////////////////////////////////////

var tooltip = d3.select("body").append("div").attr("class", "toolTip");

var x1 = d3.scaleBand().rangeRound([0, width1]).padding(0.2),
    y1 = d3.scaleLinear().rangeRound([height1, 0]);
  
var colours1 = d3.scaleOrdinal()
    .range(["#2074A0", "#E01A25", "#991C71", "#EFB605", "#10A66E"]);

var g1 = barchart.append("g")
    .attr("transform", "translate(" + margin1.left + "," + margin1.top + ")");

d3.json("data.json", function(error, data) {
    if (error) throw error;

    x1.domain(data.map(function(d) { return d.Tag; }));
    y1.domain([0, d3.max(data, function(d) { return d.Views; })]);

    g1.append("g")
        .attr("class", "axiss axis--x")
        .attr("transform", "translate(0," + height1 + ")")
        .call(d3.axisBottom(x1));

    g1.append("g")
      	.attr("class", "axiss axis--y")
      	.call(d3.axisLeft(y1).ticks(5).tickFormat(function(d) { return parseInt(d ) ; }).tickSizeInner([-width1]))
      .append("text")
    		.attr("class", "axis-title")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Frequency");

    g1.selectAll(".bar")
      	.data(data)
      .enter().append("rect")
        .attr("x", function(d) { return x1(d.Tag); })
        .attr("y", function(d) { return y1(d.Views); })
        .attr("width", x1.bandwidth())
        .attr("height", function(d) { return height1 - y1(d.Views); })
        .attr("fill", function(d) { return colours1(d.Tag); })
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
