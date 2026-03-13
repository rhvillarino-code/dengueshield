import React from 'react'
import {Bug,Droplets,AlertTriangle,Users,TrendingDown,TrendingUp} from 'lucide-react'
import {AreaChart,Area,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,BarChart,Bar,Legend} from 'recharts'
import {vectorIndices,climateData,breedingSites,riskZones,kapData} from '../data/sampleData'

function StatCard({icon:Icon,label,value,sub,color,trend}){
  const down = trend < 0
  return(
    <div className="bg-white rounded-xl shadow-sm border p-4">
      <div className="flex items-start justify-between">
        <div className={`p-2 rounded-lg ${color}`}><Icon className="w-5 h-5 text-white"/></div>
        {trend!==undefined && (
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1 ${down?'bg-green-100 text-green-700':'bg-red-100 text-red-700'}`}>
            {down ? <TrendingDown className="w-3 h-3"/> : <TrendingUp className="w-3 h-3"/>}
            {Math.abs(trend)}%
          </span>
        )}
      </div>
      <p className="mt-3 text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </div>
  )
}

const kapComparison = [
  {name:'Knowledge',Baseline:kapData.baseline.knowledge,Endline:kapData.endline.knowledge},
  {name:'Attitudes',Baseline:kapData.baseline.attitudes,Endline:kapData.endline.attitudes},
  {name:'Practices',Baseline:kapData.baseline.practices,Endline:kapData.endline.practices},
]

export default function Dashboard(){
  const latest = vectorIndices[vectorIndices.length-1]
  const prev = vectorIndices[vectorIndices.length-2]
  const biTrend = Math.round(((latest.bi-prev.bi)/prev.bi)*100)
  const activeSites = breedingSites.filter(s=>s.status==='Active').length

  return(
    <div className="p-4 lg:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Surveillance Dashboard</h1>
        <p className="text-sm text-gray-500">DengueSHIELD — Barangay Sooc, Arevalo, Iloilo City | Real-time vector and climate surveillance</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"/>
        <div>
          <p className="text-sm font-medium text-amber-800">Climate Alert: Increased rainfall expected this week</p>
          <p className="text-xs text-amber-600">PAGASA forecast: 180–220 mm over next 7 days. AI risk elevated for Puroks 1 and 5.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Bug} label="Breteau Index (BI)" value={latest.bi} sub={`Target: <20 | ${latest.month}`} color="bg-red-500" trend={biTrend}/>
        <StatCard icon={Droplets} label="Container Index (CI)" value={`${latest.ci}%`} sub={`Target: <10% | ${latest.month}`} color="bg-blue-500" trend={Math.round(((latest.ci-prev.ci)/prev.ci)*100)}/>
        <StatCard icon={AlertTriangle} label="Active Breeding Sites" value={activeSites} sub={`${breedingSites.length} total sites mapped`} color="bg-amber-500"/>
        <StatCard icon={Users} label="Households Enrolled" value="300" sub="150 intervention + 150 control" color="bg-emerald-600"/>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h3 className="font-semibold text-gray-900 mb-1">Vector Indices Trend (Monthly)</h3>
          <p className="text-xs text-gray-500 mb-3">BI, CI, HI — intervention site</p>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={vectorIndices}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
              <XAxis dataKey="month" tick={{fontSize:10}} angle={-20} textAnchor="end" height={50}/>
              <YAxis tick={{fontSize:11}}/>
              <Tooltip/>
              <Legend/>
              <Area type="monotone" dataKey="bi" stroke="#ef4444" fill="#fecaca" name="Breteau Index"/>
              <Area type="monotone" dataKey="ci" stroke="#3b82f6" fill="#bfdbfe" name="Container Index"/>
              <Area type="monotone" dataKey="hi" stroke="#eab308" fill="#fef08a" name="House Index"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h3 className="font-semibold text-gray-900 mb-1">Dengue Cases vs. Rainfall</h3>
          <p className="text-xs text-gray-500 mb-3">Climate-responsive surveillance — PAGASA data</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={climateData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
              <XAxis dataKey="month" tick={{fontSize:11}}/>
              <YAxis yAxisId="left" tick={{fontSize:11}}/>
              <YAxis yAxisId="right" orientation="right" tick={{fontSize:11}}/>
              <Tooltip/>
              <Legend/>
              <Bar yAxisId="left" dataKey="rainfall" fill="#93c5fd" name="Rainfall (mm)" radius={[4,4,0,0]}/>
              <Bar yAxisId="right" dataKey="dengCases" fill="#f87171" name="Dengue Cases" radius={[4,4,0,0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4">
        <h3 className="font-semibold text-gray-900 mb-1">KAP Scores: Baseline vs. Endline</h3>
        <p className="text-xs text-gray-500 mb-3">Intervention group (n=150). Statistically significant improvement (p &lt; 0.05)</p>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={kapComparison} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
            <XAxis dataKey="name" tick={{fontSize:12}}/>
            <YAxis domain={[0,100]} tick={{fontSize:11}} unit="%"/>
            <Tooltip formatter={(v)=>`${v}%`}/>
            <Legend/>
            <Bar dataKey="Baseline" fill="#94a3b8" radius={[4,4,0,0]}/>
            <Bar dataKey="Endline" fill="#10b981" radius={[4,4,0,0]}/>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4">
        <h3 className="font-semibold text-gray-900 mb-3">AI Risk Stratification — Zone Summary</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {riskZones.map(z=>(
            <div key={z.zone} className={`rounded-lg p-3 border-l-4 ${z.risk==='Critical'?'border-red-600 bg-red-50':z.risk==='High'?'border-orange-500 bg-orange-50':z.risk==='Moderate'?'border-yellow-500 bg-yellow-50':'border-green-500 bg-green-50'}`}>
              <p className="font-medium text-sm text-gray-900">{z.zone}</p>
              <p className={`text-xs font-bold ${z.risk==='Critical'?'text-red-700':z.risk==='High'?'text-orange-700':z.risk==='Moderate'?'text-yellow-700':'text-green-700'}`}>{z.risk} ({z.score})</p>
              <p className="text-xs text-gray-500 mt-1">{z.households} households</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4">
        <h3 className="font-semibold text-gray-900 mb-3">Recent Activity</h3>
        <div className="space-y-2">
          {[
            {dot:'bg-green-500',text:'CBPLA Cycle #7 completed — 89% participation rate',time:'2 hours ago'},
            {dot:'bg-amber-500',text:'New breeding site in Purok 1 reported — BHW dispatched',time:'5 hours ago'},
            {dot:'bg-blue-500',text:'Weekly surveillance uploaded by 18/20 BHWs',time:'1 day ago'},
            {dot:'bg-green-500',text:'GIS workshop #2 completed — 12 new sites mapped',time:'3 days ago'},
          ].map((item,i)=>(
            <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50">
              <div className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${item.dot}`}/>
              <div className="flex-1">
                <p className="text-sm text-gray-700">{item.text}</p>
                <p className="text-xs text-gray-400">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
