<template>
  <svg :width="diameter" :height="diameter / 2 + 40" ref="svgEl" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as d3 from "d3";

const props = defineProps({
  value: { type: Number, default: 6 },
  diameter: { type: Number, default: 205 },
  startColor: { type: String, default: "#8AFFCE" },
  endColor: { type: String, default: "#248E70" },
  border: { type: String, default: "#01D296" },
  centerColor: { type: String, default: "#09A578" },
});

const svgEl = ref(null);

onMounted(() => {
  const r = props.diameter / 2;
  const svg = d3.select(svgEl.value);
  svg.selectAll("*").remove();

  const defs = svg.append("defs");

  const gradId = "grad-" + Math.random().toString(36).slice(2);
  const grad = defs
    .append("linearGradient")
    .attr("id", gradId)
    .attr("x1", 0)
    .attr("y1", 1)
    .attr("x2", 1)
    .attr("y2", 0);
  grad.append("stop").attr("offset", "0%").attr("stop-color", props.startColor);
  grad.append("stop").attr("offset", "100%").attr("stop-color", props.endColor);

  const arrowId = "arrow-" + Math.random().toString(36).slice(2);
  defs
    .append("marker")
    .attr("id", arrowId)
    .attr("viewBox", "0 0 6 6")
    .attr("markerUnits", "strokeWidth")
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("refX", 6)
    .attr("refY", 3)
    .attr("orient", "auto")
    .append("path")
    // narrow triangle: tip at (6,3), base from (0,1)→(0,5)
    .attr("d", "M0,1 L6,3 L0,5 Z")
    .attr("fill", props.endColor);

  const fullArc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(r)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2);

  svg
    .append("path")
    .attr("d", fullArc())
    .attr("fill", `url(#${gradId})`)
    .attr("stroke", props.border)
    .attr("transform", `translate(${r},${r})`);

  const theta = Math.PI + (props.value / 30) * Math.PI;

  const cx = r,
    cy = r;
  svg
    .append("line")
    .attr("x1", cx)
    .attr("y1", cy)
    .attr("x2", cx + r * Math.cos(theta))
    .attr("y2", cy + r * Math.sin(theta))
    .attr("stroke", props.endColor)
    .attr("stroke-width", 4)
    .attr("marker-end", `url(#${arrowId})`);

  const labelY = r + 20;
  svg
    .append("text")
    .text("0%")
    .attr("x", 0)
    .attr("y", labelY)
    .attr("fill", "#000")
    .style("font-size", "10px")
    .style("font-weight", "400");

  svg
    .append("text")
    .text("30%")
    .attr("x", props.diameter)
    .attr("y", labelY)
    .attr("text-anchor", "end")
    .attr("fill", "#000")
    .style("font-size", "10px")
    .style("font-weight", "400");

  svg
    .append("text")
    .text(`+${props.value}%`)
    .attr("x", cx)
    .attr("y", labelY + 12)
    .attr("text-anchor", "middle")
    .attr("fill", props.centerColor)
    .style("font-size", "16px")
    .style("font-weight", "700");
});
</script>
