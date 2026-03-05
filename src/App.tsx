import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Bell,
  ChevronRight,
  ExternalLink,
  TrendingUp,
  Clock,
  RefreshCcw,
  CheckCircle2,
  AlertCircle,
  Zap,
  Users,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { SQUADS, COMPLIANCE, AI_STATS, NAVIGATION } from './data';

const StatCard = ({ title, value, unit, trend, icon: Icon, color }: any) => {
  const colorMap: any = {
    emerald: '#10b981',
    blue: '#3b82f6',
    amber: '#f59e0b',
    indigo: '#6366f1',
    rose: '#ef4444'
  };
  const activeColor = colorMap[color] || '#10b981';

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card p-6 flex flex-col justify-between"
    >
      <div className="flex justify-between items-start mb-4">
        <div
          className="p-2 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${activeColor}1a`, color: activeColor }}
        >
          <Icon size={24} />
        </div>
        <div style={{ color: trend.startsWith('+') ? '#10b981' : '#ef4444' }} className="flex items-center text-xs font-medium">
          <TrendingUp size={12} className="mr-1" />
          {trend}
        </div>
      </div>
      <div>
        <h3 className="text-text-muted text-sm font-medium uppercase tracking-wider">{title}</h3>
        <div className="flex items-baseline mt-1">
          <span className="text-3xl font-bold">{value}</span>
          <span className="text-text-dim text-sm ml-1 font-normal">{unit}</span>
        </div>
      </div>
    </motion.div>
  );
};

const App = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="app-container min-h-screen bg-bg-dark text-text-main font-['Outfit']">
      {/* Background Image Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'url(/nexus-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) brightness(0.5)'
        }}
      />

      {/* Sidebar */}
      <aside className={`glass border-r border-white/5 z-50 transition-all duration-300 ${isSidebarOpen ? 'w-60' : 'w-20'}`}>
        <div className="p-6 mb-8 flex items-center gap-3 cursor-pointer select-none" onClick={toggleSidebar}>
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center font-bold text-bg-dark">P</div>
          {isSidebarOpen && (
            <span className="font-bold text-lg tracking-tight uppercase">Strategic <span className="text-primary">Nexus</span></span>
          )}
        </div>

        <nav className="px-3 space-y-1">
          {NAVIGATION.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveNav(item.name)}
              className={`w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200 group ${activeNav === item.name
                ? 'bg-primary/10 text-primary'
                : 'text-text-dim hover:text-text-main hover:bg-white/5'
                }`}
            >
              <item.icon size={20} className={activeNav === item.name ? 'text-primary' : 'group-hover:text-text-main'} />
              {isSidebarOpen && <span className="ml-3 font-medium">{item.name}</span>}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-8 left-0 w-full px-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-emerald-600 border border-white/10" />
            {isSidebarOpen && (
              <div>
                <p className="text-sm font-semibold">Alex Thorne</p>
                <p className="text-xs text-text-dim font-medium">Director of Eng</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto z-10 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-text-dim text-sm font-medium uppercase tracking-[0.2em] mb-1">Nexus Command</h2>
            <h1 className="text-4xl font-bold tracking-tight">Engineering Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-dim" size={18} />
              <input
                type="text"
                placeholder="Search Nexus..."
                className="bg-white/5 border border-white/5 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-colors w-64"
              />
            </div>
            <button className="p-2 rounded-full border border-white/5 hover:bg-white/5 relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full border-2 border-bg-dark" />
            </button>
          </div>
        </header>

        {/* Global DORA Metrics */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard
            title="Cycle Time"
            value="3.8"
            unit="days"
            trend="-12%"
            icon={Clock}
            color="emerald"
          />
          <StatCard
            title="Deployment Freq"
            value="24.2"
            unit="deploy/day"
            trend="+18%"
            icon={RefreshCcw}
            color="blue"
          />
          <StatCard
            title="MTTR"
            value="1.2"
            unit="hours"
            trend="-24%"
            icon={Zap}
            color="amber"
          />
          <StatCard
            title="Success Rate"
            value="99.92"
            unit="%"
            trend="+0.04%"
            icon={CheckCircle2}
            color="indigo"
          />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Squad Status */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Users size={20} className="text-primary" />
                Active Squads
              </h2>
              <button className="text-xs text-primary font-semibold hover:underline flex items-center gap-1">
                Manage Squads <ChevronRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SQUADS.map((squad) => (
                <motion.div
                  key={squad.id}
                  layoutId={squad.id}
                  className="glass-card p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{squad.name}</h3>
                      <p className="text-xs text-text-dim font-medium">{squad.lead}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${squad.status === 'High Velocity' ? 'bg-emerald-500/10 text-emerald-500' :
                      squad.status === 'Stabilizing' ? 'bg-amber-500/10 text-amber-500' : 'bg-blue-500/10 text-blue-500'
                      }`}>
                      {squad.status}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white/5 p-2 rounded text-center">
                        <p className="text-[10px] text-text-dim font-medium uppercase">Cycle</p>
                        <p className="text-sm font-bold">{squad.metrics.cycleTime}d</p>
                      </div>
                      <div className="bg-white/5 p-2 rounded text-center">
                        <p className="text-[10px] text-text-dim font-medium uppercase">MTTR</p>
                        <p className="text-sm font-bold">{squad.metrics.mttr}h</p>
                      </div>
                      <div className="bg-white/5 p-2 rounded text-center">
                        <p className="text-[10px] text-text-dim font-medium uppercase">Deploys</p>
                        <p className="text-sm font-bold">{squad.metrics.frequency}/w</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] text-text-dim font-bold uppercase mb-2">Key Initiatives</p>
                      <div className="flex flex-wrap gap-2">
                        {squad.projects.map(p => (
                          <span key={p} className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-text-muted hover:text-text-main transition-colors cursor-default">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar Panels */}
          <div className="space-y-8">
            {/* Security & Compliance */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-bold flex items-center gap-2 mb-6">
                <ShieldCheck size={20} className="text-primary" />
                Compliance Status
              </h2>
              <div className="space-y-4">
                {COMPLIANCE.map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                    <div>
                      <p className="text-sm font-bold">{item.name}</p>
                      <p className="text-[10px] text-text-dim">Last Audit: {item.lastAudit}</p>
                    </div>
                    <div className={`flex items-center gap-1.5 text-xs font-bold ${item.status === 'Compliant' ? 'text-emerald-500' :
                      item.status === 'In Review' ? 'text-amber-500' : 'text-text-dim'
                      }`}>
                      {item.status === 'Compliant' ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI & Automation */}
            <div className="glass-card p-6 bg-gradient-to-br from-primary/5 to-transparent">
              <h2 className="text-lg font-bold flex items-center gap-2 mb-6">
                <Cpu size={20} className="text-primary" />
                AI Nexus Insights
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-[10px] text-text-dim font-bold uppercase">Copilot Adoption</p>
                  <p className="text-2xl font-bold text-primary">{AI_STATS.copilotAdoption}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-text-dim font-bold uppercase">Auto-PRs</p>
                  <p className="text-2xl font-bold">{AI_STATS.aiGeneratedPrs}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-text-dim font-bold uppercase">Time Saved</p>
                  <p className="text-2xl font-bold">{AI_STATS.timeSavedWeekly}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-text-dim font-bold uppercase">Auto-Review</p>
                  <p className="text-2xl font-bold">{AI_STATS.automatedReviews}</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/5">
                <button className="w-full py-2 bg-primary text-bg-dark font-bold rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-primary-hover transition-colors">
                  AI Optimization Log <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
