import React,{useState} from 'react'
import {MapContainer,TileLayer,Circle,Popup} from 'react-leaflet'
import {Plus,Filter} from 'lucide-react'
import {SOOC_CENTER,breedingSites} from '../data/sampleData'

const riskColor = {Critical:'#dc2626',High:'#f97316',Moderate:'#eab308',Low:'#22c55e'}
const riskRadius = {Critical:90,High:65,Moderate:45,Low:28}

export default function BreedingMap(){
  const [statusFilter, setStatusFilter] = useState('All')
  const [riskFilter, setRiskFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState('All')

  const filtered = breedingSites.filter(s =>
    (statusFilter==='All' || s.status===statusFilter) &&
    (riskFilter==='All' || s.risk===riskFilter) &&
    (typeFilter==='All' || s.type===typeFilter)
  )

  const stats = {
    total: breedingSites.length,
    active: breedingSites.filter(s=>s.status==='Active').length,
    critical: breedingSites.filter(s=>s.risk==='Critical').length,
    resolved: breedingSites.filter(s=>s.status==='Resolved').length,
  }

  return(
    <div className="p-4 lg:p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">GIS Breeding Site Map</h1>
          <p className="text-sm text-gray-500">GPS-enabled participatory community mapping — Barangay Sooc, Arevalo, Iloilo City</p>
        </div>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-emerald-700 transition-colors">
          <Plus className="w-4 h-4"/>Report New Site
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          {label:'Total Sites Mapped',value:stats.total,color:'bg-gray-100 text-gray-800'},
          {label:'Active Sites',value:stats.active,color:'bg-red-100 text-red-800'},
          {label:'Critical Risk',value:stats.critical,color:'bg-orange-100 text-orange-800'},
          {label:'Resolved',value:stats.resolved,color:'bg-green-100 text-green-800'},
        ].map(s => (
          <div key={s.label} className={"rounded-xl p-3 " + s.color}>
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-xs font-medium mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 items-center bg-white border rounded-lg p-3">
        <Filter className="w-4 h-4 text-gray-400"/>
        <span className="text-xs font-medium text-gray-500">Filter:</span>
        <select value={statusFilter} onChange={e=>setStatusFilter(e.target.value)} className="border rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500">
          <option>All</option><option>Active</option><option>Resolved</option>
        </select>
        <select value={riskFilter} onChange={e=>setRiskFilter(e.target.value)} className="border rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500">
          <option>All</option><option>Critical</option><option>High</option><option>Moderate</option><option>Low</option>
        </select>
        <select value={typeFilter} onChange={e=>setTypeFilter(e.target.value)} className="border rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500">
          <option>All</option><option>Container</option><option>Tire</option><option>Drainage</option><option>Natural</option>
        </select>
        <span className="text-xs text-gray-400 ml-auto">Showing {filtered.length} of {breedingSites.length} sites</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border overflow-hidden" style={{height:'480px'}}>
          <MapContainer center={SOOC_CENTER} zoom={15} scrollWheelZoom={true} style={{height:'100%',width:'100%'}}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="OpenStreetMap contributors"/>
            {filtered.map(s => (
              <Circle key={s.id} center={[s.lat,s.lng]}
                radius={riskRadius[s.risk]}
                pathOptions={{color:riskColor[s.risk],fillColor:riskColor[s.risk],fillOpacity:s.status==='Resolved'?0.15:0.4,dashArray:s.status==='Resolved'?'6,4':null}}>
                <Popup>
                  <div style={{minWidth:'180px'}}>
                    <p style={{fontWeight:'bold',fontSize:'13px',marginBottom:'4px'}}>{s.type} Site — {s.risk} Risk</p>
                    <p style={{fontSize:'11px',color:'#6b7280',marginBottom:'4px'}}>{s.purok} | {s.date}</p>
                    <p style={{fontSize:'12px',marginBottom:'4px'}}>{s.description}</p>
                    <p style={{fontSize:'11px',color:'#6b7280'}}>Reported by: {s.reporter}</p>
                    <span style={{display:'inline-block',marginTop:'4px',padding:'2px 8px',borderRadius:'9999px',fontSize:'11px',fontWeight:'600',backgroundColor:s.status==='Active'?'#fee2e2':'#dcfce7',color:s.status==='Active'?'#b91c1c':'#15803d'}}>{s.status}</span>
                  </div>
                </Popup>
              </Circle>
            ))}
          </MapContainer>
        </div>

        <div className="space-y-3">
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Risk Level Legend</h3>
            <div className="space-y-2">
              {Object.entries(riskColor).map(([level,color]) => (
                <div key={level} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border-2 flex-shrink-0" style={{backgroundColor:color,opacity:0.7}}/>
                  <div className="flex-1">
                    <span className="text-sm font-medium">{level} Risk</span>
                  </div>
                  <span className="text-xs text-gray-500">{breedingSites.filter(s=>s.risk===level).length} sites</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t">
              <p className="text-xs text-gray-500">Solid circle = Active | Dashed circle = Resolved</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Sites by Type</h3>
            <div className="space-y-2">
              {['Container','Tire','Drainage','Natural'].map(type => {
                const count = breedingSites.filter(s=>s.type===type).length
                const pct = Math.round(count/breedingSites.length*100)
                return (
                  <div key={type}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-700">{type}</span>
                      <span className="text-gray-500">{count} ({pct}%)</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full">
                      <div className="h-full bg-emerald-500 rounded-full" style={{width: pct + "%"}}/>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Recent Reports</h3>
            <div className="space-y-2 max-h-52 overflow-y-auto">
              {[...filtered].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,5).map(s => (
                <div key={s.id} className="p-2 rounded-lg bg-gray-50 border-l-2" style={{borderColor:riskColor[s.risk]}}>
                  <p className="text-xs font-semibold text-gray-800">{s.type} — {s.risk}</p>
                  <p className="text-xs text-gray-500">{s.purok} | {s.reporter}</p>
                  <p className="text-xs text-gray-400">{s.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
        <p className="text-xs text-blue-700"><strong>Methodology note:</strong> Breeding site coordinates captured via GPS-enabled BHW mobile interface. Risk classification uses Stegomyia indices (WHO, 2009): Container Index, House Index, Breteau Index, and Ovitrap Positivity Index. Sites mapped by trained BHWs using DengueSHIELD CBPLA Module 2 protocol.</p>
      </div>
    </div>
  )
}
