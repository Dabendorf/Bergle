import { GraphNode } from "reagraph";

export interface MapNode extends GraphNode {
  id: string;
  label: string;
  /**
   * Latitude and longitude of the node.
   */
  lat: number;
  lon: number;
  /**
   * IDs of the neighboring nodes.
   */
  neighborsIds: string[];
}

export const mapNodes: MapNode[] = [
  {
    id: "1",
    label: "Årstad",
    lat: 60.374,
    lon: 5.345,
    neighborsIds: ["2", "4"],
  },
  {
    id: "2",
    label: "Bergenhus",
    lat: 60.397,
    lon: 5.324,
    neighborsIds: ["1", "4"],
  },
  { id: "3", label: "Fana", lat: 60.296, lon: 5.331, neighborsIds: ["5"] },
  {
    id: "4",
    label: "Laksevåg",
    lat: 60.381,
    lon: 5.224,
    neighborsIds: ["1", "2"],
  },
  { id: "5", label: "Ytrebygda", lat: 60.305, lon: 5.231, neighborsIds: ["3"] },
  {
    id: "6",
    label: "Hjellestad",
    lat: 60.25654727937068,
    lon: 5.249927798102046,
    neighborsIds: ["5"],
  },
  {
    id: "7",
    label: "Milde",
    lat: 60.25293306584283,
    lon: 5.266952394444028,
    neighborsIds: ["6"],
  },
  {
    id: "8",
    label: "Alvøen",
    lat: 60.35971264660863,
    lon: 5.195197641250439,
    neighborsIds: ["5"],
  },
  {
    id: "9",
    label: "Hetlevik",
    lat: 60.35424353096282,
    lon: 5.223907726729444,
    neighborsIds: ["8"],
  },
];
