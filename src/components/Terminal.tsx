'use client';

import { useState, useEffect, useRef } from 'react';
import { FileSystem } from '@/lib/filesystem';
import { FileViewer } from './FileViewer';

interface HistoryEntry {
  command: string;
  output: string | JSX.Element;
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

    let output: string | JSX.Element = '';
    let error = false;

    switch (command) {
      case 'help':
        output = (
          <div className="space-y-2">
            <div className="text-cyan-400 font-bold mb-3">Commandes disponibles:</div>
            <div><span className="text-yellow-400">ls</span> ou <span className="text-yellow-400">ls -la</span> - Liste les fichiers du répertoire actuel</div>
            <div><span className="text-yellow-400">cd [dossier]</span> - Change de répertoire</div>
            <div><span className="text-yellow-400">cat [fichier]</span> - Affiche le contenu d'un fichier</div>
            <div><span className="text-yellow-400">pwd</span> - Affiche le chemin actuel</div>
            <div><span className="text-yellow-400">clear</span> - Efface le terminal</div>
            <div><span className="text-yellow-400">help</span> - Affiche cette aide</div>
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
    <div className="bg-gray-900 border border-green-600 rounded-lg shadow-2xl shadow-green-900/50 w-full flex flex-col font-mono">
      <div className="bg-green-900/20 border-b border-green-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-green-400 text-sm">Portfolio Terminal</div>
      </div>

      <div className="bg-yellow-900/20 border-b border-yellow-600 px-4 py-2 text-yellow-300 text-sm flex items-center gap-2">
        <span className="text-yellow-500">💡</span>
        Si vous n'êtes pas familier avec un shell, tapez la commande <span className="font-bold text-yellow-400">help</span>
      </div>

      <div
        ref={terminalRef}
        className="p-4 overflow-y-auto cursor-text"
        onClick={handleTerminalClick}
        style={{ height: '500px' }}
      >
        {history.map((entry, idx) => (
          <div key={idx} className="mb-2">
            {entry.command && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-cyan-400">user@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">{currentPath}</span>
                <span className="text-white">$</span>
                <span className="text-green-400">{entry.command}</span>
              </div>
            )}
            {entry.output && (
              <div className={`mt-1 ml-2 ${entry.error ? 'text-red-400' : 'text-gray-300'}`}>
                {entry.output}
              </div>
            )}
          </div>
        ))}

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-cyan-400">user@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">{currentPath}</span>
          <span className="text-white">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 min-w-[200px] bg-transparent outline-none text-green-400 caret-green-400"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
