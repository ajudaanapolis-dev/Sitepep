# Protótipo de layout — Clínica PEP

Protótipo visual **navegável** do PEP, em HTML puro (Tailwind via CDN).
Dados fictícios. Botões e formulários simulam navegação, mas não salvam nada.

## Como publicar no GitHub Pages (pelo celular ou PC)

1. Crie um repositório no GitHub (ex: `pep-prototipo`).
2. Envie **todos os arquivos desta pasta** para o repositório
   (pelo site do GitHub: botão "Add file" → "Upload files" → arraste tudo).
3. No repositório, vá em **Settings → Pages**.
4. Em "Source", escolha **Deploy from a branch**, branch **main**, pasta **/ (root)**.
5. Salve. Em ~1 minuto o site fica no ar em:
   `https://SEU-USUARIO.github.io/pep-prototipo/`
6. O `index.html` abre automaticamente com o menu de todas as telas.

## Telas incluídas
Login, Dashboard, Pacientes, Novo paciente, Ficha do paciente (abas),
Agenda (com modais), Atendimento SOAP, Prescrição/documentos,
Impressão de receita e atestado, Usuários, Auditoria LGPD, Acesso negado.

## Observações
- É só o **visual**. O sistema real (com banco, login e regras) é o projeto
  Next.js já entregue separadamente.
- A impressão (receita/atestado) funciona de verdade: abra e use Ctrl+P / Salvar PDF.
