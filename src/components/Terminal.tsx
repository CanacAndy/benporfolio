'use client';

import { useState, useEffect, useRef } from 'react';
import { FileSystem } from '@/lib/filesystem';
import { FileViewer } from './FileViewer';

interface HistoryEntry {
  command: string;
  output: string | React.ReactNode;
  error?: boolean;
}

export function Terminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState('');
  const [currentPath, setCurrentPath] = useState('/home');
  const [viewingFile, setViewingFile] = useState<{ name: string; content: string; type: string } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const fileSystem = useRef(new FileSystem());

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();

    if (!trimmedCmd) {
      setHistory(prev => [...prev, { command: '', output: '' }]);
      return;
    }

    const parts = trimmedCmd.split(' ');
    const command = parts[0];
    const args = parts.slice(1);

    let output: string | React.ReactNode = '';
    let error = false;

    switch (command) {
      case 'help':
        output = (
          <div className="space-y-2">
            <div className="text-red-400 font-bold mb-3">Commandes disponibles:</div>
            <div><span className="text-white">ls</span> ou <span className="text-white">ls -la</span> - Liste les fichiers du répertoire actuel</div>
            <div><span className="text-white">cd [dossier]</span> - Change de répertoire</div>
            <div><span className="text-white">cat [fichier]</span> - Affiche le contenu d'un fichier</div>
            <div><span className="text-white">pwd</span> - Affiche le chemin actuel</div>
            <div><span className="text-white">clear</span> - Efface le terminal</div>
            <div><span className="text-white">help</span> - Affiche cette aide</div>
          </div>
        );
        break;

      case 'ls':
        const lsResult = fileSystem.current.ls(currentPath, args.includes('-la') || args.includes('-l'));
        output = lsResult.error ? lsResult.error : lsResult.output || '';
        error = !!lsResult.error;
        break;

      case 'cd':
        const newPath = args[0] || '/home';
        const cdResult = fileSystem.current.cd(currentPath, newPath);
        if (cdResult.error) {
          output = cdResult.error;
          error = true;
        } else {
          setCurrentPath(cdResult.path || currentPath);
          output = '';
        }
        break;

      case 'pwd':
        output = currentPath;
        break;

      case 'cat':
        if (!args[0]) {
          output = 'cat: fichier manquant';
          error = true;
        } else {
          const catResult = fileSystem.current.cat(currentPath, args[0]);
          if (catResult.error) {
            output = catResult.error;
            error = true;
          } else if (catResult.file) {
            setViewingFile(catResult.file);
            output = `Ouverture de ${args[0]}...`;
          }
        }
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = `bash: ${command}: commande introuvable. Tapez 'help' pour voir les commandes disponibles.`;
        error = true;
    }

    setHistory(prev => [...prev, { command: trimmedCmd, output, error }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  if (viewingFile) {
    return <FileViewer file={viewingFile} onClose={() => setViewingFile(null)} />;
  }

  return (
    <div className="bg-black border border-red-600 rounded-lg shadow-2xl shadow-red-900/50 w-full flex flex-col font-mono">
      <div className="bg-red-900/20 border-b border-red-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="w-3 h-3 rounded-full bg-red-600"></div>
        </div>
        <div className="text-red-400 text-sm">Portfolio Terminal</div>
      </div>

      <div className="bg-red-900/20 border-b border-red-600 px-4 py-2 text-white text-sm flex items-center gap-2">
        <span className="text-red-500">💡</span>
        Si vous n'êtes pas familier avec un shell, tapez la commande <span className="font-bold text-red-400">help</span>
      </div>

      <div
        ref={terminalRef}
        className="p-4 overflow-y-auto cursor-text select-text"
        onClick={handleTerminalClick}
        style={{ height: '500px', userSelect: 'text' }}
      >
        {history.map((entry, idx) => (
          <div key={idx} className="mb-2 select-text">
            {entry.command && (
              <div className="flex items-center gap-2 flex-wrap select-text">
                <span className="text-red-400">user@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-red-400">{currentPath}</span>
                <span className="text-white">$</span>
                <span className="text-white">{entry.command}</span>
              </div>
            )}
            {entry.output && (
              <div className={`mt-1 ml-2 select-text ${entry.error ? 'text-red-500' : 'text-gray-300'}`}>
                {entry.output}
              </div>
            )}
          </div>
        ))}

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-red-400">user@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-red-400">{currentPath}</span>
          <span className="text-white">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 min-w-[200px] bg-transparent outline-none text-white caret-red-500 select-text"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
