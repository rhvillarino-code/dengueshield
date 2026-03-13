import React from 'react'
import {CloudRain,Thermometer,Droplets,AlertTriangle,Info} from 'lucide-react'
import {LineChart,Line,BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,ComposedChart,Area,Legend,ReferenceLine} from 'recharts'
import {climateData,vectorIndices} from '../data/sampleData'

export default function ClimateDashboard(){
  const combined = climateData.map((c,i) => ({...c,...(vectorIndices[i]||{})}))

  return(
    <div className="p-4 lg:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Climate-Responsive Surveillance</h1>
        <p className="text-sm text-gray-500">PAGASA meteorological data integrated with Stegomyia entomological indices — NUHRA 2023-2028 aligned</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"/>
        <p className="text-sm text-blue-800">
          <strong>PAGASA Advisory (Oct 2026):</strong> Rainfall 180-220 mm forecast this week. Relative humidity sustained above 84%. AI model alert: elevated Aedes aegypti breeding conditions. BHW surveillance frequency increased to twice weekly.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {icon:CloudRain,label:'Rainfall (Oct)',value:'230 mm',color:'bg-blue-500',sub:'Cumulative monthly'},
          {icon:Thermometer,label:'Max Temperature',value:'32.8 C',color:'bg-orange-500',sub:'Optimal Aedes range: 25-35 C'},
          {icon:Droplets,label:'Relative Humidity',value:'84%',color:'bg-cyan-500',sub:'Threshold for larval survival: >60%'},
          {icon:AlertTriangle,label:'Dengue Cases (Oct)',value:'8',color:'bg-red-500',sub:'Down 77% from peak (Jun: 35)'},
        ].map((s,i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border p-4">
            <div className={"p-2 rounded-lg w-fit " + s.color}><s.icon className="w-5 h-5 text-white"/></div>
            <p className="mt-3 text-2xl font-bold">{s.value}</p>
            <p className="text-sm text-gray-500">{s.label}</p>
            <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h3 className="font-semibold mb-1">Rainfall vs. Dengue Cases</h3>
          <p className="text-xs text-gray-500 mb-3">Peak transmission (June: 245 mm, 35 cases) consistent with Aedes aegypti vectorial capacity increase of 11.5% (Romanello et al., 2023)</p>
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={climateData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
              <XAxis dataKey="month" tick={{fontSize:11}}/>
              <YAxis yAxisId="left" tick={{fontSize:11}}/>
              <YAxis yAxisId="right" orientation="right" tick={{fontSize:11}}/>
              <Tooltip/>
              <Legend/>
              <Area yAxisId="left" type="monotone" dataKey="rainfall" fill="#bfdbfe" stroke="#3b82f6" name="Rainfall (mm)"/>
              <Line yAxisId="right" type="monotone" dataKey="dengCases" stroke="#ef4444" strokeWidth={3} dot={{r:5}} name="Dengue Cases"/>
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h3 className="font-semibold mb-1">Temperature and Humidity</h3>
          <p className="text-xs text-gray-500 mb-3">Optimal Aedes aegypti breeding: 25-35 C, humidity above 80% (IPCC, 2023)</p>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={climateData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
              <XAxis dataKey="month" tick={{fontSize:11}}/>
              <YAxis tick={{fontSize:11}} domain={[20,95]}/>
              <Tooltip/>
              <Legend/>
              <ReferenceLine y={80} stroke="#06b6d4" strokeDasharray="4 4" label={{value:"Humidity threshold",fontSize:9,fill:"#06b6d4"}}/>
              <Line type="monotone" dataKey="tempMax" stroke="#f97316" strokeWidth={2} name="Max Temp (C)" dot={{r:4}}/>
              <Line type="monotone" dataKey="tempMin" stroke="#06b6d4" strokeWidth={2} name="Min Temp (C)" dot={{r:4}}/>
              <Line type="monotone" dataKey="humidity" stroke="#8b5cf6" strokeWidth={2} strokeDasharray="5 5" name="Humidity (%)" dot={{r:4}}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4">
        <h3 className="font-semibold mb-1">Vector Indices vs. Climate Overlay</h3>
        <p className="text-xs text-gray-500 mb-3">Breteau Index decline correlated with CBPLA implementation onset (April 2026). WHO epidemic threshold (BI = 50) shown.</p>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={combined}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
            <XAxis dataKey="month" tick={{fontSize:10}} angle={-15} textAnchor="end" height={45}/>
            <YAxis yAxisId="left" tick={{fontSize:11}} domain={[0,65]}/>
            <YAxis yAxisId="right" orientation="right" tick={{fontSize:11}}/>
            <Tooltip/>
            <Legend/>
            <ReferenceLine yAxisId="left" y={50} stroke="#dc2626" strokeDasharray="6 3" label={{value:"BI Epidemic Threshold",fontSize:9,fill:"#dc2626",position:"insideTopLeft"}}/>
            <Bar yAxisId="right" dataKey="rainfall" fill="#dbeafe" name="Rainfall (mm)" radius={[4,4,0,0]}/>
            <Line yAxisId="left" type="monotone" dataKey="bi" stroke="#ef4444" strokeWidth={3} dot={{r:5}} name="Breteau Index"/>
            <Line yAxisId="left" type="monotone" dataKey="hi" stroke="#eab308" strokeWidth={2} dot={{r:4}} name="House Index"/>
            <Line yAxisId="left" type="monotone" dataKey="oviI" stroke="#8b5cf6" strokeWidth={2} strokeDasharray="4 4" dot={{r:3}} name="Ovitrap Positivity Index"/>
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {[
          {stat:'+11.5%',label:'Aedes aegypti vectorial capacity increase',src:'Romanello et al., 2023 — Lancet Countdown',color:'bg-red-50 border-red-100'},
          {stat:'2.3x',label:'Sooc case rate above national alert threshold',src:'ICHO, 2024 | 428.3 vs. 186.4 per 100,000',color:'bg-amber-50 border-amber-100'},
          {stat:'62 to 85%',label:'Reporting accuracy improvement with digital surveillance',src:'Lee et al., 2023 — Journal of Vector Ecology',color:'bg-emerald-50 border-emerald-100'},
        ].map((e,i) => (
          <div key={i} className={"rounded-xl p-4 border " + e.color}>
            <p className="text-2xl font-bold text-gray-800">{e.stat}</p>
            <p className="text-sm text-gray-700 mt-1">{e.label}</p>
            <p className="text-xs text-gray-500 mt-2 italic">{e.src}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
