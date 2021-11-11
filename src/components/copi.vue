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
      var width = 300;
      var height = 300;
      var svg = d3
        .select("#svgcontainer")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
      svg
        .append("line")
        .attr("x1", 100)
        .attr("y1", 100)
        .attr("x2", 200)
        .attr("y2", 200)
        .style("stroke", "rgb(255,0,0)")
        .style("stroke-width", 2);
    },
  },
};
</script>
