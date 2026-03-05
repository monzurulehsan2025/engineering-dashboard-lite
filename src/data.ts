import { Layout, Users, ShieldCheck, BarChart3, Globe, Cpu, Terminal } from 'lucide-react';

export const SQUADS = [
    {
        id: 'sq-1',
        name: 'Global Fluency',
        lead: 'Dr. Alistair Vance',
        status: 'High Velocity',
        members: 12,
        metrics: { cycleTime: 4.2, mttr: 1.5, frequency: 18 },
        projects: ['CultureEngine API', 'Translation Microservices']
    },
    {
        id: 'sq-2',
        name: 'Custom Technology',
        lead: 'Sarah Jenkins',
        status: 'Stabilizing',
        members: 8,
        metrics: { cycleTime: 6.8, mttr: 3.2, frequency: 12 },
        projects: ['Client Integration Portal', 'Legacy Sync Bridge']
    },
    {
        id: 'sq-3',
        name: 'Strategic Insight',
        lead: 'Marcus Thorne',
        status: 'Scaling',
        members: 15,
        metrics: { cycleTime: 3.9, mttr: 0.8, frequency: 24 },
        projects: ['Analytics Dashboard v4', 'Market Intelligence AI']
    }
];

export const COMPLIANCE = [
    { name: 'SOC 2 Type II', status: 'Compliant', lastAudit: '2025-11-20' },
    { name: 'ISO 27001', status: 'In Review', lastAudit: '2026-01-15' },
    { name: 'HIPAA', status: 'Compliant', lastAudit: '2025-08-30' },
    { name: 'FedRAMP', status: 'Target: Q3 2026', lastAudit: 'N/A' }
];

export const AI_STATS = {
    copilotAdoption: '94%',
    aiGeneratedPrs: '28%',
    timeSavedWeekly: '1,240 hrs',
    automatedReviews: '82%'
};

export const NAVIGATION = [
    { name: 'Dashboard', icon: Layout, active: true },
    { name: 'Squads', icon: Users, active: false },
    { name: 'Metrics', icon: BarChart3, active: false },
    { name: 'Compliance', icon: ShieldCheck, active: false },
    { name: 'AI Nexus', icon: Cpu, active: false },
    { name: 'Global Ops', icon: Globe, active: false },
    { name: 'Terminal', icon: Terminal, active: false }
];
