const fs = require('fs');

const path = 'src/data/coursesData.ts';
let code = fs.readFileSync(path, 'utf8');

// Find the CATEGORIES_DATA array
const match = code.match(/export const CATEGORIES_DATA: CategoryItem\[\] = \[([\s\S]*?)\];/);
if (!match) throw new Error('Could not find CATEGORIES_DATA');

// We will just replace the whole array manually
const newArray = `export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: 'desenvolvimento-pessoal',
    title: 'Desenvolvimento\\nPessoal',
    coursesCount: 24,
    iconName: 'Sparkles',
    accentColor: 'from-amber-500 to-orange-600',
  },
  {
    id: 'desenvolvimento-humano',
    title: 'Desenvolvimento\\nHumano',
    coursesCount: 18,
    iconName: 'HeartHandshake',
    accentColor: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'desenvolvimento-profissional',
    title: 'Desenvolvimento\\nProfissional',
    coursesCount: 32,
    iconName: 'Briefcase',
    accentColor: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'desenvolvimento-etico',
    title: 'Desenvolvimento\\nÉtico',
    coursesCount: 12,
    iconName: 'Scale',
    accentColor: 'from-purple-600 to-violet-800',
  },
  {
    id: 'desenvolvimento-relacional',
    title: 'Desenvolvimento\\nRelacional',
    coursesCount: 16,
    iconName: 'Users',
    accentColor: 'from-rose-500 to-pink-600',
  },
  {
    id: 'desenvolvimento-financeiro',
    title: 'Desenvolvimento\\nFinanceiro',
    coursesCount: 15,
    iconName: 'CircleDollarSign',
    accentColor: 'from-amber-600 to-yellow-600',
  },
  {
    id: 'desenvolvimento-tecnologico-ia',
    title: 'Desenvolvimento\\nTecnológico e IA',
    coursesCount: 17,
    iconName: 'Cpu',
    accentColor: 'from-violet-600 to-indigo-600',
  },
  {
    id: 'desenvolvimento-da-consciencia',
    title: 'Desenvolvimento\\nda Consciência',
    coursesCount: 14,
    iconName: 'Brain',
    accentColor: 'from-indigo-500 to-purple-700',
  },
  {
    id: 'desenvolvimento-ambiental',
    title: 'Desenvolvimento\\nAmbiental',
    coursesCount: 10,
    iconName: 'Leaf',
    accentColor: 'from-green-600 to-emerald-700',
  },
  {
    id: 'cursos-freepremium',
    title: 'Cursos\\nFreepremium',
    coursesCount: 28,
    iconName: 'Gift',
    accentColor: 'from-cyan-600 to-blue-600',
  },
  {
    id: 'horas-complementares',
    title: 'Horas\\nComplementares',
    coursesCount: 45,
    iconName: 'GraduationCap',
    accentColor: 'from-amber-500 to-yellow-600',
  },
  {
    id: 'formacao-livre',
    title: 'Formação\\nLivre',
    coursesCount: 19,
    iconName: 'Compass',
    accentColor: 'from-stone-600 to-zinc-800',
  },
  {
    id: 'praticas-integrativas',
    title: 'Práticas\\nIntegrativas',
    coursesCount: 21,
    iconName: 'SunMedium',
    accentColor: 'from-teal-500 to-emerald-600',
  },
  {
    id: 'coach-integrativo',
    title: 'Coach\\nIntegrativo',
    coursesCount: 11,
    iconName: 'Target',
    accentColor: 'from-emerald-700 to-teal-800',
  },
  {
    id: 'pedagogia-integrativa',
    title: 'Pedagogia\\nIntegrativa',
    coursesCount: 13,
    iconName: 'BookOpenCheck',
    accentColor: 'from-orange-600 to-amber-700',
  },
  {
    id: 'desenvolvimento-nas-empresas',
    title: 'Treinamento Corporativo\\nPara Empresas & Equipes',
    coursesCount: 16,
    iconName: 'Building2',
    accentColor: 'from-slate-600 to-slate-800',
  },
  {
    id: 'formacao-empresarial',
    title: 'Formação\\nEmpresarial',
    coursesCount: 14,
    iconName: 'Award',
    accentColor: 'from-yellow-600 to-amber-800',
  },
  {
    id: 'livros',
    title: 'Livros\\n& Materiais',
    coursesCount: 8,
    iconName: 'Library',
    accentColor: 'from-red-500 to-rose-700',
  }
];`;

code = code.replace(/export const CATEGORIES_DATA: CategoryItem\[\] = \[([\s\S]*?)\];/, newArray);
fs.writeFileSync(path, code);
console.log('Swapped and added Livros');
