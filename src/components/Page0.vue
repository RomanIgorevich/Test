<template>
  <div>
    <!-- <svg width="300" height="300">
      <line 
        x1="100"
        y1="100"
        x2="200"
        y2="200"
        style="stroke: rgb(255, 0, 0); stroke-width: 2"
      />
    </svg> -->
    <div id="svgcontainer"></div>
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  data() {
    return {
      arr: [
        { x: 5, y: 4 },
        { x: 4, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 1 },
        { x: 2, y: 6 },
      ],
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      this.lineDrawing();
    },
    lineDrawing() {
      var width = 1000;
      var height = 1000;
      var svg = d3
        .select("#svgcontainer")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      for (let i = 0; i < this.arr.length-1; i++) {
        svg
          .append("line")
          .attr("x1",(this.arr[i].x*100))
          .attr("y1", (this.arr[i].y*100))
          .attr("x2", (this.arr[i+1].x*100))
          .attr("y2", (this.arr[i+1].y*100))
          .style("stroke", "rgb(255,0,0)")
          .style("stroke-width", 2);
      }
      svg.append("text")
      .text("Text with the background")
      .attr("y", 190)
      .attr("x", 150)
      .attr("font-size", 36)
      .attr("font-family", "monospace")
      .attr("fill", "black");
      // svg
      //   .append("line")
      //   .attr("x1", 100)
      //   .attr("y1", 100)
      //   .attr("x2", 200)
      //   .attr("y2", 200)
      //   .style("stroke", "rgb(255,0,0)")
      //   .style("stroke-width", 2);

      // svg
      //   .append("line")
      //   .attr("x1", 200)
      //   .attr("y1", 200)
      //   .attr("x2", 300)
      //   .attr("y2", 100)
      //   .style("stroke", "rgb(255,0,0)")
      //   .style("stroke-width", 2);
    },
  },
};
</script>
