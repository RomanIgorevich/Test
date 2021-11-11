<template>
  <div>
    <div id="svgcontainer"></div>
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  data() {
    return {
      arr: [
        { id: 1, name: "Яблоко", prise: 100 },
        { id: 2, name: "Груша", prise: 50 },
        { id: 3, name: "Слива", prise: 200 },
        { id: 4, name: "Персик", prise: 150 },
        { id: 5, name: "Слива", prise: 200 },
        { id: 6, name: "Персик", prise: 150 },
      ],
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      this.drawingTable();
    },
    drawingTable() {
      //сделать добавление новых столбцов
      let fontSize = 16;
      let indentWidth = fontSize / 2;
      let indentHeight = fontSize;
      let width = 800; // сделать чтобы вычислялось сама
      let cellHeight = indentWidth + fontSize + indentWidth; //32px
      let height = cellHeight * this.arr.length + cellHeight;

      var svg = d3
        .select("#svgcontainer")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      for (let i = 0; i <= this.arr.length + 1; i++) {
        svg
          .append("line")
          .attr("x1", 0)
          .attr("y1", 0 + cellHeight * i)
          .attr("x2", width)
          .attr("y2", 0 + cellHeight * i)
          .style("stroke", "rgb(255,0,0)")
          .style("stroke-width", 2);
      }

      let lengthObj = Object.keys(this.arr[0]).length;
      let tdWidth = width / lengthObj;

      for (let i = 0; i <= lengthObj; i++) {
        svg
          .append("line")
          .attr("x1", 0 + tdWidth * i)
          .attr("y1", 0)
          .attr("x2", 0 + tdWidth * i)
          .attr("y2", width)
          .style("stroke", "rgb(255,0,0)")
          .style("stroke-width", 2);
      }

      let keys = Object.keys(this.arr[0]);
      console.log(keys);
      svg
        .append("text")
        .text(keys[0])
        .attr("y", indentHeight + 8)
        .attr("x", indentWidth + 8)
        .attr("font-size", fontSize)
        .attr("font-family", "monospace")
        .attr("fill", "black");

      svg
        .append("text")
        .text(keys[1])
        .attr("y", indentHeight + 8)
        .attr("x", indentWidth + 8 + tdWidth)
        .attr("font-size", fontSize)
        .attr("font-family", "monospace")
        .attr("fill", "black");

      svg
        .append("text")
        .text(keys[2])
        .attr("y", indentHeight + 8)
        .attr("x", indentWidth + 8 + tdWidth * 2)
        .attr("font-size", fontSize)
        .attr("font-family", "monospace")
        .attr("fill", "black");

      for (let i = 0; i <= this.arr.length; i++) {
        svg
          .append("text")
          .text(this.arr[i].id)
          .attr("y", indentHeight + 8 + cellHeight + cellHeight * i)
          .attr("x", indentWidth + 8)
          .attr("font-size", fontSize)
          .attr("font-family", "monospace")
          .attr("fill", "black");

        svg
          .append("text")
          .text(this.arr[i].name)
          .attr("y", indentHeight + 8 + cellHeight + cellHeight * i)
          .attr("x", indentWidth + 8 + tdWidth)
          .attr("font-size", fontSize)
          .attr("font-family", "monospace")
          .attr("fill", "black");

        svg
          .append("text")
          .text(this.arr[i].prise)
          .attr("y", indentHeight + 8 + cellHeight + cellHeight * i)
          .attr("x", indentWidth + 8 + tdWidth * 2)
          .attr("font-size", fontSize)
          .attr("font-family", "monospace")
          .attr("fill", "black");
      }
    },
  },
};
</script>
