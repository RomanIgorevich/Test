<template>
  <div>
    <svg width="300" height="300">
      <circle cx="200" cy="50" r="20" fill="green" />
    </svg>
    <div id="svgcontainer"></div>
    <svg width="300" height="300">
      <ellipse cx="200" cy="50" rx="100" ry="50" fill="green" />
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
      //Append circle
      svg
        .append("circle")
        .attr("cx", 200)
        .attr("cy", 50)
        .attr("r", 20)
        .attr("fill", "green");
    },
  },
};
</script>
