import React from 'react'
import {CloudRain,Thermometer,Droplets,AlertTriangle} from 'lucide-react'
import {LineChart,Line,BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,ComposedChart,Area,Legend} from 'recharts'
import {climateData,vectorIndices} from '../data/sampleData'

export default function ClimateDashboard(){
  const combined = climateData.map((c,i)=>({...c,...(vectorIndices[i]||{})}))
  const latest = climateData[climateData.length-1]

  return(
    <div className="p-4 lg:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Climate-Responsive Surveillance</h1>
        <p className="text-sm text-gray-500">PAGASA real-time meteorological data integrated with entomological vector indices</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"/>
        <p className="text-sm text-blue-800">
          <strong>PAGASA Advisory:</strong> Rainfall 180–220 mm forecast for Iloilo City this week. Elevated Aedes aegypti breeding risk. Vector surveillance frequency increased to twice weekly per protocol.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {icon:CloudRain,label:'Rainfall (Oct)',value:'230 mm',color:'bg-blue-500',sub:'Monthly cumulative'},
          {icon:Thermometer,label:'Max Temperature',value:'32.8°C',color:'bg-orange-500',sub:'Daily average'},
          {icon:Droplets,label:'Humidity',value:'84%',color:'bg-cyan-500',sub:'Relative average'},
          {icon:AlertTriangle,label:'Dengue Cases (Oct)',value:'8',color:'bg-red-500',sub:'Down 77% from peak (Jun)'},
        ].map((s,i)=>(
          <div key={i} className="bg-white rounded-xl shadow-sm border p-4">
            <div className={`p-2 rounded-lg w-fit ${s.color}`}><s.icon className="w-5 h-5 text-white"/></div>
            <p className="mt-3 text-2xl font-bold">{s.value}</p>
            <p className="text-sm text-gray-500">{s.label}</p>
            <p className="text-xs text-gray-400">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h3 className="font-semibold mb-1">Rainfall vs. Dengue Cases</h3>
          <p className="text-xs text-gray-500 mb-3">Peak transmission coincides with peak rainfall (June: 245 mm, 35 cases)</p>
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={climateData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
              <XAxis dataKey="month" tick={{fontSize:11}}/>
              <YAxis yAxisId="left" tick={{fontSize:11}} label={{value:'Rainfall (mm)',angle:-90,position:'insideLeft',style:{fontSize:10}}}/>
              <YAxis yAxisId="right" orientation="right" tick={{fontSize:11}} label={{value:'Cases',angle:90,position:'insideRight',style:{fontSize:10}}}/>
              <Tooltip/>
              <Legend/>
              <Area yAxisId="left" type="monotone" dataKey="rainfall" fill="#bfdbfe" stroke="#3b82f6" name="Rainfall (mm)"/>
              <Line yAxisId="right" type="monotone" dataKey="dengCases" stroke="#ef4444" strokeWidth={3} dot={{r:5}} name="Dengue Cases"/>
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h3 className="font-semibold mb-1">Temperature and Humidity</h3>
          <p className="text-xs text-gray-500 mb-3">Optimal Aedes aegypti breeding: temp 25–35°C, humidity above 80%</p>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={climateData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
              <XAxis dataKey="month" tick={{fontSize:11}}/>
              <YAxis tick={{fontSize:11}}/>
              <Tooltip/>
              <Legend/>
              <Line type="monotone" dataKey="tempMax" stroke="#f97316" strokeWidth={2} name="Max Temp (°C)" dot={{r:4}}/>
              <Line type="monotone" dataKey="tempMin" stroke="#06b6d4" strokeWidth={2} name="Min Temp (°C)" dot={{r:4}}/>
              <Line type="monotone" dataKey="humidity" stroke="#8b5cf6" strokeWidth={2} strokeDasharray="5 5" name="Humidity (%)" dot={{r:4}}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4">
        <h3 className="font-semibold mb-1">Vector Indices vs. Climate Overlay</h3>
        <p className="text-xs text-gray-500 mb-3">Breteau Index and House Index correlated with monthly rainfall — demonstrates climate-vector nexus</p>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={combined}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
            <XAxis dataKey="month" tick={{fontSize:10}} angle={-15} textAnchor="end" height={45}/>
            <YAxis yAxisId="left" tick={{fontSize:11}}/>
            <YAxis yAxisId="right" orientation="right" tick={{fontSize:11}}/>
            <Tooltip/>
            <Legend/>
            <Bar yAxisId="right" dataKey="rainfall" fill="#dbeafe" name="Rainfall (mm)" radius={[4,4,0,0]}/>
            <Line yAxisId="left" type="monotone" dataKey="bi" stroke="#ef4444" strokeWidth={3} dot={{r:5}} name="Breteau Index"/>
            <Line yAxisId="left" type="monotone" dataKey="hi" stroke="#eab308" strokeWidth={2} dot={{r:4}} name="House Index"/>
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4">
        <h3 className="font-semibold mb-2">Climate-Health Evidence Base</h3>
        <p className="text-xs text-gray-500 mb-3">Scientific basis for integrating climate data into dengue surveillance (NUHRA 2023–2028: Disease Management; Health Security, Emergency, and DRM)</p>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            {stat:'+11.5%',desc:'Increase in Aedes aegypti vectorial capacity since 1950–1959 baseline (Romanello et al., 2023 — Lancet Countdown)'},
            {stat:'2.3x',desc:'Barangay Sooc case rate above national alert threshold (428.3 vs. 186.4 per 100,000 — ICHO, 2024)'},
            {stat:'64%',desc:'Surge in national dengue cases in 2023 vs. 2022 — 203,482 cases, 711 deaths (DOH, 2024)'},
          ].map((e,i)=>(
            <div key={i} className="bg-emerald-50 rounded-lg p-3 border border-emerald-100">
              <p className="text-2xl font-bold text-emerald-700">{e.stat}</p>
              <p className="text-xs text-gray-600 mt-1">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
