import React,{useState} from 'react'
import {Routes,Route,Link,useLocation} from 'react-router-dom'
import {Shield,Map,CloudRain,Brain,BookOpen,MessageSquare,BarChart3,Info,Menu,X} from 'lucide-react'
import Dashboard from './pages/Dashboard'
import BreedingMap from './pages/BreedingMap'
import ClimateDashboard from './pages/ClimateDashboard'
import RiskAssessment from './pages/RiskAssessment'
import CBPLAModules from './pages/CBPLAModules'
import CommunityReports from './pages/CommunityReports'
import About from './pages/About'

const navItems = [
  {path:'/',icon:BarChart3,label:'Dashboard'},
  {path:'/map',icon:Map,label:'Breeding Site Map'},
  {path:'/climate',icon:CloudRain,label:'Climate Surveillance'},
  {path:'/risk',icon:Brain,label:'Risk Assessment'},
  {path:'/cbpla',icon:BookOpen,label:'CBPLA Modules'},
  {path:'/reports',icon:MessageSquare,label:'Community Reports'},
  {path:'/about',icon:Info,label:'About DengueSHIELD'},
]

export default function App(){
  const location = useLocation()
  const [open,setOpen] = useState(false)
  return(
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
      <div className="lg:hidden bg-emerald-900 text-white p-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-emerald-300"/>
          <span className="font-bold text-sm">DengueSHIELD</span>
        </div>
        <button onClick={()=>setOpen(!open)} className="p-1 rounded-lg hover:bg-emerald-800">
          {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
        </button>
      </div>

      <nav className={`${open?'block':'hidden'} lg:block w-full lg:w-64 bg-emerald-900 text-white flex-shrink-0 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto z-40`}>
        <div className="hidden lg:flex items-center gap-3 p-5 border-b border-emerald-800">
          <Shield className="w-8 h-8 text-emerald-300"/>
          <div>
            <h1 className="font-bold text-lg leading-tight">DengueSHIELD</h1>
            <p className="text-xs text-emerald-400">Barangay Sooc, Iloilo City</p>
          </div>
        </div>

        <div className="p-3 space-y-1">
          {navItems.map(item=>(
            <Link key={item.path} to={item.path} onClick={()=>setOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${location.pathname===item.path?'bg-emerald-700 text-white font-medium':'text-emerald-300 hover:bg-emerald-800 hover:text-white'}`}>
              <item.icon className="w-5 h-5 flex-shrink-0"/>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block p-4 mt-4 border-t border-emerald-800 text-xs text-emerald-500 space-y-1">
          <p className="font-medium text-emerald-400">WVSU College of Nursing</p>
          <p>WVHRDC / DOST-GIA 2026</p>
          <p className="mt-2 text-emerald-600">GAD Score: 15.0 / 15.0</p>
          <p className="text-emerald-600">Budget: PHP 500,000</p>
        </div>
      </nav>

      <main className="flex-1 overflow-auto min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/map" element={<BreedingMap/>}/>
          <Route path="/climate" element={<ClimateDashboard/>}/>
          <Route path="/risk" element={<RiskAssessment/>}/>
          <Route path="/cbpla" element={<CBPLAModules/>}/>
          <Route path="/reports" element={<CommunityReports/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </main>
    </div>
  )
}
