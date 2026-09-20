/* Edite os contatos e dados principais somente aqui. */
const CONFIG = {
  telefonePrincipal: '(48) 99169-6661',
  telefonePrincipalHref: 'tel:+5548991696661',
  telefoneSecundario: '(48) 99686-5570',
  telefoneSecundarioHref: 'tel:+5548996865570',
  whatsappNumero: '5548991696661',
  mensagemPadrao: 'Olá! Preciso de atendimento de emergência com a DNA Instalações e Soluções.',
  cnpj: '40.119.707/0001-36',
  mostrarGaleria: false,
  // Troque esta URL por outro embed do Google Maps ou pelo link de incorporação do Perfil da Empresa quando disponível.
  mapaUrl: 'https://www.google.com/maps?q=Florian%C3%B3polis,+SC,+Brasil&z=10&output=embed',
  mensagensEmergencia: {
    '01': 'Olá! Estou com uma pane elétrica ou falta de energia e preciso de atendimento de emergência.',
    '02': 'Olá! Estou com um problema de curto-circuito/quadro elétrico e preciso de atendimento de emergência.',
    '03': 'Olá! Estou com um vazamento ou problema hidráulico grave e preciso de atendimento de emergência.',
    '04': 'Olá! Meu gerador ou no-break apresentou falha e preciso de atendimento de emergência.',
    '05': 'Olá! Estou com um problema no alarme ou na central de incêndio e preciso de atendimento de emergência.',
    '06': 'Olá! Meu portão ou controle de acesso está travado e preciso de atendimento.',
    'final': 'Olá! Preciso de atendimento de emergência com a DNA Instalações e Soluções.'
  }
};

// V15 — Galeria. Troque os textos alt provisórios por descrições reais de cada foto.
const GALERIA = [
  {arquivo:'assets/images/galeria/galeria-01.jpg', alt:'Serviço realizado pela DNA Instalações e Soluções, foto 1', legenda:''},
  {arquivo:'assets/images/galeria/galeria-02.jpg', alt:'Serviço realizado pela DNA Instalações e Soluções, foto 2', legenda:''},
  {arquivo:'assets/images/galeria/galeria-03.jpg', alt:'Serviço realizado pela DNA Instalações e Soluções, foto 3', legenda:''},
  {arquivo:'assets/images/galeria/galeria-04.jpg', alt:'Serviço realizado pela DNA Instalações e Soluções, foto 4', legenda:''},
  {arquivo:'assets/images/galeria/galeria-05.jpg', alt:'Serviço realizado pela DNA Instalações e Soluções, foto 5', legenda:''},
  {arquivo:'assets/images/galeria/galeria-06.jpg', alt:'Serviço realizado pela DNA Instalações e Soluções, foto 6', legenda:''}
];

// V10 — dados da seção Serviços. Edite textos, mensagens e caminhos dos ícones somente neste array.
const SERVICOS = [
  {id:'01',numero:'01',nome:'Engenharia e Manutenção Elétrica',frase:'Manutenção preventiva e corretiva para manter a energia do seu imóvel segura e funcionando.',itens:['Inspeção de quadros elétricos','Reaperto de conexões','Balanceamento de fases','Testes de disjuntores'],mensagemWhatsApp:'Olá! Preciso de manutenção elétrica com a DNA Instalações e Soluções.',icone:'assets/images/icons/servico-01.png',iconeWebp:'assets/images/icons/servico-01.webp'},
  {id:'02',numero:'02',nome:'Instalações e Infraestrutura',frase:'Iluminação, geradores, no-breaks, SPDA e aterramento para a infraestrutura do seu imóvel.',itens:['Retrofit LED e manutenção de iluminação interna, externa, de fachada e de emergência','Manutenção preventiva de grupos geradores e no-breaks','Acompanhamento de testes de carga e substituição de consumíveis','Inspeção e medição de continuidade ôhmica de SPDA e aterramento','Laudo técnico de para-raios'],mensagemWhatsApp:'Olá! Preciso de um serviço de instalações e infraestrutura com a DNA Instalações e Soluções.',icone:'assets/images/icons/servico-02.png',iconeWebp:'assets/images/icons/servico-02.webp'},
  {id:'03',numero:'03',nome:'Manutenção Hidráulica e Saneamento',frase:'Bombeamento, redes de água e esgoto, reservatórios e drenagem, com manutenção e reparo.',itens:['Manutenção e automação de bombas de recalque, esgoto, água pluvial e incêndio','Reparo e caça-vazamentos em prumadas e ramais','Limpeza, desinfecção e impermeabilização de caixas d\'água e cisternas','Limpeza de calhas, rufos, caixas de gordura e caixas de passagem'],mensagemWhatsApp:'Olá! Preciso de manutenção hidráulica com a DNA Instalações e Soluções.',icone:'assets/images/icons/servico-03.png',iconeWebp:'assets/images/icons/servico-03.webp'},
  {id:'04',numero:'04',nome:'Civil, Alvenaria e Acabamentos',frase:'Fachadas, pintura, impermeabilização e reparos para manter o imóvel conservado.',itens:['Lavagem técnica, reposição de pastilhas/revestimentos e pintura externa de fachadas','Pintura de áreas comuns, garagens e demarcação de vagas','Reparos em drywall ou gesso','Impermeabilização de lajes, subsolos e telhados','Manutenção de portões, esquadrias de alumínio, portas de vidro e molas de piso'],mensagemWhatsApp:'Olá! Preciso de um serviço de manutenção civil e acabamentos com a DNA Instalações e Soluções.',icone:'assets/images/icons/servico-04.png',iconeWebp:'assets/images/icons/servico-04.webp'},
  {id:'05',numero:'05',nome:'Climatização, Refrigeração e Ventilação',frase:'Manutenção de ar-condicionado e sistemas de ventilação, com plano de manutenção conforme a exigência da Anvisa.',itens:['Elaboração e execução de PMOC','Limpeza de filtros e higienização química de evaporadoras e condensadoras','Carga de gás em splits e cassetes','Manutenção de sistemas VRF e chillers','Exaustão mecânica de subsolos e cozinhas'],mensagemWhatsApp:'Olá! Preciso de um serviço de climatização e ventilação com a DNA Instalações e Soluções.',icone:'assets/images/icons/servico-05.png',iconeWebp:'assets/images/icons/servico-05.webp'},
  {id:'06',numero:'06',nome:'Prevenção e Combate a Incêndio',frase:'Inspeção e manutenção de equipamentos, alarmes e rotas de fuga.',itens:['Inspeção de extintores e teste hidrostático','Manutenção de abrigos de hidrantes e mangueiras','Testes e manutenção de centrais de incêndio, detectores de fumaça, acionadores manuais e sirenes','Portas corta-fogo (barras antipânico e molas)','Sinalização fotoluminescente de emergência'],mensagemWhatsApp:'Olá! Preciso de um serviço de prevenção e combate a incêndio com a DNA Instalações e Soluções.',icone:'assets/images/icons/servico-06.png',iconeWebp:'assets/images/icons/servico-06.webp'},
  {id:'07',numero:'07',nome:'Segurança Eletrônica e Automação Predial',frase:'Monitoramento, cabeamento e controle de acesso com instalação e manutenção.',itens:['Instalação e manutenção de câmeras de segurança e gravadores (DVR)','Cabeamento estruturado','Manutenção de portões automáticos e cancelas','Catracas, interfonia e sistemas de tag/biometria'],mensagemWhatsApp:'Olá! Preciso de um serviço de segurança eletrônica com a DNA Instalações e Soluções.',icone:'assets/images/icons/servico-07.png',iconeWebp:'assets/images/icons/servico-07.webp'}
];

const waUrl = (contexto='') => {
  const msg = contexto && contexto !== 'emergencia'
    ? `Olá! Preciso de atendimento com a DNA Instalações e Soluções para ${contexto}.`
    : CONFIG.mensagemPadrao;
  return `https://wa.me/${CONFIG.whatsappNumero}?text=${encodeURIComponent(msg)}`;
};

document.querySelectorAll('[data-telefone="principal"]').forEach(el => el.textContent = CONFIG.telefonePrincipal);
document.querySelectorAll('[data-telefone="secundario"]').forEach(el => el.textContent = CONFIG.telefoneSecundario);
document.querySelectorAll('[data-cnpj]').forEach(el => el.textContent = CONFIG.cnpj);
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

// V12 — mensagens específicas dos três formatos de atendimento; o número continua vindo do CONFIG.
document.querySelectorAll('[data-formato-whatsapp]').forEach(el => {
  const mensagem = el.dataset.waMessage || CONFIG.mensagemPadrao;
  el.href = `https://wa.me/${CONFIG.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
});

document.querySelectorAll('[data-contato]').forEach(el => {
  const type = el.dataset.contato;
  if(type === 'whatsapp'){
    el.href = waUrl(el.dataset.contexto || '');
    el.target = '_blank'; el.rel = 'noopener noreferrer';
  } else if(type === 'telefone-principal') el.href = CONFIG.telefonePrincipalHref;
  else if(type === 'telefone-secundario') el.href = CONFIG.telefoneSecundarioHref;
});

const menuBtn = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-nav');
if(menuBtn && mobileMenu){
  menuBtn.addEventListener('click',()=>{
    const open = mobileMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',String(open));
    menuBtn.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
  });
  mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    mobileMenu.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false');
  }));
}

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = [...document.querySelectorAll('.reveal')];
if(reduced || !('IntersectionObserver' in window)){
  reveals.forEach(el=>el.classList.add('is-visible'));
}else{
  const io = new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
  }),{threshold:.05,rootMargin:'0px 0px 15% 0px'});
  reveals.forEach(el=>io.observe(el));
  setTimeout(()=>reveals.forEach(el=>el.classList.add('is-visible')),700);
}

// Galeria/avaliações: fica oculta até existirem materiais reais.
const mediaSection = document.querySelector('#avaliacoes');
if(mediaSection && CONFIG.mostrarGaleria){
  mediaSection.hidden = false;
  const slots = mediaSection.querySelector('[data-gallery-slots]');
  if(slots) slots.innerHTML = '<!-- SUBSTITUIR: inserir aqui avaliações e fotos reais. -->';
}

// Tilt leve em desktop, sem biblioteca e sem afetar reduced-motion.
if(!reduced && matchMedia('(pointer:fine)').matches){
  document.querySelectorAll('.service-card').forEach(card=>{
    card.addEventListener('pointermove',e=>{
      const r=card.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width-.5; const y=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(800px) rotateX(${-y*2.5}deg) rotateY(${x*3}deg) translateY(-8px)`;
    });
    card.addEventListener('pointerleave',()=>card.style.transform='');
  });
}

// Efeitos leves do hero final: partículas e parallax somente quando há movimento permitido.
const hero = document.querySelector('#hero');
const heroImage = document.querySelector('.hero-image');
const heroCanvas = document.querySelector('.hero-particles');
if(hero && heroImage && heroCanvas && !reduced){
  const ctx = heroCanvas.getContext('2d');
  let particles = [], raf = 0;
  const resizeHeroCanvas = () => {
    const r = hero.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    heroCanvas.width = Math.max(1, Math.round(r.width*dpr));
    heroCanvas.height = Math.max(1, Math.round(r.height*dpr));
    heroCanvas.style.width = r.width+'px'; heroCanvas.style.height = r.height+'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const count = innerWidth < 700 ? 12 : 26;
    particles = Array.from({length:count},()=>({x:Math.random()*r.width,y:Math.random()*r.height,r:.7+Math.random()*1.5,v:.08+Math.random()*.22,a:.18+Math.random()*.42}));
  };
  const drawParticles = () => {
    const r = hero.getBoundingClientRect(); ctx.clearRect(0,0,r.width,r.height);
    for(const p of particles){p.y-=p.v;if(p.y<-5){p.y=r.height+5;p.x=Math.random()*r.width}ctx.beginPath();ctx.fillStyle=`rgba(255,214,10,${p.a})`;ctx.shadowColor='#FFD60A';ctx.shadowBlur=8;ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()}
    raf=requestAnimationFrame(drawParticles);
  };
  resizeHeroCanvas(); drawParticles(); addEventListener('resize',resizeHeroCanvas,{passive:true});
}

// V4 — telefone da barra inferior e scroll-spy do menu principal.
const fixedPhone = document.querySelector('.mobile-contact-bar [data-contato="telefone-principal"]');
if(fixedPhone) fixedPhone.textContent = `☎  Ligar agora: ${CONFIG.telefonePrincipal}`;

const navLinks = [...document.querySelectorAll('.desktop-nav a')];
const navSections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
if(navLinks.length && navSections.length && 'IntersectionObserver' in window){
  const spy = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(!visible) return;
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`));
  }, {rootMargin:'-20% 0px -65% 0px', threshold:[0,.15,.4]});
  navSections.forEach(section => spy.observe(section));
}


// V5 — seção Emergências: links específicos, destaque interativo, tilt e partículas.
document.querySelectorAll('[data-emergency-wa]').forEach(link => {
  const key = link.dataset.emergencyWa;
  const msg = CONFIG.mensagensEmergencia[key] || CONFIG.mensagemPadrao;
  link.href = `https://wa.me/${CONFIG.whatsappNumero}?text=${encodeURIComponent(msg)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

const emergencyGrid = document.querySelector('[data-emergency-grid]');
if(emergencyGrid){
  const cards = [...emergencyGrid.querySelectorAll('.em-card')];
  const resetFeatured = () => cards.forEach((c,i)=>c.classList.toggle('is-featured',i===0));
  if(matchMedia('(pointer:fine)').matches){
    cards.forEach(card => {
      const activate = () => cards.forEach(c=>c.classList.toggle('is-featured',c===card));
      card.addEventListener('mouseenter',activate);
      card.addEventListener('focusin',activate);
      if(!reduced){
        card.addEventListener('pointermove',e=>{
          const r=card.getBoundingClientRect();
          const x=((e.clientX-r.left)/r.width-.5)*10;
          const y=((e.clientY-r.top)/r.height-.5)*-8;
          card.style.setProperty('--tiltX',`${y}deg`);
          card.style.setProperty('--tiltY',`${x}deg`);
        });
        card.addEventListener('pointerleave',()=>{card.style.setProperty('--tiltX','0deg');card.style.setProperty('--tiltY','0deg')});
      }
    });
    emergencyGrid.addEventListener('mouseleave',resetFeatured);
    emergencyGrid.addEventListener('focusout',e=>{if(!emergencyGrid.contains(e.relatedTarget)) resetFeatured()});
  }
}

// V7 — Emergências: entrada escalonada e tilt 3D leve nos cards (desktop com mouse).
if(emergencyGrid){
  const emergencyCards=[...emergencyGrid.querySelectorAll('.em-card')];
  emergencyCards.forEach((card,index)=>card.style.setProperty('--reveal-delay',`${index*60}ms`));
}


// V10 — Serviços integrados: tabs no desktop e accordion abaixo de 900px.
(() => {
  const tabsHost=document.querySelector('[data-services-tabs]');
  const mobileHost=document.querySelector('[data-services-mobile]');
  const panel=document.querySelector('[data-service-panel]');
  if(!tabsHost||!mobileHost||!panel) return;
  const panelCopy=panel.querySelector('[data-panel-copy]'), panelIcon=panel.querySelector('[data-panel-icon]'), panelSource=panel.querySelector('[data-panel-source]'), panelNumber=panel.querySelector('[data-panel-number]'), panelCta=panel.querySelector('[data-panel-cta]');
  const fallbackSvg=`<span class="service-fallback" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="M32 5 17 34h13l-5 25 22-34H34z"/></svg></span>`;
  const iconMarkup=(s,large=false)=>`<span class="service-tab-icon${large?' is-large':''}"><picture><source type="image/webp" srcset="${s.iconeWebp}"><img src="${s.icone}" alt="" width="512" height="512" loading="eager" decoding="async" fetchpriority="high" onerror="this.style.display='none'"></picture><span hidden>${fallbackSvg}</span></span>`;
  const wa=s=>`https://wa.me/${CONFIG.whatsappNumero}?text=${encodeURIComponent(s.mensagemWhatsApp)}`;
  const listMarkup=s=>s.itens.map(item=>`<li><span class="service-check">✓</span><span>${item}</span></li>`).join('');
  const setPanel=(index,instant=false)=>{
    const s=SERVICOS[index]; if(!s) return;
    const apply=()=>{panelCopy.querySelector('h3').textContent=s.nome;panelCopy.querySelector('p').textContent=s.frase;panelCopy.querySelector('ul').innerHTML=listMarkup(s);panelCopy.querySelector('ul').classList.toggle('is-long',s.itens.length>5);panelIcon.src=s.icone;if(panelSource)panelSource.srcset=s.iconeWebp;panelIcon.onerror=()=>{panelIcon.style.display='none'};panelIcon.style.display='block';panelNumber.textContent=s.numero;panelCta.href=wa(s);panelCta.setAttribute('aria-label',`Solicitar atendimento: ${s.nome} pelo WhatsApp`);panel.setAttribute('aria-labelledby',`service-tab-${s.id}`);};
    if(instant||reduced){apply();return;}
    panel.classList.add('is-changing');setTimeout(()=>{apply();panel.classList.remove('is-changing');panel.classList.add('is-entering');setTimeout(()=>panel.classList.remove('is-entering'),360)},180);
  };
  SERVICOS.forEach((s,index)=>{
    const btn=document.createElement('button');btn.type='button';btn.className='service-tab reveal'+(index===0?' is-active':'');btn.id=`service-tab-${s.id}`;btn.setAttribute('role','tab');btn.setAttribute('aria-selected',index===0?'true':'false');btn.setAttribute('aria-controls','service-panel');btn.tabIndex=index===0?0:-1;btn.style.setProperty('--tab-delay',`${index*60}ms`);btn.innerHTML=`${iconMarkup(s)}<span class="service-tab-name">${s.nome}</span><span class="service-tab-arrow" aria-hidden="true">›</span>`;
    const select=()=>{[...tabsHost.children].forEach((b,i)=>{const active=i===index;b.classList.toggle('is-active',active);b.setAttribute('aria-selected',active?'true':'false');b.tabIndex=active?0:-1});setPanel(index)};
    btn.addEventListener('click',select);btn.addEventListener('keydown',e=>{let next=index;if(e.key==='ArrowDown')next=(index+1)%SERVICOS.length;else if(e.key==='ArrowUp')next=(index-1+SERVICOS.length)%SERVICOS.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=SERVICOS.length-1;else if(e.key==='Enter'||e.key===' '){e.preventDefault();select();return}else return;e.preventDefault();tabsHost.children[next].focus()});tabsHost.appendChild(btn);
    const item=document.createElement('div');item.className='service-accordion-item'+(index===0?' is-open':'');item.innerHTML=`<button type="button" class="service-accordion-trigger" aria-expanded="${index===0}" aria-controls="service-mobile-${s.id}">${iconMarkup(s)}<span>${s.nome}</span><b aria-hidden="true">+</b></button><div class="service-accordion-panel" id="service-mobile-${s.id}"><div><div class="service-accordion-content"><div class="service-accordion-top"><div><p>${s.frase}</p></div>${iconMarkup(s,true)}</div><ul>${listMarkup(s)}</ul><a class="service-panel-cta" href="${wa(s)}" target="_blank" rel="noopener noreferrer" aria-label="Solicitar atendimento: ${s.nome} pelo WhatsApp"><img src="assets/icons/whatsapp-dark.svg" alt="" width="26" height="26">Solicitar atendimento</a></div></div></div>`;
    item.querySelector('button').addEventListener('click',()=>{[...mobileHost.children].forEach((other,i)=>{const open=i===index&&!other.classList.contains('is-open');other.classList.toggle('is-open',open);other.querySelector('button').setAttribute('aria-expanded',open?'true':'false')})});mobileHost.appendChild(item);
  });
  setPanel(0,true);
  const general=document.querySelector('[data-services-general]');if(general)general.href=`https://wa.me/${CONFIG.whatsappNumero}?text=${encodeURIComponent('Olá! Quero falar com a DNA Instalações e Soluções.')}`;
})();


// V13 — Regiões atendidas: mapa real, cidades e contatos locais.
(() => {
  const iframe = document.querySelector('#regioes-map-iframe');
  const mapLink = document.querySelector('#regioes-map-link');
  const geral = document.querySelector('#regioes-wa-geral');
  if (iframe) {
    iframe.src = CONFIG.mapaUrl;
    iframe.addEventListener('load', () => iframe.closest('.regioes-map')?.classList.add('map-loaded'), {once:true});
  }
  if (mapLink) mapLink.href = CONFIG.mapaUrl.replace('&output=embed','');
  if (geral) geral.href = `https://wa.me/${CONFIG.whatsappNumero}?text=${encodeURIComponent('Olá! Quero saber se vocês atendem na minha cidade.')}`;

  document.querySelectorAll('[data-cidade]').forEach((link, index) => {
    const cidade = link.dataset.cidade;
    link.href = `https://wa.me/${CONFIG.whatsappNumero}?text=${encodeURIComponent(`Olá! Preciso de atendimento em ${cidade}. Podem me ajudar?`)}`;
    link.setAttribute('aria-label', `Chamar no WhatsApp: atendimento em ${cidade}`);
    link.style.setProperty('--city-delay', `${index * 40}ms`);
  });
})();


// V16 — Galeria: início alinhado à esquerda e navegação previsível por índice.
(() => {
  const track=document.querySelector('[data-galeria-track]');
  if(!track) return;
  const prev=document.querySelector('[data-galeria-prev]'), next=document.querySelector('[data-galeria-next]'), dotsBox=document.querySelector('[data-galeria-dots]');
  const dialog=document.querySelector('[data-galeria-lightbox]'), lbImg=document.querySelector('[data-lightbox-image]'), lbCount=document.querySelector('[data-lightbox-count]');
  const lbPrev=document.querySelector('[data-lightbox-prev]'), lbNext=document.querySelector('[data-lightbox-next]'), lbClose=document.querySelector('[data-lightbox-close]');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let indiceAtual=0, lightboxIndex=0, origin=null, autoplay=null, sectionVisible=false, paused=false;
  let dragStartX=0, dragStartScroll=0, dragged=false, navegando=false, scrollTimer=null, navTimer=null;

  GALERIA.forEach((foto,i)=>{
    const slide=document.createElement('article'); slide.className='galeria-slide'; slide.dataset.index=i;
    const button=document.createElement('button'); button.type='button'; button.setAttribute('aria-label',`Ampliar foto ${i+1}`);
    const img=document.createElement('img'); img.src=foto.arquivo; img.alt=foto.alt; img.width=1600; img.height=1200; img.decoding='async'; img.loading=i===0?'eager':'lazy'; img.draggable=false;
    img.addEventListener('error',()=>{img.hidden=true;slide.setAttribute('aria-label',`Foto ${i+1} indisponível`)});
    button.append(img); slide.append(button); track.append(slide);
    button.addEventListener('click',()=>{if(!dragged) openLightbox(i,button)});
    const dot=document.createElement('button'); dot.type='button'; dot.className='galeria-dot'; dot.setAttribute('aria-label',`Ir para a foto ${i+1}`); dot.addEventListener('click',()=>irPara(i)); dotsBox.append(dot);
  });

  const slides=[...track.querySelectorAll('.galeria-slide')], dots=[...dotsBox.children];
  const paddingEsquerdo=()=>parseFloat(getComputedStyle(track).paddingLeft)||0;
  function atualizarUI(i){indiceAtual=Math.max(0,Math.min(slides.length-1,i));slides.forEach((s,n)=>s.classList.toggle('ativo',n===indiceAtual));dots.forEach((d,n)=>d.classList.toggle('ativo',n===indiceAtual));prev.disabled=indiceAtual===0;next.disabled=indiceAtual===slides.length-1;}
  function liberarNavegacao(){navegando=false;clearTimeout(navTimer);}
  function irPara(i){
    if(navegando) return;
    const alvo=Math.max(0,Math.min(slides.length-1,i));
    if(alvo===indiceAtual && Math.abs(track.scrollLeft-(slides[alvo].offsetLeft-paddingEsquerdo()))<2){atualizarUI(alvo);return;}
    navegando=true; atualizarUI(alvo);
    track.scrollTo({left:Math.max(0,slides[alvo].offsetLeft-paddingEsquerdo()),behavior:reduce?'auto':'smooth'});
    clearTimeout(navTimer); navTimer=setTimeout(liberarNavegacao,reduce?60:450);
    restartAutoplay();
  }
  function sincronizarPeloScroll(){
    if(navegando) return;
    const referencia=track.scrollLeft+paddingEsquerdo();
    let melhor=0,dist=Infinity;
    slides.forEach((slide,i)=>{const d=Math.abs(slide.offsetLeft-referencia);if(d<dist){dist=d;melhor=i;}});
    atualizarUI(melhor);
  }
  function resetInicio(){track.scrollTo({left:0,behavior:'auto'});atualizarUI(0);}

  prev.addEventListener('click',()=>{if(!navegando)irPara(indiceAtual-1)});
  next.addEventListener('click',()=>{if(!navegando)irPara(indiceAtual+1)});
  track.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();irPara(indiceAtual-1)}if(e.key==='ArrowRight'){e.preventDefault();irPara(indiceAtual+1)}});
  track.addEventListener('scroll',()=>{clearTimeout(scrollTimer);scrollTimer=setTimeout(sincronizarPeloScroll,120)},{passive:true});
  if('onscrollend' in track) track.addEventListener('scrollend',()=>{liberarNavegacao();sincronizarPeloScroll()});

  requestAnimationFrame(resetInicio);
  const imgs=[...track.querySelectorAll('img')];
  Promise.all(imgs.map(img=>img.complete?Promise.resolve():new Promise(r=>{img.addEventListener('load',r,{once:true});img.addEventListener('error',r,{once:true})}))).then(()=>requestAnimationFrame(resetInicio));

  if('IntersectionObserver' in window){
    const sectionIO=new IntersectionObserver(entries=>{sectionVisible=entries.some(e=>e.isIntersecting);restartAutoplay()},{threshold:.25});sectionIO.observe(document.querySelector('#galeria'));
  } else sectionVisible=true;
  function startAutoplay(){if(reduce||paused||!sectionVisible||document.hidden||navegando)return;clearInterval(autoplay);autoplay=setInterval(()=>{if(!navegando)irPara(indiceAtual===slides.length-1?0:indiceAtual+1)},6000)}
  function stopAutoplay(){clearInterval(autoplay);autoplay=null}
  function restartAutoplay(){stopAutoplay();startAutoplay()}
  const carousel=document.querySelector('[data-galeria-carousel]');
  carousel.addEventListener('mouseenter',()=>{paused=true;stopAutoplay()});carousel.addEventListener('mouseleave',()=>{paused=false;startAutoplay()});carousel.addEventListener('focusin',()=>{paused=true;stopAutoplay()});carousel.addEventListener('focusout',()=>{paused=false;startAutoplay()});
  document.addEventListener('visibilitychange',restartAutoplay);
  track.addEventListener('touchstart',()=>{paused=true;stopAutoplay()},{passive:true});
  track.addEventListener('touchend',()=>{setTimeout(()=>{paused=false;sincronizarPeloScroll();startAutoplay()},180)},{passive:true});
  if(matchMedia('(pointer:fine)').matches){
    track.addEventListener('pointerdown',e=>{if(e.button!==0)return;paused=true;stopAutoplay();dragged=false;dragStartX=e.clientX;dragStartScroll=track.scrollLeft;track.classList.add('is-dragging');track.setPointerCapture(e.pointerId)});
    track.addEventListener('pointermove',e=>{if(!track.classList.contains('is-dragging'))return;const dx=e.clientX-dragStartX;if(Math.abs(dx)>5)dragged=true;track.scrollLeft=dragStartScroll-dx});
    const endDrag=e=>{if(!track.classList.contains('is-dragging'))return;track.classList.remove('is-dragging');try{track.releasePointerCapture(e.pointerId)}catch{}setTimeout(()=>{sincronizarPeloScroll();dragged=false;paused=false;startAutoplay()},140)};track.addEventListener('pointerup',endDrag);track.addEventListener('pointercancel',endDrag);
  }
  function openLightbox(i,source){lightboxIndex=i;origin=source;renderLightbox();document.body.classList.add('galeria-modal-open');dialog.showModal();stopAutoplay();lbClose.focus()}
  function renderLightbox(){const f=GALERIA[lightboxIndex];lbImg.src=f.arquivo;lbImg.alt=f.alt;lbCount.textContent=`${lightboxIndex+1} / ${GALERIA.length}`;lbPrev.disabled=lightboxIndex===0;lbNext.disabled=lightboxIndex===GALERIA.length-1}
  function closeLightbox(){if(dialog.open)dialog.close();document.body.classList.remove('galeria-modal-open');if(origin)origin.focus();restartAutoplay()}
  lbClose.addEventListener('click',closeLightbox);lbPrev.addEventListener('click',()=>{if(lightboxIndex>0){lightboxIndex--;renderLightbox()}});lbNext.addEventListener('click',()=>{if(lightboxIndex<GALERIA.length-1){lightboxIndex++;renderLightbox()}});
  dialog.addEventListener('click',e=>{if(e.target===dialog)closeLightbox()});dialog.addEventListener('cancel',e=>{e.preventDefault();closeLightbox()});dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'&&lightboxIndex>0){lightboxIndex--;renderLightbox()}if(e.key==='ArrowRight'&&lightboxIndex<GALERIA.length-1){lightboxIndex++;renderLightbox()}});
  const budget=document.querySelector('[data-galeria-whatsapp]');if(budget){const msg='Olá! Vi o trabalho da DNA no site e quero solicitar um orçamento.';budget.href=`https://wa.me/${CONFIG.whatsappNumero}?text=${encodeURIComponent(msg)}`}
  atualizarUI(0);
})();;
// V19 — pausa o efeito de relâmpago dos ícones quando a seção Situação sai da tela.
(() => {
  const section = document.querySelector('.emergencies');
  if (!section) return;
  if (reduced || !('IntersectionObserver' in window)) {
    section.classList.add('is-in-view');
    return;
  }
  const observer = new IntersectionObserver(([entry]) => {
    section.classList.toggle('is-in-view', entry.isIntersecting);
  }, { threshold: 0.05, rootMargin: '10% 0px 10% 0px' });
  observer.observe(section);
})();

window.__siteReady = true;


// V22 — parallax e brilho do banner: apenas mouse fino e movimento permitido.
(() => {
  const hero = document.querySelector('#hero');
  const image = hero?.querySelector('.hero-image');
  const glow = hero?.querySelector('.hero-cursor-glow');
  const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!hero || !image || !glow || !canHover || reduceMotion) return;
  let rafId = 0, mouseX = 0, mouseY = 0;
  const render = () => {
    rafId = 0;
    const r = hero.getBoundingClientRect();
    const nx = Math.max(-1, Math.min(1, ((mouseX-r.left)/r.width-.5)*2));
    const ny = Math.max(-1, Math.min(1, ((mouseY-r.top)/r.height-.5)*2));
    image.style.setProperty('transform',`translate3d(${(-nx*14).toFixed(2)}px,${(-ny*10).toFixed(2)}px,0) scale(1.03)`,'important');
    glow.style.transform = `translate3d(${(mouseX-r.left-180).toFixed(1)}px,${(mouseY-r.top-180).toFixed(1)}px,0)`;
  };
  hero.addEventListener('pointerenter', e => {
    mouseX=e.clientX; mouseY=e.clientY; glow.classList.add('is-visible'); hero.classList.remove('hero-pulse-once'); void hero.offsetWidth; hero.classList.add('hero-pulse-once');
    if(!rafId) rafId=requestAnimationFrame(render);
  }, {passive:true});
  hero.addEventListener('pointermove', e => {mouseX=e.clientX;mouseY=e.clientY;if(!rafId)rafId=requestAnimationFrame(render)}, {passive:true});
  hero.addEventListener('pointerleave', () => {glow.classList.remove('is-visible'); image.style.setProperty('transform','translate3d(0,0,0) scale(1.03)','important'); hero.classList.remove('hero-pulse-once')}, {passive:true});
})();
