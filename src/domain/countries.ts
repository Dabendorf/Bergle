// Source:
// Countries with long/lat => https://developers.google.com/public-data/docs/canonical/countries_csv
// Countries images => https://github.com/djaiss/mapsicon

const countryCodesWithImage = Array.from({ length: 111 }, (_, i) =>
  (i + 1).toString()
);

export interface Country {
  code: string;
  latitude: number;
  longitude: number;
  name: string;
  district: string;
  neighbours: string[];
}

export const countries: Country[] = [
  {
    code: "1",
    latitude: 60.37127649527915,
    longitude: 5.336879786850015,
    name: "Solheim",
    district: "Årstad",
    neighbours: ["13", "15", "16", "2", "45"],
  },
  {
    code: "2",
    latitude: 60.380400643104686,
    longitude: 5.316596408982212,
    name: "Gyldenpris",
    district: "Undefined",
    neighbours: ["1", "3", "45"],
  },
  {
    code: "3",
    latitude: 60.3835699022984,
    longitude: 5.302093414993073,
    name: "Damsgård",
    district: "Laksevåg",
    neighbours: ["2", "36", "4"],
  },
  {
    code: "4",
    latitude: 60.3898886630884,
    longitude: 5.28604612801252,
    name: "Kringsjå",
    district: "Laksevåg",
    neighbours: ["3", "5"],
  },
  {
    code: "5",
    latitude: 60.38817377153113,
    longitude: 5.274399475378052,
    name: "Nygård (Laksevåg)",
    district: "Laksevåg",
    neighbours: ["39", "4", "6"],
  },
  {
    code: "6",
    latitude: 60.38710556341981,
    longitude: 5.261948541474975,
    name: "Gravdal",
    district: "Laksevåg",
    neighbours: ["39", "5"],
  },
  {
    code: "7",
    latitude: 60.338651429742086,
    longitude: 5.217881977173262,
    name: "Mathopen",
    district: "Laksevåg",
    neighbours: ["110", "111", "94"],
  },
  {
    code: "8",
    latitude: 60.38491278592026,
    longitude: 5.228395430381186,
    name: "Kjøkkelvik",
    district: "Laksevåg",
    neighbours: ["12", "9"],
  },
  {
    code: "9",
    latitude: 60.37883853761025,
    longitude: 5.219395927891131,
    name: "Olsvik",
    district: "Laksevåg",
    neighbours: ["10", "11", "8"],
  },
  {
    code: "10",
    latitude: 60.37375583516423,
    longitude: 5.195657170009791,
    name: "Godvik",
    district: "Laksevåg",
    neighbours: ["110", "9"],
  },
  {
    code: "11",
    latitude: 60.36297239464026,
    longitude: 5.228095970755056,
    name: "Vadmyra",
    district: "Laksevåg",
    neighbours: ["111", "12", "9"],
  },
  {
    code: "12",
    latitude: 60.36581492600013,
    longitude: 5.234393788763356,
    name: "Loddefjorddalen",
    district: "Laksevåg",
    neighbours: ["11", "42", "8"],
  },
  {
    code: "13",
    latitude: 60.37366103901841,
    longitude: 5.349236227727442,
    name: "Kronstad",
    district: "Årstad",
    neighbours: ["1", "14", "15", "20"],
  },
  {
    code: "14",
    latitude: 60.37887318880138,
    longitude: 5.357208056412009,
    name: "Årstad",
    district: "Bergenhus",
    neighbours: ["13", "20", "44"],
  },
  {
    code: "15",
    latitude: 60.36516016404381,
    longitude: 5.356690900155878,
    name: "Fridalen",
    district: "Årstad",
    neighbours: ["1", "13", "16", "20", "23"],
  },
  {
    code: "16",
    latitude: 60.35661507583429,
    longitude: 5.341439029421865,
    name: "Minde",
    district: "Årstad",
    neighbours: ["1", "15", "17", "18", "22", "23"],
  },
  {
    code: "17",
    latitude: 60.34642361928855,
    longitude: 5.334806602097346,
    name: "Fjøsanger",
    district: "Undefined",
    neighbours: ["102", "16", "18", "37"],
  },
  {
    code: "18",
    latitude: 60.34843142828038,
    longitude: 5.345093078905621,
    name: "Storetveit",
    district: "Fana",
    neighbours: ["102", "16", "17", "22"],
  },
  {
    code: "19",
    latitude: 60.34786120488971,
    longitude: 5.371471221986871,
    name: "Nattland",
    district: "Årstad",
    neighbours: ["20", "21", "22", "23"],
  },
  {
    code: "20",
    latitude: 60.36611092280503,
    longitude: 5.3706233447145735,
    name: "Landås",
    district: "Årstad",
    neighbours: ["13", "14", "15", "19", "23"],
  },
  {
    code: "21",
    latitude: 60.34202348300611,
    longitude: 5.380579522275442,
    name: "Sædalen",
    district: "Fana",
    neighbours: ["102", "19", "22", "35", "85", "87"],
  },
  {
    code: "22",
    latitude: 60.34677965099607,
    longitude: 5.35745856729457,
    name: "Fantoft",
    district: "Årstad",
    neighbours: ["102", "16", "18", "19", "21"],
  },
  {
    code: "23",
    latitude: 60.35594974933241,
    longitude: 5.362772286614167,
    name: "Slettebakken",
    district: "Årstad",
    neighbours: ["15", "16", "19", "20", "23"],
  },
  {
    code: "24",
    latitude: 60.422231167074486,
    longitude: 5.62581495661186,
    name: "Trengereid",
    district: "Arna",
    neighbours: ["25"],
  },
  {
    code: "25",
    latitude: 60.41814078241781,
    longitude: 5.541708289349967,
    name: "Skuggestranda",
    district: "Arna",
    neighbours: ["24", "26"],
  },
  {
    code: "26",
    latitude: 60.435896719483466,
    longitude: 5.477796450389986,
    name: "Garnes",
    district: "Arna",
    neighbours: ["25", "28"],
  },
  {
    code: "27",
    latitude: 60.45528713838826,
    longitude: 5.42963241871513,
    name: "Ytre Arna",
    district: "Arna",
    neighbours: ["28", "31", "33", "76"],
  },
  {
    code: "28",
    latitude: 60.41650195813524,
    longitude: 5.47022787865238,
    name: "Indre Arna",
    district: "Arna",
    neighbours: ["26", "27", "76", "89"],
  },
  {
    code: "29",
    latitude: 60.514557550048,
    longitude: 5.303514830510578,
    name: "Hordvik",
    district: "Åsane",
    neighbours: ["30", "64"],
  },
  {
    code: "30",
    latitude: 60.50486135429211,
    longitude: 5.3526494440233146,
    name: "Hylkje",
    district: "Åsane",
    neighbours: ["29", "32", "33"],
  },
  {
    code: "31",
    latitude: 60.46964998612947,
    longitude: 5.387024899342976,
    name: "Blindheim",
    district: "Åsane",
    neighbours: ["27", "32", "33", "34", "67", "76"],
  },
  {
    code: "32",
    latitude: 60.48566329987632,
    longitude: 5.334011836557068,
    name: "Dalabygda",
    district: "Åsane",
    neighbours: ["30", "31", "33", "34", "65", "68"],
  },
  {
    code: "33",
    latitude: 60.4867297182508,
    longitude: 5.383981872195218,
    name: "Breistein",
    district: "Åsane",
    neighbours: ["27", "30", "31", "32"],
  },
  {
    code: "34",
    latitude: 60.47180636921416,
    longitude: 5.34616571320928,
    name: "Nyborg",
    district: "Åsane",
    neighbours: ["31", "32", "65", "66", "67"],
  },
  {
    code: "35",
    latitude: 60.33327185150048,
    longitude: 5.380086419501858,
    name: "Helldalsåsen",
    district: "Fana",
    neighbours: ["21", "84", "85", "87"],
  },
  {
    code: "36",
    latitude: 60.3740377296484,
    longitude: 5.304639054656689,
    name: "Melkeplassen",
    district: "Laksevåg",
    neighbours: ["3", "41"],
  },
  {
    code: "37",
    latitude: 60.33501385566198,
    longitude: 5.317863801272554,
    name: "Kråkenes",
    district: "Fyllingsdalen",
    neighbours: ["104", "17"],
  },
  {
    code: "38",
    latitude: 60.34050740803234,
    longitude: 5.269218591235345,
    name: "Søndre Fyllingen",
    district: "Fyllingsdalen",
    neighbours: ["104", "40", "41", "42", "77"],
  },
  {
    code: "39",
    latitude: 60.36968362367672,
    longitude: 5.2616789861285005,
    name: "Lyngbø",
    district: "Laksevåg",
    neighbours: ["40", "42", "5", "6"],
  },
  {
    code: "40",
    latitude: 60.353862088030944,
    longitude: 5.282553328328583,
    name: "Nordre Fyllingen",
    district: "Fyllingsdalen",
    neighbours: ["38", "39", "41", "42"],
  },
  {
    code: "41",
    latitude: 60.35964296725959,
    longitude: 5.304509245070241,
    name: "Øvre Fyllingen",
    district: "Fyllingsdalen",
    neighbours: ["104", "36", "38", "40"],
  },
  {
    code: "42",
    latitude: 60.35332770143691,
    longitude: 5.246502118988286,
    name: "Bjørndal",
    district: "Laksevåg",
    neighbours: ["111", "12", "38", "39", "40"],
  },
  {
    code: "43",
    latitude: 60.41130962573778,
    longitude: 5.323768771492281,
    name: "Sandviken",
    district: "Bergenhus",
    neighbours: ["51", "73"],
  },
  {
    code: "44",
    latitude: 60.387660016285416,
    longitude: 5.34964863436652,
    name: "Kalfaret",
    district: "Bergenhus",
    neighbours: ["14", "46", "48", "49", "50"],
  },
  {
    code: "45",
    latitude: 60.38355947100721,
    longitude: 5.323966703920147,
    name: "Møhlenpris",
    district: "Bergenhus",
    neighbours: ["1", "2", "46", "47"],
  },
  {
    code: "46",
    latitude: 60.3861583387714,
    longitude: 5.332049647740407,
    name: "Nygård (Sentrum)",
    district: "Bergenhus",
    neighbours: ["44", "45", "47", "48", "54"],
  },
  {
    code: "47",
    latitude: 60.38876098075952,
    longitude: 5.315313892281608,
    name: "Sydnes",
    district: "Bergenhus",
    neighbours: ["45", "46", "53", "54", "60"],
  },
  {
    code: "48",
    latitude: 60.39102796998136,
    longitude: 5.333477903089923,
    name: "Marken",
    district: "Bergenhus",
    neighbours: ["44", "46", "49", "54", "55"],
  },
  {
    code: "49",
    latitude: 60.39401550066543,
    longitude: 5.332890960963868,
    name: "Fjellet",
    district: "Bergenhus",
    neighbours: ["44", "48", "50", "55", "56"],
  },
  {
    code: "50",
    latitude: 60.39412653302914,
    longitude: 5.337334653378929,
    name: "Skansen",
    district: "Bergenhus",
    neighbours: ["44", "49", "52"],
  },
  {
    code: "51",
    latitude: 60.40374630070945,
    longitude: 5.328503514770993,
    name: "Ladegården",
    district: "Bergenhus",
    neighbours: ["43", "52", "58", "59"],
  },
  {
    code: "52",
    latitude: 60.399903991019904,
    longitude: 5.330089058642569,
    name: "Eidemarken",
    district: "Bergenhus",
    neighbours: ["50", "51", "58"],
  },
  {
    code: "53",
    latitude: 60.391523415108,
    longitude: 5.318988512735579,
    name: "Engen",
    district: "Bergenhus",
    neighbours: ["47", "54", "60"],
  },
  {
    code: "54",
    latitude: 60.391980378971866,
    longitude: 5.324107078959139,
    name: "Sentrum",
    district: "Bergenhus",
    neighbours: ["46", "47", "48", "53", "55", "60", "61"],
  },
  {
    code: "55",
    latitude: 60.39439493381364,
    longitude: 5.327864753051345,
    name: "Vågsbunnen",
    district: "Bergenhus",
    neighbours: ["48", "49", "54", "56", "61"],
  },
  {
    code: "56",
    latitude: 60.39774066320017,
    longitude: 5.3238410503509055,
    name: "Bryggen",
    district: "Bergenhus",
    neighbours: ["49", "55", "57", "58"],
  },
  {
    code: "57",
    latitude: 60.40067908544416,
    longitude: 5.317731969312446,
    name: "Bergenhus",
    district: "Bergenhus",
    neighbours: ["56", "58", "59"],
  },
  {
    code: "58",
    latitude: 60.39958023453588,
    longitude: 5.325408916154824,
    name: "Stølen",
    district: "Bergenhus",
    neighbours: ["51", "52", "56", "57", "59"],
  },
  {
    code: "59",
    latitude: 60.40223482497768,
    longitude: 5.321111883780217,
    name: "Skuteviken",
    district: "Bergenhus",
    neighbours: ["51", "57", "58"],
  },
  {
    code: "60",
    latitude: 60.39291477464691,
    longitude: 5.31416802298282,
    name: "Nøstet",
    district: "Bergenhus",
    neighbours: ["47", "53", "54", "61", "62"],
  },
  {
    code: "61",
    latitude: 60.39564826873292,
    longitude: 5.317263227372655,
    name: "Strandsiden",
    district: "Bergenhus",
    neighbours: ["54", "55", "60", "62", "63"],
  },
  {
    code: "62",
    latitude: 60.39567426313726,
    longitude: 5.310144222414987,
    name: "Verftet",
    district: "Bergenhus",
    neighbours: ["60", "61", "63"],
  },
  {
    code: "63",
    latitude: 60.39879945539774,
    longitude: 5.307448652388946,
    name: "Nordnes",
    district: "Bergenhus",
    neighbours: ["61", "62"],
  },
  {
    code: "64",
    latitude: 60.50512109927429,
    longitude: 5.2679014714438726,
    name: "Salhus",
    district: "Åsane",
    neighbours: ["29", "68"],
  },
  {
    code: "65",
    latitude: 60.46883092247518,
    longitude: 5.307590112649708,
    name: "Ulset",
    district: "Åsane",
    neighbours: ["100", "32", "34", "66", "68", "69", "70"],
  },
  {
    code: "66",
    latitude: 60.46145200172912,
    longitude: 5.330637490888099,
    name: "Rolland",
    district: "Åsane",
    neighbours: ["100", "34", "65", "75"],
  },
  {
    code: "67",
    latitude: 60.46360665373328,
    longitude: 5.362679821584606,
    name: "Flaktveit",
    district: "Åsane",
    neighbours: ["31", "34", "75", "76"],
  },
  {
    code: "68",
    latitude: 60.48680955960945,
    longitude: 5.282002696434712,
    name: "Mjølkeråen",
    district: "Åsane",
    neighbours: ["32", "64", "65", "69"],
  },
  {
    code: "69",
    latitude: 60.47300478697231,
    longitude: 5.2712877541173855,
    name: "Morvik",
    district: "Åsane",
    neighbours: ["65", "68", "70"],
  },
  {
    code: "70",
    latitude: 60.45842544520412,
    longitude: 5.287671148076753,
    name: "Tertnes",
    district: "Åsane",
    neighbours: ["100", "65", "69"],
  },
  {
    code: "71",
    latitude: 60.442545215783554,
    longitude: 5.32337411045491,
    name: "Ervik",
    district: "Åsane",
    neighbours: ["100", "72", "74"],
  },
  {
    code: "72",
    latitude: 60.43907381422744,
    longitude: 5.304452018926662,
    name: "Eidsvåg",
    district: "Åsane",
    neighbours: ["71", "73", "74"],
  },
  {
    code: "73",
    latitude: 60.42730264790797,
    longitude: 5.2987820340066,
    name: "Ytre Sandviken",
    district: "Bergenhus",
    neighbours: ["43", "72"],
  },
  {
    code: "74",
    latitude: 60.42917024676942,
    longitude: 5.357764160924607,
    name: "Jordal",
    district: "Åsane",
    neighbours: ["71", "72"],
  },
  {
    code: "75",
    latitude: 60.4457341463252,
    longitude: 5.375225478526746,
    name: "Hjortland",
    district: "Åsane",
    neighbours: ["66", "67", "76"],
  },
  {
    code: "76",
    latitude: 60.4206917250088,
    longitude: 5.429072112823776,
    name: "Langedalen",
    district: "Arna",
    neighbours: ["27", "28", "31", "67", "75", "87", "89"],
  },
  {
    code: "77",
    latitude: 60.32533224377657,
    longitude: 5.2644508409942,
    name: "Straume",
    district: "Fyllingsdalen",
    neighbours: ["104", "38", "95"],
  },
  {
    code: "78",
    latitude: 60.30120552361375,
    longitude: 5.253267158571382,
    name: "Kokstad",
    district: "Ytrebygda",
    neighbours: ["101", "79", "96", "97"],
  },
  {
    code: "79",
    latitude: 60.2985971343186,
    longitude: 5.28194275466603,
    name: "Sandsli",
    district: "Ytrebygda",
    neighbours: ["101", "78", "80", "93", "95"],
  },
  {
    code: "80",
    latitude: 60.30353226360985,
    longitude: 5.297842672599478,
    name: "Steinsvik",
    district: "Ytrebygda",
    neighbours: ["79", "81", "93", "95"],
  },
  {
    code: "81",
    latitude: 60.30532197015785,
    longitude: 5.318770175488199,
    name: "Nordås",
    district: "Ytrebygda",
    neighbours: ["80", "82", "93"],
  },
  {
    code: "82",
    latitude: 60.30711033393647,
    longitude: 5.339341288152076,
    name: "Skjold",
    district: "Fana",
    neighbours: ["103", "81", "83", "85", "92", "93"],
  },
  {
    code: "83",
    latitude: 60.31161654652081,
    longitude: 5.365939405869743,
    name: "Øvsttun",
    district: "Fana",
    neighbours: ["82", "84", "85", "90"],
  },
  {
    code: "84",
    latitude: 60.32026959476283,
    longitude: 5.370878994186152,
    name: "Midtun",
    district: "Fana",
    neighbours: ["35", "83", "85", "86", "87", "90"],
  },
  {
    code: "85",
    latitude: 60.31933095607503,
    longitude: 5.353968274412763,
    name: "Nesttun",
    district: "Fana",
    neighbours: ["102", "103", "21", "35", "82", "83", "84"],
  },
  {
    code: "86",
    latitude: 60.32541925875104,
    longitude: 5.395970771443804,
    name: "Dyngeland",
    district: "Fana",
    neighbours: ["84", "87", "90"],
  },
  {
    code: "87",
    latitude: 60.352234363299615,
    longitude: 5.425640918944365,
    name: "Brattland",
    district: "Fana",
    neighbours: ["21", "35", "76", "84", "86", "89"],
  },
  {
    code: "88",
    latitude: 60.37075984672514,
    longitude: 5.496516858905329,
    name: "Unneland",
    district: "Arna",
    neighbours: ["89"],
  },
  {
    code: "89",
    latitude: 60.38299599169724,
    longitude: 5.472930530997594,
    name: "Espeland",
    district: "Arna",
    neighbours: ["28", "76", "87", "88"],
  },
  {
    code: "90",
    latitude: 60.30585060949911,
    longitude: 5.384876621409309,
    name: "Kirkebirkeland",
    district: "Fana",
    neighbours: ["83", "84", "86", "91", "92", "99"],
  },
  {
    code: "91",
    latitude: 60.30750285152523,
    longitude: 5.425683641878985,
    name: "Totland",
    district: "Fana",
    neighbours: ["90", "99"],
  },
  {
    code: "92",
    latitude: 60.29454834044344,
    longitude: 5.35579929722164,
    name: "Smørås",
    district: "Fana",
    neighbours: ["106", "82", "90", "93", "99"],
  },
  {
    code: "93",
    latitude: 60.28822332615695,
    longitude: 5.313435158011243,
    name: "Rådal",
    district: "Undefined",
    neighbours: ["101", "105", "106", "79", "80", "81", "82", "92"],
  },
  {
    code: "94",
    latitude: 60.34400413997926,
    longitude: 5.194406283031761,
    name: "Håkonshella",
    district: "Laksevåg",
    neighbours: ["110", "7"],
  },
  {
    code: "95",
    latitude: 60.31497570060517,
    longitude: 5.280372137117529,
    name: "Søreide",
    district: "Ytrebygda",
    neighbours: ["77", "79", "80", "96"],
  },
  {
    code: "96",
    latitude: 60.3141474286171,
    longitude: 5.232878858560322,
    name: "Grimstad",
    district: "Ytrebygda",
    neighbours: ["78", "95", "97"],
  },
  {
    code: "97",
    latitude: 60.29102265666039,
    longitude: 5.221691501400956,
    name: "Flesland",
    district: "Ytrebygda",
    neighbours: ["101", "78", "96"],
  },
  {
    code: "98",
    latitude: 60.24143539754127,
    longitude: 5.364057314223059,
    name: "Nordvik",
    district: "Fana",
    neighbours: ["106", "107", "99"],
  },
  {
    code: "99",
    latitude: 60.29657031219824,
    longitude: 5.464875307086978,
    name: "Kaland",
    district: "Fana",
    neighbours: ["106", "90", "91", "92", "98"],
  },
  {
    code: "100",
    latitude: 60.45138077721689,
    longitude: 5.312612224743791,
    name: "Åstveit",
    district: "Åsane",
    neighbours: ["65", "66", "70", "71"],
  },
  {
    code: "101",
    latitude: 60.27932829606282,
    longitude: 5.254080965711176,
    name: "Blomsterdalen",
    district: "Ytrebygda",
    neighbours: ["105", "108", "78", "79", "93", "97"],
  },
  {
    code: "102",
    latitude: 60.3367553518909,
    longitude: 5.348725070810083,
    name: "Paradis",
    district: "Fana",
    neighbours: ["103", "17", "18", "21", "22", "85"],
  },
  {
    code: "103",
    latitude: 60.32286092753795,
    longitude: 5.339736581614291,
    name: "Hop",
    district: "Fana",
    neighbours: ["102", "82", "85"],
  },
  {
    code: "104",
    latitude: 60.33025019661169,
    longitude: 5.29400409210771,
    name: "Bønes",
    district: "Fyllingsdalen",
    neighbours: ["37", "38", "41", "77"],
  },
  {
    code: "105",
    latitude: 60.27260048470023,
    longitude: 5.284847248760828,
    name: "Grimseid",
    district: "Ytrebygda",
    neighbours: ["101", "106", "108", "109", "93"],
  },
  {
    code: "106",
    latitude: 60.2648397102732,
    longitude: 5.336646613494548,
    name: "Fanahammeren",
    district: "Fana",
    neighbours: ["105", "107", "92", "93", "98", "99"],
  },
  {
    code: "107",
    latitude: 60.22312985490191,
    longitude: 5.289401666797668,
    name: "Krokeide",
    district: "Fana",
    neighbours: ["106", "98"],
  },
  {
    code: "108",
    latitude: 60.25654727937068,
    longitude: 5.249927798102046,
    name: "Hjellestad",
    district: "Ytrebygda",
    neighbours: ["101", "105", "109"],
  },
  {
    code: "109",
    latitude: 60.25293306584283,
    longitude: 5.266952394444028,
    name: "Milde",
    district: "Ytrebygda",
    neighbours: ["105", "108"],
  },
  {
    code: "110",
    latitude: 60.35971264660863,
    longitude: 5.195197641250439,
    name: "Alvøen",
    district: "Laksevåg",
    neighbours: ["10", "7", "94"],
  },
  {
    code: "111",
    latitude: 60.35424353096282,
    longitude: 5.223907726729444,
    name: "Hetlevik",
    district: "Laksevåg",
    neighbours: ["11", "42", "7"],
  },
];

export const countriesWithImage = countries.filter((c) =>
  countryCodesWithImage.includes(c.code.toLowerCase())
);

export function getCountryName(language: string, country: Country) {
  return country.name;
}

export function sanitizeCountryName(countryName: string): string {
  return countryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}
