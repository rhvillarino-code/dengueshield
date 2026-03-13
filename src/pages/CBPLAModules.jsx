import React,{useState} from 'react'
import {CheckCircle,Clock,Lock,BookOpen,Users,Award,BarChart2} from 'lucide-react'
import {cbplaModules} from '../data/sampleData'

const statusIcon = {completed:CheckCircle, in_progress:Clock, locked:Lock}
const statusColor = {completed:'text-green-500', in_progress:'text-blue-500', locked:'text-gray-400'}
const statusBg = {completed:'bg-green-100', in_progress:'bg-blue-100', locked:'bg-gray-100'}
const statusLabel = {completed:'Completed', in_progress:'In Progress', locked:'Locked'}

export default function CBPLAModules(){
  const [active, setActive] = useState(null)
  const totalLessons = cbplaModules.reduce((a,m) => a+m.lessons, 0)
  const completedLessons = cbplaModules.reduce((a,m) => a+Math.round(m.lessons*m.progress/100), 0)
  const pct = Math.round(completedLessons/totalLessons*100)
  const totalParticipants = Math.max(...cbplaModules.map(m=>m.participants))

  return(
    <div className="p-4 lg:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">CBPLA Digital Learning Modules</h1>
        <p className="text-sm text-gray-500">Community-Based Participatory Learning and Action — Hiligaynon and Filipino | Based on Pretty et al. (1995) PLA Methodology</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {icon:BookOpen,label:'Total Lessons',value:totalLessons,color:'bg-blue-500'},
          {icon:CheckCircle,label:'Completed Lessons',value:completedLessons,color:'bg-green-500'},
          {icon:Users,label:'Active Participants',value:totalParticipants,color:'bg-purple-500'},
          {icon:Award,label:'Overall Completion',value: pct + "%",color:'bg-emerald-600'},
        ].map((s,i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border p-4">
            <div className={"p-2 rounded-lg w-fit " + s.color}><s.icon className="w-5 h-5 text-white"/></div>
            <p className="mt-2 text-2xl font-bold text-gray-900">{s.value}</p>
            <p className="text-sm text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200 p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm text-emerald-700 font-medium">Intervention Group — Overall Module Progress</p>
            <p className="text-3xl font-bold text-emerald-900 mt-1">{completedLessons}/{totalLessons} Lessons</p>
            <p className="text-sm text-emerald-600">Target: 100% by end of Month 10</p>
          </div>
          <div className="w-full sm:w-60">
            <div className="flex justify-between text-xs text-emerald-700 mb-1.5">
              <span>Progress</span><span>{pct}%</span>
            </div>
            <div className="h-5 bg-emerald-200 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-600 rounded-full transition-all flex items-center justify-end pr-2" style={{width: pct + "%"}}>
                <span className="text-white text-xs font-bold">{pct}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {cbplaModules.map((m,i) => {
          const Icon = statusIcon[m.status]
          const isOpen = active===m.id
          return(
            <div key={m.id} className={"bg-white rounded-xl shadow-sm border overflow-hidden transition-all " + (m.status==='locked'?'opacity-60':'')}>
              <button className="w-full text-left p-5" onClick={() => m.status!=='locked' && setActive(isOpen?null:m.id)}>
                <div className="flex items-start gap-4">
                  <div className={"w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-lg font-bold text-gray-700 " + statusBg[m.status]}>
                    {m.status==='completed' ? <CheckCircle className="w-6 h-6 text-green-600"/> : i+1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{m.title}</h3>
                        <p className="text-sm text-gray-500 italic">{m.titleEn}</p>
                      </div>
                      <span className={"text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 " + (m.status==='completed'?'bg-green-100 text-green-700':m.status==='in_progress'?'bg-blue-100 text-blue-700':'bg-gray-100 text-gray-500')}>
                        {statusLabel[m.status]}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>{m.lessons} lessons</span>
                          <span>{m.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className={"h-full rounded-full " + (m.status==='completed'?'bg-green-500':'bg-blue-500')} style={{width: m.progress + "%"}}/>
                        </div>
                      </div>
                      {m.participants > 0 && (
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Users className="w-3 h-3"/>
                          <span>{m.participants}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 border-t bg-gray-50">
                  <div className="pt-4 grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-700 mb-3">{m.desc}</p>
                      <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-emerald-700 transition-colors">
                        <BookOpen className="w-4 h-4"/>
                        {m.status==='completed'?'Review Module':'Continue Module'}
                      </button>
                    </div>
                    {m.participants > 0 && (
                      <div className="bg-white rounded-lg border p-3">
                        <p className="text-xs font-semibold text-gray-600 mb-2">Module Statistics</p>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs"><span className="text-gray-500">Participants</span><span className="font-medium">{m.participants}/150</span></div>
                          <div className="flex justify-between text-xs"><span className="text-gray-500">Avg. Score</span><span className="font-medium">{m.avgScore}%</span></div>
                          <div className="flex justify-between text-xs"><span className="text-gray-500">Completion Rate</span><span className="font-medium">{Math.round(m.participants/150*100)}%</span></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-5">
        <h3 className="font-semibold text-gray-900 mb-1">Monthly CBPLA Community Action Cycle</h3>
        <p className="text-xs text-gray-500 mb-4">Based on Pretty et al. (1995) Participatory Learning and Action methodology. 7 cycles completed over 7-month implementation period.</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {step:'1. IDENTIFY',color:'bg-blue-50 border-blue-200 text-blue-900',desc:'Map breeding sites using DengueSHIELD app. Review surveillance data with BHWs. Identify high-risk households.'},
            {step:'2. PLAN',color:'bg-amber-50 border-amber-200 text-amber-900',desc:'Prioritize sites by risk score. Assign tasks to community task force. Schedule clean-up and education activities.'},
            {step:'3. ACT',color:'bg-green-50 border-green-200 text-green-900',desc:'Execute clean-up drives. Remove or cover containers. Conduct house-to-house health education. Submit BHW reports.'},
            {step:'4. REFLECT',color:'bg-purple-50 border-purple-200 text-purple-900',desc:'Review platform data and vector indices. Measure cycle impact. Document lessons learned. Adjust next cycle.'},
          ].map(x => (
            <div key={x.step} className={"rounded-lg border p-4 " + x.color}>
              <p className="font-bold text-sm mb-2">{x.step}</p>
              <p className="text-xs leading-relaxed">{x.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {[
            {label:'Cycles Completed',value:'7 / 7',sub:'100% on schedule'},
            {label:'Avg. Household Participation',value:'87%',sub:'Target: >80%'},
            {label:'BHW Report Compliance',value:'90%',sub:'18/20 BHWs'},
          ].map(s => (
            <div key={s.label} className="bg-emerald-50 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-emerald-800">{s.value}</p>
              <p className="text-xs font-medium text-emerald-700">{s.label}</p>
              <p className="text-xs text-emerald-500">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
