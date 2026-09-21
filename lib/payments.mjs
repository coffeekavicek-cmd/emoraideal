export const PLAN = {
  STANDARD: { uzs:49990, stars:0, revisions:1, label:'Shablon' },
  PRO_AI: { uzs:69990, stars:0, revisions:3, label:'EMORA AI' }
};

export function paymentRequirement(project, stage='full') {
  const p = PLAN[project.plan];
  if (!p) throw new Error('Unknown plan');
  return { stage:'full', uzs:p.uzs, stars:p.stars, title:`EMORA ${p.label}` };
}

export function isPaid(project, stage='full') {
  return (project.payments||[]).some(p=>p.stage===stage && p.status==='PAID');
}

export function canBuild(project) { return isPaid(project,'full'); }
export function canFinalize(project) { return isPaid(project,'full'); }
