import React from 'react'
import {Shield,Users,Building,Target,Award,FileText,ExternalLink} from 'lucide-react'

const team = [
  {name:'Resti Tito H. Villarino, Dev.Ed.D, RN, LPT',role:'Project Leader',org:'WVSU College of Nursing',cred:'NRCP Regular Member (Medical Sciences) | 40+ peer-reviewed publications | International collaborations across 7 countries | SSHN Scholar, Excelia Business School, La Rochelle, France (2025) | CLI-MHIQ developer',avatar:'RV'},
  {name:'Maureen Lorence F. Villarino, MA.Ed., RN, LPT',role:'Co-Investigator 1',org:'WVSU College of Nursing',cred:'NRCP Associate Member | AMOMA AI-enhanced wellness platform co-developer | Research expertise: climate-resilience, mental health, nursing education, digital health interventions',avatar:'MV'},
  {name:'Ryan Michael F. Oducado, PhD, MAN, MAEd, RN, RM, LPT, RGC',role:'Co-Investigator 2',org:'WVSU University Research Director',cred:"World's Top 2% Scientist (Stanford/Elsevier, 2023 and 2024) | Scopus H-index: 18 | 2,725+ Google Scholar citations | Professor VI | WVSU University Research Director",avatar:'RO'},
  {name:'Ayesha C. Penuela, PhD, MAN, RN, LPT',role:'Co-Investigator 3',org:'WVSU CON Research Coordinator',cred:'WVSU Outstanding Researcher 2025 | GSPNRI Board of Trustees | URERC Independent Consultant | Editor-in-Chief, WVSU CON Research Journal | Associate Professor IV',avatar:'AP'},
  {name:'Jing Hu, MSc, PhD Candidate',role:'International Advisor (Unfunded)',org:'Universite de Bretagne Occidentale, Brest, France',cred:'Data Protection Officer, SCOT-DT Horizon Europe-DUT Partnership Programme | Expertise: FAIR data governance, environmental digital systems, European health informatics',avatar:'JH'},
]

const partners = [
  {name:'WVSU College of Nursing',role:'Implementing Agency',contrib:'Computer labs, research infrastructure, faculty supervision, community extension mandate'},
  {name:'Iloilo City Health Office (ICHO)',role:'Technical Partner',contrib:'Epidemiological data, technical supervision, local dengue surveillance coordination'},
  {name:'DOH - Western Visayas',role:'Technical Partner',contrib:'Laboratory services, vector surveillance training, national program alignment'},
  {name:'LGU Iloilo City - Barangay Sooc',role:'Community Partner',contrib:'BHW network, barangay health center, community spaces, LGU counterpart'},
  {name:'RESU Region VI',role:'Data Partner',contrib:'Regional epidemiological surveillance system integration and data analysis'},
  {name:'Universite de Bretagne Occidentale, France',role:'International Partner',contrib:'Health informatics, data governance advisory, international research collaboration'},
]

const nuhra = [
  {theme:'Disease Management',tag:'PRIMARY',align:'Dengue prevention, vector control, GIS-enabled disease surveillance'},
  {theme:'Health Security, Emergency, and DRM',tag:'PRIMARY',align:'Climate-responsive surveillance, rainfall-vector correlation, DRR integration'},
  {theme:'Health Technology and Innovation',tag:'PRIMARY',align:'AI risk stratification, web platform, GIS, 4th Industrial Revolution tools'},
  {theme:'Health Promotion',tag:'SECONDARY',align:'CBPLA modules, community health education, IEC materials in Hiligaynon'},
  {theme:'Health Systems Strengthening towards UHC',tag:'SECONDARY',align:'BHW digital capacity, LGU surveillance infrastructure, barangay-level integration'},
  {theme:'Health of Vulnerable Populations',tag:'TERTIARY',align:'Urban poor communities, informal-sector households in dengue hotspot barangays'},
]

const budget = [
  {item:'Personnel Services (PS)',amount:'PHP 258,000',pct:'51.6%',detail:'PL + 3 Co-PIs + 2 Research Assistants'},
  {item:'Maintenance and Other Operating Expenses (MOOE)',amount:'PHP 192,000',pct:'38.4%','detail':'Web dev, travel, training, publication, expert panel'},
  {item:'Equipment Outlay (EO)',amount:'PHP 50,000',pct:'10.0%',detail:'3 tablets, GPS device, external hard drives'},
  {item:'Counterpart (In-Kind)',amount:'PHP 140,000',pct:'28% of GIA',detail:'5 partner agencies (exceeds 15% DOST-GIA minimum)'},
]

export default function About(){
  return(
    <div className="p-4 lg:p-6 space-y-6 max-w-4xl">
      <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-10 h-10 text-emerald-300"/>
          <div>
            <h1 className="text-2xl font-bold">DengueSHIELD</h1>
            <p className="text-emerald-300 text-sm">Surveillance, Health Informatics, and Evidence-Led Defense</p>
          </div>
        </div>
        <p className="text-emerald-100 leading-relaxed mb-5">
          A web-based community participatory vector control platform integrating climate-responsive dengue surveillance for dengue hotspot barangays in Iloilo City, Philippines. Developed as a working prototype for the WVHRDC / DOST-GIA 2026 Grants-in-Aid application.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {label:'Project Duration',value:'12 Months'},
            {label:'Total Budget',value:'PHP 500,000'},
            {label:'Study Households',value:'N = 300'},
            {label:'GAD Score',value:'15.0 / 15.0'},
          ].map(s => (
            <div key={s.label} className="bg-emerald-800 bg-opacity-60 rounded-lg p-3">
              <p className="text-emerald-300 text-xs">{s.label}</p>
              <p className="text-white font-bold mt-0.5">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-5">
        <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
          <Target className="w-5 h-5 text-emerald-600"/>
          NUHRA 2023-2028 Alignment
        </h2>
        <div className="space-y-2">
          {nuhra.map(t => (
            <div key={t.theme} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"/>
                  <span className="text-sm font-medium text-gray-800">{t.theme}</span>
                  <span className={"text-xs px-1.5 py-0.5 rounded font-bold " + (t.tag==='PRIMARY'?'bg-emerald-200 text-emerald-800':t.tag==='SECONDARY'?'bg-blue-100 text-blue-700':'bg-gray-200 text-gray-600')}>
                    {t.tag}
                  </span>
                </div>
                <p className="text-xs text-gray-500 ml-4 mt-0.5">{t.align}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {['SDG 3: Good Health','SDG 9: Innovation','SDG 11: Sustainable Cities','SDG 13: Climate Action','SDG 17: Partnerships'].map(s => (
            <span key={s} className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-1 rounded-full font-medium">{s}</span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-5">
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-emerald-600"/>
          Research Team
        </h2>
        <div className="space-y-3">
          {team.map(p => (
            <div key={p.name} className="flex items-start gap-4 border rounded-xl p-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm flex-shrink-0">
                {p.avatar}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-gray-900">{p.name}</p>
                <p className="text-xs text-emerald-600 font-medium">{p.role} — {p.org}</p>
                <p className="text-xs text-gray-500 mt-1.5">{p.cred}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-5">
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Building className="w-5 h-5 text-emerald-600"/>
          Institutional Partners and Counterpart Contributions
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {partners.map(p => (
            <div key={p.name} className="border rounded-lg p-3 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <p className="font-semibold text-sm text-gray-900">{p.name}</p>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full flex-shrink-0">{p.role}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">{p.contrib}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-5">
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-emerald-600"/>
          Budget Overview
        </h2>
        <div className="space-y-3">
          {budget.map(b => (
            <div key={b.item} className="flex items-center justify-between gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">{b.item}</p>
                <p className="text-xs text-gray-500">{b.detail}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-bold text-sm text-gray-900">{b.amount}</p>
                <p className="text-xs text-gray-500">{b.pct}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 bg-emerald-50 rounded-lg p-3">
          <p className="text-sm font-bold text-emerald-800">Total DOST-GIA Budget: PHP 500,000 | Total Project Value: PHP 640,000</p>
          <p className="text-xs text-emerald-600 mt-0.5">Counterpart contribution (28%) exceeds DOST-GIA minimum requirement of 15%</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-5">
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-emerald-600"/>
          Expected Outputs and Outcomes
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {label:'Working Platform Prototype',desc:'Validated DengueSHIELD web platform (CVI > 0.80, SUS > 68)'},
            {label:'ISI/Scopus Manuscript',desc:'Target: BMC Public Health or PLOS Neglected Tropical Diseases'},
            {label:'Policy Brief',desc:'For DOH-Western Visayas and LGU Iloilo City'},
            {label:'Trained BHW Workforce',desc:'20 BHWs + 15 community task force members'},
            {label:'Longitudinal Dataset',desc:'7-month vector surveillance, N=300 households'},
            {label:'Disease-Agnostic Platform',desc:'Replicable for chikungunya, leptospirosis, Zika'},
          ].map((o,i) => (
            <div key={i} className="flex gap-3 p-3 border rounded-lg">
              <div className="w-6 h-6 bg-emerald-600 text-white rounded flex items-center justify-center text-xs font-bold flex-shrink-0">{i+1}</div>
              <div>
                <p className="text-sm font-medium text-gray-800">{o.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-900 rounded-xl p-4 text-center">
        <p className="text-emerald-200 text-xs">
          DengueSHIELD | WVSU College of Nursing | WVHRDC / DOST-GIA 2026 Grants-in-Aid Application
        </p>
        <p className="text-emerald-400 text-xs mt-1">
          Project Leader: Resti Tito H. Villarino, Dev.Ed.D, RN, LPT | rth.villarino@wvsu.edu.ph
        </p>
        <p className="text-emerald-500 text-xs mt-1">
          Pilot Site: Barangay Sooc, Arevalo, Iloilo City | Implementation: September 2026 - September 2027
        </p>
      </div>
    </div>
  )
}
