var svg = d3.select("svg"),
    margin = {top: 20, right: 40, bottom: 30, left: 150},
    width = +550 - margin.left - margin.right,
    height = +1000 - margin.top - margin.bottom;
  
var tooltip = d3.select("body").append("div").attr("class", "toolTip");
  
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleBand().range([height, 0]);

var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  
d3.csv("https://raw.githubusercontent.com/feeblefruits/dig/master/data/dig_claimant_locations.csv").then(function(data) {
    
    x.domain([0, d3.max(data, function(d) { return d.Claimants; })]);
    y.domain(data.map(function(d) { return d.Location; })).padding(0.1);

    g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        // .call(d3.axisBottom(x).ticks(5).tickFormat(function(d) { return d; }).tickSizeInner([-height]));

    g.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(y));

    g.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("height", y.bandwidth())
        .attr("y", function(d) { return y(d.Location); })
        .attr("width", function(d) { return x(d.Claimants); })
        .on("mousemove", function(d){
            tooltip
              .style("left", d3.event.pageX - 50 + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html((d.Location) + "<br>" + (d.Claimants));
        })
            .on("mouseout", function(d){ tooltip.style("display", "none");});
})

.catch(function(error){

	if (error) throw error;

})