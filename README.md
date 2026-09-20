# DNA Instalações e Soluções — site one-page

Site estático em HTML/CSS/JS, pronto para GitHub Pages, Netlify ou hospedagem estática equivalente.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub.
2. Envie **o conteúdo desta pasta** para a raiz do repositório (`index.html`, `styles.css`, `script.js` e `assets/`).
3. No GitHub: **Settings → Pages → Deploy from a branch**.
4. Selecione a branch principal e `/ (root)`.

## Alterar telefones, WhatsApp e CNPJ
Edite somente o objeto `CONFIG` no início de `script.js`. Os links e textos marcados com `data-*` são preenchidos automaticamente.

## Logos
- `assets/logo/logo-transparente.png`: cabeçalho e rodapé.
- `assets/logo/logo-completa.png`: seção de destaque da marca.
- `assets/icons/favicon.svg`: favicon inspirado no raio da identidade visual.

## Avaliações e galeria
Não foram inventadas avaliações ou fotos de serviços. A seção existe no HTML, mas fica oculta por padrão.
1. Adicione imagens reais em `assets/images/`.
2. Monte os cards/galeria no bloco `#avaliacoes` do `index.html`.
3. Em `script.js`, altere `mostrarGaleria: false` para `true`.

## Imagem 3D futura do hero
O hero atual é construído com CSS/SVG-like effects, sem depender de imagem externa. Se quiser trocar por uma arte 3D gerada depois, salve-a como `assets/images/hero-3d.webp` e substitua o bloco `.hero-art` no HTML por um `<picture>`.

## Paleta
- `#000814` preto profundo
- `#001D3D` azul escuro
- `#003566` azul médio
- `#FFC300` amarelo
- `#FFD60A` amarelo claro

## Observações
- A seção de avaliações permanece oculta até haver conteúdo real.
- Não há endereço físico, e-mail, depoimentos, tempo de chegada ou estatísticas inventadas.
- A garantia é apresentada como **até 5 anos**, conforme a informação fornecida.

## Banner principal (hero)

A imagem final fornecida está em `assets/images/banner-hero.jpg` (1920 × 1080) e é carregada com prioridade alta no hero.

Para trocar a imagem desktop, substitua esse arquivo mantendo o mesmo nome. O HTML também usa essa imagem em `og:image`; depois que o site estiver publicado, troque o caminho relativo da meta `og:image` pela URL absoluta pública.

O CSS deixa preparada a variável `--hero-img-mobile` para `assets/images/banner-hero-mobile.jpg`. Se você criar uma versão vertical/mobile, salve-a nesse caminho. Enquanto esse arquivo não existir, o `<picture>` mantém `banner-hero.jpg` como fallback automático.

O hero usa a fotografia como imagem real (`<img>` absoluta), não recria o raio em SVG/CSS. Os SVGs presentes no hero são somente descargas elétricas decorativas nos cantos. Partículas e parallax são leves e são desativados por `prefers-reduced-motion`.


## Ajustes V3 — alinhamento e identidade
- O site inteiro usa `.container` com `max-width: 1200px` e padding lateral responsivo `clamp(20px, 5vw, 64px)`.
- O hero foi alinhado à mesma linha do cabeçalho e das demais seções, com bloco de texto de até 560px e espaçamentos revisados.
- A logo anexada foi verificada no arquivo recebido e possui canal alfa/transparência real. Ela substitui `assets/logo/logo-transparente.png` no cabeçalho e rodapé.
- O favicon agora é `assets/icons/favicon.png`, gerado a partir da mesma logo transparente.
- `assets/logo/logo-completa.png` permanece somente para a seção de destaque de marca e não é usada no cabeçalho/rodapé.

## V4 — topo conforme referência
- Barra de emergência, cabeçalho, hero, confiança e contatos flutuantes foram reconstruídos conforme o print de referência.
- Como não foi fornecido um arquivo `logo-horizontal.png`, o cabeçalho usa `assets/logo/logo-simbolo.png` (recorte do símbolo da logo transparente) + o texto DNA / Instalações e Soluções montado em HTML/CSS.
- Para trocar por uma logo horizontal pronta no futuro, substitua o bloco `.brand` no `index.html` por uma imagem apontando para `assets/logo/logo-horizontal.png`.
- O hero continua usando `assets/images/banner-hero.jpg`.

## V5 — seção Emergências
A seção `#emergencias` foi refeita seguindo o mockup aprovado: cabeçalho centralizado, 6 cards 3x2, ícones SVG dourados, card 01 em destaque, faixa final de contato, mensagens específicas de WhatsApp, efeitos de energia/partículas e responsividade 3/2/1 colunas.

### Trocar os ícones por imagens 3D no futuro
O HTML usa SVG inline como fallback. Se quiser usar imagens, crie `assets/images/icons/emergencia-01.png` até `emergencia-06.png` e substitua o conteúdo de `.em-icon` pela tag `<img>` correspondente.

### Fundo opcional da seção
A variável `--emergencias-bg` aponta para `assets/images/emergencias-bg.jpg`. O arquivo não é obrigatório: o fundo CSS funciona sozinho. Se quiser uma textura/ambiente tecnológico próprio, basta adicionar essa imagem nesse caminho.


## V6 — Tipografia unificada
- Fonte de títulos e botões: **Poppins** (mesma usada no H1 do hero).
- Fonte de corpo, navegação, rótulos e descrições: **Inter**.
- Rajdhani removida do carregamento e do CSS.
- A seção Emergências agora usa texto sólido branco/amarelo, sem gradiente tipográfico ou glow forte.


## V7 — seção de Emergências
- Fundo real da seção: `assets/images/emergencias-bg.jpg`.
- Ícones 3D fornecidos: `assets/images/icons/emergencia-01.png` até `emergencia-06.png`.
- A seção foi refeita para seguir o mockup: cabeçalho central, grade 3x2, card 01 destacado, faixa final e responsividade 3/2/1 colunas.
- Os links continuam usando o número e as mensagens do objeto `CONFIG` em `script.js`.
- Fontes globais: Poppins (títulos/botões) e Inter (corpo), carregadas com `display=swap`.

## V8 — fundo da seção Emergências
Somente o fundo e pequenos ajustes de legibilidade/encaixe da seção de Emergências foram alterados. A imagem original `assets/images/emergencias-bg.jpg` não foi modificada. Os controles principais ficam em `styles.css`: `--emergencias-bg-opacity`, `--emergencias-bg-brightness` e `--emergencias-overlay`. No mobile, a opacidade é reduzida para `.25`. Também foi corrigido o encaixe vertical dos cards para manter todos os botões totalmente visíveis, o amarelo do título foi fixado em `#FFC300`, o subtítulo ficou uniforme em branco suave e a grade passou a respeitar o container global de 1200px.


## V10 — Seção Serviços integrados
- Os textos, itens e mensagens de WhatsApp dos 7 serviços ficam no array `SERVICOS`, no início de `script.js`, logo após `CONFIG`.
- Troque os ícones em `assets/images/icons/servico-01.png` até `servico-07.png`, mantendo os mesmos nomes.
- Ordem: 01 raio; 02 lâmpada LED; 03 torneira/bomba d'água; 04 capacete; 05 ar-condicionado; 06 extintor; 07 câmera.
- Desktop/tablet: lista de abas à esquerda + painel único à direita. Abaixo de 900px: accordion.
- Fontes da seção: Poppins (`--fonte-titulo`) e Inter (`--fonte-corpo`), as mesmas variáveis globais do site.
- O número do WhatsApp continua vindo de `CONFIG.whatsappNumero`; `CONFIG` não foi alterado.

V11: Na seção Diferencial DNA, a antiga imagem de logo/concreto foi removida e substituída por assets/images/diferencial-eletricista.jpg, integrada como camada full-bleed com máscaras CSS. Nenhuma outra seção, link ou CONFIG foi alterado.


## V12 — Formas de atendimento
A seção `#contratos` foi reconstruída conforme o mockup aprovado.

Ícones (PNG transparente):
- `assets/images/icons/formato-01.png` — Contrato Mensal
- `assets/images/icons/formato-02.png` — Atendimento por Demanda
- `assets/images/icons/formato-03.png` — Plantão 24h

Os textos ficam no `index.html`, dentro de `#contratos`. As mensagens específicas de WhatsApp ficam em `data-wa-message` nos três botões. O número continua sendo lido de `CONFIG.whatsappNumero` no `script.js`; o objeto `CONFIG` não foi alterado.


## V13 — Regiões atendidas
- A seção `#regioes` agora usa Google Maps Embed sem chave de API e lista 12 cidades.
- A URL do mapa fica em `CONFIG.mapaUrl`, no início de `script.js`. Para trocar, altere somente esse valor.
- Se houver um Perfil da Empresa no Google, copie o link de **Incorporar um mapa** do Google Maps e use a URL do atributo `src` em `CONFIG.mapaUrl`.
- As cidades ficam no HTML dentro de `.city-list`. Cada chip abre o WhatsApp usando o número de `CONFIG.whatsappNumero`.
- O JSON-LD `areaServed` foi atualizado com as 12 cidades como objetos `City`, sem endereço ou coordenadas inventados.


## V14 — Regiões atendidas
- Título atualizado para “Atendemos Florianópolis / e toda a região.”
- Painel unificado em “Cidades atendidas”, sem indicação de base e sem cidade destacada.
- Mapa configurado em `CONFIG.mapaUrl` para Florianópolis/SC com zoom 10.
- Para trocar a busca do mapa, altere somente `CONFIG.mapaUrl` em `script.js`.
- Os chips continuam usando `data-cidade` e o número do WhatsApp existente no `CONFIG`.


## V15 — Galeria
A antiga seção “Como funciona o atendimento” foi substituída por um carrossel de 6 fotos em `assets/images/galeria/`.

- Para trocar uma foto, substitua `galeria-01.jpg` a `galeria-06.jpg` mantendo a proporção 4:3 (recomendado 1600 × 1200).
- Os textos alternativos ficam no array `GALERIA`, no início de `script.js`. Eles estão provisórios e devem ser trocados por descrições reais das fotos.
- O autoplay está em `5000` ms no `script.js`; altere esse valor para mudar o intervalo.
- As mensagens e o número de WhatsApp continuam usando `CONFIG`.

## V16 — correções de navegação da Galeria
- A primeira foto agora inicia em `scrollLeft = 0`, alinhada à borda esquerda do container.
- Slides: 440px no desktop, 62vw no tablet e 78vw no celular; gap de 16px.
- Navegação por índice (`indiceAtual`) com trava de 450ms; cada seta avança exatamente uma foto.
- Sincronização após arraste/swipe usa debounce de 120ms; autoplay passou para 6 segundos.


## V17 — ajustes pontuais
- Removidos os raios da barra superior e do botão de emergência do cabeçalho.
- Removidos a barra fixa inferior e o indicador “Role para ver mais”.
- Painel desktop de Serviços passa a acompanhar a altura total dos 7 itens.
- Reduzido o espaço entre Galeria e Formas de atendimento.
- Alinhamento interno dos três cards de Formas de atendimento uniformizado no desktop.
- Tipografia e botões do banner principal reduzidos.

## V18 — correções e padronização UI/UX
- A1: faixa de confiança do hero reorganizada em grid responsivo, sem sobreposição.
- A2: cards de Situação exibem texto/CTA imediatamente; reveal reduzido a 350 ms e ícones otimizados para 512×512/eager.
- A3: Formas de Atendimento usa subgrid quando suportado e fallback fluido sem alturas rígidas de texto/lista.
- A4: cidades em grade regular de 2 colunas (1 coluna em telas muito estreitas), com altura uniforme.
- A5: fundo final unificado em #000814 e resíduos de espaçamento final neutralizados.
- B1/B2: escala tipográfica e de espaçamento global adicionada em variáveis CSS; container global padronizado em 1200px.
- Breakpoints de consolidação: 1100px, 900px, 600px e 400px.


## V19 — ajustes pontuais
- Menu: Serviços | Regiões | Quem atendemos | Diferenciais | Contato. A seção `#publicos` existe e é o destino de “Quem atendemos”.
- Banner: CNPJ removido apenas da faixa de confiança; permanece no rodapé e JSON-LD.
- Situação: ícones confinados em coluna própria e efeito `relampago` compartilhado, pausado fora da viewport.
- Diferencial: título controlado em duas linhas no desktop e foto ajustada para 55% da largura.

## V20 — conferência dos quatro ajustes
- Menu do cabeçalho confirmado em: Serviços, Regiões, Quem atendemos, Diferenciais e Contato; hambúrguer somente abaixo de 900px.
- Destino `#publicos` existe e corresponde à seção de segmentos/quem atendemos.
- Hero permanece com quatro diferenciais; CNPJ continua no rodapé e JSON-LD.
- Cards de Situação usam coluna de ícone confinada e animação `relampago` compartilhada.
- Diferencial mantém título em duas linhas controladas no desktop.


## V22 — correções definitivas
- Banner: parallax por mouse e halo de cursor apenas em dispositivos hover/fine, com reduced-motion respeitado.
- Títulos: cores sólidas, line-height 1.2 e linhas com respiro para descendentes.
- Situação: faixa final compacta e novo texto.
- Ícones: Formas 320px, Situação 256px e Serviços 512px, em PNG otimizado + WebP, eager/preload.
- Formas de atendimento: título alterado para “Quem Atendemos” e destino de menu #quem-atendemos.
- Chamada final e cabeçalhos: subtítulos centralizados; CTA final responsivo.
