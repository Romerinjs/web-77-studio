---
name: 77-commit-and-docs
description: Skill oficial para automatizar el flujo de commits estandarizados (Conventional Commits), la trazabilidad de propiedades/modificaciones del core y la actualización continua de la documentación técnica en la carpeta 77/ y CHANGELOG.md para 77 Studio. Usar siempre que se cree un nuevo componente, propiedad, integración o refactorización.
license: MIT
metadata:
  authors: "77 Studio Engineering Team"
  version: "1.0.0"
---

# 77 Studio - Commit & Documentation Automation Skill

> **Propósito:** Definir el protocolo estricto para que desarrolladores y agentes de IA documenten, auditen y registren mediante **Conventional Commits** y cambios en **`77/CHANGELOG.md`** y **`77/`** cualquier adición de propiedades, componentes UI, integraciones o modificaciones al core.

---

## 1. Reglas de Ramas y Auditoría de Cambios

### 0. Protección de Ramas & Aislamiento (Obligatorio)
- **NUNCA commitear directamente en `main` ni en `develop`.**
- Antes de iniciar cualquier tarea o característica (ej. por objetivo `/goal`), verificar o crear la rama de trabajo aislada:
  ```bash
  npm run 77 feature <nombre-descriptivo>
  # O bien: git checkout -b feature/<nombre-descriptivo>
  ```
- Al finalizar el trabajo en la rama `feature/*`, realizar el `git push -u origin feature/<nombre>` y notificar al usuario (*Human-in-the-loop*) para la revisión y merge hacia `develop` (Staging) y posteriormente `main` (Producción).

1. **Identificar la categoría del cambio:**
   - **`feat` (Feature):** Nueva propiedad, componente, página, integración o endpoint.
   - **`fix` (Fix):** Corrección de errores, parches visuales o links rotos.
   - **`docs` (Docs):** Actualizaciones puras de documentación en `77/` o `docs/`.
   - **`style` (Style):** Cambios de diseño, colores o tokens CSS sin alterar la lógica.
   - **`refactor` (Refactor):** Reestructuración de código core o utilidades.
   - **`perf` (Performance):** Optimización de imágenes, fuentes o carga de islas.
   - **`chore` (Chore):** Mantenimiento de dependencias `package.json` o scripts CLI.

2. **Verificar impacto en Documentación Técnica:**
   - Si se añade una propiedad o componente UI, actualizar la especificación del módulo correspondiente en `77/<modulo>/index.mdx`.
   - Si se añade un parámetro de configuración, actualizar `77/00-setup/index.mdx`.
   - Si se altera la arquitectura o CI/CD, actualizar `77/GOVERNANCE.md`.

3. **Registrar en `77/CHANGELOG.md`:**
   - Añadir la entrada bajo la sección `[Unreleased]` con la viñeta correspondiente en `Added`, `Changed`, `Fixed` o `Deprecated`.

---

## 2. Uso de la CLI de Agentes (`77-cli`)

Para agilizar el proceso, el agente o desarrollador puede invocar los comandos de la CLI oficial del proyecto:

```bash
# 1. Registrar y realizar un commit estandarizado con actualización de CHANGELOG
npm run 77 commit

# 2. Reconstruir la base de conocimiento JSON para el Agente de IA Chat
npm run 77 knowledge

# 3. Generar la estructura inicial de una nueva vista o componente
npm run 77 generate vista nombre-vista
npm run 77 generate componente NombreComponente

# 4. Inspeccionar el estado de la documentación y roadmap
npm run 77 inspect
```

---

## 3. Plantilla de Mensaje de Commit Estricta

```
<tipo>(<ámbito opcional>): <descripción corta e imperativa en presente>

- [Componente/Propiedad]: <explicación del cambio o nueva propiedad añadida>
- [Documentación]: <archivo en 77/ o CHANGELOG.md actualizado>
```

### Ejemplos Válidos:
- `feat(marketing): add Meta CAPI event tracker utility`
- `fix(cta): update prefilled whatsapp message encoder`
- `feat(ia-chat): add floating AIChatWidget and /api/chat endpoint`
- `style(cards): refine rounded-[20px] shadow tokens`

---

## 4. Checklist para Agentes antes de Finalizar una Tarea
- [ ] ¿El cambio modifica código funcional o documentación en `77/`?
- [ ] ¿Se registró la modificación en `77/CHANGELOG.md`?
- [ ] Si es un cambio en los módulos de `77/`, ¿se ejecutó `npm run 77 knowledge` para refrescar `public/knowledge.json`?
- [ ] ¿El mensaje de commit cumple con el formato Conventional Commits?
