interface FileNode {
  name: string;
  type: 'file' | 'directory';
  content?: string;
  fileType?: 'text' | 'image' | 'pdf';
  children?: { [key: string]: FileNode };
}

export class FileSystem {
  private root: { [key: string]: FileNode };

  constructor() {
    this.root = {
      home: {
        name: 'home',
        type: 'directory',
        children: {
          cv: {
            name: 'cv',
            type: 'file',
            fileType: 'image',
            content: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
          },
          experience: {
            name: 'experience',
            type: 'file',
            fileType: 'text',
            content: `EXPÉRIENCE PROFESSIONNELLE
========================

Développeur Full Stack | Tech Company
2021 - Présent
- Développement d'applications web avec React et Node.js
- Collaboration avec équipes multidisciplinaires
- Optimisation des performances et scalabilité

Développeur Junior | Startup Inc.
2019 - 2021
- Maintenance et amélioration de projets existants
- Participation aux code reviews
- Apprentissage des meilleures pratiques de développement`,
          },
          projet: {
            name: 'projet',
            type: 'file',
            fileType: 'text',
            content: `MES PROJETS
===========

🚀 Portfolio Terminal
Technologies: Next.js, TypeScript, Tailwind CSS
Description: Portfolio interactif en forme de terminal shell

🌐 Application E-commerce
Technologies: React, Node.js, MongoDB
Description: Plateforme de vente en ligne complète

📱 Application Mobile
Technologies: React Native, Firebase
Description: Application de gestion de tâches

🎮 Jeu Web
Technologies: JavaScript, Canvas API
Description: Jeu de plateforme 2D dans le navigateur`,
          },
          'profile-tryhackme': {
            name: 'profile-tryhackme',
            type: 'file',
            fileType: 'text',
            content: `PROFIL TRYHACKME
================

Pseudo: CyberExplorer
Rang: Top 5%
Salles complétées: 120+

Compétences:
- Pentest Web
- Analyse de malware
- Cryptographie
- Forensics
- Privilege Escalation

Badges obtenus:
🏆 Web Fundamentals
🏆 Linux PrivEsc
🏆 Network Security
🏆 CTF Participant

"La sécurité n'est pas un produit, mais un processus."`,
          },
        },
      },
    };
  }

  private resolvePath(currentPath: string, targetPath: string): string {
    if (targetPath.startsWith('/')) {
      return targetPath;
    }

    if (targetPath === '..') {
      const parts = currentPath.split('/').filter(p => p);
      parts.pop();
      return '/' + parts.join('/');
    }

    if (targetPath === '.') {
      return currentPath;
    }

    return currentPath === '/' ? `/${targetPath}` : `${currentPath}/${targetPath}`;
  }

  private getNode(path: string): FileNode | null {
    const parts = path.split('/').filter(p => p);
    let current: any = this.root;

    for (const part of parts) {
      if (!current[part]) {
        return null;
      }
      current = current[part].children || current[part];
    }

    return current;
  }

  ls(currentPath: string, detailed: boolean = false): { output?: string; error?: string } {
    const node = this.getNode(currentPath);

    if (!node) {
      return { error: `ls: impossible d'accéder à '${currentPath}': Aucun fichier ou dossier de ce type` };
    }

    const children = (node as any).children || node;
    const entries = Object.values(children) as FileNode[];

    if (entries.length === 0) {
      return { output: '' };
    }

    if (detailed) {
      const lines = entries.map(entry => {
        const type = entry.type === 'directory' ? 'd' : '-';
        const perms = entry.type === 'directory' ? 'rwxr-xr-x' : 'rw-r--r--';
        const size = entry.type === 'directory' ? '4096' : '1024';
        const date = 'Jan 15 10:30';
        const name = entry.type === 'directory' ? `\x1b[34m${entry.name}\x1b[0m` : entry.name;
        return `${type}${perms}  1 user user ${size.padStart(6)} ${date} ${name}`;
      });
      return { output: 'total ' + entries.length + '\n' + lines.join('\n') };
    }

    const names = entries.map(entry =>
      entry.type === 'directory' ? `📁 ${entry.name}` : `📄 ${entry.name}`
    ).join('  ');

    return { output: names };
  }

  cd(currentPath: string, targetPath: string): { path?: string; error?: string } {
    const newPath = this.resolvePath(currentPath, targetPath);
    const node = this.getNode(newPath);

    if (!node) {
      return { error: `cd: ${targetPath}: Aucun fichier ou dossier de ce type` };
    }

    const actualNode = (node as any).type === 'directory' ? node : null;
    if (!actualNode && !(node as any).children) {
      return { error: `cd: ${targetPath}: N'est pas un dossier` };
    }

    return { path: newPath };
  }

  cat(currentPath: string, fileName: string): { file?: { name: string; content: string; type: string }; error?: string } {
    const node = this.getNode(currentPath);

    if (!node) {
      return { error: `cat: ${fileName}: Aucun fichier ou dossier de ce type` };
    }

    const children = (node as any).children || node;
    const file = children[fileName];

    if (!file) {
      return { error: `cat: ${fileName}: Aucun fichier ou dossier de ce type` };
    }

    if (file.type === 'directory') {
      return { error: `cat: ${fileName}: Est un dossier` };
    }

    return {
      file: {
        name: fileName,
        content: file.content || '',
        type: file.fileType || 'text',
      },
    };
  }
}
