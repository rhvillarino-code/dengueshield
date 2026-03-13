import React from 'react'
import {Shield,Users,Building,Target,Award,ExternalLink} from 'lucide-react'

const team = [
  {name:'Resti Tito H. Villarino, Dev.Ed.D, RN, LPT',role:'Project Leader',org:'WVSU College of Nursing',cred:'NRCP Regular Member | 40+ peer-reviewed publications | 7-country international collaborations | SSHN Scholar, La Rochelle, France (2025)'},
  {name:'Maureen Lorence F. Villarino, MA.Ed., RN, LPT',role:'Co-Investigator 1',org:'WVSU College of Nursing',cred:'NRCP Associate Member | AMOMA AI platform co-developer | Research expertise: climate resilience, mental health, educational technology'},
  {name:'Ryan Michael F. Oducado, PhD, MAN, MAEd, RN, RM, LPT, RGC',role:'Co-Investigator 2',org:'WVSU University Research Director',cred:"World's Top 2% Scientist (Stanford/Elsevier 2023 & 2024) | Scopus H-index: 18 | 2,725+ Google Scholar citations | Professor VI"},
  {name:'Ayesha C. Penuela, PhD, MAN, RN, LPT',role:'Co-Investigator 3',org:'WVSU CON Research Coordinator',cred:'WVSU Outstanding Researcher 2025 | GSPNRI Board of Trustees | URERC Independent Consultant | Editor-in-Chief, WVSU CON Research Journal'},
  {name:'Jing Hu, MSc, PhD Candidate',role:'International Advisor (Unfunded)',org:'Universite de Bretagne Occidentale, Brest, France',cred:'Data Protection Officer, SCOT-DT Horizon Europe-DUT Programme | Expertise: FAIR data governance, environmental research, digital governance'},
]

const partners = [
  {name:'WVSU College of Nursing',role:'Implementing Agency — computer labs, research facilities, faculty'},
  {name:'Iloilo City Health Office (ICHO)',role:'Technical supervision, epidemiological data, local coordination'},
  {name:'DOH - Western Visayas',role:'Laboratory services, vector surveillance training, technical advisory'},
  {name:'LGU Iloilo City - Barangay Sooc',role:'Community mobilization, BHW network, barangay health center'},
  {name:'RESU Region VI',role:'Epidemiological surveillance system support and data analysis'},
  {name:'Universite de Bretagne Occidentale, France',role:'International advisory — health informatics and data governance'},
]

const nuhra = [
  {theme:'Disease Management',tag:'PRIMARY'},
  {theme:'Health Security, Emergency, and DRM',tag:'PRIMARY'},
  {theme:'Health Technology and Innovation',tag:'PRIMARY'},
  {theme:'Health Promotion',tag:'SECONDARY'},
  {theme:'Health Systems Strengthening towards UHC',tag:'SECONDARY'},
  {theme:'Health of Vulnerable Populations',tag:'TERTIARY'},
]

const modules = [
  {name:'Module 1: GIS Breeding Site Mapping',desc:'GPS-enabled community mapping with geotagged photo uploads, real-time risk classification, and interactive OpenStreetMap visualization'},
  {name:'Module 2: Climate-Responsive Dashboard',desc:'PAGASA rainfall, temperature, and humidity integration with Breteau Index, Container Index, House Index, and Pupae per Person Index'},
  {name:'Module 3: AI Risk Stratification',desc:'Logistic regression engine trained on 6 years of ICHO and PAGASA data, generating automated purok-level risk alerts and recommended actions'},
  {name:'Module 4: CBPLA Digital Learning',desc:'5 learning modules in Hiligaynon and Filipino based on the Identify-Plan-Act-Reflect community action cycle (Pretty et al., 1995)'},
  {name:'Module 5: Community Reporting System',desc:'Mobile-friendly household reporting interface with BHW response tracking, status monitoring, and photo upload capability'},
]

export default function About(){
  return(
    <div className="p-4 lg:p-6 space-y-6 max-w-4xl">
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-900 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-10 h-10 text-emerald-300"/>
          <div>
            <h1 className="text-2xl font-bold">DengueSHIELD</h1>
            <p className="text-emerald-300 text-sm">Surveillance, Health Informatics, and Evidence-Led Defense</p>
          </div>
        </div>
        <p className="text-emerald-100 leading-relaxed mb-4">
          A web-based community participatory vector control platform integrating climate-responsive dengue surveillance for dengue hotspot barangays in Iloilo City. This working prototype demonstrates the platform capabilities for the WVHRDC / DOST-GIA 2026 Grants-in-Aid application.
        </p>
        <div className="grid grid-cols-3 gap-3 mt-4">
          {[
            {label:'Project Duration',value:'12 months'},
            {label:'Total Budget',value:'PHP 500,000'},
            {label:'Target Households',value:'300 (N=150+150)'},
          ].map(s=>(
            <div key={s.label} className="bg-emerald-800 rounded-lg p-3">
              <p className="text-emerald-300 text-xs">{s.label}</p>
              <p className="text-white font-bold text-sm mt-0.5">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-5">
        <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
          <Target className="w-5 h-5 text-emerald-600"/>
          NUHRA 2023-2028 Alignment
        </h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {nuhra.map(t=>(
            <div key={t.theme} className="flex items-center justify-between bg-emerald-50 rounded-lg px-3 py-2.5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"/>
                <span className="text-sm">{t.theme}</span>
              </div>
              <span className={`text-xs px-1.5 py-0.5 rounded font-medium flex-shrink-0 ml-2 ${t.tag==='PRIMARY'?'bg-emerald-200 text-emerald-800':t.tag==='SECONDARY'?'bg-blue-100 text-blue-700':'bg-gray-200 text-gray-600'}`}>{t.tag}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {['SDG 3: Good Health','SDG 9: Innovation','SDG 11: Sustainable Cities','SDG 13: Climate Action','SDG 17: Partnerships'].map(s=>(
            <span key={s} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{s}</span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-5">
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-emerald-600"/>
          Platform Modules
        </h2>
        <div className="space-y-3">
          {modules.map((m,i)=>(
            <div key={m.name} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">{i+1}</div>
              <div>
                <p className="font-medium text-sm">{m.name}</p>
                <p className="text-xs text-gray-600 mt-0.5">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-5">
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-emerald-600"/>
          Research Team
        </h2>
        <div className="space-y-3">
          {team.map(p=>(
            <div key={p.name} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-sm text-gray-900">{p.name}</p>
                  <p className="text-xs text-emerald-600 font-medium">{p.role} — {p.org}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">{p.cred}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-5">
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Building className="w-5 h-5 text-emerald-600"/>
          Institutional Partners
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {partners.map(p=>(
            <div key={p.name} className="border rounded-lg p-3 hover:bg-gray-50 transition-colors">
              <p className="font-medium text-sm text-gray-900">{p.name}</p>
              <p className="text-xs text-gray-500 mt-1">{p.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
        <p className="text-xs text-gray-500 text-center">
          DengueSHIELD | WVSU College of Nursing | WVHRDC / DOST-GIA 2026 Grants-in-Aid Application
          <br/>
          Project Leader: Resti Tito H. Villarino, Dev.Ed.D, RN, LPT | rth.villarino@wvsu.edu.ph
          <br/>
          GAD Score: 15.0/15.0 (Gender-Responsive) | Counterpart: PHP 140,000 (28% of DOST-GIA funding)
        </p>
      </div>
    </div>
  )
}
