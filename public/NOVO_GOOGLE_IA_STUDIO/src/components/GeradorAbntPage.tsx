import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  BookOpen,
  FileText,
  Globe,
  GraduationCap,
  Scale,
  Copy,
  Check,
  Plus,
  Trash2,
  Download,
  Bookmark,
  Sparkles,
  HelpCircle,
  ExternalLink,
  RotateCcw,
  CheckCircle2,
  FolderPlus,
  Layers,
  Award
} from 'lucide-react';

interface GeradorAbntPageProps {
  onBackToHome: () => void;
  onNavigateToArticles?: () => void;
}

type SourceType = 'livro' | 'capitulo' | 'artigo' | 'site' | 'tcc' | 'legislacao';

interface SavedReference {
  id: string;
  type: SourceType;
  html: string;
  plainText: string;
  citationIndirect: string;
  citationDirect: string;
  citationNarrative: string;
  sortKey: string;
  createdAt: number;
}

const MONTHS_ABNT = [
  { value: '', label: 'Selecione o mês (opcional)' },
  { value: 'jan.', label: 'Janeiro (jan.)' },
  { value: 'fev.', label: 'Fevereiro (fev.)' },
  { value: 'mar.', label: 'Março (mar.)' },
  { value: 'abr.', label: 'Abril (abr.)' },
  { value: 'maio', label: 'Maio (maio)' },
  { value: 'jun.', label: 'Junho (jun.)' },
  { value: 'jul.', label: 'Julho (jul.)' },
  { value: 'ago.', label: 'Agosto (ago.)' },
  { value: 'set.', label: 'Setembro (set.)' },
  { value: 'out.', label: 'Outubro (out.)' },
  { value: 'nov.', label: 'Novembro (nov.)' },
  { value: 'dez.', label: 'Dezembro (dez.)' }
];

export const GeradorAbntPage: React.FC<GeradorAbntPageProps> = ({ onBackToHome, onNavigateToArticles }) => {
  const [sourceType, setSourceType] = useState<SourceType>('livro');
  const [highlightStyle, setHighlightStyle] = useState<'bold' | 'italic'>('bold');
  const [useEtAl, setUseEtAl] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [pageCitationNumber, setPageCitationNumber] = useState('15');

  // Form State
  const [authors, setAuthors] = useState<{ lastName: string; firstName: string }[]>([
    { lastName: '', firstName: '' }
  ]);
  const [authorRole, setAuthorRole] = useState<'autor' | 'org' | 'coord' | 'ed'>('autor');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [edition, setEdition] = useState('');
  const [city, setCity] = useState('');
  const [publisher, setPublisher] = useState('');
  const [year, setYear] = useState('');
  const [totalPageCount, setTotalPageCount] = useState('');
  const [volume, setVolume] = useState('');
  const [url, setUrl] = useState('');
  const [accessDate, setAccessDate] = useState('');

  // Artigo específico
  const [journalName, setJournalName] = useState('');
  const [journalIssue, setJournalIssue] = useState('');
  const [pageRange, setPageRange] = useState('');
  const [month, setMonth] = useState('');
  const [doi, setDoi] = useState('');

  // Capítulo específico
  const [bookTitle, setBookTitle] = useState('');
  const [bookSubtitle, setBookSubtitle] = useState('');
  const [bookOrganizers, setBookOrganizers] = useState('');

  // TCC específico
  const [academicDegree, setAcademicDegree] = useState('Trabalho de Conclusão de Curso (Graduação)');
  const [courseProgram, setCourseProgram] = useState('');
  const [institution, setInstitution] = useState('');

  // Legislação específica
  const [jurisdiction, setJurisdiction] = useState('');
  const [lawNumberAndDate, setLawNumberAndDate] = useState('');
  const [summaryDescription, setSummaryDescription] = useState('');
  const [gazetteName, setGazetteName] = useState('Diário Oficial da União');
  const [gazetteDetails, setGazetteDetails] = useState('');

  // Saved References (LocalStorage)
  const [savedReferences, setSavedReferences] = useState<SavedReference[]>(() => {
    try {
      const saved = localStorage.getItem('esdhubem_abnt_references');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('esdhubem_abnt_references', JSON.stringify(savedReferences));
    } catch (e) {
      console.error('Erro ao salvar referências:', e);
    }
  }, [savedReferences]);

  // Fill Access Date Today helper
  const handleSetTodayAccessDate = () => {
    const today = new Date();
    const day = today.getDate();
    const monthIndex = today.getMonth();
    const months = ['jan.', 'fev.', 'mar.', 'abr.', 'maio', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'];
    const currentYear = today.getFullYear();
    setAccessDate(`${day} ${months[monthIndex]} ${currentYear}`);
  };

  // Add/Remove Author fields
  const handleAddAuthor = () => {
    setAuthors([...authors, { lastName: '', firstName: '' }]);
  };

  const handleRemoveAuthor = (index: number) => {
    if (authors.length === 1) {
      setAuthors([{ lastName: '', firstName: '' }]);
    } else {
      setAuthors(authors.filter((_, i) => i !== index));
    }
  };

  const handleAuthorChange = (index: number, field: 'lastName' | 'firstName', value: string) => {
    const updated = [...authors];
    updated[index][field] = value;
    setAuthors(updated);
  };

  // Pre-load Examples
  const loadExample = (type: SourceType) => {
    setSourceType(type);
    if (type === 'livro') {
      setAuthors([{ lastName: 'FREIRE', firstName: 'Paulo' }]);
      setAuthorRole('autor');
      setTitle('Pedagogia da autonomia');
      setSubtitle('saberes necessários à prática educativa');
      setEdition('25. ed.');
      setCity('São Paulo');
      setPublisher('Paz e Terra');
      setYear('1996');
      setTotalPageCount('144 p.');
      setUrl('');
      setAccessDate('');
    } else if (type === 'artigo') {
      setAuthors([
        { lastName: 'SILVÉRIO', firstName: 'Silviane' },
        { lastName: 'VIVIAN', firstName: 'Henrique' }
      ]);
      setTitle('O desenvolvimento integral do indivíduo no ecossistema corporativo');
      setSubtitle('uma abordagem prática da aprendizagem autoral');
      setJournalName('Revista Científica ESDHUBEM');
      setCity('São Paulo');
      setVolume('v. 3');
      setJournalIssue('n. 1');
      setPageRange('p. 14-28');
      setMonth('ago.');
      setYear('2026');
      setDoi('10.5281/zenodo.1234567');
      setUrl('https://zenodo.org/records/1234567');
      handleSetTodayAccessDate();
    } else if (type === 'site') {
      setAuthors([{ lastName: 'ESDHUBEM', firstName: '' }]);
      setTitle('Como transformar horas de estudo em autoridade profissional e publicação científica real');
      setSubtitle('');
      setJournalName('Portal ESDHUBEM');
      setCity('São Paulo');
      setYear('2026');
      setUrl('https://praticasdebemestarsocial.github.io/esdhubem/?post=tcc-certificados-autoridade-publicacao-cientifica');
      handleSetTodayAccessDate();
    } else if (type === 'tcc') {
      setAuthors([{ lastName: 'ALMEIDA', firstName: 'Camila Ferreira de' }]);
      setTitle('Educação aberta e autoridade profissional');
      setSubtitle('o impacto dos certificados livres no mercado contemporâneo');
      setAcademicDegree('Trabalho de Conclusão de Curso (Graduação em Pedagogia)');
      setInstitution('Universidade de São Paulo');
      setCity('São Paulo');
      setYear('2025');
      setTotalPageCount('68 f.');
      setUrl('');
      setAccessDate('');
    } else if (type === 'legislacao') {
      setJurisdiction('BRASIL');
      setLawNumberAndDate('Lei nº 9.394, de 20 de dezembro de 1996');
      setSummaryDescription('Estabelece as diretrizes e bases da educação nacional');
      setGazetteName('Diário Oficial da União');
      setGazetteDetails('Brasília, DF, seção 1, p. 27833, 23 dez. 1996');
      setUrl('http://www.planalto.gov.br/ccivil_03/leis/l9394.htm');
      handleSetTodayAccessDate();
    } else if (type === 'capitulo') {
      setAuthors([{ lastName: 'LUCKESI', firstName: 'Cipriano Carlos' }]);
      setTitle('Avaliação da aprendizagem escolar');
      setSubtitle('apontamentos sobre a prática');
      setBookOrganizers('SILVA, Marcos (org.)');
      setBookTitle('Avaliação e prática pedagógica');
      setBookSubtitle('desafios e perspectivas');
      setEdition('3. ed.');
      setCity('São Paulo');
      setPublisher('Cortez');
      setYear('2022');
      setPageRange('p. 45-68');
      setUrl('');
      setAccessDate('');
    }
  };

  const clearForm = () => {
    setAuthors([{ lastName: '', firstName: '' }]);
    setAuthorRole('autor');
    setTitle('');
    setSubtitle('');
    setEdition('');
    setCity('');
    setPublisher('');
    setYear('');
    setTotalPageCount('');
    setVolume('');
    setUrl('');
    setAccessDate('');
    setJournalName('');
    setJournalIssue('');
    setPageRange('');
    setMonth('');
    setDoi('');
    setBookTitle('');
    setBookSubtitle('');
    setBookOrganizers('');
    setAcademicDegree('Trabalho de Conclusão de Curso (Graduação)');
    setCourseProgram('');
    setInstitution('');
    setJurisdiction('');
    setLawNumberAndDate('');
    setSummaryDescription('');
    setGazetteName('Diário Oficial da União');
    setGazetteDetails('');
  };

  // Helper formatting authors
  const formatAuthorsABNT = () => {
    const validAuthors = authors.filter(a => a.lastName.trim() || a.firstName.trim());
    if (validAuthors.length === 0) return '';

    if (useEtAl && validAuthors.length > 3) {
      const first = validAuthors[0];
      const last = first.lastName.trim().toUpperCase();
      const firstN = first.firstName.trim();
      return `${last}${firstN ? `, ${firstN}` : ''} et al.`;
    }

    const formatted = validAuthors.map(a => {
      const last = a.lastName.trim().toUpperCase();
      const first = a.firstName.trim();
      return last && first ? `${last}, ${first}` : last || first;
    });

    let res = formatted.join('; ');
    if (authorRole === 'org') res += ' (org.)';
    else if (authorRole === 'coord') res += ' (coord.)';
    else if (authorRole === 'ed') res += ' (ed.)';
    return res;
  };

  // Build In-Text Citations
  const buildInTextCitations = () => {
    const validAuthors = authors.filter(a => a.lastName.trim() || a.firstName.trim());
    let authorCiting = '';
    let authorNarrative = '';

    if (sourceType === 'legislacao') {
      const juris = jurisdiction.trim().toUpperCase() || 'BRASIL';
      const parsedYear = lawNumberAndDate.match(/\b(19\d\d|20\d\d)\b/)?.[0] || '1996';
      return {
        indirect: `(${juris}, ${parsedYear})`,
        direct: `(${juris}, ${parsedYear}, art. 1º)`,
        narrative: `Segundo o ${juris.toLowerCase() === 'brasil' ? 'Brasil' : juris} (${parsedYear})...`
      };
    }

    if (validAuthors.length === 0) {
      const fallbackTitle = title.trim().split(' ')[0]?.toUpperCase() || 'AUTOR';
      const y = year.trim() || 's.d.';
      return {
        indirect: `(${fallbackTitle}, ${y})`,
        direct: `(${fallbackTitle}, ${y}, p. ${pageCitationNumber || '15'})`,
        narrative: `De acordo com ${fallbackTitle} (${y})...`
      };
    }

    const y = year.trim() || 's.d.';

    if (validAuthors.length === 1) {
      const lastUpper = validAuthors[0].lastName.trim().toUpperCase() || validAuthors[0].firstName.trim().toUpperCase();
      const lastCapital = (validAuthors[0].lastName.trim() || validAuthors[0].firstName.trim())
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(' ');
      authorCiting = lastUpper;
      authorNarrative = lastCapital;
    } else if (validAuthors.length === 2) {
      const a1Upper = validAuthors[0].lastName.trim().toUpperCase();
      const a2Upper = validAuthors[1].lastName.trim().toUpperCase();
      authorCiting = `${a1Upper}; ${a2Upper}`;
      
      const a1Cap = validAuthors[0].lastName.trim();
      const a2Cap = validAuthors[1].lastName.trim();
      authorNarrative = `${a1Cap} e ${a2Cap}`;
    } else if (validAuthors.length === 3 && !useEtAl) {
      const a1Upper = validAuthors[0].lastName.trim().toUpperCase();
      const a2Upper = validAuthors[1].lastName.trim().toUpperCase();
      const a3Upper = validAuthors[2].lastName.trim().toUpperCase();
      authorCiting = `${a1Upper}; ${a2Upper}; ${a3Upper}`;
      
      const a1Cap = validAuthors[0].lastName.trim();
      const a2Cap = validAuthors[1].lastName.trim();
      const a3Cap = validAuthors[2].lastName.trim();
      authorNarrative = `${a1Cap}, ${a2Cap} e ${a3Cap}`;
    } else {
      const firstUpper = validAuthors[0].lastName.trim().toUpperCase();
      const firstCap = validAuthors[0].lastName.trim();
      authorCiting = `${firstUpper} et al.`;
      authorNarrative = `${firstCap} et al.`;
    }

    return {
      indirect: `(${authorCiting}, ${y})`,
      direct: `(${authorCiting}, ${y}, p. ${pageCitationNumber || '15'})`,
      narrative: `Segundo ${authorNarrative} (${y}), ...`
    };
  };

  // Build Full ABNT Reference
  const buildReference = (): { html: string; plainText: string; sortKey: string } => {
    const wrapHighlight = (text: string) => {
      if (!text) return '';
      return highlightStyle === 'bold' ? `<b>${text}</b>` : `<i>${text}</i>`;
    };

    let html = '';
    let plainText = '';
    let sortKey = '';

    const authorStr = formatAuthorsABNT();
    const authorsSection = authorStr ? `${authorStr}. ` : '';

    if (sourceType === 'livro') {
      sortKey = authorStr || title || 'Z';
      const mainTitle = title.trim();
      const subTitleStr = subtitle.trim() ? `: ${subtitle.trim()}` : '';
      const edStr = edition.trim() ? `${edition.trim()}. ` : '';
      const cityStr = city.trim() || '[S. l.]';
      const pubStr = publisher.trim() || '[s. n.]';
      const yearStr = year.trim() || '[s. d.]';
      const pagesStr = totalPageCount.trim() ? ` ${totalPageCount.trim()}.` : '';
      const onlineStr = url.trim() && accessDate.trim() 
        ? ` Disponível em: <a href="${url.trim()}" target="_blank" class="text-amber-600 underline">${url.trim()}</a>. Acesso em: ${accessDate.trim()}.`
        : '';
      const onlinePlain = url.trim() && accessDate.trim() 
        ? ` Disponível em: ${url.trim()}. Acesso em: ${accessDate.trim()}.`
        : '';

      html = `${authorsSection}${wrapHighlight(mainTitle)}${subTitleStr}. ${edStr}${cityStr}: ${pubStr}, ${yearStr}.${pagesStr}${onlineStr}`;
      plainText = `${authorsSection}${mainTitle}${subTitleStr}. ${edStr}${cityStr}: ${pubStr}, ${yearStr}.${pagesStr}${onlinePlain}`;

    } else if (sourceType === 'artigo') {
      sortKey = authorStr || title || 'Z';
      const artTitle = title.trim();
      const artSub = subtitle.trim() ? `: ${subtitle.trim()}` : '';
      const jName = journalName.trim() || 'Nome da Revista';
      const cityStr = city.trim() ? `${city.trim()}, ` : '';
      const volStr = volume.trim() ? `${volume.trim()}, ` : '';
      const issStr = journalIssue.trim() ? `${journalIssue.trim()}, ` : '';
      const pRangeStr = pageRange.trim() ? `${pageRange.trim()}, ` : '';
      const monthStr = month.trim() ? `${month.trim()} ` : '';
      const yearStr = year.trim() || '[s. d.]';
      const doiStr = doi.trim() ? ` DOI: ${doi.trim()}.` : '';
      const onlineStr = url.trim() && accessDate.trim() 
        ? ` Disponível em: <a href="${url.trim()}" target="_blank" class="text-amber-600 underline">${url.trim()}</a>. Acesso em: ${accessDate.trim()}.`
        : '';
      const onlinePlain = url.trim() && accessDate.trim() 
        ? ` Disponível em: ${url.trim()}. Acesso em: ${accessDate.trim()}.`
        : '';

      html = `${authorsSection}${artTitle}${artSub}. ${wrapHighlight(jName)}, ${cityStr}${volStr}${issStr}${pRangeStr}${monthStr}${yearStr}.${doiStr}${onlineStr}`;
      plainText = `${authorsSection}${artTitle}${artSub}. ${jName}, ${cityStr}${volStr}${issStr}${pRangeStr}${monthStr}${yearStr}.${doiStr}${onlinePlain}`;

    } else if (sourceType === 'site') {
      sortKey = authorStr || title || 'Z';
      const pageTitle = title.trim();
      const pageSub = subtitle.trim() ? `: ${subtitle.trim()}` : '';
      const sName = journalName.trim() || 'Nome do Portal/Site';
      const yearStr = year.trim() ? `, ${year.trim()}` : '';
      const onlineStr = url.trim() && accessDate.trim() 
        ? ` Disponível em: <a href="${url.trim()}" target="_blank" class="text-amber-600 underline">${url.trim()}</a>. Acesso em: ${accessDate.trim()}.`
        : url.trim() ? ` Disponível em: <a href="${url.trim()}" target="_blank" class="text-amber-600 underline">${url.trim()}</a>.` : '';
      const onlinePlain = url.trim() && accessDate.trim() 
        ? ` Disponível em: ${url.trim()}. Acesso em: ${accessDate.trim()}.`
        : url.trim() ? ` Disponível em: ${url.trim()}.` : '';

      html = `${authorsSection}${pageTitle}${pageSub}. ${wrapHighlight(sName)}${yearStr}.${onlineStr}`;
      plainText = `${authorsSection}${pageTitle}${pageSub}. ${sName}${yearStr}.${onlinePlain}`;

    } else if (sourceType === 'tcc') {
      sortKey = authorStr || title || 'Z';
      const workTitle = title.trim();
      const workSub = subtitle.trim() ? `: ${subtitle.trim()}` : '';
      const yearDefense = year.trim() || '[s. d.]';
      const pagesStr = totalPageCount.trim() ? `${totalPageCount.trim()}. ` : '';
      const degStr = academicDegree.trim();
      const progStr = courseProgram.trim() ? ` em ${courseProgram.trim()}` : '';
      const instStr = institution.trim() ? ` – ${institution.trim()}` : '';
      const cityStr = city.trim() ? `, ${city.trim()}` : '';
      const onlineStr = url.trim() && accessDate.trim() 
        ? ` Disponível em: <a href="${url.trim()}" target="_blank" class="text-amber-600 underline">${url.trim()}</a>. Acesso em: ${accessDate.trim()}.`
        : '';
      const onlinePlain = url.trim() && accessDate.trim() 
        ? ` Disponível em: ${url.trim()}. Acesso em: ${accessDate.trim()}.`
        : '';

      html = `${authorsSection}${wrapHighlight(workTitle)}${workSub}. ${yearDefense}. ${pagesStr}${degStr}${progStr}${instStr}${cityStr}, ${yearDefense}.${onlineStr}`;
      plainText = `${authorsSection}${workTitle}${workSub}. ${yearDefense}. ${pagesStr}${degStr}${progStr}${instStr}${cityStr}, ${yearDefense}.${onlinePlain}`;

    } else if (sourceType === 'capitulo') {
      sortKey = authorStr || title || 'Z';
      const chapTitle = title.trim();
      const chapSub = subtitle.trim() ? `: ${subtitle.trim()}` : '';
      const orgStr = bookOrganizers.trim() ? `In: ${bookOrganizers.trim()}. ` : 'In: ';
      const bTitle = bookTitle.trim() || 'Título do Livro';
      const bSub = bookSubtitle.trim() ? `: ${bookSubtitle.trim()}` : '';
      const edStr = edition.trim() ? `${edition.trim()}. ` : '';
      const cityStr = city.trim() || '[S. l.]';
      const pubStr = publisher.trim() || '[s. n.]';
      const yearStr = year.trim() || '[s. d.]';
      const pRangeStr = pageRange.trim() ? ` ${pageRange.trim()}.` : '';

      html = `${authorsSection}${chapTitle}${chapSub}. ${orgStr}${wrapHighlight(bTitle)}${bSub}. ${edStr}${cityStr}: ${pubStr}, ${yearStr}.${pRangeStr}`;
      plainText = `${authorsSection}${chapTitle}${chapSub}. ${orgStr}${bTitle}${bSub}. ${edStr}${cityStr}: ${pubStr}, ${yearStr}.${pRangeStr}`;

    } else if (sourceType === 'legislacao') {
      const juris = jurisdiction.trim().toUpperCase() || 'BRASIL';
      sortKey = juris;
      const act = lawNumberAndDate.trim() || 'Lei nº ...';
      const summary = summaryDescription.trim() ? ` ${summaryDescription.trim()}.` : '';
      const gazette = gazetteName.trim();
      const details = gazetteDetails.trim() ? `: ${gazetteDetails.trim()}.` : '.';
      const onlineStr = url.trim() && accessDate.trim() 
        ? ` Disponível em: <a href="${url.trim()}" target="_blank" class="text-amber-600 underline">${url.trim()}</a>. Acesso em: ${accessDate.trim()}.`
        : '';
      const onlinePlain = url.trim() && accessDate.trim() 
        ? ` Disponível em: ${url.trim()}. Acesso em: ${accessDate.trim()}.`
        : '';

      html = `${juris}. ${act}.${summary} ${wrapHighlight(gazette)}${details}${onlineStr}`;
      plainText = `${juris}. ${act}.${summary} ${gazette}${details}${onlinePlain}`;
    }

    return { html, plainText, sortKey };
  };

  const currentRef = buildReference();
  const currentCitations = buildInTextCitations();

  // Copy with Rich Text and Plain Text fallback
  const handleCopyRichText = async (htmlContent: string, plainContent: string, typeKey: string) => {
    try {
      if (navigator.clipboard && window.ClipboardItem) {
        const blobHtml = new Blob([htmlContent], { type: 'text/html' });
        const blobPlain = new Blob([plainContent], { type: 'text/plain' });
        await navigator.clipboard.write([
          new ClipboardItem({
            'text/html': blobHtml,
            'text/plain': blobPlain
          })
        ]);
      } else {
        await navigator.clipboard.writeText(plainContent);
      }
      setCopiedType(typeKey);
      setTimeout(() => setCopiedType(null), 2500);
    } catch {
      await navigator.clipboard.writeText(plainContent);
      setCopiedType(typeKey);
      setTimeout(() => setCopiedType(null), 2500);
    }
  };

  // Add to Saved List
  const handleSaveReference = () => {
    if (!title && !lawNumberAndDate) {
      alert('Por favor, preencha ao menos o título da obra ou norma antes de salvar.');
      return;
    }

    const newRef: SavedReference = {
      id: Date.now().toString(),
      type: sourceType,
      html: currentRef.html,
      plainText: currentRef.plainText,
      citationIndirect: currentCitations.indirect,
      citationDirect: currentCitations.direct,
      citationNarrative: currentCitations.narrative,
      sortKey: currentRef.sortKey,
      createdAt: Date.now()
    };

    setSavedReferences(prev => {
      const updated = [...prev, newRef];
      // Sort alphabetically A-Z (ABNT standard)
      updated.sort((a, b) => a.sortKey.localeCompare(b.sortKey, 'pt-BR'));
      return updated;
    });

    setCopiedType('saved-to-list');
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleRemoveSaved = (id: string) => {
    setSavedReferences(prev => prev.filter(r => r.id !== id));
  };

  const handleClearAllSaved = () => {
    if (window.confirm('Deseja realmente limpar toda a sua lista de referências salvas?')) {
      setSavedReferences([]);
    }
  };

  const handleCopyAllSaved = () => {
    if (savedReferences.length === 0) return;
    const allHtml = savedReferences.map(r => `<p style="margin-bottom: 12pt; text-align: justify;">${r.html}</p>`).join('\n');
    const allPlain = savedReferences.map(r => r.plainText).join('\n\n');
    handleCopyRichText(allHtml, allPlain, 'all-saved');
  };

  const handleExportTxt = () => {
    if (savedReferences.length === 0) return;
    const content = `REFERÊNCIAS (NORMA ABNT NBR 6023:2018)\nGerado no Portal ESDHUBEM\n\n` + 
      savedReferences.map(r => r.plainText).join('\n\n');
    
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const urlBlob = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = urlBlob;
    link.download = `referencias-abnt-esdhubem-${new Date().toISOString().slice(0, 10)}.txt`;
    link.click();
    URL.revokeObjectURL(urlBlob);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-24 text-slate-800">
      {/* Top Banner / Header */}
      <div className="bg-[#182333] pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white border-b border-slate-700/60">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#FFC72C 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between gap-4 mb-6">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-[#FFC72C] transition-colors text-sm font-semibold cursor-pointer bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para o Início</span>
            </button>

            {onNavigateToArticles && (
              <button
                onClick={onNavigateToArticles}
                className="hidden sm:inline-flex items-center gap-2 text-amber-300 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider bg-amber-500/20 px-3 py-1.5 rounded-full border border-amber-400/30 cursor-pointer"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Ver Produção Intelectual ESDHUBEM</span>
              </button>
            )}
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC72C]/20 border border-[#FFC72C]/30 text-[#FFC72C] text-xs font-extrabold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ferramenta Acadêmica Gratuita</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
              Gerador de Referências & Citações <span className="text-[#FFC72C]">ABNT</span>
            </h1>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Crie referências bibliográficas impecáveis segundo as normas <strong>ABNT NBR 6023:2018</strong> e citações diretas/indiretas no texto pela <strong>NBR 10520</strong>. Sem cadastro, 100% gratuito e pronto para copiar para o Word ou Google Docs.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> NBR 6023:2018 Atualizada
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Copia com Negrito Formatado
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Ordenação Automática A-Z
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        
        {/* Source Selector Tabs */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-2 sm:p-3 mb-8 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {[
              { id: 'livro', label: 'Livro', icon: BookOpen },
              { id: 'capitulo', label: 'Capítulo de Livro', icon: Layers },
              { id: 'artigo', label: 'Artigo de Periódico / Revista', icon: FileText },
              { id: 'site', label: 'Site / Artigo Web', icon: Globe },
              { id: 'tcc', label: 'TCC, Dissertação ou Tese', icon: GraduationCap },
              { id: 'legislacao', label: 'Legislação / Leis', icon: Scale },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = sourceType === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSourceType(tab.id as SourceType)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#182333] text-[#FFC72C] shadow-md shadow-[#182333]/20 scale-[1.02]'
                      : 'text-slate-600 hover:text-[#182333] hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#FFC72C]' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column Grid: Form + Live Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Input Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
            
            {/* Header of Form */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 flex-wrap gap-2">
              <div>
                <h2 className="text-xl font-extrabold text-[#182333] flex items-center gap-2">
                  <span>Preencha os dados da fonte</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Os campos em tempo real atualizam a referência e as citações no lado direito.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => loadExample(sourceType)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200 transition-colors cursor-pointer"
                  title="Carregar exemplo completo para ver o resultado"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Carregar Exemplo</span>
                </button>
                <button
                  type="button"
                  onClick={clearForm}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium transition-colors cursor-pointer"
                  title="Limpar todos os campos"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Limpar</span>
                </button>
              </div>
            </div>

            {/* Author Section */}
            {sourceType !== 'legislacao' && (
              <div className="space-y-3 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Autor(es) ou Entidade Responsável
                  </label>
                  <div className="flex items-center gap-2">
                    <label className="text-[11px] text-slate-500 flex items-center gap-1 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={useEtAl}
                        onChange={(e) => setUseEtAl(e.target.checked)}
                        className="rounded text-amber-600 focus:ring-amber-500"
                      />
                      <span>Usar <em>et al.</em> (+ de 3 autores)</span>
                    </label>
                  </div>
                </div>

                {authors.map((author, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Último Sobrenome (ex: SILVA ou FREIRE)"
                        value={author.lastName}
                        onChange={(e) => handleAuthorChange(index, 'lastName', e.target.value)}
                        className="bg-white border border-slate-300 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#FFC72C] focus:border-slate-900 outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Nome / Prenomes (ex: Paulo ou Maria Clara)"
                        value={author.firstName}
                        onChange={(e) => handleAuthorChange(index, 'firstName', e.target.value)}
                        className="bg-white border border-slate-300 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#FFC72C] focus:border-slate-900 outline-none"
                      />
                    </div>
                    {authors.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveAuthor(index)}
                        className="p-2 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                        title="Remover autor"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={handleAddAuthor}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Adicionar outro autor</span>
                  </button>

                  {sourceType === 'livro' && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <span>Papel:</span>
                      <select
                        value={authorRole}
                        onChange={(e: any) => setAuthorRole(e.target.value)}
                        className="bg-white border border-slate-300 rounded-lg px-2 py-1 text-xs outline-none font-medium"
                      >
                        <option value="autor">Autor Principal</option>
                        <option value="org">Organizador (org.)</option>
                        <option value="coord">Coordenador (coord.)</option>
                        <option value="ed">Editor (ed.)</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* LEGISLAÇÃO SPECIFIC INPUTS */}
            {sourceType === 'legislacao' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Jurisdição (País, Estado ou Município) *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: BRASIL ou SÃO PAULO (Estado)"
                      value={jurisdiction}
                      onChange={(e) => setJurisdiction(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#FFC72C] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Número e Data do Ato Normativo *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Lei nº 9.394, de 20 de dezembro de 1996"
                      value={lawNumberAndDate}
                      onChange={(e) => setLawNumberAndDate(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#FFC72C] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Ementa / Descrição sumária do teor
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: Estabelece as diretrizes e bases da educação nacional."
                    value={summaryDescription}
                    onChange={(e) => setSummaryDescription(e.target.value)}
                    className="w-full bg-white border border-slate-300 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#FFC72C] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Órgão de Divulgação (Publicação Oficial) *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Diário Oficial da União"
                      value={gazetteName}
                      onChange={(e) => setGazetteName(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#FFC72C] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Local, Seção, Página e Data
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Brasília, DF, seção 1, p. 27833, 23 dez. 1996"
                      value={gazetteDetails}
                      onChange={(e) => setGazetteDetails(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#FFC72C] outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TITLE & SUBTITLE */}
            {sourceType !== 'legislacao' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Título principal *
                  </label>
                  <input
                    type="text"
                    placeholder={
                      sourceType === 'artigo'
                        ? 'Título do artigo (ex: O impacto da IA na educação)'
                        : sourceType === 'capitulo'
                        ? 'Título do capítulo'
                        : sourceType === 'site'
                        ? 'Título da matéria ou página'
                        : 'Título do livro ou obra'
                    }
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-white border border-slate-300 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#FFC72C] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Subtítulo (se houver, sem negrito)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: saberes necessários à prática educativa"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    className="w-full bg-white border border-slate-300 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#FFC72C] outline-none"
                  />
                </div>
              </div>
            )}

            {/* CAPÍTULO DE LIVRO ESPECÍFICO */}
            {sourceType === 'capitulo' && (
              <div className="space-y-4 bg-amber-50/50 p-4 rounded-2xl border border-amber-200/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  Dados da Coletânea / Livro Inteiro
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Organizador / Editor do Livro (ex: SILVA, Marcos (org.))
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: SILVA, Marcos (org.)"
                      value={bookOrganizers}
                      onChange={(e) => setBookOrganizers(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-3 py-2 rounded-xl text-xs focus:ring-2 focus:ring-[#FFC72C] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Título do Livro (que receberá o destaque) *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Avaliação e prática pedagógica"
                      value={bookTitle}
                      onChange={(e) => setBookTitle(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-3 py-2 rounded-xl text-xs focus:ring-2 focus:ring-[#FFC72C] outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ARTIGO ESPECÍFICO */}
            {sourceType === 'artigo' && (
              <div className="space-y-4 bg-blue-50/50 p-4 rounded-2xl border border-blue-200/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900">
                  Dados do Periódico / Revista Científica
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Nome da Revista / Periódico (em negrito) *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Revista Brasileira de Educação"
                      value={journalName}
                      onChange={(e) => setJournalName(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-3 py-2 rounded-xl text-xs focus:ring-2 focus:ring-[#FFC72C] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      DOI (Identificador Digital)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: 10.5281/zenodo.1234567"
                      value={doi}
                      onChange={(e) => setDoi(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-3 py-2 rounded-xl text-xs focus:ring-2 focus:ring-[#FFC72C] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Volume (v.)</label>
                    <input
                      type="text"
                      placeholder="v. 12"
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-2.5 py-1.5 rounded-lg text-xs outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Fascículo (n.)</label>
                    <input
                      type="text"
                      placeholder="n. 2"
                      value={journalIssue}
                      onChange={(e) => setJournalIssue(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-2.5 py-1.5 rounded-lg text-xs outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Páginas (p. xx-yy)</label>
                    <input
                      type="text"
                      placeholder="p. 45-62"
                      value={pageRange}
                      onChange={(e) => setPageRange(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-2.5 py-1.5 rounded-lg text-xs outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">Mês (abreviado)</label>
                    <select
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-2 py-1.5 rounded-lg text-xs outline-none"
                    >
                      {MONTHS_ABNT.map(m => (
                        <option key={m.value} value={m.value}>{m.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* SITE ESPECÍFICO */}
            {sourceType === 'site' && (
              <div className="space-y-3 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-200/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                  Dados do Portal ou Website
                </h4>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Nome do Site / Portal / Blog *
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Portal ESDHUBEM, G1, Scielo"
                    value={journalName}
                    onChange={(e) => setJournalName(e.target.value)}
                    className="w-full bg-white border border-slate-300 px-3 py-2 rounded-xl text-xs focus:ring-2 focus:ring-[#FFC72C] outline-none"
                  />
                </div>
              </div>
            )}

            {/* TCC ESPECÍFICO */}
            {sourceType === 'tcc' && (
              <div className="space-y-4 bg-purple-50/50 p-4 rounded-2xl border border-purple-200/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900">
                  Dados Acadêmicos e Institucionais
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Grau / Tipo do Trabalho *
                    </label>
                    <select
                      value={academicDegree}
                      onChange={(e) => setAcademicDegree(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-3 py-2 rounded-xl text-xs font-medium outline-none"
                    >
                      <option value="Trabalho de Conclusão de Curso (Graduação)">TCC (Graduação)</option>
                      <option value="Monografia (Especialização)">Monografia (Pós-graduação / Especialização)</option>
                      <option value="Dissertação (Mestrado)">Dissertação (Mestrado)</option>
                      <option value="Tese (Doutorado)">Tese (Doutorado)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Instituição / Universidade *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Universidade Federal de São Paulo"
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-3 py-2 rounded-xl text-xs focus:ring-2 focus:ring-[#FFC72C] outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* PUBLICATION DETAILS: CIDADE, EDITORA, ANO, EDIÇÃO, PÁGINAS */}
            {sourceType !== 'legislacao' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Cidade (Local)</label>
                  <input
                    type="text"
                    placeholder="Ex: São Paulo"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-white border border-slate-300 px-3 py-2 rounded-xl text-xs outline-none focus:ring-2 focus:ring-[#FFC72C]"
                  />
                </div>
                {sourceType !== 'site' && sourceType !== 'tcc' && (
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Editora</label>
                    <input
                      type="text"
                      placeholder="Ex: Cortez"
                      value={publisher}
                      onChange={(e) => setPublisher(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-3 py-2 rounded-xl text-xs outline-none focus:ring-2 focus:ring-[#FFC72C]"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Ano de Pub. *</label>
                  <input
                    type="text"
                    placeholder="Ex: 2026"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full bg-white border border-slate-300 px-3 py-2 rounded-xl text-xs font-semibold outline-none focus:ring-2 focus:ring-[#FFC72C]"
                  />
                </div>
                {sourceType === 'livro' && (
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Edição</label>
                    <input
                      type="text"
                      placeholder="Ex: 2. ed."
                      value={edition}
                      onChange={(e) => setEdition(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-3 py-2 rounded-xl text-xs outline-none focus:ring-2 focus:ring-[#FFC72C]"
                    />
                  </div>
                )}
                {(sourceType === 'livro' || sourceType === 'tcc') && (
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      {sourceType === 'tcc' ? 'Folhas (ex: 78 f.)' : 'Total Páginas (ex: 210 p.)'}
                    </label>
                    <input
                      type="text"
                      placeholder={sourceType === 'tcc' ? '78 f.' : '210 p.'}
                      value={totalPageCount}
                      onChange={(e) => setTotalPageCount(e.target.value)}
                      className="w-full bg-white border border-slate-300 px-3 py-2 rounded-xl text-xs outline-none focus:ring-2 focus:ring-[#FFC72C]"
                    />
                  </div>
                )}
              </div>
            )}

            {/* ONLINE ACCESS (URL & DATE) */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">
                  Documento Consultado Online (Link & Data de Acesso)
                </label>
                <button
                  type="button"
                  onClick={handleSetTodayAccessDate}
                  className="text-[11px] font-bold text-amber-700 hover:text-amber-800 transition-colors cursor-pointer"
                >
                  + Preencher data de hoje
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <input
                    type="url"
                    placeholder="URL completa (ex: https://...)"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full bg-white border border-slate-300 px-3.5 py-2 rounded-xl text-xs sm:text-sm outline-none focus:ring-2 focus:ring-[#FFC72C]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Ex: 28 set. 2026"
                    value={accessDate}
                    onChange={(e) => setAccessDate(e.target.value)}
                    className="w-full bg-white border border-slate-300 px-3.5 py-2 rounded-xl text-xs sm:text-sm outline-none focus:ring-2 focus:ring-[#FFC72C]"
                  />
                </div>
              </div>
            </div>

            {/* Options Bar: Bold vs Italic */}
            <div className="pt-2 flex items-center justify-between text-xs text-slate-600 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span>Destaque tipográfico:</span>
                <button
                  type="button"
                  onClick={() => setHighlightStyle('bold')}
                  className={`px-2.5 py-1 rounded-lg font-bold cursor-pointer transition-all ${
                    highlightStyle === 'bold' ? 'bg-[#182333] text-white' : 'bg-slate-100 hover:bg-slate-200'
                  }`}
                >
                  Negrito (Padrão ABNT)
                </button>
                <button
                  type="button"
                  onClick={() => setHighlightStyle('italic')}
                  className={`px-2.5 py-1 rounded-lg italic cursor-pointer transition-all ${
                    highlightStyle === 'italic' ? 'bg-[#182333] text-white' : 'bg-slate-100 hover:bg-slate-200'
                  }`}
                >
                  Itálico
                </button>
              </div>

              <span className="text-[11px] text-slate-400">
                A ABNT permite negrito ou itálico, desde que uniforme em todo o trabalho.
              </span>
            </div>

          </div>

          {/* Right Column: Live Output & In-text Citations (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sticky top-28">
            
            {/* Box 1: Full Reference */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg border border-slate-200/90 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#182333]">
                  <Bookmark className="w-4 h-4 text-[#FFC72C]" />
                  <span>Referência Bibliográfica (NBR 6023)</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Formatada
                </span>
              </div>

              {/* Formatted Reference Text Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-5 text-sm sm:text-base text-slate-800 leading-relaxed font-sans shadow-inner selection:bg-[#FFC72C]/40">
                <div 
                  dangerouslySetInnerHTML={{ __html: currentRef.html }}
                  className="break-words select-all"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => handleCopyRichText(currentRef.html, currentRef.plainText, 'single-rich')}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FFC72C] hover:bg-[#F5B014] text-slate-950 font-black text-xs sm:text-sm px-4 py-3 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
                  id="btn-copiar-referencia"
                >
                  {copiedType === 'single-rich' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-900" />
                      <span>Copiado com Negrito!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Referência</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleSaveReference}
                  className="inline-flex items-center justify-center gap-2 bg-[#182333] hover:bg-[#243042] text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
                  title="Salvar na sua lista de referências do TCC"
                >
                  {copiedType === 'saved-to-list' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Adicionada!</span>
                    </>
                  ) : (
                    <>
                      <FolderPlus className="w-4 h-4 text-[#FFC72C]" />
                      <span>Salvar na Lista</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center mt-3">
                Cole diretamente no Word, Google Docs ou LibreOffice com formatação preservada.
              </p>
            </div>

            {/* Box 2: In-Text Citations (NBR 10520) */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-amber-500" />
                  <span>Como Citar no Texto (NBR 10520)</span>
                </h3>
                <div className="flex items-center gap-1 text-[11px] text-slate-500">
                  <span>Pág:</span>
                  <input
                    type="text"
                    value={pageCitationNumber}
                    onChange={(e) => setPageCitationNumber(e.target.value)}
                    className="w-12 bg-slate-100 border border-slate-300 rounded px-1.5 py-0.5 text-xs text-center font-bold outline-none"
                    placeholder="15"
                  />
                </div>
              </div>

              <div className="space-y-2.5 text-xs">
                {/* Citação Indireta */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-slate-400 mb-0.5">
                      Citação Indireta (fim de frase):
                    </span>
                    <span className="font-mono font-bold text-slate-800 text-xs sm:text-sm">
                      {currentCitations.indirect}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopyRichText(currentCitations.indirect, currentCitations.indirect, 'cite-ind')}
                    className="p-2 text-slate-500 hover:text-amber-600 transition-colors cursor-pointer"
                    title="Copiar citação indireta"
                  >
                    {copiedType === 'cite-ind' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Citação Direta */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-slate-400 mb-0.5">
                      Citação Direta (com página):
                    </span>
                    <span className="font-mono font-bold text-slate-800 text-xs sm:text-sm">
                      {currentCitations.direct}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopyRichText(currentCitations.direct, currentCitations.direct, 'cite-dir')}
                    className="p-2 text-slate-500 hover:text-amber-600 transition-colors cursor-pointer"
                    title="Copiar citação direta"
                  >
                    {copiedType === 'cite-dir' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Citação Narrativa */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-slate-400 mb-0.5">
                      Citação Narrativa (corpo do texto):
                    </span>
                    <span className="font-sans font-medium text-slate-800 text-xs sm:text-sm">
                      {currentCitations.narrative}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopyRichText(currentCitations.narrative, currentCitations.narrative, 'cite-nar')}
                    className="p-2 text-slate-500 hover:text-amber-600 transition-colors cursor-pointer"
                    title="Copiar citação narrativa"
                  >
                    {copiedType === 'cite-nar' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Box 3: Quick Tip Card */}
            <div className="rounded-2xl p-4 bg-gradient-to-br from-[#182333] to-[#243042] text-white text-xs space-y-2 border border-slate-700 shadow-md">
              <div className="flex items-center gap-2 text-[#FFC72C] font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Publique seu TCC com DOI na ESDHUBEM</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Na ESDHUBEM, seu Manuscrito de Conclusão de Curso (MCC) não vai para a gaveta: ele pode receber atribuição de <strong>DOI internacional pelo ecossistema Zenodo / CERN</strong> e circular mundialmente.
              </p>
            </div>

          </div>

        </div>

        {/* Section 2: Saved Bibliography List (Minha Lista de Referências) */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold mb-2">
                <Bookmark className="w-3.5 h-3.5 text-amber-600" />
                <span>Lista da Sua Sessão ({savedReferences.length} salva{savedReferences.length === 1 ? '' : 's'})</span>
              </div>
              <h2 className="text-2xl font-black text-[#182333]">
                Minha Lista de Referências (A-Z)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Organizadas automaticamente em ordem alfabética segundo a norma NBR 6023 da ABNT.
              </p>
            </div>

            {savedReferences.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleCopyAllSaved}
                  className="inline-flex items-center gap-2 bg-[#FFC72C] hover:bg-[#F5B014] text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
                  id="btn-copiar-todas"
                >
                  {copiedType === 'all-saved' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-900" />
                      <span>Todas Copiadas!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Todas Formatadas</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleExportTxt}
                  className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-3.5 py-2.5 rounded-xl transition-all cursor-pointer"
                  title="Exportar arquivo .txt"
                >
                  <Download className="w-4 h-4" />
                  <span>Exportar .TXT</span>
                </button>

                <button
                  onClick={handleClearAllSaved}
                  className="inline-flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-xs px-3 py-2.5 rounded-xl transition-all cursor-pointer"
                  title="Limpar lista"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Limpar Tudo</span>
                </button>
              </div>
            )}
          </div>

          {/* List items */}
          {savedReferences.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <FolderPlus className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-slate-700">Nenhuma referência adicionada ainda</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Preencha os campos acima e clique no botão <strong>"Salvar na Lista"</strong> para montar a bibliografia completa do seu artigo ou TCC.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100 mt-4">
              {savedReferences.map((ref, idx) => (
                <div key={ref.id} className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {ref.type}
                      </span>
                    </div>
                    <div 
                      dangerouslySetInnerHTML={{ __html: ref.html }}
                      className="text-sm text-slate-800 leading-relaxed font-sans pl-7"
                    />
                  </div>

                  <div className="flex items-center gap-2 sm:self-center shrink-0 pl-7 sm:pl-0">
                    <button
                      onClick={() => handleCopyRichText(ref.html, ref.plainText, `item-${ref.id}`)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 text-xs font-semibold transition-colors cursor-pointer"
                      title="Copiar referência"
                    >
                      {copiedType === `item-${ref.id}` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => handleRemoveSaved(ref.id)}
                      className="p-1.5 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                      title="Remover"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Section 3: Guia Rápido das Normas ABNT (FAQ / Explicativo) */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
              <span>Guia Metodológico ESDHUBEM</span>
            </div>
            <h2 className="text-2xl font-black text-[#182333]">
              Principais Regras da ABNT NBR 6023:2018 que você deve saber
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs sm:text-sm text-slate-700">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="font-bold text-[#182333] text-sm sm:text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#182333] text-[#FFC72C] text-xs font-black flex items-center justify-center">1</span>
                Qual elemento recebe o destaque (Negrito)?
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                Em <strong>livros, teses e TCCs</strong>, quem recebe o negrito é o <strong>Título da Obra</strong> (o subtítulo fica em texto normal). Já em <strong>artigos científicos</strong>, o título do artigo fica normal e quem recebe o negrito é o <strong>Nome da Revista / Periódico</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="font-bold text-[#182333] text-sm sm:text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#182333] text-[#FFC72C] text-xs font-black flex items-center justify-center">2</span>
                Como organizar a lista final no trabalho?
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                As referências devem estar em <strong>ordem alfabética</strong> única (pelo sobrenome do autor ou título do documento sem autor), com alinhamento à margem <strong>esquerda</strong> (não justificado) e espaçamento entrelinhas <strong>simples</strong>, separadas entre si por um espaço simples.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="font-bold text-[#182333] text-sm sm:text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#182333] text-[#FFC72C] text-xs font-black flex items-center justify-center">3</span>
                Como abreviar os meses na ABNT?
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                Os meses são sempre abreviados com três letras e ponto: <code>jan.</code>, <code>fev.</code>, <code>mar.</code>, <code>abr.</code>, <code>jun.</code>, <code>jul.</code>, <code>ago.</code>, <code>set.</code>, <code>out.</code>, <code>nov.</code>, <code>dez.</code>. <strong>Atenção:</strong> o mês de <strong>maio</strong> não se abrevia!
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="font-bold text-[#182333] text-sm sm:text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#182333] text-[#FFC72C] text-xs font-black flex items-center justify-center">4</span>
                Quando usar "et al."?
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                Pela NBR 6023:2018, para obras com mais de três autores, é permitido indicar apenas o primeiro seguido da expressão <em>et al.</em> (abreviação latina para "e outros"), ou então citar todos os autores. O gerador da ESDHUBEM permite você escolher a modalidade de sua preferência com um clique.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
