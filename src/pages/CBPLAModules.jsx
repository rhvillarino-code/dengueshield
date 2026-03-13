import React,{useState} from 'react'
import {CheckCircle,Clock,Lock,ChevronRight,BookOpen} from 'lucide-react'
import {cbplaModules} from '../data/sampleData'

const statusIcon = {completed:CheckCircle, in_progress:Clock, locked:Lock}
const statusColor = {completed:'text-green-500', in_progress:'text-blue-500', locked:'text-gray-400'}
const statusBg = {completed:'bg-green-100', in_progress:'bg-blue-100', locked:'bg-gray-100'}

export default function CBPLAModules(){
  const [active, setActive] = useState(null)
  const totalLessons = cbplaModules.reduce((a,m)=>a+m.lessons,0)
  const completedLessons = cbplaModules.reduce((a,m)=>a+Math.round(m.lessons*m.progress/100),0)
  const pct = Math.round(completedLessons/totalLessons*100)

  return(
    <div className="p-4 lg:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">CBPLA Digital Learning Modules</h1>
        <p className="text-sm text-gray-500">Community-Based Participatory Learning and Action — culturally adapted in Hiligaynon and Filipino</p>
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200 p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm text-emerald-700 font-medium">Overall Completion — Intervention Group</p>
            <p className="text-3xl font-bold text-emerald-900 mt-1">{completedLessons}/{totalLessons} Lessons</p>
            <p className="text-sm text-emerald-600">{pct}% complete</p>
          </div>
          <div className="w-full sm:w-56">
            <div className="flex justify-between text-xs text-emerald-700 mb-1">
              <span>Progress</span><span>{pct}%</span>
            </div>
            <div className="h-4 bg-emerald-200 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-600 rounded-full transition-all" style={{width:`${pct}%`}}/>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {cbplaModules.map((m,i)=>{
          const Icon = statusIcon[m.status]
          const isOpen = active === m.id
          return(
            <div key={m.id} className={`bg-white rounded-xl shadow-sm border overflow-hidden ${m.status==='locked'?'opacity-60':''}`}>
              <button className="w-full text-left p-5" onClick={()=>m.status!=='locked'&&setActive(isOpen?null:m.id)}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-lg font-bold text-gray-700 ${statusBg[m.status]}`}>
                    {i+1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-base">{m.title}</h3>
                        <p className="text-sm text-gray-500 italic">{m.titleEn}</p>
                      </div>
                      <Icon className={`w-5 h-5 flex-shrink-0 ${statusColor[m.status]}`}/>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>{m.lessons} lessons</span><span>{m.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full transition-all ${m.status==='completed'?'bg-green-500':'bg-blue-500'}`} style={{width:`${m.progress}%`}}/>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 border-t pt-4 bg-gray-50">
                  <p className="text-sm text-gray-700 mb-3">{m.desc}</p>
                  <div className="flex items-center gap-3">
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-emerald-700">
                      <BookOpen className="w-4 h-4"/>
                      {m.status==='completed'?'Review Module':'Continue Module'}
                    </button>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${m.status==='completed'?'bg-green-100 text-green-700':'bg-blue-100 text-blue-700'}`}>
                      {m.status==='completed'?'Completed':'In Progress'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-5">
        <h3 className="font-semibold text-gray-900 mb-4">Monthly Community Action Cycle</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {step:'1. IDENTIFY',color:'bg-blue-50 border-blue-200 text-blue-800',desc:'Map breeding sites, assess risk, review surveillance data with BHWs'},
            {step:'2. PLAN',color:'bg-amber-50 border-amber-200 text-amber-800',desc:'Prioritize sites, assign tasks to community task force, set cleanup schedule'},
            {step:'3. ACT',color:'bg-green-50 border-green-200 text-green-800',desc:'Execute cleanup, remove containers, conduct house-to-house education'},
            {step:'4. REFLECT',color:'bg-purple-50 border-purple-200 text-purple-800',desc:'Review data, measure impact, document lessons, adjust next cycle'},
          ].map(x=>(
            <div key={x.step} className={`rounded-lg border p-4 ${x.color}`}>
              <p className="font-bold text-sm mb-2">{x.step}</p>
              <p className="text-xs leading-relaxed">{x.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-3">Cycle frequency: monthly | Cycle #7 of 7 completed | Based on Pretty et al. (1995) Participatory Learning and Action methodology</p>
      </div>
    </div>
  )
}
