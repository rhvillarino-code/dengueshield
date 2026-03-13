import React,{useState} from 'react'
import {MessageSquare,Plus,CheckCircle,Clock,AlertCircle,Send,X} from 'lucide-react'
import {communityReports} from '../data/sampleData'

const statusCfg = {
  Verified:{icon:CheckCircle,badge:'bg-green-100 text-green-700'},
  Resolved:{icon:CheckCircle,badge:'bg-green-100 text-green-700'},
  Referred:{icon:AlertCircle,badge:'bg-blue-100 text-blue-700'},
  Pending:{icon:Clock,badge:'bg-amber-100 text-amber-700'},
  Noted:{icon:MessageSquare,badge:'bg-gray-100 text-gray-600'},
}

export default function CommunityReports(){
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({type:'Breeding Site',location:'',desc:''})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if(!form.location || !form.desc) return
    setSubmitted(true)
    setTimeout(()=>{setSubmitted(false);setShow(false);setForm({type:'Breeding Site',location:'',desc:''})},2500)
  }

  const counts = {
    total: communityReports.length,
    resolved: communityReports.filter(r=>r.status==='Verified'||r.status==='Resolved').length,
    pending: communityReports.filter(r=>r.status==='Pending').length,
    referred: communityReports.filter(r=>r.status==='Referred').length,
  }

  return(
    <div className="p-4 lg:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Community Reports</h1>
          <p className="text-sm text-gray-500">Household and BHW reporting — DengueSHIELD platform</p>
        </div>
        <button onClick={()=>setShow(!show)} className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-emerald-700">
          {show ? <X className="w-4 h-4"/> : <Plus className="w-4 h-4"/>}
          {show ? 'Close Form' : 'New Report'}
        </button>
      </div>

      {show && (
        <div className="bg-white rounded-xl shadow-sm border p-5">
          <h3 className="font-semibold mb-4">Submit New Report</h3>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2"/>
              <p className="font-medium text-green-800">Report submitted successfully!</p>
              <p className="text-sm text-green-600">A BHW will respond within 24 hours.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
                <select value={form.type} onChange={e=>setForm({...form,type:e.target.value})} className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Breeding Site</option>
                  <option>Suspected Case</option>
                  <option>Drainage Issue</option>
                  <option>Program Feedback</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location (Purok / Landmark)</label>
                <input type="text" value={form.location} onChange={e=>setForm({...form,location:e.target.value})} placeholder="e.g., Purok 1, near basketball court" className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea rows={3} value={form.desc} onChange={e=>setForm({...form,desc:e.target.value})} placeholder="Describe what you observed in detail..." className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Attach Photo (optional)</label>
                <input type="file" accept="image/*" className="w-full text-sm text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-sm file:bg-emerald-50 file:text-emerald-700"/>
              </div>
              <div className="flex items-end">
                <button onClick={handleSubmit} disabled={!form.location||!form.desc} className="bg-emerald-600 disabled:bg-gray-300 text-white px-6 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-emerald-700 transition-colors">
                  <Send className="w-4 h-4"/>Submit Report
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {label:'Total Reports',value:counts.total,color:'bg-gray-100 text-gray-800'},
          {label:'Verified / Resolved',value:counts.resolved,color:'bg-green-100 text-green-800'},
          {label:'Pending',value:counts.pending,color:'bg-amber-100 text-amber-800'},
          {label:'Referred',value:counts.referred,color:'bg-blue-100 text-blue-800'},
        ].map(s=>(
          <div key={s.label} className={`${s.color} rounded-xl p-4`}>
            <p className="text-3xl font-bold">{s.value}</p>
            <p className="text-sm font-medium mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="font-semibold">Recent Reports</h3>
          <span className="text-xs text-gray-500">Sorted by date (newest first)</span>
        </div>
        <div className="divide-y">
          {communityReports.map(r=>{
            const cfg = statusCfg[r.status] || statusCfg.Noted
            const Icon = cfg.icon
            return(
              <div key={r.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3">
                  <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${r.status==='Verified'||r.status==='Resolved'?'text-green-500':r.status==='Pending'?'text-amber-500':r.status==='Referred'?'text-blue-500':'text-gray-400'}`}/>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-medium text-sm">{r.type} — {r.reporter}</p>
                        <p className="text-xs text-gray-500">{r.location} | {r.date}</p>
                      </div>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${cfg.badge}`}>{r.status}</span>
                    </div>
                    <div className="mt-2 bg-gray-50 rounded-lg px-3 py-2">
                      <p className="text-xs text-gray-500 font-medium">BHW Response:</p>
                      <p className="text-sm text-gray-700">{r.response}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
