import React from 'react'
import {AlertTriangle,Info} from 'lucide-react'
import {RadarChart,Radar,PolarGrid,PolarAngleAxis,PolarRadiusAxis,ResponsiveContainer,BarChart,Bar,XAxis,YAxis,Tooltip,CartesianGrid,Legend} from 'recharts'
import {riskZones} from '../data/sampleData'

const radarData = [
  {factor:'Container Density',p1:90,p4:25},
  {factor:'Drainage Quality',p1:85,p4:20},
  {factor:'KAP Score (inv.)',p1:80,p4:30},
  {factor:'Pop. Density',p1:70,p4:35},
  {factor:'Rainfall Exposure',p1:75,p4:50},
  {factor:'Dengue History',p1:95,p4:30},
]

const actionMap = {
  Critical:'Immediate cleanup + daily BHW monitoring + LGU alert',
  High:'Weekly household surveillance + targeted CBPLA',
  Moderate:'Bi-weekly checks + community awareness sessions',
  Low:'Monthly monitoring + sustain existing practices',
}

export default function RiskAssessment(){
  return(
    <div className="p-4 lg:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">AI-Assisted Risk Stratification</h1>
        <p className="text-sm text-gray-500">Logistic regression engine trained on ICHO and PAGASA historical data (2019–2024)</p>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
        <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5"/>
        <div>
          <p className="font-semibold text-red-800">Current Risk Level: ELEVATED</p>
          <p className="text-sm text-red-700 mt-1">AI model predicts elevated transmission risk for next 14 days based on: rainfall 230 mm (Oct), humidity 84%, Breteau Index 26 — Puroks 1 and 5 flagged as priority areas for intervention.</p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5"/>
        <p className="text-xs text-blue-700">Risk scores are calculated using logistic regression with 6 input variables: container density, drainage quality, KAP scores (inverted), population density, cumulative rainfall (preceding 30 days), and 5-year dengue case history. Model validated on ICHO surveillance data 2019–2024.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h3 className="font-semibold mb-3">Risk Score by Purok</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={riskZones} layout="vertical" margin={{right:40}}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis type="number" domain={[0,100]} tick={{fontSize:11}}/>
              <YAxis dataKey="zone" type="category" width={130} tick={{fontSize:10}}/>
              <Tooltip formatter={(v)=>`${v}/100`}/>
              <Bar dataKey="score" radius={[0,6,6,0]} label={{position:'right',fontSize:11}}
                fill="#ef4444"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h3 className="font-semibold mb-1">Risk Factor Comparison</h3>
          <p className="text-xs text-gray-500 mb-3">Purok 1 (Critical) vs. Purok 4 (Low Risk)</p>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid/>
              <PolarAngleAxis dataKey="factor" tick={{fontSize:9}}/>
              <PolarRadiusAxis angle={30} domain={[0,100]} tick={{fontSize:9}}/>
              <Legend/>
              <Radar name="Purok 1 (Critical)" dataKey="p1" stroke="#dc2626" fill="#dc2626" fillOpacity={0.35}/>
              <Radar name="Purok 4 (Low)" dataKey="p4" stroke="#22c55e" fill="#22c55e" fillOpacity={0.35}/>
              <Tooltip/>
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4">
        <h3 className="font-semibold mb-3">Zone Risk Details and Recommended Actions</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="p-3 rounded-tl-lg">Zone</th>
                <th className="p-3">Risk Level</th>
                <th className="p-3">Score</th>
                <th className="p-3">Households</th>
                <th className="p-3">Key Risk Factors</th>
                <th className="p-3 rounded-tr-lg">Recommended Action</th>
              </tr>
            </thead>
            <tbody>
              {riskZones.map(z=>(
                <tr key={z.zone} className="border-t hover:bg-gray-50">
                  <td className="p-3 font-medium">{z.zone}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${z.risk==='Critical'?'bg-red-100 text-red-700':z.risk==='High'?'bg-orange-100 text-orange-700':z.risk==='Moderate'?'bg-yellow-100 text-yellow-700':'bg-green-100 text-green-700'}`}>
                      {z.risk}
                    </span>
                  </td>
                  <td className="p-3 font-bold text-center">{z.score}/100</td>
                  <td className="p-3 text-center">{z.households}</td>
                  <td className="p-3 text-xs">{z.factors.join('; ')}</td>
                  <td className="p-3 text-xs text-gray-600">{actionMap[z.risk]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
