import * as d3 from "d3";

export function useSemiGauge(svgEl, props) {
  const r = props.diameter / 2;

  const theta = Math.PI + (props.value / 30) * Math.PI;
  const cx = r;
  const cy = r;
  const arrowLength = r - 6;
  const xEnd = cx + arrowLength * Math.cos(theta);
  const yEnd = cy + arrowLength * Math.sin(theta);
  const dotX = cx + r * Math.cos(theta);
  const dotY = cy + r * Math.sin(theta);

  const gradId = "grad-" + Math.random().toString(36).slice(2);
  const arrowId = "arrow-" + Math.random().toString(36).slice(2);

  function draw() {
    const svg = d3.select(svgEl.value);
    svg.selectAll("*").remove();

    const defs = svg.append("defs");
    createGradient(defs);
    createArrowMarker(defs);

    drawArc(svg);
    drawArrow(svg);
    drawTipDot(svg);
    drawLabels(svg);
  }

  function createGradient(defs) {
    const grad = defs.append("linearGradient")
      .attr("id", gradId)
      .attr("x1", 0)
      .attr("y1", 1)
      .attr("x2", 1)
      .attr("y2", 0);

    grad.append("stop").attr("offset", "0%").attr("stop-color", props.startColor);
    grad.append("stop").attr("offset", "100%").attr("stop-color", props.endColor);
  }

  function createArrowMarker(defs) {
    defs.append("marker")
      .attr("id", arrowId)
      .attr("viewBox", "0 0 6 6")
      .attr("markerUnits", "strokeWidth")
      .attr("markerWidth", 4)
      .attr("markerHeight", 6)
      .attr("refX", 5)
      .attr("refY", 3)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,1 L6,3 L0,5 Z")
      .attr("fill", props.isRed ? props.redArrowColor : props.endColor);
  }

  function drawArc(svg) {
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
  }

  function drawArrow(svg) {
    svg.append("line")
      .attr("x1", cx)
      .attr("y1", cy)
      .attr("x2", xEnd)
      .attr("y2", yEnd)
      .attr("stroke", props.isRed ? props.redArrowColor : props.endColor)
      .attr("stroke-width", 4)
      .attr("marker-end", `url(#${arrowId})`);
  }

  function drawTipDot(svg) {
    svg.append("circle")
      .attr("cx", dotX)
      .attr("cy", dotY)
      .attr("r", 5)
      .attr("fill", props.isRed ? props.redArrowColor : props.endColor)
      .attr("stroke", props.isRed ? props.redArrowColor : props.endColor)
      .attr("stroke-width", 2);
  }

  function drawLabels(svg) {
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
      .attr("x", r)
      .attr("y", labelY + 12)
      .attr("text-anchor", "middle")
      .attr("fill", props.centerColor)
      .style("font-size", "16px")
      .style("font-weight", "700");
  }

  return { draw };
}