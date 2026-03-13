import React,{useState} from 'react'
import {MessageSquare,Plus,CheckCircle,Clock,AlertCircle,Send,X,Users} from 'lucide-react'
import {communityReports,bhwActivity} from '../data/sampleData'

const statusCfg = {
  Verified:{icon:CheckCircle,badge:'bg-green-100 text-green-700',dot:'bg-green-500'},
  Resolved:{icon:CheckCircle,badge:'bg-green-100 text-green-700',dot:'bg-green-500'},
  Referred:{icon:AlertCircle,badge:'bg-blue-100 text-blue-700',dot:'bg-blue-500'},
  Pending:{icon:Clock,badge:'bg-amber-100 text-amber-700',dot:'bg-amber-500'},
  Noted:{icon:MessageSquare,badge:'bg-gray-100 text-gray-600',dot:'bg-gray-400'},
}

export default function CommunityReports(){
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({type:'Breeding Site',location:'',desc:''})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if(!form.location || !form.desc) return
    setSubmitted(true)
    setTimeout(() => {setSubmitted(false);setShow(false);setForm({type:'Breeding Site',location:'',desc:''})}, 3000)
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
          <p className="text-sm text-gray-500">Household and BHW reporting system — DengueSHIELD platform</p>
        </div>
        <button onClick={() => setShow(!show)} className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-emerald-700 transition-colors">
          {show ? <X className="w-4 h-4"/> : <Plus className="w-4 h-4"/>}
          {show ? 'Close Form' : 'Submit New Report'}
        </button>
      </div>

      {show && (
        <div className="bg-white rounded-xl shadow-sm border p-5">
          <h3 className="font-semibold mb-4">Submit Community Report</h3>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3"/>
              <p className="font-semibold text-green-800 text-lg">Report submitted successfully!</p>
              <p className="text-sm text-green-600 mt-1">A Barangay Health Worker will respond within 24 hours.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
                <select value={form.type} onChange={e=>setForm({...form,type:e.target.value})} className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Breeding Site</option>
                  <option>Suspected Dengue Case</option>
                  <option>Drainage Issue</option>
                  <option>Program Feedback</option>
                  <option>BHW Assistance Request</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input type="text" value={form.location} onChange={e=>setForm({...form,location:e.target.value})} placeholder="e.g., Purok 1, near basketball court" className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea rows={3} value={form.desc} onChange={e=>setForm({...form,desc:e.target.value})} placeholder="Describe what you observed. Include number of containers, approximate larvae count, or patient symptoms if applicable." className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Attach Photo (optional)</label>
                <input type="file" accept="image/*" className="w-full text-sm text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-sm file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"/>
              </div>
              <div className="flex items-end">
                <button onClick={handleSubmit} disabled={!form.location||!form.desc} className="bg-emerald-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-emerald-700 transition-colors">
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
          {label:'Pending Response',value:counts.pending,color:'bg-amber-100 text-amber-800'},
          {label:'Referred to BHC',value:counts.referred,color:'bg-blue-100 text-blue-800'},
        ].map(s => (
          <div key={s.label} className={"rounded-xl p-4 " + s.color}>
            <p className="text-3xl font-bold">{s.value}</p>
            <p className="text-sm font-medium mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border">
          <div className="p-4 border-b flex items-center justify-between">
            <h3 className="font-semibold">Recent Reports</h3>
            <span className="text-xs text-gray-400">Sorted newest first</span>
          </div>
          <div className="divide-y">
            {communityReports.map(r => {
              const cfg = statusCfg[r.status] || statusCfg.Noted
              const Icon = cfg.icon
              return(
                <div key={r.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className={"w-2 h-2 rounded-full mt-2 flex-shrink-0 " + cfg.dot}/>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div>
                          <p className="font-medium text-sm">{r.type} — {r.reporter}</p>
                          <p className="text-xs text-gray-500">{r.location} | {r.date}</p>
                        </div>
                        <span className={"text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 " + cfg.badge}>{r.status}</span>
                      </div>
                      <div className="bg-gray-50 rounded-lg px-3 py-2 mt-1">
                        <p className="text-xs text-gray-500 font-medium mb-0.5">BHW Response:</p>
                        <p className="text-sm text-gray-700">{r.response}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><Users className="w-4 h-4 text-emerald-600"/>BHW Activity Tracker</h3>
            <div className="space-y-2">
              {bhwActivity.map(b => (
                <div key={b.name} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"/>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-800 truncate">{b.name}</p>
                    <p className="text-xs text-gray-500">{b.purok}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs font-bold text-gray-800">{b.reports}</p>
                    <p className="text-xs text-gray-400">reports</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
            <h3 className="font-semibold text-emerald-800 mb-2 text-sm">Platform Response Protocol</h3>
            <div className="space-y-2 text-xs text-emerald-700">
              {[
                'Breeding site: BHW dispatched within 2 hours',
                'Suspected case: Referred to BHC within 4 hours',
                'Drainage issue: LGU Engineering notified same day',
                'All reports logged with GPS timestamp and BHW ID',
              ].map((p,i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"/>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
