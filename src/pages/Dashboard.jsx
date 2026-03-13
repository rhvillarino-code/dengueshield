import React from 'react'
import { Bug, Droplets, AlertTriangle, Users, TrendingDown, TrendingUp, Activity, ExternalLink } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, LineChart, Line, ReferenceLine } from 'recharts'
import { vectorIndices, controlIndices, climateData, breedingSites, riskZones, kapData, projectTimeline, nationalStats, regionStats, cityStats } from '../data/sampleData'

function StatCard({ icon: Icon, label, value, sub, color, trend, trendLabel }) {
  const down = trend < 0
  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className={'p-2 rounded-lg ' + color}><Icon className="w-5 h-5 text-white" /></div>
        {trend !== undefined && (
          <span className={'text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1 ' + (down ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700')}>
            {down ? <TrendingDown className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
            {Math.abs(trend)}%
          </span>
        )}
      </div>
      <p className="mt-3 text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
      {trendLabel && <p className="text-xs text-emerald-600 mt-1 font-medium">{trendLabel}</p>}
    </div>
  )
}

const interventionVsControl = vectorIndices.map((v, i) => ({
  month: v.month,
  'Intervention (BI)': v.bi,
  'Control (BI)': controlIndices[i]?.bi || null,
}))

const kapComparison = [
  { name: 'Knowledge', IntBaseline: kapData.baseline.knowledge, IntEndline: kapData.endline.knowledge, CtrlBaseline: kapData.control_baseline.knowledge, CtrlEndline: kapData.control_endline.knowledge },
  { name: 'Attitudes', IntBaseline: kapData.baseline.attitudes, IntEndline: kapData.endline.attitudes, CtrlBaseline: kapData.control_baseline.attitudes, CtrlEndline: kapData.control_endline.attitudes },
  { name: 'Practices', IntBaseline: kapData.baseline.practices, IntEndline: kapData.endline.practices, CtrlBaseline: kapData.control_baseline.practices, CtrlEndline: kapData.control_endline.practices },
]

const statusColors = { completed: 'bg-emerald-500', in_progress: 'bg-blue-500', upcoming: 'bg-gray-300' }
const statusLabels = { completed: 'Completed', in_progress: 'In Progress', upcoming: 'Upcoming' }

export default function Dashboard() {
  const latest = vectorIndices[vectorIndices.length - 1]
  const prev = vectorIndices[vectorIndices.length - 2]
  const biTrend = Math.round(((latest.bi - prev.bi) / prev.bi) * 100)
  const ciTrend = Math.round(((latest.ci - prev.ci) / prev.ci) * 100)
  const activeSites = breedingSites.filter(s => s.status === 'Active').length

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Surveillance Dashboard</h1>
          <p className="text-sm text-gray-500">DengueSHIELD | Barangay Sooc, Arevalo, Iloilo City</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Activity className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-medium text-emerald-700">Live Surveillance Active</span>
        </div>
      </div>

      {/* Real national/regional data alert */}
      <div className="grid sm:grid-cols-3 gap-3">
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-xs font-bold text-red-700 uppercase tracking-wide">National (Philippines)</p>
          <p className="text-2xl font-bold text-red-800">{nationalStats.totalCases.toLocaleString()}</p>
          <p className="text-xs text-red-600">Dengue cases | {nationalStats.totalDeaths} deaths</p>
          <p className="text-xs text-red-500 mt-1">+{nationalStats.changeFromPriorYear}% vs 2023 | As of {nationalStats.asOf}</p>
          <a href="https://doh.gov.ph" target="_blank" rel="noopener noreferrer" className="text-xs text-red-600 hover:underline flex items-center gap-1 mt-1"><ExternalLink className="w-3 h-3" />DOH EB Source</a>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
          <p className="text-xs font-bold text-orange-700 uppercase tracking-wide">Region VI (Western Visayas)</p>
          <p className="text-2xl font-bold text-orange-800">{regionStats.totalCases.toLocaleString()}</p>
          <p className="text-xs text-orange-600">{regionStats.totalDeaths} deaths | {regionStats.hotspotBarangays} hotspot barangays</p>
          <p className="text-xs text-orange-500 mt-1">+{regionStats.changeFromPriorYear}% vs 2023 | Jan-Aug 2024</p>
          <a href="https://www.pna.gov.ph/articles/1233025" target="_blank" rel="noopener noreferrer" className="text-xs text-orange-600 hover:underline flex items-center gap-1 mt-1"><ExternalLink className="w-3 h-3" />DOH WV CHD Source</a>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
          <p className="text-xs font-bold text-amber-700 uppercase tracking-wide">Iloilo City</p>
          <p className="text-2xl font-bold text-amber-800">{cityStats.totalCases.toLocaleString()}</p>
          <p className="text-xs text-amber-600">{cityStats.totalDeaths} deaths | Jan-Aug 2024</p>
          <p className="text-xs text-amber-500 mt-1">Barangay Sooc: 428.3/100,000 (2.3x threshold)</p>
          <span className="text-xs text-amber-600 mt-1 block font-medium">Source: ICHO, 2024</span>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-amber-800">PAGASA Climate Alert — Elevated Dengue Risk</p>
          <p className="text-xs text-amber-700 mt-0.5">Rainfall forecast 180-220 mm over next 7 days. AI model elevated risk for Puroks 1 and 5. BHW surveillance increased to twice weekly per protocol.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Bug} label="Breteau Index (BI)" value={latest.bi} sub={'Epidemic threshold: 50 | ' + latest.month} color="bg-red-500" trend={biTrend} trendLabel="vs. control: 44 (stable)" />
        <StatCard icon={Droplets} label="Container Index (CI)" value={latest.ci + '%'} sub={'WHO threshold: 10% | ' + latest.month} color="bg-blue-500" trend={ciTrend} />
        <StatCard icon={AlertTriangle} label="Active Breeding Sites" value={activeSites} sub={breedingSites.length + ' total sites GPS-mapped'} color="bg-amber-500" />
        <StatCard icon={Users} label="Households Enrolled" value="300" sub="150 intervention + 150 control" color="bg-emerald-600" trendLabel="GAD: 40%+ female-headed HH" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h3 className="font-semibold text-gray-900 mb-1">Intervention vs. Control Group — Breteau Index</h3>
          <p className="text-xs text-gray-500 mb-3">Quasi-experimental design (p &lt; 0.05 by Month 10). WHO epidemic threshold = 50. Source: DengueSHIELD surveillance data.</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={interventionVsControl}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 9 }} angle={-20} textAnchor="end" height={50} />
              <YAxis tick={{ fontSize: 11 }} domain={[0, 65]} />
              <Tooltip />
              <Legend />
              <ReferenceLine y={50} stroke="#dc2626" strokeDasharray="6 3" label={{ value: "WHO Epidemic Threshold", fontSize: 9, fill: "#dc2626" }} />
              <Line type="monotone" dataKey="Intervention (BI)" stroke="#10b981" strokeWidth={3} dot={{ r: 5 }} />
              <Line type="monotone" dataKey="Control (BI)" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h3 className="font-semibold text-gray-900 mb-1">Dengue Cases vs. Rainfall (Iloilo City Climate)</h3>
          <p className="text-xs text-gray-500 mb-3">PAGASA historical data for Iloilo City. Peak transmission: June-August (245-310 mm rainfall).</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={climateData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis yAxisId="left" tick={{ fontSize: 11 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="rainfall" fill="#93c5fd" name="Rainfall (mm)" radius={[4, 4, 0, 0]} />
              <Bar yAxisId="right" dataKey="dengCases" fill="#f87171" name="Dengue Cases (Sooc)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4">
        <h3 className="font-semibold text-gray-900 mb-1">KAP Scores — Intervention vs. Control (Baseline and Endline)</h3>
        <p className="text-xs text-gray-500 mb-3">Statistically significant improvement in intervention group (p &lt; 0.05). Effect sizes: Knowledge d=1.14, Attitudes d=0.98, Practices d=1.21.</p>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={kapComparison} barGap={2} barCategoryGap="20%">
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} unit="%" />
            <Tooltip formatter={(v) => v + '%'} />
            <Legend />
            <Bar dataKey="IntBaseline" name="Intervention-Baseline" fill="#94a3b8" radius={[3, 3, 0, 0]} />
            <Bar dataKey="IntEndline" name="Intervention-Endline" fill="#10b981" radius={[3, 3, 0, 0]} />
            <Bar dataKey="CtrlBaseline" name="Control-Baseline" fill="#d1d5db" radius={[3, 3, 0, 0]} />
            <Bar dataKey="CtrlEndline" name="Control-Endline" fill="#6b7280" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4">
        <h3 className="font-semibold text-gray-900 mb-3">Project Phase Progress</h3>
        <div className="space-y-3">
          {projectTimeline.map(p => (
            <div key={p.phase} className="flex items-center gap-4">
              <div className="w-24 text-right flex-shrink-0">
                <p className="text-xs font-bold text-gray-700">{p.phase}</p>
                <p className="text-xs text-gray-400">{p.months}</p>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm text-gray-700">{p.label}</p>
                  <span className={'text-xs px-2 py-0.5 rounded-full font-medium ' + (p.status === 'completed' ? 'bg-emerald-100 text-emerald-700' : p.status === 'in_progress' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500')}>
                    {statusLabels[p.status]}
                  </span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className={'h-full rounded-full ' + statusColors[p.status]} style={{ width: p.pct + '%' }} />
                </div>
              </div>
              <div className="w-10 text-xs font-bold text-gray-600 text-right">{p.pct}%</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4">
        <h3 className="font-semibold text-gray-900 mb-3">AI Risk Zone Summary (Logistic Regression, ROC-AUC = 0.84)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {riskZones.map(z => (
            <div key={z.zone} className={'rounded-lg p-3 border-l-4 ' + (z.risk === 'Critical' ? 'border-red-600 bg-red-50' : z.risk === 'High' ? 'border-orange-500 bg-orange-50' : z.risk === 'Moderate' ? 'border-yellow-500 bg-yellow-50' : 'border-green-500 bg-green-50')}>
              <p className="font-semibold text-sm text-gray-900">{z.zone}</p>
              <p className={'text-xs font-bold ' + (z.risk === 'Critical' ? 'text-red-700' : z.risk === 'High' ? 'text-orange-700' : z.risk === 'Moderate' ? 'text-yellow-700' : 'text-green-700')}>{z.risk} — {z.score}/100</p>
              <p className="text-xs text-gray-500 mt-1">{z.households} households</p>
              <p className="text-xs text-gray-400">{z.cases2023} cases (2023)</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4">
        <h3 className="font-semibold text-gray-900 mb-3">Recent Platform Activity</h3>
        <div className="space-y-2">
          {[
            { dot: 'bg-green-500', text: 'CBPLA Cycle 7 completed — 89% household participation rate', time: '2 hours ago' },
            { dot: 'bg-amber-500', text: 'Critical breeding site in Purok 1 — BHW dispatched within 2 hours', time: '5 hours ago' },
            { dot: 'bg-blue-500', text: 'Weekly surveillance data uploaded by 18/20 BHWs (90% compliance)', time: '1 day ago' },
            { dot: 'bg-purple-500', text: 'Sex-disaggregated KAP report generated — female HH: 82% knowledge endline', time: '2 days ago' },
            { dot: 'bg-green-500', text: 'Participatory GIS mapping session 2 completed — 12 new sites added', time: '3 days ago' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-gray-50">
              <div className={'w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ' + item.dot} />
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
