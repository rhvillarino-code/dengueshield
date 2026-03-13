import React,{useState} from 'react'
import {MapContainer,TileLayer,Circle,Popup} from 'react-leaflet'
import {Plus} from 'lucide-react'
import {SOOC_CENTER,breedingSites} from '../data/sampleData'
const rc={Critical:'#dc2626',High:'#f97316',Moderate:'#eab308',Low:'#22c55e'}
export default function BreedingMap(){
  const[filter,setFilter]=useState('All')
  const filtered=filter==='All'?breedingSites:breedingSites.filter(s=>s.status===filter)
  return(
    <div className="p-4 lg:p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"><div><h1 className="text-2xl font-bold text-gray-900">GIS Breeding Site Map</h1><p className="text-sm text-gray-500">GPS-enabled community mapping \u2014 Barangay Sooc</p></div>
        <div className="flex gap-2"><select value={filter} onChange={e=>setFilter(e.target.value)} className="border rounded-lg px-3 py-2 text-sm"><option>All</option><option>Active</option><option>Resolved</option></select><button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-emerald-700"><Plus className="w-4 h-4"/>Report Site</button></div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border overflow-hidden" style={{height:'500px'}}>
          <MapContainer center={SOOC_CENTER} zoom={15} scrollWheelZoom={true} style={{height:'100%',width:'100%'}}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="OpenStreetMap"/>
            {filtered.map(s=>(<Circle key={s.id} center={[s.lat,s.lng]} radius={s.risk==='Critical'?80:s.risk==='High'?60:s.risk==='Moderate'?40:25} pathOptions={{color:rc[s.risk],fillColor:rc[s.risk],fillOpacity:0.3}}><Popup><div className="text-sm"><p className="font-bold">{s.type} \u2014 {s.risk} Risk</p><p className="text-gray-600">{s.description}</p><p className="text-xs text-gray-400 mt-1">{s.reporter} \u2022 {s.date}</p><p className={`text-xs font-medium mt-1 ${s.status==='Active'?'text-red-600':'text-green-600'}`}>Status: {s.status}</p></div></Popup></Circle>))}
          </MapContainer>
        </div>
        <div className="space-y-3">
          <div className="bg-white rounded-xl shadow-sm border p-4"><h3 className="font-semibold text-gray-900 mb-3">Summary</h3><div className="space-y-2"><div className="flex justify-between"><span className="text-sm text-gray-600">Total Sites</span><span className="font-bold">{breedingSites.length}</span></div><div className="flex justify-between"><span className="text-sm text-red-600">Active</span><span className="font-bold text-red-600">{breedingSites.filter(s=>s.status==='Active').length}</span></div><div className="flex justify-between"><span className="text-sm text-green-600">Resolved</span><span className="font-bold text-green-600">{breedingSites.filter(s=>s.status==='Resolved').length}</span></div></div></div>
          <div className="bg-white rounded-xl shadow-sm border p-4"><h3 className="font-semibold text-gray-900 mb-2">Legend</h3><div className="space-y-1">{Object.entries(rc).map(([l,c])=>(<div key={l} className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{backgroundColor:c}}/><span className="text-xs">{l} Risk</span></div>))}</div></div>
          <div className="bg-white rounded-xl shadow-sm border p-4"><h3 className="font-semibold text-gray-900 mb-3">Recent Reports</h3><div className="space-y-2 max-h-48 overflow-y-auto">{filtered.sort((a,b)=>b.date.localeCompare(a.date)).slice(0,4).map(s=>(<div key={s.id} className="p-2 rounded-lg bg-gray-50"><p className="text-sm font-medium">{s.type} \u2014 {s.risk}</p><p className="text-xs text-gray-500">{s.reporter} \u2022 {s.date}</p></div>))}</div></div>
        </div>
      </div>
    </div>
  )
}
