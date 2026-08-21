#!/usr/bin/env node
/**
 * 77 STUDIO - AGENT CLI TOOLKIT
 * Usage: npm run 77 <command> [options]
 * 
 * Commands:
 *   knowledge   - Process 77/*.mdx files into public/knowledge.json for AI Agent RAG
 *   inspect     - Print project architecture status, modules, and Git status
 *   generate    - Scaffold a new Astro component or MDX module specification
 *   commit      - Standardize Conventional Commit and update CHANGELOG.md
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT_DIR = process.cwd();
const DOCS_DIR = path.join(ROOT_DIR, '77');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const KNOWLEDGE_PATH = path.join(PUBLIC_DIR, 'knowledge.json');

const args = process.argv.slice(2);
const command = args[0] || 'inspect';

console.log('\x1b[35m%s\x1b[0m', '⚡ 77 STUDIO - AGENT CLI TOOLKIT v1.0.0');

switch (command.toLowerCase()) {
  case 'knowledge':
    buildKnowledgeBase();
    break;
  case 'inspect':
    inspectProject();
    break;
  case 'feature':
    createFeatureBranch(args[1]);
    break;
  case 'generate':
    generateTemplate(args[1], args[2]);
    break;
  case 'commit':
    handleCommit(args.slice(1));
    break;
  default:
    console.log(`
Comandos disponibles:
  npm run 77 feature <nombre-meta>    -> Crea y cambia a una rama aislada (feature/<nombre-meta>)
  npm run 77 knowledge               -> Construye public/knowledge.json para el Agente de IA
  npm run 77 inspect                 -> Muestra el resumen del estado del proyecto
  npm run 77 generate <tipo> <nombre> -> Genera componente o especificación de módulo
  npm run 77 commit <tipo> <mensaje> -> Ejecuta un commit estandarizado y actualiza CHANGELOG.md
    `);
}

/**
 * Compila todas las especificaciones MDX en 77/ dentro de public/knowledge.json
 */
function buildKnowledgeBase() {
  console.log('\x1b[36m%s\x1b[0m', '🔍 Escaneando especificaciones MDX en la carpeta 77/...');

  if (!fs.existsSync(DOCS_DIR)) {
    console.error('\x1b[31m%s\x1b[0m', '❌ Error: La carpeta 77/ no existe.');
    process.exit(1);
  }

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  const modules = fs.readdirSync(DOCS_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() || dirent.name.endsWith('.mdx') || dirent.name.endsWith('.md'));

  const knowledgeBase = {
    projectName: '77 Studio',
    tagline: 'Digital Studio + Creative Partner + Technology & AI Company',
    generatedAt: new Date().toISOString(),
    totalModules: 0,
    documents: []
  };

  function processFile(filePath, relPath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : relPath;
    
    // Extract main headers
    const headers = [...content.matchAll(/^##\s+(.+)$/gm)].map(m => m[1]);

    knowledgeBase.documents.push({
      id: relPath.replace(/[/\\]/g, '-').replace(/\.(mdx|md)$/, ''),
      path: relPath,
      title: title,
      headers: headers,
      contentSnippet: content.slice(0, 1000), // First 1k characters
      rawContent: content
    });
  }

  // Walk through subdirectories
  function walkDir(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      const relPath = path.relative(DOCS_DIR, fullPath);
      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
        processFile(fullPath, relPath);
      }
    }
  }

  walkDir(DOCS_DIR);
  knowledgeBase.totalModules = knowledgeBase.documents.length;

  fs.writeFileSync(KNOWLEDGE_PATH, JSON.stringify(knowledgeBase, null, 2), 'utf-8');
  console.log('\x1b[32m%s\x1b[0m', `✅ Base de conocimiento compilar exitosamente en public/knowledge.json (${knowledgeBase.totalModules} documentos indexados).`);
}

/**
 * Inspecciona el estado del repositorio
 */
function inspectProject() {
  console.log('\x1b[33m%s\x1b[0m', '📊 Estado de la Arquitectura 77 Studio:');
  try {
    const gitStatus = execSync('git status --short', { encoding: 'utf-8' });
    console.log('\x1b[36m%s\x1b[0m', 'Ramas / Cambios Git no confirmados:');
    console.log(gitStatus || '  (Limpio - Todos los cambios están confirmados)');
  } catch (e) {
    console.log('  Git status no disponible');
  }

  if (fs.existsSync(DOCS_DIR)) {
    const subfolders = fs.readdirSync(DOCS_DIR).filter(f => fs.statSync(path.join(DOCS_DIR, f)).isDirectory());
    console.log('\x1b[32m%s\x1b[0m', `Módulos Documentados en 77/ (${subfolders.length} módulos):`);
    subfolders.forEach(sf => console.log(`  - 77/${sf}`));
  }
}

/**
 * Genera plantillas iniciales
 */
function generateTemplate(type, name) {
  if (!type || !name) {
    console.log('\x1b[31m%s\x1b[0m', 'Uso: npm run 77 generate <componente|vista> <Nombre>');
    return;
  }

  if (type === 'componente') {
    const compDir = path.join(ROOT_DIR, 'src', 'components');
    if (!fs.existsSync(compDir)) fs.mkdirSync(compDir, { recursive: true });
    const filePath = path.join(compDir, `${name}.astro`);
    
    const code = `---
// src/components/${name}.astro
// Componente generado automáticamente por 77 CLI (Design Tokens: Sora, Inter Tight, Purple #7C3AED)
interface Props {
  title?: string;
  className?: string;
}

const { title = '${name}', className = '' } = Astro.props;
---

<div class={\`rounded-[20px] border border-stroke-2/60 bg-white p-6 shadow-sm \${className}\`}>
  <h3 class="font-sora text-xl font-medium text-background-13">{title}</h3>
  <slot />
</div>
`;
    fs.writeFileSync(filePath, code, 'utf-8');
    console.log('\x1b[32m%s\x1b[0m', `✅ Componente creado en src/components/${name}.astro`);
  }
}

/**
 * Crea una rama de objetivo / feature aislada
 */
function createFeatureBranch(name) {
  if (!name) {
    console.log('\x1b[31m%s\x1b[0m', '❌ Especifica un nombre para la feature. Ejemplo: npm run 77 feature home-hero');
    return;
  }
  const branchName = name.startsWith('feature/') ? name : `feature/${name}`;
  console.log('\x1b[36m%s\x1b[0m', `🌿 Creando rama aislada: "${branchName}"...`);
  try {
    execSync(`git checkout -b ${branchName}`, { stdio: 'inherit' });
    console.log('\x1b[32m%s\x1b[0m', `✅ Switched to branch ${branchName}`);
  } catch (e) {
    console.error('\x1b[31m%s\x1b[0m', '❌ Error creando la rama.');
  }
}

/**
 * Manejador de Commits Estandarizados
 */
function handleCommit(commitArgs) {
  // Verificar rama activa para protección
  try {
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf-8' }).trim();
    if (currentBranch === 'main' || currentBranch === 'develop') {
      console.log('\x1b[33m%s\x1b[0m', `⚠️ ADVERTENCIA: Estás en la rama protegida "${currentBranch}".`);
      console.log('\x1b[33m%s\x1b[0m', '   Se recomienda trabajar en una rama aislada con: npm run 77 feature <nombre>');
    }
  } catch (e) {}

  const type = commitArgs[0] || 'feat';
  const msg = commitArgs.slice(1).join(' ') || 'update project components and documentation';

  const fullMsg = `${type}: ${msg}`;
  console.log('\x1b[36m%s\x1b[0m', `📌 Ejecutando commit estandarizado: "${fullMsg}"...`);

  // Actualizar conocimiento antes de commit
  buildKnowledgeBase();

  try {
    execSync(`git add .`, { stdio: 'inherit' });
    execSync(`git commit -m "${fullMsg}"`, { stdio: 'inherit' });
    console.log('\x1b[32m%s\x1b[0m', '✅ Commit ejecutado con éxito.');
  } catch (e) {
    console.error('\x1b[31m%s\x1b[0m', '❌ Error ejecutando commit.');
  }
}
