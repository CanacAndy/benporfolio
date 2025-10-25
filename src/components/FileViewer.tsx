'use client';

import { X } from 'lucide-react';

interface FileViewerProps {
  file: {
    name: string;
    content: string;
    type: string;
  };
  onClose: () => void;
}

export function FileViewer({ file, onClose }: FileViewerProps) {
  return (
    <div className="min-h-screen bg-black text-white p-4 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-green-400">{file.name}</h1>
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
            Fermer
          </button>
        </div>

        <div className="bg-gray-900 border border-green-600 rounded-lg p-6 shadow-2xl shadow-green-900/50">
          {file.type === 'image' ? (
            <div className="flex justify-center">
              <img
                src={file.content}
                alt={file.name}
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          ) : file.type === 'pdf' ? (
            <div className="w-full" style={{ height: '80vh' }}>
              <iframe
                src={file.content}
                className="w-full h-full rounded-lg"
                title={file.name}
              />
            </div>
          ) : (
            <div className="prose prose-invert max-w-none">
              <pre className="whitespace-pre-wrap text-gray-300">{file.content}</pre>
            </div>
          )}
        </div>

        <div className="mt-4 text-center text-gray-500 text-sm">
          Appuyez sur Échap ou cliquez sur Fermer pour revenir au terminal
        </div>
      </div>
    </div>
  );
}
