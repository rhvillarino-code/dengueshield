export const SOOC_CENTER = [10.6920, 122.5550];

export const breedingSites = [
  {id:1,lat:10.6935,lng:122.5540,type:"Container",status:"Active",risk:"High",reporter:"BHW Maria Santos",date:"2026-10-15",description:"Uncovered water drum near residence, larvae observed"},
  {id:2,lat:10.6910,lng:122.5565,type:"Tire",status:"Active",risk:"Moderate",reporter:"BHW Elena Cruz",date:"2026-10-14",description:"Used tires collecting rainwater behind store"},
  {id:3,lat:10.6925,lng:122.5530,type:"Drainage",status:"Resolved",risk:"Low",reporter:"BHW Rosa Diaz",date:"2026-10-10",description:"Clogged drainage cleared by community action"},
  {id:4,lat:10.6945,lng:122.5575,type:"Container",status:"Active",risk:"Critical",reporter:"BHW Juan Reyes",date:"2026-10-16",description:"Multiple open containers with pupae, near daycare center"},
  {id:5,lat:10.6900,lng:122.5555,type:"Natural",status:"Active",risk:"Moderate",reporter:"BHW Ana Lim",date:"2026-10-13",description:"Tree holes and leaf axils with standing water"},
  {id:6,lat:10.6940,lng:122.5520,type:"Container",status:"Resolved",risk:"Low",reporter:"BHW Pedro Garcia",date:"2026-10-08",description:"Flower vases emptied during clean-up drive"},
  {id:7,lat:10.6915,lng:122.5580,type:"Tire",status:"Active",risk:"High",reporter:"BHW Maria Santos",date:"2026-10-15",description:"Abandoned tires in vacant lot, heavy larval infestation"},
  {id:8,lat:10.6930,lng:122.5545,type:"Drainage",status:"Active",risk:"Moderate",reporter:"BHW Elena Cruz",date:"2026-10-12",description:"Slow-draining canal segment near Purok 3"},
];

export const vectorIndices = [
  {month:"Apr 2026",bi:45,ci:32,hi:28,ppi:1.8},
  {month:"May 2026",bi:52,ci:38,hi:33,ppi:2.1},
  {month:"Jun 2026",bi:48,ci:35,hi:30,ppi:1.9},
  {month:"Jul 2026",bi:41,ci:29,hi:25,ppi:1.6},
  {month:"Aug 2026",bi:35,ci:24,hi:20,ppi:1.3},
  {month:"Sep 2026",bi:30,ci:20,hi:17,ppi:1.1},
  {month:"Oct 2026",bi:26,ci:17,hi:14,ppi:0.9},
];

export const climateData = [
  {month:"Apr",rainfall:125,tempMax:34.2,tempMin:25.8,humidity:78,dengCases:22},
  {month:"May",rainfall:185,tempMax:33.8,tempMin:25.5,humidity:82,dengCases:28},
  {month:"Jun",rainfall:245,tempMax:32.5,tempMin:24.9,humidity:86,dengCases:35},
  {month:"Jul",rainfall:290,tempMax:31.8,tempMin:24.5,humidity:88,dengCases:18},
  {month:"Aug",rainfall:310,tempMax:31.5,tempMin:24.3,humidity:89,dengCases:14},
  {month:"Sep",rainfall:275,tempMax:32.0,tempMin:24.7,humidity:87,dengCases:10},
  {month:"Oct",rainfall:230,tempMax:32.8,tempMin:25.2,humidity:84,dengCases:8},
];

export const kapData = {
  baseline:{knowledge:52.3,attitudes:48.7,practices:41.2,n:150},
  endline:{knowledge:78.6,attitudes:72.4,practices:68.9,n:142},
};

export const cbplaModules = [
  {id:1,title:"Pag-ila sang Dengue",titleEn:"Understanding Dengue",desc:"Ano ang dengue? Paano ini nagakalat? Kilalaha ang mga sintomas kag kun paano magpabulong.",status:"completed",progress:100,lessons:5},
  {id:2,title:"Pagpangita sang mga Breeding Site",titleEn:"Finding Breeding Sites",desc:"Turuan mo ang imo kaugalingon nga mag-identify sang mga lugar nga ginapugaran sang lamok sa imo balay kag komunidad.",status:"completed",progress:100,lessons:4},
  {id:3,title:"Aksyon sa Komunidad",titleEn:"Community Action Cycle",desc:"Identify-Plan-Act-Reflect: Paano ang komunidad magbuligay para mapababa ang dengue.",status:"in_progress",progress:65,lessons:6},
  {id:4,title:"Paggamit sang DengueSHIELD App",titleEn:"Using the DengueSHIELD App",desc:"Step-by-step nga pagtudlo sa paggamit sang platform para sa pag-report kag monitoring.",status:"in_progress",progress:40,lessons:4},
  {id:5,title:"Klima kag Dengue",titleEn:"Climate and Dengue",desc:"Paano ang ulan, init, kag humidity nakaapekto sa pagdamo sang lamok kag dengue.",status:"locked",progress:0,lessons:3},
];

export const riskZones = [
  {zone:"Purok 1 (Seaside)",risk:"Critical",score:89,factors:["High container density","Poor drainage","Low KAP scores"],households:342},
  {zone:"Purok 2 (Market Area)",risk:"High",score:72,factors:["Commercial water storage","Tire dumps nearby"],households:287},
  {zone:"Purok 3 (Residential)",risk:"Moderate",score:55,factors:["Mixed compliance","Some standing water"],households:415},
  {zone:"Purok 4 (School Zone)",risk:"Low",score:31,factors:["Active cleanup program","Good drainage"],households:198},
  {zone:"Purok 5 (Interior)",risk:"High",score:68,factors:["Limited access","Natural breeding sites"],households:306},
];

export const communityReports = [
  {id:1,reporter:"Household #127",type:"Breeding Site",location:"Purok 1, near basketball court",date:"2026-10-16",status:"Verified",response:"BHW dispatched, larvae found and eliminated"},
  {id:2,reporter:"Household #089",type:"Suspected Case",location:"Purok 3, Sitio Mabunga",date:"2026-10-15",status:"Referred",response:"Referred to Brgy Health Center; blood test pending"},
  {id:3,reporter:"BHW Ana Lim",type:"Drainage Issue",location:"Purok 5, main road",date:"2026-10-14",status:"Pending",response:"Awaiting LGU engineering response"},
  {id:4,reporter:"Household #203",type:"Breeding Site",location:"Purok 2, behind market",date:"2026-10-13",status:"Resolved",response:"Community cleanup conducted Oct 14"},
  {id:5,reporter:"Task Force Lead",type:"Program Update",location:"Barangay Hall",date:"2026-10-12",status:"Noted",response:"Monthly CBPLA action cycle #4 completed successfully"},
];
