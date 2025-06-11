<template>
  <svg :width="diameter" :height="diameter / 2 + 40" ref="svgEl" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as d3 from "d3";

const props = defineProps({
  value: { type: Number, default: 6 }, // e.g. 6 means +6%
  diameter: { type: Number, default: 205 },
  startColor: { type: String, default: "#8AFFCE" },
  endColor: { type: String, default: "#248E70" },
  border: { type: String, default: "#01D296" },
  centerColor: { type: String, default: "#09A578" }, // explicitly set per instance
});

const svgEl = ref(null);

onMounted(() => {
  const r = props.diameter / 2;
  const svg = d3.select(svgEl.value);
  svg.selectAll("*").remove();

  /* gradient */
  const gradId = "grad-" + Math.random().toString(36).slice(2);
  const grad = svg
    .append("defs")
    .append("linearGradient")
    .attr("id", gradId)
    .attr("x1", 0)
    .attr("y1", 1)
    .attr("x2", 1)
    .attr("y2", 0);
  grad.append("stop").attr("offset", "0%").attr("stop-color", props.startColor);
  grad.append("stop").attr("offset", "100%").attr("stop-color", props.endColor);

  /* semicircle */
  const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(r)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2);

  svg.append("path")
    .attr("d", arc())
    .attr("fill", `url(#${gradId})`)
    .attr("stroke", props.border)
    .attr("transform", `translate(${r},${r})`);

  /* needle */
  const angle = (props.value / 30) * Math.PI - Math.PI / 2;
  const len = r * 0.9;
  const cx = r, cy = r;

  svg.append("line")
    .attr("x1", cx)
    .attr("y1", cy)
    .attr("x2", cx + len * Math.cos(angle))
    .attr("y2", cy + len * Math.sin(angle))
    .attr("stroke", props.endColor)
    .attr("stroke-width", 4);

  svg.append("circle")
    .attr("cx", cx)
    .attr("cy", cy)
    .attr("r", 6)
    .attr("fill", props.endColor);

  /* labels */
  const labelY = r + 20;

  svg.append("text")
    .text("0%")
    .attr("x", 0)
    .attr("y", labelY)
    .attr("fill", "#000")
    .style("font-size", "10px")
    .style("font-weight", "400");

  svg.append("text")
    .text("30%")
    .attr("x", props.diameter)
    .attr("y", labelY)
    .attr("text-anchor", "end")
    .attr("fill", "#000")
    .style("font-size", "10px")
    .style("font-weight", "400");

  svg.append("text")
    .text(`+${props.value}%`)
    .attr("x", cx)
    .attr("y", labelY + 12)
    .attr("text-anchor", "middle")
    .attr("fill", props.centerColor)
    .style("font-size", "16px")
    .style("font-weight", "700");
});
</script>
