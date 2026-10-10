import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary capturou um erro:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 text-center">
          <div className="max-w-md bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-4">
            <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto text-2xl font-black">
              ⚠️
            </div>
            <h2 className="text-xl font-black text-slate-900">
              Atualização em andamento
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              O portal foi atualizado com novos conteúdos. Se a página não recarregar automaticamente, clique no botão abaixo para carregar a versão mais recente.
            </p>
            <button
              onClick={() => {
                window.location.reload();
              }}
              className="w-full py-3 px-6 bg-[#011049] hover:bg-[#061e47] text-[#FFC72C] font-black rounded-xl text-sm transition-all cursor-pointer shadow-md"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
