import React from 'react'
import {AlertTriangle,Info,ShieldAlert} from 'lucide-react'
import {RadarChart,Radar,PolarGrid,PolarAngleAxis,PolarRadiusAxis,ResponsiveContainer,BarChart,Bar,XAxis,YAxis,Tooltip,CartesianGrid,Legend,Cell} from 'recharts'
import {riskZones} from '../data/sampleData'

const radarData = [
  {factor:'Container Density',p1:90,p4:25},
  {factor:'Drainage Quality',p1:85,p4:20},
  {factor:'KAP Score (inv)',p1:80,p4:30},
  {factor:'Pop. Density',p1:70,p4:35},
  {factor:'Rainfall Exp.',p1:75,p4:50},
  {factor:'Dengue History',p1:95,p4:30},
]

const actionMap = {
  Critical:{action:'Immediate clean-up + daily BHW monitoring + LGU emergency response + all-household CBPLA activation',color:'bg-red-50 border-red-200 text-red-800'},
  High:{action:'Weekly household surveillance + targeted CBPLA cycles + community clean-up drive',color:'bg-orange-50 border-orange-200 text-orange-800'},
  Moderate:{action:'Bi-weekly BHW visits + group CBPLA sessions + household container management education',color:'bg-yellow-50 border-yellow-200 text-yellow-800'},
  Low:{action:'Monthly routine monitoring + sustain CBPLA practices + model barangay documentation',color:'bg-green-50 border-green-200 text-green-800'},
}

const barColors = {Critical:'#dc2626',High:'#f97316',Moderate:'#eab308',Low:'#22c55e'}

export default function RiskAssessment(){
  return(
    <div className="p-4 lg:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">AI-Assisted Risk Stratification</h1>
        <p className="text-sm text-gray-500">Logistic regression engine trained on ICHO and PAGASA historical data (2019-2024)</p>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
        <ShieldAlert className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5"/>
        <div>
          <p className="font-semibold text-red-800">Current System Risk: ELEVATED</p>
          <p className="text-sm text-red-700 mt-1">AI model (logistic regression, 6 predictors) assigns elevated transmission risk for the next 14 days. Inputs: rainfall 230 mm, humidity 84%, BI = 26. Puroks 1 and 5 flagged as priority action zones.</p>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5"/>
        <p className="text-xs text-slate-600"><strong>AI Model:</strong> Logistic regression with 6 predictors: container density index, drainage quality score (inverted), KAP composite score (inverted), population density, cumulative 30-day rainfall, and 5-year dengue case history. Trained on ICHO surveillance data 2019-2024. Validated using ROC-AUC = 0.84. Outputs a 0-100 risk score per purok, updated weekly from BHW field data.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h3 className="font-semibold mb-1">Risk Score by Purok</h3>
          <p className="text-xs text-gray-500 mb-3">Score: 0 = no risk, 100 = maximum risk. Updated weekly from BHW surveillance data.</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={riskZones} layout="vertical" margin={{right:50}}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis type="number" domain={[0,100]} tick={{fontSize:11}}/>
              <YAxis dataKey="zone" type="category" width={70} tick={{fontSize:11}}/>
              <Tooltip formatter={(v) => v + "/100"}/>
              <Bar dataKey="score" radius={[0,6,6,0]} label={{position:'right',fontSize:12,fontWeight:'bold'}}>
                {riskZones.map(z => <Cell key={z.zone} fill={barColors[z.risk]}/>)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h3 className="font-semibold mb-1">Risk Factor Radar</h3>
          <p className="text-xs text-gray-500 mb-3">Purok 1 (Critical, score 89) vs. Purok 4 (Low, score 31) — 6 predictor variables</p>
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
        <h3 className="font-semibold mb-3">Zone Details and Recommended Actions</h3>
        <div className="space-y-3">
          {riskZones.map(z => {
            const am = actionMap[z.risk]
            return (
              <div key={z.zone} className={"rounded-lg border p-4 " + am.color}>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="font-bold text-sm">{z.fullName}</p>
                    <p className="text-xs">{z.households} households | {z.cases2023} dengue cases (2023) | Risk Score: {z.score}/100</p>
                  </div>
                  <span className={"text-xs font-bold px-2 py-1 rounded-full " + (z.risk==='Critical'?'bg-red-200 text-red-800':z.risk==='High'?'bg-orange-200 text-orange-800':z.risk==='Moderate'?'bg-yellow-200 text-yellow-800':'bg-green-200 text-green-800')}>
                    {z.risk} Risk
                  </span>
                </div>
                <p className="text-xs"><strong>Key factors:</strong> {z.factors.join(' | ')}</p>
                <p className="text-xs mt-1"><strong>Action:</strong> {am.action}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
