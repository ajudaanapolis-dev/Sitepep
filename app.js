// Sidebar compartilhada do protótipo PEP
function renderShell(active, titulo) {
  const itens = [
    { href: "dashboard.html", label: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { href: "pacientes.html", label: "Pacientes", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { href: "agenda.html", label: "Agenda", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { href: "usuarios.html", label: "Usuários", icon: "M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 100-8 4 4 0 000 8z" },
    { href: "auditoria.html", label: "Auditoria", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }
  ];
  const navHtml = itens.map(i => `
    <a href="${i.href}" class="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${active === i.href ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}">
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${i.icon}"/></svg>
      ${i.label}
    </a>`).join("");

  document.body.insertAdjacentHTML("afterbegin", `
  <div class="min-h-screen bg-slate-100 md:flex">
    <header class="flex h-14 items-center justify-between border-b bg-white px-4 md:hidden">
      <div class="font-semibold">Clínica PEP</div>
      <button onclick="document.getElementById('mobnav').classList.toggle('hidden')" class="rounded-md border p-2">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </header>
    <div id="mobnav" class="hidden border-b bg-white p-3 md:hidden"><nav class="space-y-1">${navHtml}</nav></div>
    <aside class="hidden min-h-screen w-72 flex-col border-r bg-white md:flex">
      <div class="border-b px-6 py-5">
        <div class="text-xl font-bold">Clínica PEP</div>
        <div class="text-sm text-slate-500">Prontuário Eletrônico</div>
      </div>
      <nav class="flex-1 space-y-1 px-4 py-4">${navHtml}</nav>
      <div class="border-t p-4">
        <p class="text-sm font-medium">Administrador PEP</p>
        <p class="text-xs text-slate-500">ADMIN</p>
        <a href="login.html" class="mt-3 flex w-full items-center justify-start gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-100">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
          Sair
        </a>
      </div>
    </aside>
    <main class="flex-1 p-4 md:p-8" id="conteudo"></main>
  </div>`);

  // move o conteúdo original (tudo que tinha data-page) para dentro do main
  const tpl = document.getElementById("page-content");
  if (tpl) document.getElementById("conteudo").innerHTML = tpl.innerHTML;
}
