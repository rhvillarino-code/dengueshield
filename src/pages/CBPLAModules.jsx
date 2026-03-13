import React, { useState } from 'react'
import { CheckCircle, Clock, Lock, BookOpen, Users, Award, ChevronDown, ChevronUp, ExternalLink, AlertTriangle, Info, Star } from 'lucide-react'
import { cbplaModulesData } from '../data/sampleData'

const statusIcon = { completed: CheckCircle, in_progress: Clock, locked: Lock }
const statusColor = { completed: 'text-green-600', in_progress: 'text-blue-600', locked: 'text-gray-400' }
const statusBg = { completed: 'bg-green-100', in_progress: 'bg-blue-100', locked: 'bg-gray-100' }
const statusLabel = { completed: 'Natapos (Completed)', in_progress: 'Nagapadayon (In Progress)', locked: 'Nakalock' }
const statusBadge = { completed: 'bg-green-100 text-green-700', in_progress: 'bg-blue-100 text-blue-700', locked: 'bg-gray-100 text-gray-500' }

function LessonCard({ lesson, isOpen, onToggle }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
            {lesson.lessonNo}
          </div>
          <span className="font-medium text-sm text-gray-900">{lesson.title}</span>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          <div className="prose prose-sm max-w-none text-gray-700">
            {lesson.body.split('\n').map((line, i) => {
              if (line.trim() === '') return <div key={i} className="h-2" />
              if (line.match(/^[A-Z\s]+:$/)) return <p key={i} className="font-bold text-emerald-800 mt-3 mb-1 text-xs uppercase tracking-wide">{line}</p>
              if (line.startsWith('-') || line.match(/^\d+\./)) return (
                <p key={i} className="pl-4 text-sm text-gray-700 leading-relaxed">{line}</p>
              )
              return <p key={i} className="text-sm text-gray-700 leading-relaxed">{line}</p>
            })}
          </div>
        </div>
      )}
    </div>
  )
}

function ReferenceList({ refs }) {
  return (
    <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-3 flex items-center gap-2">
        <BookOpen className="w-4 h-4" />
        References (APA 7th Edition)
      </h4>
      <ol className="space-y-2">
        {refs.map((ref, i) => (
          <li key={i} className="text-xs text-slate-600 leading-relaxed pl-4 border-l-2 border-emerald-200">
            {ref.apa}
            {ref.url && (
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 ml-1 text-emerald-600 hover:text-emerald-800 font-medium"
              >
                <ExternalLink className="w-3 h-3" /> View
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function CBPLAModules() {
  const [activeModule, setActiveModule] = useState(null)
  const [activeLesson, setActiveLesson] = useState(null)
  const [activeTab, setActiveTab] = useState('content')

  const totalLessons = cbplaModulesData.reduce((a, m) => a + m.lessons, 0)
  const completedLessons = cbplaModulesData.reduce((a, m) => a + Math.round(m.lessons * m.progress / 100), 0)
  const pct = Math.round(completedLessons / totalLessons * 100)
  const maxParticipants = Math.max(...cbplaModulesData.map(m => m.participants))

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">CBPLA Digital Learning Modules</h1>
        <p className="text-sm text-gray-500 mt-1">
          Community-Based Participatory Learning and Action | Hiligaynon / English
          <span className="mx-2">|</span>
          Batay sa: Pretty et al. (1995), Israel et al. (2013), WHO (2009, 2024)
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800">
          <strong>Real Data Advisory:</strong> Ang tanan nga epidemiological data sa ining mga module nakuha tikang sa DOH Epidemiology Bureau (2024), DOH Western Visayas Center for Health Development (2024), kag peer-reviewed journals. National 2024: 269,467 cases (82% increase). Western Visayas: 20,814 cases, 264% increase (Jan-Aug 2024).
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: BookOpen, label: 'Total Lessons', value: totalLessons, color: 'bg-blue-500' },
          { icon: CheckCircle, label: 'Lessons Completed', value: completedLessons, color: 'bg-green-500' },
          { icon: Users, label: 'Active Learners', value: maxParticipants, color: 'bg-purple-500' },
          { icon: Award, label: 'Completion Rate', value: pct + '%', color: 'bg-emerald-600' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border p-4">
            <div className={'p-2 rounded-lg w-fit ' + s.color}><s.icon className="w-5 h-5 text-white" /></div>
            <p className="mt-2 text-2xl font-bold text-gray-900">{s.value}</p>
            <p className="text-sm text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-emerald-700 to-emerald-900 rounded-xl p-5 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-emerald-300 text-sm font-medium">Intervention Group — Overall Progress</p>
            <p className="text-3xl font-bold mt-1">{completedLessons} / {totalLessons} Lessons</p>
            <p className="text-emerald-300 text-sm mt-1">Target: 100% completion by end of Month 10 (February 2027)</p>
          </div>
          <div className="w-full sm:w-64">
            <div className="flex justify-between text-xs text-emerald-300 mb-2">
              <span>Overall Progress</span><span className="font-bold">{pct}%</span>
            </div>
            <div className="h-4 bg-emerald-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-400 rounded-full transition-all flex items-center justify-end pr-2"
                style={{ width: pct + '%' }}
              >
                <span className="text-emerald-900 text-xs font-bold">{pct}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {cbplaModulesData.map((m, idx) => {
          const isOpen = activeModule === m.id
          const Icon = statusIcon[m.status]
          return (
            <div key={m.id} className={'bg-white rounded-xl shadow-sm border overflow-hidden ' + (m.status === 'locked' ? 'opacity-60' : '')}>
              <button
                className="w-full text-left p-5 hover:bg-gray-50 transition-colors"
                onClick={() => m.status !== 'locked' && setActiveModule(isOpen ? null : m.id)}
                disabled={m.status === 'locked'}
              >
                <div className="flex items-start gap-4">
                  <div className={'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold ' + statusBg[m.status]}>
                    {m.status === 'completed'
                      ? <CheckCircle className="w-6 h-6 text-green-600" />
                      : m.status === 'locked'
                        ? <Lock className="w-6 h-6 text-gray-400" />
                        : <span className="text-blue-700 text-lg">{idx + 1}</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-gray-900">{m.title}</h3>
                        <p className="text-sm text-emerald-700 italic font-medium">{m.titleEn}</p>
                      </div>
                      <span className={'text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ' + statusBadge[m.status]}>
                        {statusLabel[m.status]}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{m.overview}</p>
                    <div className="mt-3 flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>{m.lessons} leksyon</span>
                          <span className="font-semibold">{m.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={'h-full rounded-full ' + (m.status === 'completed' ? 'bg-green-500' : 'bg-blue-500')}
                            style={{ width: m.progress + '%' }}
                          />
                        </div>
                      </div>
                      {m.participants > 0 && (
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Users className="w-3 h-3" /><span>{m.participants} participants</span>
                          {m.avgScore > 0 && <><Star className="w-3 h-3 ml-2 text-amber-500" /><span className="text-amber-600">{m.avgScore}% avg score</span></>}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </button>

              {isOpen && (
                <div className="border-t">
                  <div className="flex border-b overflow-x-auto">
                    {['content', 'keyfacts', 'references'].map(tab => (
                      <button
                        key={tab}
                        className={'px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ' + (activeTab === tab ? 'border-b-2 border-emerald-600 text-emerald-700 bg-white' : 'text-gray-500 hover:text-gray-700')}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab === 'content' ? 'Module Content' : tab === 'keyfacts' ? 'Key Facts' : 'References (APA 7)'}
                      </button>
                    ))}
                  </div>

                  {activeTab === 'content' && (
                    <div className="p-5 space-y-3">
                      <p className="text-xs text-gray-500 flex items-center gap-2">
                        <Info className="w-4 h-4 text-blue-400" />
                        I-click ang bawat leksyon para mabasa ang full content. All lessons are available in Hiligaynon and English.
                      </p>
                      {m.lessonContent.map(lesson => (
                        <LessonCard
                          key={lesson.lessonNo}
                          lesson={lesson}
                          isOpen={activeLesson === `${m.id}-${lesson.lessonNo}`}
                          onToggle={() => setActiveLesson(activeLesson === `${m.id}-${lesson.lessonNo}` ? null : `${m.id}-${lesson.lessonNo}`)}
                        />
                      ))}
                    </div>
                  )}

                  {activeTab === 'keyfacts' && (
                    <div className="p-5">
                      <div className="grid gap-3">
                        {m.keyFacts.map((fact, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
                            <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</div>
                            <p className="text-sm text-gray-700 leading-relaxed">{fact}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'references' && (
                    <div className="p-5">
                      <div className="mb-3 p-3 bg-blue-50 rounded-lg">
                        <p className="text-xs text-blue-700">
                          <strong>Citation Format:</strong> American Psychological Association (APA) 7th Edition.
                          I-click ang "View" button para ma-access ang original source.
                        </p>
                      </div>
                      <ReferenceList refs={m.references} />
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-5">
        <h3 className="font-semibold text-gray-900 mb-1">Monthly CBPLA Action Cycle</h3>
        <p className="text-xs text-gray-500 mb-4">Batay sa Pretty et al. (1995) PLA Methodology | 7 cycles completed</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { step: '1. IDENTIFY', color: 'bg-blue-50 border-blue-200 text-blue-900', desc: 'House-to-house survey gamit ang DengueSHIELD app. Compute vector indices. Identify high-risk sites kag households.' },
            { step: '2. PLAN', color: 'bg-amber-50 border-amber-200 text-amber-900', desc: 'Community Task Force meeting. Review risk map. Prioritize actions kag assign tasks sa BHWs kag volunteers.' },
            { step: '3. ACT', color: 'bg-green-50 border-green-200 text-green-900', desc: 'Community clean-up drive. House-to-house education. Container management. BHW report submission.' },
            { step: '4. REFLECT', color: 'bg-purple-50 border-purple-200 text-purple-900', desc: 'Review vector index trend. Celebrate wins; identify gaps. Document lessons. Plan next cycle.' },
          ].map(x => (
            <div key={x.step} className={'rounded-lg border p-4 ' + x.color}>
              <p className="font-bold text-sm mb-2">{x.step}</p>
              <p className="text-xs leading-relaxed">{x.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: 'Cycles Completed', value: '7 / 7', sub: '100% on schedule' },
            { label: 'Avg. Household Participation', value: '87%', sub: 'Target: >80%' },
            { label: 'BHW Report Compliance', value: '90%', sub: '18/20 BHWs active' },
          ].map(s => (
            <div key={s.label} className="bg-emerald-50 rounded-lg p-3 text-center border border-emerald-100">
              <p className="text-xl font-bold text-emerald-800">{s.value}</p>
              <p className="text-xs font-medium text-emerald-700">{s.label}</p>
              <p className="text-xs text-emerald-500">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-600" />
          Master Reference List — DengueSHIELD CBPLA Modules (APA 7th Edition)
        </h3>
        <div className="space-y-2">
          {[
            { ref: "Andersson, N., Nava-Aguilera, E., Arostegui, J., Morales-Perez, A., Suazo-Laguna, H., Legorreta-Soberanis, J., Hernandez-Alvarez, C., Flores-Aldana, M., & Cockcroft, A. (2015). Evidence based community mobilization for dengue prevention in Nicaragua and Mexico (Camino Verde, the Green Way): Cluster randomised controlled trial. BMJ, 351, h3267.", url: "https://doi.org/10.1136/bmj.h3267" },
            { ref: "Bartumeus, F., Oltra, A., & Palmer, J. R. B. (2018). Citizen science: A gateway for innovation in disease-carrying mosquito surveillance. International Journal of Environmental Research and Public Health, 15(10), 2298.", url: "https://doi.org/10.3390/ijerph15102298" },
            { ref: "Caprara, A., Lima, J. W. O., Peixoto, A. C. R., Motta, C. M. L., Nobre, J. M. S., Rocha, M. N., Narain, J. P., & Vasconcelos, M. I. L. (2015). Entomological impact and social changes from community mobilization for dengue control in Fortaleza, Brazil. Transactions of the Royal Society of Tropical Medicine and Hygiene, 109(2), 133-140.", url: "https://doi.org/10.1093/trstmh/tru186" },
            { ref: "Department of Health - Epidemiology Bureau. (2024). Dengue surveillance update: 269,467 cases as of October 4, 2024. Republic of the Philippines.", url: "https://doh.gov.ph/press-release/doh-dengue-cases-lower-in-recent-weeks/" },
            { ref: "DOH Western Visayas Center for Health Development. (2024). Dengue situation report: 20,814 cases, 51 deaths, January 1 - August 31, 2024.", url: "https://www.pna.gov.ph/articles/1233025" },
            { ref: "Heintze, C., Velasco-Garrido, M., & Kroeger, A. (2007). What do community-based dengue control programmes achieve? A systematic review of published evaluations. Transactions of the Royal Society of Tropical Medicine and Hygiene, 101(4), 317-325.", url: "https://doi.org/10.1016/j.trstmh.2006.08.007" },
            { ref: "Intergovernmental Panel on Climate Change. (2023). AR6 synthesis report: Climate change 2023. IPCC.", url: "https://www.ipcc.ch/report/ar6/syr/" },
            { ref: "Israel, B. A., Eng, E., Schulz, A. J., & Parker, E. A. (Eds.). (2013). Methods for community-based participatory research for health (2nd ed.). Jossey-Bass.", url: "https://doi.org/10.1002/9781118584699" },
            { ref: "Lee, S. A., Jarvis, C. I., Edmunds, W. J., Economou, T., & Lowe, R. (2023). Dengue surveillance in the Philippines: Historical data, model validation, and digital surveillance accuracy. Journal of Vector Ecology, 48(2), 112-121.", url: "https://doi.org/10.52707/1081-1710-48.2.112" },
            { ref: "Pretty, J. N., Guijt, I., Thompson, J., & Scoones, I. (1995). Participatory learning and action: A trainer's guide. International Institute for Environment and Development.", url: "https://www.iied.org/participatory-learning-and-action-trainers-guide" },
            { ref: "Romanello, M., Di Napoli, C., Drummond, P., Green, C., Kennard, H., Lampard, P., Scamman, D., & Costello, A. (2023). The 2023 report of the Lancet Countdown on health and climate change. The Lancet, 402(10419), 2346-2394.", url: "https://doi.org/10.1016/S0140-6736(23)01689-X" },
            { ref: "Wallerstein, N., & Duran, B. (2010). Community-based participatory research contributions to intervention research: The intersection of science and practice to improve health equity. American Journal of Public Health, 100(S1), S40-S46.", url: "https://doi.org/10.2105/AJPH.2009.184036" },
            { ref: "World Health Organization. (2009). Dengue: Guidelines for diagnosis, treatment, prevention and control (New ed.). WHO Press.", url: "https://www.who.int/publications/i/item/9789241547871" },
            { ref: "World Health Organization. (2019). WHO guideline: Recommendations on digital interventions for health system strengthening. WHO Press.", url: "https://www.who.int/publications/i/item/9789241550505" },
            { ref: "World Health Organization. (2024). Dengue and severe dengue [Fact sheet]. WHO.", url: "https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-xs text-slate-600 leading-relaxed p-2 rounded hover:bg-white transition-colors">
              <span className="font-bold text-emerald-600 flex-shrink-0 w-5">{i + 1}.</span>
              <span className="flex-1">{item.ref}
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 ml-1 text-emerald-600 hover:underline font-medium">
                  <ExternalLink className="w-3 h-3" /> Link
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
