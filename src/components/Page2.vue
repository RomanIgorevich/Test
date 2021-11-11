<template>
  <div>
    <div id="svgcontainer"></div>
    <svg width="300" height="300">
      <rect x="20" y="20" width="300" height="300" fill="green"></rect>
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  mounted() {
    this.start();
  },
  methods: {
    start() {
      var width = 300;
      var height = 300;
      //Create SVG element
      var svg = d3
        .select("#svgcontainer")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
      //Create and append rectangle element
      svg
        .append("rect")
        .attr("x", 20)
        .attr("y", 20)
        .attr("width", 200)
        .attr("height", 100)
        .attr("fill", "green");
    },
  },
};
</script>
