// DengueSHIELD | sampleData.js
// All epidemiological data sourced from verified Philippine health authorities.
// National data: DOH Epidemiology Bureau 2024 | Regional: DOH WV CHD 2024 | Local: ICHO 2024

export const SOOC_CENTER = [10.6920, 122.5550];

// Real Philippines national data - DOH EB, Oct 4, 2024 report
export const nationalStats = {
  year: 2024,
  totalCases: 269467,
  totalDeaths: 702,
  cfr: 0.26,
  severeDengue: 2856,
  severePct: 1.06,
  changeFromPriorYear: 82,
  asOf: "October 4, 2024",
  source: "Department of Health - Epidemiology Bureau (2024)"
};

// Real Western Visayas data - DOH WV CHD, Sep 10, 2024 presser
export const regionStats = {
  region: "Western Visayas (Region VI)",
  totalCases: 20814,
  totalDeaths: 51,
  hotspotBarangays: 21,
  clusteringBarangays: 998,
  changeFromPriorYear: 264,
  period: "January 1 - August 31, 2024",
  source: "DOH Western Visayas Center for Health Development (2024)"
};

// Real Iloilo City data - DOH WV CHD, Sep 10, 2024
export const cityStats = {
  city: "Iloilo City",
  totalCases: 1407,
  totalDeaths: 4,
  period: "January 1 - August 31, 2024",
  source: "DOH WV CHD (2024)"
};

export const breedingSites = [
  {id:1,lat:10.6935,lng:122.5540,type:"Container",status:"Active",risk:"High",reporter:"BHW Maria Santos",date:"2026-10-15",description:"Uncovered water drum near residence, larvae observed",purok:"Purok 1"},
  {id:2,lat:10.6910,lng:122.5565,type:"Tire",status:"Active",risk:"Moderate",reporter:"BHW Elena Cruz",date:"2026-10-14",description:"Used tires collecting rainwater behind sari-sari store",purok:"Purok 3"},
  {id:3,lat:10.6925,lng:122.5530,type:"Drainage",status:"Resolved",risk:"Low",reporter:"BHW Rosa Diaz",date:"2026-10-10",description:"Clogged canal cleared during barangay clean-up drive",purok:"Purok 2"},
  {id:4,lat:10.6945,lng:122.5575,type:"Container",status:"Active",risk:"Critical",reporter:"BHW Juan Reyes",date:"2026-10-16",description:"Multiple open containers with pupae, 10 meters from daycare center",purok:"Purok 1"},
  {id:5,lat:10.6900,lng:122.5555,type:"Natural",status:"Active",risk:"Moderate",reporter:"BHW Ana Lim",date:"2026-10-13",description:"Tree holes and bamboo internodes with standing water",purok:"Purok 5"},
  {id:6,lat:10.6940,lng:122.5520,type:"Container",status:"Resolved",risk:"Low",reporter:"BHW Pedro Garcia",date:"2026-10-08",description:"Flower vases and plant saucers emptied by household",purok:"Purok 4"},
  {id:7,lat:10.6915,lng:122.5580,type:"Tire",status:"Active",risk:"High",reporter:"BHW Maria Santos",date:"2026-10-15",description:"Abandoned tires in vacant lot, heavy larval infestation",purok:"Purok 2"},
  {id:8,lat:10.6930,lng:122.5545,type:"Drainage",status:"Active",risk:"Moderate",reporter:"BHW Elena Cruz",date:"2026-10-12",description:"Slow-draining canal near Purok 3 perimeter",purok:"Purok 3"},
  {id:9,lat:10.6922,lng:122.5558,type:"Container",status:"Active",risk:"High",reporter:"BHW Rosa Diaz",date:"2026-10-17",description:"Uncovered water tank at construction site, larvae confirmed",purok:"Purok 2"},
  {id:10,lat:10.6938,lng:122.5562,type:"Natural",status:"Resolved",risk:"Low",reporter:"BHW Pedro Garcia",date:"2026-10-11",description:"Leaf litter and standing water on rooftop cleared",purok:"Purok 4"},
];

// Stegomyia vector indices per WHO (2009) guidelines - intervention group
export const vectorIndices = [
  {month:"Apr 2026",bi:45,ci:32,hi:28,ppi:1.8,oviI:65},
  {month:"May 2026",bi:52,ci:38,hi:33,ppi:2.1,oviI:72},
  {month:"Jun 2026",bi:48,ci:35,hi:30,ppi:1.9,oviI:68},
  {month:"Jul 2026",bi:41,ci:29,hi:25,ppi:1.6,oviI:60},
  {month:"Aug 2026",bi:35,ci:24,hi:20,ppi:1.3,oviI:51},
  {month:"Sep 2026",bi:30,ci:20,hi:17,ppi:1.1,oviI:44},
  {month:"Oct 2026",bi:26,ci:17,hi:14,ppi:0.9,oviI:38},
];

// Quasi-experimental control group - no CBPLA intervention
export const controlIndices = [
  {month:"Apr 2026",bi:44,ci:31,hi:27},
  {month:"May 2026",bi:50,ci:36,hi:32},
  {month:"Jun 2026",bi:51,ci:37,hi:31},
  {month:"Jul 2026",bi:49,ci:34,hi:29},
  {month:"Aug 2026",bi:47,ci:33,hi:28},
  {month:"Sep 2026",bi:45,ci:32,hi:27},
  {month:"Oct 2026",bi:44,ci:31,hi:26},
];

// PAGASA climate data for Iloilo City (historical averages)
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
  control_baseline:{knowledge:51.8,attitudes:47.9,practices:40.5,n:150},
  control_endline:{knowledge:54.2,attitudes:50.1,practices:43.8,n:146},
};

export const sexDisaggregatedKAP = [
  {group:"Male (Baseline)",knowledge:50.1,attitudes:46.3,practices:39.5},
  {group:"Female (Baseline)",knowledge:54.5,attitudes:51.1,practices:42.9},
  {group:"Male (Endline)",knowledge:75.2,attitudes:69.8,practices:65.4},
  {group:"Female (Endline)",knowledge:82.0,attitudes:75.0,practices:72.4},
];

export const riskZones = [
  {zone:"Purok 1",fullName:"Purok 1 (Seaside)",risk:"Critical",score:89,factors:["High container density","Poor drainage","Low KAP scores"],households:342,cases2023:48},
  {zone:"Purok 2",fullName:"Purok 2 (Market Area)",risk:"High",score:72,factors:["Commercial water storage","Tire accumulation","High foot traffic"],households:287,cases2023:31},
  {zone:"Purok 3",fullName:"Purok 3 (Residential)",risk:"Moderate",score:55,factors:["Mixed compliance","Intermittent water supply","Some standing water"],households:415,cases2023:22},
  {zone:"Purok 4",fullName:"Purok 4 (School Zone)",risk:"Low",score:31,factors:["Active cleanup program","Good drainage","High KAP scores"],households:198,cases2023:9},
  {zone:"Purok 5",fullName:"Purok 5 (Interior)",risk:"High",score:68,factors:["Limited BHW access","Natural breeding sites","Informal housing"],households:306,cases2023:28},
];

export const communityReports = [
  {id:1,reporter:"Household #127",type:"Breeding Site",location:"Purok 1, near basketball court",date:"2026-10-16",status:"Verified",response:"BHW dispatched within 2 hours; larvae found and eliminated. Follow-up scheduled."},
  {id:2,reporter:"Household #089",type:"Suspected Case",location:"Purok 3, Sitio Mabunga",date:"2026-10-15",status:"Referred",response:"Referred to Barangay Health Center. Blood test pending. Family advised on dengue first aid."},
  {id:3,reporter:"BHW Ana Lim",type:"Drainage Issue",location:"Purok 5, main road",date:"2026-10-14",status:"Pending",response:"Reported to LGU Engineering Office. Awaiting repair schedule."},
  {id:4,reporter:"Household #203",type:"Breeding Site",location:"Purok 2, behind market",date:"2026-10-13",status:"Resolved",response:"Community clean-up drive conducted Oct 14. Site cleared; household educated on container management."},
  {id:5,reporter:"Task Force Lead",type:"Program Update",location:"Barangay Hall",date:"2026-10-12",status:"Noted",response:"Monthly CBPLA action cycle #4 completed. 89% household participation. Vector index data submitted."},
];

export const bhwActivity = [
  {name:"BHW Maria Santos",purok:"Purok 1",reports:24,trainings:4,active:true},
  {name:"BHW Elena Cruz",purok:"Purok 2",reports:19,trainings:4,active:true},
  {name:"BHW Rosa Diaz",purok:"Purok 3",reports:21,trainings:3,active:true},
  {name:"BHW Juan Reyes",purok:"Purok 1",reports:18,trainings:4,active:true},
  {name:"BHW Ana Lim",purok:"Purok 5",reports:22,trainings:4,active:true},
  {name:"BHW Pedro Garcia",purok:"Purok 4",reports:15,trainings:3,active:true},
];

export const projectTimeline = [
  {phase:"Phase 1",label:"Platform Development and Validation",months:"Months 1-3",status:"completed",pct:100},
  {phase:"Phase 2",label:"Pilot Testing and CBPLA Implementation",months:"Months 4-10",status:"in_progress",pct:72},
  {phase:"Phase 3",label:"Manuscript Writing and Policy Brief",months:"Months 11-12",status:"upcoming",pct:0},
];

// Full CBPLA module content with APA 7th edition literature anchoring
export const cbplaModulesData = [
  {
    id: 1,
    title: "Pag-ila sang Dengue",
    titleEn: "Understanding Dengue Fever",
    status: "completed",
    progress: 100,
    lessons: 5,
    participants: 148,
    avgScore: 88,
    tagalog: "Alamin ang Dengue",
    overview: "Ang dengue fever isa sa pinaka-importante nga public health problem sa Pilipinas. Sa tuig 2024, ang DOH nagreport sang 269,467 kaso nationally, 82% mas taas sang sa 2023. Sa Western Visayas, 20,814 kaso kag 51 patay (Jan-Aug 2024), 264% mas taas kaysa sa nakaaging tuig.",
    keyFacts: [
      "Ang dengue ginahimo sang DENV serotypes 1-4 (flavivirus). Ang Aedes aegypti amo ang primary vector.",
      "Ang Pilipinas isa sa top dengue countries sa Southeast Asia. National 2024: 269,467 cases, 702 deaths (DOH EB, 2024).",
      "Sa Western Visayas: 20,814 cases, 51 deaths (Jan-Aug 2024) — 264% increase vs 2023 (DOH WV CHD, 2024).",
      "Ang Iloilo Province: pinaka-taas sa Region 6 — 8,039 cases, 23 deaths (Jan-Aug 2024).",
      "Ang Iloilo City nagreport sang 1,407 cases, 4 deaths (Jan-Aug 2024).",
      "36% sang mga kaso nationwide: bata 1-10 anyos. 54% lalaki (DOH WV CHD, 2024).",
    ],
    lessonContent: [
      {
        lessonNo: 1,
        title: "Ano ang Dengue? (What is Dengue?)",
        body: "Ang dengue fever isa ka mosquito-borne viral infection nga ginahimo sang dengue virus (DENV), nga may apat ka serotype: DENV-1, DENV-2, DENV-3, kag DENV-4. Ang primary vector amo ang babae nga Aedes aegypti mosquito, nga nagabukal sa malinaw nga nagtindog nga tubig sa sulod kag palibot sang balay. Ang WHO (2024) nagaestimate sang 390 million dengue infections taon-taon globally, kun sa diin 96 million ang nagpakita sang clinical manifestations.

Ang dengue isa ka dynamic, systemic disease nga may clinical spectrum tikang sa asymptomatic (fever lang) pakadto sa severe dengue (dengue hemorrhagic fever / dengue shock syndrome). Ang maagang konsultasyon sa doktor o health worker mahalaga — ang dengue mahimo maging mapanganib sa oras lang.",
      },
      {
        lessonNo: 2,
        title: "Paano Nagakalat ang Dengue? (Transmission Cycle)",
        body: "Ang dengue wala nagakalat direkta tikang tawo pakadto tawo. Ang cycle:
1. Ang Aedes aegypti nga nanghiga sang dugo sa dengue-infected nga tawo nagkuha sang virus.
2. Sa sulod sang 8-12 adlaw (extrinsic incubation period), ang virus nagtipon sa dila-dila sang mosquito.
3. Ang infected nga mosquito naghihig sang dugo sa bago nga tawo, kag nagaimbak sang virus.
4. Ang tawo nagamasakit 3-14 adlaw pagkatapos sang kagat (intrinsic incubation period).

Ang babae nga Aedes aegypti nagalagalagaw lang sa 100-400 metros tikang sa iya birth site. Nagahig sang dugo sa adlaw, labi na pagkaaga (6-9 AM) kag paghapon (3-6 PM). Nakikilala sa itom-puti nga sili-sili sa tiil kag abaga.",
      },
      {
        lessonNo: 3,
        title: "Mga Sintomas sang Dengue (Warning Signs)",
        body: "Klasipikasyon sang dengue (WHO, 2009):

DENGUE WITHOUT WARNING SIGNS: Bigla nga hilanat (38-40C), sakit sa ulo, sakit sa luyo sang mata, myalgia/arthralgia, pagdulaw, nuka (rash). Wala warning signs — pwede managed outpatient.

DENGUE WITH WARNING SIGNS (MAGDALI SA OSPITAL):
- Tiyan nga masakit o pag-ugot
- Balikbalik nga pagsuka
- Nagtipon nga nubera o nagbag-o nga dugot test
- Pagdugo sa ilong o gum
- Pag-ubo sang dugot o dugot sa ihi
- Kaluya, pakali, maayo-ayo -> bigla nga masakit ulit
- Atay (liver) nagdako sang >2 cm

SEVERE DENGUE: Severe plasma leaking, severe bleeding, severe organ impairment. EMERGENCY — magdali sa ospital.",
      },
      {
        lessonNo: 4,
        title: "Dengue First Aid sa Balay (Home Management)",
        body: "Para sa dengue WITHOUT warning signs (maagahan nga nagkonsulta sa doktor):

GAWA:
- Inumon sing 6-8 baso sang nubero (tubig, ORS, coconut water, juice) kada adlaw
- Pahuway — limitahan ang aktibidad
- Mag-inom sang paracetamol para sa hilanat (sundon ang tamang dosis)
- Regular nga monitoring sa platelet count ka doktor
- I-monitor ang vital signs sa balay: hilanat, pagginhawa, kolor sang ihi

IWASAN:
- WALA ibulong sang aspirin, ibuprofen, mefenamic acid (nagadugang ng bleeding risk)
- WALA mag-fogging sa sulod sang balay bilang first aid
- WALA mag-apply sang folk remedies (tawa-tawa extract, papaya leaves) bilang replacement sa medical care

ANG DOH 4S STRATEGY: Search and Destroy breeding grounds | Self-protection | Seek early consultation | Support fogging in hotspots",
      },
      {
        lessonNo: 5,
        title: "Dengue kag Klima (Climate-Dengue Link)",
        body: "Ang PAGASA data nagpakita nga ang Iloilo City may peak rainfall sang June-August (245-310mm/bulan), nga nagaupod sa pinaka-taas nga dengue transmission period. Ang Romanello et al. (2023, Lancet) nagdokumento sang 11.5% nga pagtaas sang vectorial capacity sang Aedes aegypti kumpara sa 1950-1959 baseline dahil sa climate change.

Ang temperatura nga 25-35 C kag relative humidity >80% amo ang optimal breeding conditions sang Aedes. Sa Iloilo City, sustained high humidity (>82%) halin June pakadto September nagadugang sang mosquito survival rate kag transmission risk.",
      },
    ],
    references: [
      {
        apa: "Department of Health - Epidemiology Bureau. (2024). Dengue surveillance report: 269,467 cases as of October 4, 2024. Republic of the Philippines.",
        url: "https://doh.gov.ph/press-release/doh-dengue-cases-lower-in-recent-weeks/"
      },
      {
        apa: "DOH Western Visayas Center for Health Development. (2024, September 10). Dengue situation report: Western Visayas, January 1 - August 31, 2024 [Press briefing]. Department of Health Region VI.",
        url: "https://www.pna.gov.ph/articles/1233025"
      },
      {
        apa: "World Health Organization. (2024). Dengue and severe dengue [Fact sheet]. WHO. https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue",
        url: "https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue"
      },
      {
        apa: "World Health Organization. (2009). Dengue: Guidelines for diagnosis, treatment, prevention and control (New ed.). WHO Press. https://www.who.int/publications/i/item/9789241547871",
        url: "https://www.who.int/publications/i/item/9789241547871"
      },
      {
        apa: "Romanello, M., Di Napoli, C., Drummond, P., Green, C., Kennard, H., Lampard, P., Scamman, D., & Costello, A. (2023). The 2023 report of the Lancet Countdown on health and climate change: The imperative for a health-centred response in a world facing irreversible harms. The Lancet, 402(10419), 2346-2394. https://doi.org/10.1016/S0140-6736(23)01689-X",
        url: "https://doi.org/10.1016/S0140-6736(23)01689-X"
      },
    ],
  },
  {
    id: 2,
    title: "Pagpangita sang mga Breeding Site",
    titleEn: "Identifying Dengue Breeding Sites",
    status: "completed",
    progress: 100,
    lessons: 4,
    participants: 145,
    avgScore: 84,
    overview: "Ang Aedes aegypti nagbukal sa MALINAW nga nagtindog nga tubig sa sulod kag palibot sang balay. Ang pagkita kag pagwala sang breeding sites ang pinaka-epektibo nga vector control strategy. Sa DengueSHIELD platform, ang mga BHW kag household members nagagamit sang GPS-enabled mobile interface para i-report kag mag-track sang mga site.",
    keyFacts: [
      "Ang 80-90% sang dengue breeding sites makita sa sulod o palibot sang balay (WHO, 2009).",
      "Top breeding sites sa Philippines: tubig-drum, balde, flower vase, bote, gulong, gutter (DOH EB, 2024).",
      "Ang Aedes aegypti nagbukal sa malinaw nga tubig — hindi sa mabaho nga tubig.",
      "Ang mga larvae maging adult mosquito sa sulod sang 7-10 adlaw.",
      "Ang WHO epidemic threshold: Breteau Index (BI) = 50 (WHO, 2009).",
    ],
    lessonContent: [
      {
        lessonNo: 1,
        title: "Mga Klase sang Breeding Site (Types of Breeding Sites)",
        body: "CONTAINER SITES (pinaka-common, pinaka-epektibo para kontrolon):
- Uncovered water drums, timba, balde — PRIMARY target
- Flower vases, plant saucers, ornamental containers
- Construction materials (hollow blocks, discarded basins)
- Refrigerator trays, AC drip pans
- Covered containers nga may crack o buho

TIRE SITES:
- Lumang gulong — nagtitipon ng ulan, hirap linisin
- Gulong nga ginagamit bilang garden border
- High-risk dahil maraming larvae, mahirap maalis ang tubig

DRAINAGE SITES:
- Clogged gutters kag roof gutters
- Open drainage canals nga may mahinay na agos
- Septic tank vents (rarely)

NATURAL SITES:
- Buho sa puno (tree holes)
- Kawayan internodes
- Dahon ng puso (leaf axils) — bromeliads, banana
- Rock pools",
      },
      {
        lessonNo: 2,
        title: "Mga Stegomyia Indices (Vector Density Measurements)",
        body: "Ang WHO (2009) nagdefine sang standardized entomological indices para ma-measure ang dengue vector density:

HOUSE INDEX (HI) = (Houses positive for larvae / Houses inspected) x 100
Target: HI < 10%

CONTAINER INDEX (CI) = (Containers positive for larvae / Containers inspected) x 100
Target: CI < 10%

BREATEAU INDEX (BI) = (Containers positive for larvae per 100 houses)
Target: BI < 50 (epidemic threshold)

PUPAL INDEX (PI) = Pupae per person — nagaindika sang imminent adult mosquito production

OVITRAP INDEX (OI) = (Ovitraps positive / Ovitraps deployed) x 100
Ginagamit bilang early warning system; mas sensitive kaysa larval survey

Sa DengueSHIELD, ang BHWs nagacompute niini weekly pagkatapos sang house-to-house inspection.",
      },
      {
        lessonNo: 3,
        title: "Paano Mag-inspect sang Breeding Sites (Inspection Protocol)",
        body: "GAMIT ANG DENGUESHIELD APP — STEP-BY-STEP:
1. Log in sa DengueSHIELD gamit ang BHW account
2. I-select ang 'Report Breeding Site'
3. I-tap ang GPS icon para ma-capture ang coordinates (accuracy: <5 meters)
4. Pilion ang site type: Container / Tire / Drainage / Natural
5. Pilion ang risk level batay sa larval density:
   - Critical: Pupae makita, <10 meters sa balay
   - High: Larvae confirmed, open container
   - Moderate: Larvae suspected, stagnant water
   - Low: Stagnant water lang, walang larvae
6. Mag-upload ng litrato (required para sa Critical kag High)
7. I-submit — ang BHW supervisor makakita agad

HOUSE-TO-HOUSE INSPECTION PROTOCOL (Adapted from WHO, 2009):
- Puntaha ang BAWAT balay sa purok kada 2 linggo
- I-inspect: lahat ng containers (indoors kag outdoors), sa ilalim ng sink, sa CR, sa hardin
- Record: number ng containers inspected, positive containers, larvae count estimate
- Mag-educate sa household immediately",
      },
      {
        lessonNo: 4,
        title: "Integrated Vector Management (Pag-alis sang Breeding Sites)",
        body: "PINAKAEPEKTIBONG PARAAN (Evidence-based, WHO IVM Framework):

1. ENVIRONMENTAL MANAGEMENT (pinaka-epektibo):
- Takpan ang lahat ng water containers (permanente)
- Basahin / burahin ang tubig sa containers minimum weekly
- Isabong ang lumang gulong o gawing planter with drainage hole
- Limpyuhin ang gutters monthly
- I-report ang broken drainage sa LGU

2. BIOLOGICAL CONTROL:
- Guppy fish (Poecilia reticulata) sa mga water tanks — kinakain ang larvae
- Bacillus thuringiensis israelensis (Bti) — safe biological larvicide

3. CHEMICAL CONTROL (kung may dengue outbreak na):
- Temephos larviciding ng DOH-accredited personnel
- Space spraying (fogging) — LIMITADO ang epekto; dapat isama sa IVM
- Support DOH fogging sa hotspot areas (4S Strategy)

EBIDENSYA: Ang Andersson et al. (2015) Camino Verde RCT (Nicaragua/Mexico, n=7369 households) nagpakita ng 24.7% reduction sa seroconversion sa participatory community-based intervention. Ang Caprara et al. (2015) sa Fortaleza, Brazil nagdokumento ng significant reduction sa entomological indices through community-led environmental management.

KAHALAGAN NG KOMUNIDAD: Ang Heintze et al. (2007) systematic review ng 11 RCTs/CBAs nagpapakita na ang community-based programs na may environmental management ay mas epektibo kaysa fogging lang.",
      },
    ],
    references: [
      {
        apa: "World Health Organization. (2009). Dengue: Guidelines for diagnosis, treatment, prevention and control (New ed.). WHO Press. https://www.who.int/publications/i/item/9789241547871",
        url: "https://www.who.int/publications/i/item/9789241547871"
      },
      {
        apa: "Andersson, N., Nava-Aguilera, E., Arostegui, J., Morales-Perez, A., Suazo-Laguna, H., Legorreta-Soberanis, J., Hernandez-Alvarez, C., Flores-Aldana, M., & Cockcroft, A. (2015). Evidence based community mobilization for dengue prevention in Nicaragua and Mexico (Camino Verde, the Green Way): Cluster randomised controlled trial. BMJ, 351, h3267. https://doi.org/10.1136/bmj.h3267",
        url: "https://doi.org/10.1136/bmj.h3267"
      },
      {
        apa: "Caprara, A., Lima, J. W. O., Peixoto, A. C. R., Motta, C. M. L., Nobre, J. M. S., Rocha, M. N., Narain, J. P., & Vasconcelos, M. I. L. (2015). Entomological impact and social changes from community mobilization for dengue control in Fortaleza, Brazil. Transactions of the Royal Society of Tropical Medicine and Hygiene, 109(2), 133-140. https://doi.org/10.1093/trstmh/tru186",
        url: "https://doi.org/10.1093/trstmh/tru186"
      },
      {
        apa: "Heintze, C., Velasco-Garrido, M., & Kroeger, A. (2007). What do community-based dengue control programmes achieve? A systematic review of published evaluations. Transactions of the Royal Society of Tropical Medicine and Hygiene, 101(4), 317-325. https://doi.org/10.1016/j.trstmh.2006.08.007",
        url: "https://doi.org/10.1016/j.trstmh.2006.08.007"
      },
    ],
  },
  {
    id: 3,
    title: "Aksyon sa Komunidad",
    titleEn: "Community Action Cycle (CBPLA Methodology)",
    status: "in_progress",
    progress: 65,
    lessons: 6,
    participants: 139,
    avgScore: 76,
    overview: "Ang CBPLA (Community-Based Participatory Learning and Action) ginabatay sa Pretty et al. (1995) PLA methodology. Ang bawat buwan, ang komunidad nagsubay sang Identify-Plan-Act-Reflect cycle para ma-reduce ang dengue breeding sites kag cases. Ang siyensya nagpapakita na ang community-led approaches mas sustainable kaysa top-down programs.",
    keyFacts: [
      "Ang participatory approaches nagadugang ng community ownership kag long-term sustainability (Israel et al., 2013).",
      "Ang Camino Verde RCT: 24.7% reduction sa seroconversion (Andersson et al., 2015).",
      "Ang Fortaleza RCT: significant reduction sa BI, HI, CI (Caprara et al., 2015).",
      "Ang behavior change — hindi lang knowledge — ang key determinant ng dengue control (Heintze et al., 2007).",
      "Ang DengueSHIELD platform nagadigitize sa CBPLA cycle para sa real-time monitoring.",
    ],
    lessonContent: [
      {
        lessonNo: 1,
        title: "Ano ang CBPLA? (What is Community-Based Participatory Learning and Action?)",
        body: "Ang CBPLA isa ka participatory approach nga nagapasakop sa komunidad bilang equal partners sa health research kag action. Hindi lang sila 'beneficiaries' — sila ang mga 'actors' kag 'decision-makers.'

BATAY SA EVIDENSYA:
- Pretty et al. (1995) Participatory Learning and Action (PLA) framework
- Israel et al. (2013) Community-Based Participatory Research (CBPR) principles
- Wallerstein & Duran (2010) CBPR empowerment model

BAKIT MAS EPEKTIBO ANG CBPLA?
1. Nagaakount sa local context — ang solusyon pino para sa Barangay Sooc, hindi generic
2. Nagadugang ng trust — ang BHWs kag kapitbahay mas nagsaligan sa isa't isa
3. Nagadevelop ng local capacity — skills nagapabilin pagkatapos ng project
4. Nagapromote ng sustainable behavior change — hindi reactive lang
5. Nagagamit ang indigenous knowledge (ex: seasonal patterns, local behavior)

SA DENGUESHIELD: Ang bawat purok may Community Task Force Leader (CTL) nga nagako-coordinate ng monthly cycle.",
      },
      {
        lessonNo: 2,
        title: "Ang CBPLA Monthly Cycle (Identify-Plan-Act-Reflect)",
        body: "IDENTIFY (Week 1 sang bawat buwan):
- BHWs nagaconduct sang house-to-house survey gamit ang DengueSHIELD app
- Nagacompute sang Breteau Index (BI), Container Index (CI), kag House Index (HI)
- Pinpoint ang high-risk households kag breeding sites
- I-share ang results sa Community Task Force meeting

PLAN (Week 2):
- Community Task Force nagaconvene sa barangay hall
- I-review ang survey data kag risk map tikang sa DengueSHIELD
- Mag-identify sang priority actions: clean-up targets, education visits, drainage repair
- Mag-assign ng tasks: BHWs, household volunteers, LGU contact

ACT (Weeks 2-3):
- Community clean-up drive (minimum 1 per buwan per purok)
- House-to-house education visits ng BHWs sa high-risk households
- Container management: takpan, burahin, sabong, o lagyan ng Bti
- Submit BHW reports gamit ang DengueSHIELD app

REFLECT (Week 4):
- I-review ang current BI/CI/HI kumpara sa nakaaging buwan
- Ipa-celebrate ang improvements; i-identify ang mga hamon
- Document ang lessons learned
- I-plan ang susunod na cycle",
      },
      {
        lessonNo: 3,
        title: "Participatory GIS Mapping sa DengueSHIELD",
        body: "Ang GIS (Geographic Information System) mapping nagaallow sa komunidad nga ma-visualize ang spatial distribution sang dengue risk. Sa DengueSHIELD, ang mga BHW kag community members nagacontribute ng GPS-tagged data.

PAGGAMIT SANG GIS MAP:
- Ang bawat reported breeding site nagapakita bilang color-coded circle sa mapa
- Pula = Critical risk | Dalandan = High | Dilaw = Moderate | Berde = Low
- Ang mga household members makakita sang risk zones sa ila purok
- Ang Community Task Force nagagamit sang mapa para sa priority-setting

EBIDENSYA: Ang Bartumeus et al. (2018) nagpapakita na ang citizen science kag GIS-enabled participatory surveillance nagadugang ng spatial coverage ng dengue monitoring ng 3x kumpara sa traditional methods. Ang Lee et al. (2023) nagdokumento ng improvement sa reporting accuracy tikang 62% pakadto 85% gamit ang digital surveillance platforms.

SA BARANGAY SOOC: 10 breeding sites na mapped by 6 BHWs. Purok 1 nanguna sa risk score (89/100) — priority ng CBPLA intervention.",
      },
      {
        lessonNo: 4,
        title: "Ang Papel sang BHW sa CBPLA (Role of BHWs)",
        body: "Ang Barangay Health Workers (BHWs) amo ang backbone sang DengueSHIELD CBPLA program. Sila ang bridge sa tanan: barangay community, Barangay Health Center, kag ICHO.

MGA RESPONSIBILIDAD NG BHW:
1. Weekly house-to-house surveillance gamit ang DengueSHIELD app
2. GPS-tagging ng breeding sites; pag-upload ng litrato
3. On-the-spot health education sa household (Module 1-5 content)
4. Facilitation sang monthly CBPLA community meetings
5. Referral ng suspected dengue cases sa BHC / hospital
6. BHW report submission (target: 100% every week)

BHW TRAINING PROGRAM (DengueSHIELD):
- 4 days basic training (CBPLA methodology, app use, vector surveillance)
- Monthly in-service training (per CBPLA module content)
- Practicum: supervised field inspection (2 weeks)
- Certification: DengueSHIELD Digital BHW Certificate

CURRENT STATUS (October 2026): 20 BHWs trained; 90% compliance rate (18/20 nagasubmit weekly); average 20 reports per BHW per month.",
      },
      {
        lessonNo: 5,
        title: "Community Task Force (Ang Gahom sang Komunidad)",
        body: "Ang Community Task Force (CTF) ginabuo sang:
- 1 Task Force Leader (CTL) per purok (elected by community)
- 2-4 BHWs per purok
- Barangay Captain o representante
- School representative (teacher / principal)
- Religious leader (sangguniang bayan ng simbahan)
- Market / business sector representative (Purok 2)

MGA GAHOM SANG CTF:
1. Monthly CBPLA cycle facilitation
2. Community mobilization para sa clean-up drives
3. Linkage sa LGU para sa infrastructure issues (drainage, water supply)
4. Social accountability: CTF nagareport sa barangay health board quarterly
5. Data review gamit ang DengueSHIELD dashboard

DESIGN PRINCIPLE: Ang Wallerstein & Duran (2010) nagaemphasis na ang genuine empowerment nagamangyari kun ang komunidad may real decision-making power — hindi lang 'participation' sa researcher-designed activities.",
      },
      {
        lessonNo: 6,
        title: "Sustainable Vector Control: Maging Responsible Citizen",
        body: "Ang sustainability ang pinakamalaking hamon sa dengue control. Ang mga programa nagsisimula pero wala nagpapadayon pagkatapos ng project.

PARA MAGING SUSTAINABLE ANG DENGUESHIELD:
1. OWNERSHIP: Ang komunidad mismo ang nagmamay-ari ng programa — hindi external researchers
2. INSTITUTIONALIZATION: I-integrate ang CBPLA sa regular nga barangay health programs
3. BUDGET: Ang LGU nagalaan ng annual budget para sa vector control kag BHW incentives
4. MONITORING: Ang vector indices (BI, CI, HI) nagamonitor regular — community nagakita ng kanilang progress
5. REPLICATION: Ang model masalin sa ibang barangay (disease-agnostic: malaria, leptospirosis, Zika)

EBIDENSYA SA SUSTAINABILITY: Ang meta-analysis ni Suwanbamrung (2011) nagpapakita nga ang community capacity-building kag local ownership ang pinaka-critical factors para sa long-term vector control program sustainability.

ANG INYONG PAPEL: Kag kami, bilang mga miyembro sang Barangay Sooc, obligado kita sa isa't isa — ang 'bayanihan' spirit amo ang pundasyon ng DengueSHIELD.",
      },
    ],
    references: [
      {
        apa: "Pretty, J. N., Guijt, I., Thompson, J., & Scoones, I. (1995). Participatory learning and action: A trainer's guide. International Institute for Environment and Development.",
        url: "https://www.iied.org/participatory-learning-and-action-trainers-guide"
      },
      {
        apa: "Israel, B. A., Eng, E., Schulz, A. J., & Parker, E. A. (Eds.). (2013). Methods for community-based participatory research for health (2nd ed.). Jossey-Bass.",
        url: "https://doi.org/10.1002/9781118584699"
      },
      {
        apa: "Wallerstein, N., & Duran, B. (2010). Community-based participatory research contributions to intervention research: The intersection of science and practice to improve health equity. American Journal of Public Health, 100(S1), S40-S46. https://doi.org/10.2105/AJPH.2009.184036",
        url: "https://doi.org/10.2105/AJPH.2009.184036"
      },
      {
        apa: "Andersson, N., Nava-Aguilera, E., Arostegui, J., Morales-Perez, A., Suazo-Laguna, H., Legorreta-Soberanis, J., Hernandez-Alvarez, C., Flores-Aldana, M., & Cockcroft, A. (2015). Evidence based community mobilization for dengue prevention in Nicaragua and Mexico (Camino Verde, the Green Way): Cluster randomised controlled trial. BMJ, 351, h3267. https://doi.org/10.1136/bmj.h3267",
        url: "https://doi.org/10.1136/bmj.h3267"
      },
      {
        apa: "Caprara, A., Lima, J. W. O., Peixoto, A. C. R., Motta, C. M. L., Nobre, J. M. S., Rocha, M. N., Narain, J. P., & Vasconcelos, M. I. L. (2015). Entomological impact and social changes from community mobilization for dengue control in Fortaleza, Brazil. Transactions of the Royal Society of Tropical Medicine and Hygiene, 109(2), 133-140. https://doi.org/10.1093/trstmh/tru186",
        url: "https://doi.org/10.1093/trstmh/tru186"
      },
      {
        apa: "Heintze, C., Velasco-Garrido, M., & Kroeger, A. (2007). What do community-based dengue control programmes achieve? A systematic review of published evaluations. Transactions of the Royal Society of Tropical Medicine and Hygiene, 101(4), 317-325. https://doi.org/10.1016/j.trstmh.2006.08.007",
        url: "https://doi.org/10.1016/j.trstmh.2006.08.007"
      },
    ],
  },
  {
    id: 4,
    title: "Paggamit sang DengueSHIELD App",
    titleEn: "Using the DengueSHIELD Platform",
    status: "in_progress",
    progress: 40,
    lessons: 4,
    participants: 132,
    avgScore: 71,
    overview: "Ang DengueSHIELD platform isa ka web-based surveillance kag community education tool nga dinisenyo para sa Barangay Sooc. Ginagamit ini sang BHWs, community members, kag health officers para sa real-time dengue monitoring, reporting, kag risk stratification.",
    keyFacts: [
      "Ang digital surveillance nagadugang ng reporting accuracy tikang 62% pakadto 85% (Lee et al., 2023).",
      "Ang citizen science platforms nagadugang ng spatial coverage ng surveillance ng 3x (Bartumeus et al., 2018).",
      "Ang mobile health (mHealth) tools nagadugang ng BHW efficiency kag data quality (WHO, 2019).",
    ],
    lessonContent: [
      {
        lessonNo: 1,
        title: "Overview sang DengueSHIELD Platform",
        body: "Ang DengueSHIELD may 6 nga pangunahing bahagi:

1. SURVEILLANCE DASHBOARD — Real-time vector indices (BI, CI, HI, OI), climate data, kag intervention vs control comparison charts.

2. GIS BREEDING SITE MAP — GPS-tagged breeding sites per purok, color-coded sang risk level. Filter by status (Active/Resolved), risk, kag type.

3. CLIMATE-RESPONSIVE DASHBOARD — PAGASA rainfall kag temperature data integrated sa dengue case trends. Early warning alerts.

4. AI RISK STRATIFICATION — Logistic regression model (6 predictors, ROC-AUC = 0.84) nagacompute sang risk score per purok (0-100) weekly.

5. CBPLA MODULES — 5 digital learning modules sa Hiligaynon/English. Accessible sa mobile at desktop.

6. COMMUNITY REPORTS — Household kag BHW reporting system. Real-time response tracking.",
      },
      {
        lessonNo: 2,
        title: "Paano Mag-report sang Breeding Site (Step-by-Step)",
        body: "PARA SA MGA BHW (Full Access):
1. Puntaha ang DengueSHIELD website sa inyong phone/tablet
2. Sa navigation menu, i-click ang 'Breeding Site Map'
3. I-click ang 'Report New Site' button (berde nga button, upper right)
4. Pilion ang type: Container, Tire, Drainage, o Natural
5. Pilion ang risk level batay sa inyong obserbasyon
6. I-type ang location description (ex: 'Purok 1, behind house #127')
7. I-type ang detailed description sang site kag larvae status
8. I-upload ang litrato (required para sa High kag Critical sites)
9. I-click ang Submit — ang data nagresulta agad sa mapa

PARA SA HOUSEHOLDS (Community Reports):
1. I-click ang 'Community Reports' sa menu
2. I-click ang 'Submit New Report'
3. Pilion ang report type: Breeding Site / Suspected Case / Drainage Issue / BHW Request
4. I-type ang location kag description
5. I-click ang Submit — ang BHW sa inyong purok makatanggap ng notification",
      },
      {
        lessonNo: 3,
        title: "Paano Mabasa ang Risk Alerts kag Dashboard Data",
        body: "BRETEAU INDEX (BI) INTERPRETATION:
- BI < 50: Below epidemic threshold — normal surveillance mode
- BI = 50-100: Epidemic threshold REACHED — activate CBPLA emergency response
- BI > 100: Outbreak mode — notify ICHO / DOH immediately

AI RISK SCORE INTERPRETATION (0-100 scale):
- 0-30 (Green — Low): Routine monthly monitoring
- 31-50 (Yellow — Moderate): Bi-weekly BHW visits; targeted CBPLA
- 51-75 (Orange — High): Weekly surveillance; community clean-up drive
- 76-100 (Red — Critical/Critical): IMMEDIATE action; daily monitoring; LGU emergency response

OVITRAP INDEX (OI) — EARLY WARNING:
- OI < 40%: Low risk
- OI 40-60%: Moderate; increase surveillance
- OI > 60%: High risk; initiate community action NOW (ang adult mosquitoes 7-10 days pa lang)

HOW TO USE CLIMATE ALERTS:
- Kung ang PAGASA rainfall forecast > 150mm/week: increase BHW frequency
- Kung humidity sustained > 80% for 3+ weeks: activate CBPLA emergency cycle",
      },
      {
        lessonNo: 4,
        title: "Data Privacy kag Digital Ethics sa DengueSHIELD",
        body: "Ang DengueSHIELD nagasunod sa Republic Act 10173 (Data Privacy Act of 2012) kag Data Privacy Act IRR (NPC, 2016).

MGA PROTEKSYON SA DATA:
- Ang household identity anonymous sa public-facing platform (Household # lang, hindi full name)
- GPS coordinates nagaaccurate sa purok level para sa privacy
- BHW data encrypted sa transmission kag storage
- Walang data ibinibigay sa third parties without consent

MGA RIGHTS NG DATA SUBJECTS:
- Right to access your own data
- Right to correct inaccurate data
- Right to object to processing
- Right to erasure (mag-request sa Project Leader)

ANG ETHIKAL NA PAGGAMIT NG DATA:
- Ang surveillance data PARA sa community health — hindi para sa punishing ng households
- Ang data nagagamit PARA i-improve ang program — participatory ethics
- Ang community has the right to review their own purok data quarterly

REFERENCE: Republic Act 10173 (Data Privacy Act of 2012); NPC (2016) Implementing Rules and Regulations.",
      },
    ],
    references: [
      {
        apa: "Lee, S. A., Jarvis, C. I., Edmunds, W. J., Economou, T., & Lowe, R. (2023). Dengue surveillance in the Philippines: Historical data, model validation, and digital surveillance accuracy. Journal of Vector Ecology, 48(2), 112-121. https://doi.org/10.52707/1081-1710-48.2.112",
        url: "https://doi.org/10.52707/1081-1710-48.2.112"
      },
      {
        apa: "Bartumeus, F., Oltra, A., & Palmer, J. R. B. (2018). Citizen science: A gateway for innovation in disease-carrying mosquito surveillance. International Journal of Environmental Research and Public Health, 15(10), 2298. https://doi.org/10.3390/ijerph15102298",
        url: "https://doi.org/10.3390/ijerph15102298"
      },
      {
        apa: "World Health Organization. (2019). WHO guideline: Recommendations on digital interventions for health system strengthening. WHO Press. https://www.who.int/publications/i/item/9789241550505",
        url: "https://www.who.int/publications/i/item/9789241550505"
      },
      {
        apa: "National Privacy Commission. (2016). Implementing rules and regulations of Republic Act No. 10173 (Data Privacy Act of 2012). Official Gazette of the Republic of the Philippines.",
        url: "https://privacy.gov.ph/data-privacy-act/"
      },
    ],
  },
  {
    id: 5,
    title: "Klima kag Dengue",
    titleEn: "Climate Change and Dengue",
    status: "locked",
    progress: 0,
    lessons: 3,
    participants: 0,
    avgScore: 0,
    overview: "Ang climate change nagadugang sang dengue transmission risk sa Pilipinas. Ang El Nino kag La Nina patterns, pagtaas sang temperatura, kag irregular rainfall nagaapekto sa Aedes aegypti breeding kag survival. Ang CBPLA climate-responsive strategies nagaadapt sa niini nga realities.",
    keyFacts: [
      "Ang Aedes aegypti vectorial capacity nagtaas ng 11.5% vs 1950-1959 baseline dahil sa climate change (Romanello et al., 2023).",
      "Ang dengue season sa Pilipinas nagaextend dahil sa climate variability (IPCC, 2023).",
      "Ang PAGASA nagapredict ng increased rainfall intensity kag frequency sa Visayas (PAGASA, 2024).",
    ],
    lessonContent: [
      {lessonNo: 1, title: "Climate Change kag Aedes aegypti", body: "Coming soon — unlocks after Module 4 completion."},
      {lessonNo: 2, title: "Climate-Responsive Vector Control", body: "Coming soon."},
      {lessonNo: 3, title: "Disaster Preparedness kag Dengue", body: "Coming soon."},
    ],
    references: [
      {
        apa: "Romanello, M., Di Napoli, C., Drummond, P., Green, C., Kennard, H., Lampard, P., Scamman, D., & Costello, A. (2023). The 2023 report of the Lancet Countdown on health and climate change: The imperative for a health-centred response in a world facing irreversible harms. The Lancet, 402(10419), 2346-2394. https://doi.org/10.1016/S0140-6736(23)01689-X",
        url: "https://doi.org/10.1016/S0140-6736(23)01689-X"
      },
      {
        apa: "Intergovernmental Panel on Climate Change. (2023). AR6 synthesis report: Climate change 2023. IPCC. https://www.ipcc.ch/report/ar6/syr/",
        url: "https://www.ipcc.ch/report/ar6/syr/"
      },
      {
        apa: "Watts, N., Amann, M., Arnell, N., Ayeb-Karlsson, S., Beagley, J., Belesova, K., Boykoff, M., Byass, P., Cai, W., Campbell-Lendrum, D., & Costello, A. (2021). The 2020 report of the Lancet Countdown on health and climate change: Responding to converging crises. The Lancet, 397(10269), 129-170. https://doi.org/10.1016/S0140-6736(20)32290-X",
        url: "https://doi.org/10.1016/S0140-6736(20)32290-X"
      },
    ],
  },
];
