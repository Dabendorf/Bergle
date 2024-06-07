import React, { useRef, useEffect, useState } from "react";
import Modal from "react-modal";
import * as d3 from "d3";
import { countries } from "../../domain/countries";
import { Guess } from "../../domain/guess";
import { useSharedGameState } from "../../shared/useGame";
import { useTranslation } from "react-i18next";

interface MapNode {
  id: string;
  label: string;
  latitude: number;
  longitude: number;
  neighbours: string[];
  fill?: string;
}

interface HelpProps {
  isOpen: boolean;
  close: () => void;
}

const Help: React.FC<HelpProps> = ({ isOpen, close }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const {
    state: { country, guesses },
  } = useSharedGameState();
  const { t } = useTranslation();

  useEffect(() => {
    if (!svgRef.current) return;
  
    const svg = d3.select(svgRef.current);
    const { width, height } = svgDimensions;
  
    const mapNodes: MapNode[] = countries.map((country) => ({
      id: country.code,
      label: country.name,
      latitude: country.latitude || 0,
      longitude: country.longitude || 0,
      neighbours: country.neighbours,
    }));
  
    const mapEdges = generateMapEdges(mapNodes);
  
    const projection = d3
      .geoMercator()
      .fitSize([width, height], {
        type: "FeatureCollection",
        features: mapNodes.map(nodeToFeature),
      } as GeoJSON.FeatureCollection<GeoJSON.GeometryObject>);
  
    const path = d3.geoPath().projection(projection);
  
    svg.selectAll("*").remove();
  
    const g = svg.append("g");
  
    // Add zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>().scaleExtent([0.5, 8]).on("zoom", zoomed);
  
    svg.call(zoom);
  
    function zoomed(event: d3.D3ZoomEvent<SVGSVGElement, unknown>) {
      g.attr("transform", event.transform.toString());
    }
  
    g.selectAll("path")
      .data(mapEdges)
      .enter()
      .append("path")
      .attr("d", (d) => {
        const source = mapNodes.find((node) => node.id === d.source);
        const target = mapNodes.find((node) => node.id === d.target);
        if (source && target) {
          return path({
            type: "LineString",
            coordinates: [
              [source.longitude, source.latitude],
              [target.longitude, target.latitude],
            ],
          });
        }
        return null;
      })
      .attr("stroke", graphTheme.edge.stroke)
      .attr("stroke-width", 1)
      .attr("fill", "none");
  
    const nodeGroup = g.selectAll(".node-group")
      .data(mapNodes)
      .enter()
      .append("g")
      .attr("class", "node-group");
  
    nodeGroup.append("circle")
      .attr("cx", (d) => projection([d.longitude, d.latitude])?.[0] || 0)
      .attr("cy", (d) => projection([d.longitude, d.latitude])?.[1] || 0)
      .attr("r", 5)
      .attr("id", (d) => d.id) // Assigning ID to circles
      .style("fill", (d) =>
        d.label.toLowerCase() === country.name.toLowerCase() ? graphTheme.node.activeFill : graphTheme.node.fill
      );
  
    nodeGroup.append("text")
      .attr("x", (d) => projection([d.longitude, d.latitude])?.[0] || 0)
      .attr("y", (d) => projection([d.longitude, d.latitude])?.[1] || 0)
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("dy", "1.5em") // Adjusting position to be below the node
      .attr("font-size", "6px")
      .attr("fill", graphTheme.node.label.color)
      .text((d) => d.label);
  
    // Color the nodes
    colourNodes(country.name.toLowerCase(), guesses, mapNodes, g, projection);
  }, [isOpen, country, guesses, svgDimensions]);

  useEffect(() => {
    function handleResize() {
      const width = svgRef.current?.clientWidth || 0;
      const height = svgRef.current?.clientHeight || 0;
      setSvgDimensions({ width, height });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function nodeToFeature(node: MapNode) {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [node.longitude, node.latitude],
      },
      properties: node,
    };
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      className="modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: {
          width: isMobileDevice() ? "100%" : "90%",
          height: isMobileDevice() ? "100%" : "90%",
          paddingBottom: "10px",
          backgroundColor: graphTheme.canvas.background,
        },
      }}
      onAfterOpen={() => {
        const width = svgRef.current?.clientWidth || 0;
        const height = svgRef.current?.clientHeight || 0;
        setSvgDimensions({ width, height });
      }}
    >
      <div className="flex flew-row justify-between margin-auto mb-0 pb-2">
        <h1 className="margin-auto font-bold text-slate-100 p-4">
          {t("mapTitle")}
        </h1>
        <button className="margin-auto p-4" onClick={close}>
          ❌
        </button>
      </div>
      <p className="text-slate-100 px-4 pb-4">
        {isMobileDevice() ? t("mapMobileWarning") : ""}
      </p>
      <svg ref={svgRef} style={{ width: "100%", height: "80vh" }}></svg>
    </Modal>
  );
};

function isMobileDevice() {
  return (
    typeof window.matchMedia !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  );
}

function generateMapEdges(mapNodes: MapNode[]): { source: string; target: string }[] {
  const mapEdges: { source: string; target: string }[] = [];
  for (const node of mapNodes) {
    for (const neighbour of node.neighbours) {
      if (!mapEdges.find((edge) => edge.source === neighbour && edge.target === node.id)) {
        mapEdges.push({
          source: node.id,
          target: neighbour,
        });
      }
    }
  }
  return mapEdges;
}

const graphTheme = {
  canvas: { background: "#0f172a" }, // Navy Blue
  node: {
    fill: "#f2a900", // Yellow
    activeFill: "#1DE9AC",
    opacity: 1,
    selectedOpacity: 1,
    inactiveOpacity: 0.2,
    label: {
      color: "#fff",
      stroke: "#000000",
      activeColor: "#1DE9AC",
    },
    subLabel: {
      color: "#000000",
      stroke: "transparent",
      activeColor: "#1DE9AC",
    },
  },
  lasso: {
    border: "1px solid #55aaff",
    background: "rgba(75, 160, 255, 0.1)",
  },
  ring: {
    fill: "#D8E6EA",
    activeFill: "#1DE9AC",
  },
  edge: {
    stroke: "white",
    strokeWidth: 1,
    fill: "none",
  },
  arrow: {
    fill: "#D8E6EA",
    activeFill: "#1DE9AC",
  },
  cluster: {
    stroke: "#D8E6EA",
    opacity: 1,
    selectedOpacity: 1,
    inactiveOpacity: 0.1,
    label: {
      stroke: "#fff",
      color: "#2A6475",
    },
  },
};

function colourNodes(winner: string, guesses: Guess[], mapNodes: MapNode[], svg: any, projection: any) {
  const todayGuesses = guesses.map((guess: Guess) => guess.name.toLowerCase());
  const nodeGroups = svg.selectAll(".node-group");
  console.log(nodeGroups)
  for (const guess of todayGuesses) {
    const findNode: MapNode | undefined = mapNodes.find((node: MapNode) => {
      if (node.label) {
        return node.label.toLowerCase() === guess;
      }
      return [];
    });
    if (findNode) {
      if (findNode.label) {
        console.log(findNode.label)
        if (findNode.label.toLowerCase() === winner) {
          nodeGroups.select(`circle[id="${findNode.id}"]`).attr("fill", "green");
          continue;
        }
      }
      nodeGroups.select(`circle[id="${findNode.id}"]`).attr("fill", "red");
    }
  }
}

export default Help;