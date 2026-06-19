// Tema Clínica nas Nuvens: verde menta + menu branco com submenus
function renderShell(active) {
  const menu = [
    { label: "Pacientes", href: "pacientes.html", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { label: "Agenda", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", sub: [
      { label: "Agendamentos", href: "agenda.html" }
    ]},
    { label: "Atendimento", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", sub: [
      { label: "Atendimentos do dia", href: "atendimentos-dia.html" }
    ]},
    { label: "Relatórios", href: "auditoria.html", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
    { label: "Configurações", href: "usuarios.html", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" }
  ];
  function itemHtml(it) {
    const ativo = it.href === active;
    if (it.sub) {
      const subAtivo = it.sub.some(s => s.href === active);
      const subs = it.sub.map(s => `<a href="${s.href}" class="block rounded-md py-2 pl-12 pr-3 text-sm ${s.href===active?'font-medium text-emerald-700':'text-slate-600 hover:bg-slate-50'}">${s.label}</a>`).join("");
      return `<div>
        <div class="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-semibold ${subAtivo?'text-slate-900':'text-slate-700'}">
          <svg class="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="${it.icon}"/></svg>
          ${it.label}
        </div>${subs}</div>`;
    }
    return `<a href="${it.href}" class="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm ${ativo?'font-semibold text-slate-900':'text-slate-700 hover:bg-slate-50'}">
      <svg class="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="${it.icon}"/></svg>
      ${it.label}</a>`;
  }
  const menuHtml = menu.map(itemHtml).join("");

  document.body.insertAdjacentHTML("afterbegin", `
  <div class="min-h-screen bg-slate-50 md:flex">
    <header class="flex h-16 items-center justify-between border-b bg-white px-4 md:hidden">
      <button onclick="document.getElementById('mobnav').classList.toggle('hidden')" class="rounded-md p-2"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg></button>
      <span class="font-bold text-slate-800">clínica PEP</span>
      <div class="h-8 w-8 rounded-full bg-emerald-100"></div>
    </header>
    <div id="mobnav" class="hidden border-b bg-white p-3 md:hidden">${menuHtml}</div>
    <aside class="hidden w-72 flex-col border-r bg-white md:flex">
      <div class="flex items-center gap-2 px-6 py-5">
        <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-white font-bold">P</div>
        <span class="text-lg font-bold text-slate-800">clínica PEP</span>
      </div>
      <div class="px-4"><div class="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-400"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>Pesquisar...</div></div>
      <nav class="flex-1 space-y-1 px-3 py-4">${menuHtml}</nav>
      <div class="border-t p-4"><p class="text-sm font-medium text-slate-700">Leonardo V. Ribeiro</p><p class="text-xs text-slate-500">Profissional</p><a href="login.html" class="mt-2 inline-block text-xs text-emerald-700 hover:underline">Sair</a></div>
    </aside>
    <main class="flex-1" id="conteudo"></main>
  </div>`);
  const tpl = document.getElementById("page-content");
  if (tpl) document.getElementById("conteudo").innerHTML = tpl.innerHTML;
}

// Cabeçalho de página padrão (título grande + subtítulo + ação à direita)
function pageHeader(titulo, sub, acaoHtml) {
  return `<div class="border-b bg-white px-6 py-5">
    <div class="flex items-start justify-between gap-4">
      <div><h1 class="text-3xl font-bold text-slate-900">${titulo}</h1><p class="mt-0.5 text-sm text-slate-400">${sub}</p></div>
      ${acaoHtml||""}
    </div>
  </div>`;
}
