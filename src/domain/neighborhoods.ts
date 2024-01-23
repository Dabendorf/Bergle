interface BergenNode {
  id: string;
  name: string;
  lat: number;
  lon: number;
  neighborsIds: string[];
}

export const bergenNodes: BergenNode[] = [
  // Existing nodes
  {
    id: "1",
    name: "Årstad",
    lat: 60.374,
    lon: 5.345,
    neighborsIds: ["2", "4"],
  },
  {
    id: "2",
    name: "Bergenhus",
    lat: 60.397,
    lon: 5.324,
    neighborsIds: ["1", "4"],
  },
  { id: "3", name: "Fana", lat: 60.296, lon: 5.331, neighborsIds: ["5"] },
  {
    id: "4",
    name: "Laksevåg",
    lat: 60.381,
    lon: 5.224,
    neighborsIds: ["1", "2"],
  },
  { id: "5", name: "Ytrebygda", lat: 60.305, lon: 5.231, neighborsIds: ["3"] },
  {
    id: "6",
    name: "Hjellestad",
    lat: 60.25654727937068,
    lon: 5.249927798102046,
    neighborsIds: ["5"],
  },
  {
    id: "7",
    name: "Milde",
    lat: 60.25293306584283,
    lon: 5.266952394444028,
    neighborsIds: ["6"],
  },
  {
    id: "8",
    name: "Alvøen",
    lat: 60.35971264660863,
    lon: 5.195197641250439,
    neighborsIds: ["5"],
  },
  {
    id: "9",
    name: "Hetlevik",
    lat: 60.35424353096282,
    lon: 5.223907726729444,
    neighborsIds: ["8"],
  },
];
