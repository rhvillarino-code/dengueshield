import React from 'react'
import { Shield, Users, Building, Globe, Target, Award } from 'lucide-react'

export default function About() {
  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-4xl">
      <div className="bg-gradient-to-r from-shield-700 to-shield-900 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-10 h-10 text-shield-300"/>
          <div>
            <h1 className="text-2xl font-bold">DengueSHIELD</h1>
            <p className="text-shield-300 text-sm">Surveillance, Health Informatics, and Evidence-Led Defense</p>
          </div>
        </div>
        <p className="text-shield-100 leading-relaxed">A web-based community participatory vector control platform integrating climate-responsive dengue surveillance, developed for dengue hotspot barangays in Iloilo City, Philippines. Funded by the Western Visayas Health Research and Development Consortium (WVHRDC) through the DOST Grants-in-Aid (GIA) Program.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-5">
        <h2 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2"><Target className="w-5 h-5 text-shield-600"/>NUHRA 2023–2028 Alignment</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {['Disease Management','Health Security, Emergency, & DRM','Health Technology & Innovation','Health Promotion','Health Systems Strengthening towards UHC','Health of Vulnerable Populations'].map(t=>(
            <div key={t} className="flex items-center gap-2 bg-shield-50 rounded-lg px-3 py-2">
              <div className="w-2 h-2 rounded-full bg-shield-500 flex-shrink-0"/>
              <span className="text-sm text-gray-700">{t}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-3">SDGs: 3 (Good Health) • 9 (Innovation) • 11 (Sustainable Cities) • 13 (Climate Action) • 17 (Partnerships)</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-5">
        <h2 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-shield-600"/>Project Team</h2>
        <div className="space-y-3">
          {[
            { name:'Resti Tito H. Villarino, Dev.Ed.D, RN, LPT', role:'Project Leader', org:'WVSU College of Nursing', detail:'NRCP Regular Member • 40+ publications • International collaborations (7 countries)' },
            { name:'Maureen Lorence F. Villarino, MA.Ed., RN, LPT', role:'Co-Investigator 1', org:'WVSU College of Nursing', detail:'NRCP Associate Member • Community engagement lead • AMOMA co-developer' },
            { name:'Ryan Michael F. Oducado, PhD, MAN, MAEd, RN, RM, LPT, RGC', role:'Co-Investigator 2', org:'WVSU — University Research Director', detail:'World Top 2% Scientist (Stanford/Elsevier 2023–2024) • Scopus H-index: 18 • 2,725+ citations' },
            { name:'Ayesha C. Penuela, PhD, MAN, RN, LPT', role:'Co-Investigator 3', org:'WVSU CON — Research Coordinator', detail:'WVSU Outstanding Researcher 2025 • NRCP Associate (approved Regular) • GSPNRI BOT • URERC Consultant' },
            { name:'Jing Hu, MSc., PhD Candidate', role:'International Advisor (Unfunded)', org:'Université de Bretagne Occidentale, France', detail:'DPO, SCOT-DT Horizon Europe–DUT Programme • Health informatics & data science' },
          ].map(p=>(
            <div key={p.name} className="border rounded-lg p-3 hover:bg-gray-50">
              <p className="font-semibold text-sm text-gray-900">{p.name}</p>
              <p className="text-xs text-shield-600 font-medium">{p.role} — {p.org}</p>
              <p className="text-xs text-gray-500 mt-1">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-5">
        <h2 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2"><Building className="w-5 h-5 text-shield-600"/>Institutional Partners</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { name:'West Visayas State University', role:'Implementing Agency — research facilities, faculty, community extension' },
            { name:'Iloilo City Health Office (ICHO)', role:'Technical supervision, epidemiological data, vector surveillance' },
            { name:'DOH – Western Visayas', role:'Technical guidance, laboratory services, training support' },
            { name:'LGU Iloilo City (Barangay level)', role:'Community mobilization, implementation site, BHW personnel' },
            { name:'RESU Region VI', role:'Surveillance system support, data analysis' },
            { name:'Université de Bretagne Occidentale', role:'International advisory on health informatics (unfunded)' },
          ].map(p=>(
            <div key={p.name} className="border rounded-lg p-3">
              <p className="font-medium text-sm">{p.name}</p>
              <p className="text-xs text-gray-500">{p.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-5">
        <h2 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2"><Award className="w-5 h-5 text-shield-600"/>Platform Modules</h2>
        <div className="space-y-2">
          {[
            { mod:'Module 1: GIS-Enabled Breeding Site Mapping', desc:'GPS coordinates, geotagged photos, community-reported sites with risk classification' },
            { mod:'Module 2: Climate-Responsive Surveillance Dashboard', desc:'PAGASA meteorological data (rainfall, temperature, humidity) integrated with Breteau, Container, House, and Pupae per Person indices' },
            { mod:'Module 3: AI-Assisted Risk Stratification', desc:'Logistic regression trained on 6 years of ICHO/PAGASA data (2019–2024) for barangay-level risk alerts' },
            { mod:'Module 4: CBPLA Digital Learning', desc:'5 culturally adapted modules in Hiligaynon/Filipino with Identify–Plan–Act–Reflect action cycle framework' },
            { mod:'Module 5: Community Reporting System', desc:'Mobile-friendly household reporting with offline capability, automatic GPS tagging, and BHW verification workflow' },
          ].map(m=>(
            <div key={m.mod} className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-sm text-gray-900">{m.mod}</p>
              <p className="text-xs text-gray-600">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-4">
        <p>© 2026 West Visayas State University — College of Nursing. All rights reserved.</p>
        <p className="mt-1">Funded by WVHRDC / DOST-GIA (PhP 500,000.00) | Project Duration: September 2026 – September 2027</p>
      </div>
    </div>
  )
}
