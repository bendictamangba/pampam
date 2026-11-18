/* Comportement du site : rendu des produits, langues, filtres, commandes... */

/* ─── Rendu des catégories et des produits ─── */

const categoryGrid = document.getElementById('categoryGrid');
const productGroups = document.getElementById('productGroups');

function icon(paths) {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg>';
}

/* Ouvre (ou réutilise) l'onglet WhatsApp Web sur PC.
   Un nom d'onglet fixes fait que le navigateur recharge l'onglet existant
   au lieu d'en créer un nouveau à chaque commande. */
function openWhatsApp(text) {
  const url = 'https://wa.me/22890321245?text=' + encodeURIComponent(text);
  const tab = window.open(url, 'pampam-whatsapp');
  if (tab) {
    tab.focus();
  } else {
    window.location.href = url;
  }
}

function fileSlug(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'produit';
}

function productCardHTML(product) {
  const badge = product.badge
    ? '<div class="product-badge" data-i18n="' + product.badge + '"></div>'
    : '';
  const extension = product.image.split('.').pop();
  const fileName = fileSlug(product.name.fr) + '.' + extension;

  return '' +
    '<article class="product-card" data-product="' + product.id + '">' +
      '<figure class="product-image">' +
        '<img src="' + product.image + '" alt="" data-i18n-alt="product.' + product.id + '.alt" loading="lazy">' +
        badge +
        '<span class="product-price">' + product.price + '</span>' +
      '</figure>' +
      '<div class="product-body">' +
        '<h3 data-i18n="product.' + product.id + '.name"></h3>' +
        '<p data-i18n="product.' + product.id + '.desc"></p>' +
        '<div class="product-actions">' +
          '<div class="product-actions-row">' +
            '<button type="button" class="btn-detail" data-detail="' + product.id + '" data-i18n-aria="viewDetails" aria-label="Voir les détails">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 11v5"/><path d="M12 8h.01"/></svg>' +
              '<span data-i18n="btnDetails"></span>' +
            '</button>' +
            '<button type="button" class="btn-order" data-order="' + product.id + '">' +
              '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.12h-.01a8.2 8.2 0 01-4.16-1.14l-.3-.18-3.11.82.83-3.03-.2-.31a8.18 8.18 0 01-1.26-4.37c0-4.53 3.69-8.21 8.22-8.21 2.2 0 4.26.86 5.81 2.41a8.17 8.17 0 012.4 5.81c0 4.52-3.69 8.2-8.22 8.2zm4.5-6.14c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.13.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.29z"/></svg>' +
              '<span data-i18n="btnOrder"></span>' +
            '</button>' +
          '</div>' +
          '<a class="btn-download" href="' + product.image + '" download="' + fileName + '" data-i18n-aria="downloadProduct" aria-label="Télécharger l image du produit">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>' +
            '<span data-i18n="btnDownload"></span>' +
          '</a>' +
        '</div>' +
      '</div>' +
    '</article>';
}

function renderCategories() {
  let html = '<button type="button" class="category-card active" data-filter="all" aria-pressed="true">' +
    '<span class="category-icon">' + icon(CATEGORY_ICONS.all) + '</span>' +
    '<span class="category-name" data-i18n="catAll"></span>' +
    '<span class="category-count">' + PRODUCTS.length + ' <span data-i18n="catProducts"></span></span>' +
  '</button>';

  CATEGORIES.forEach(category => {
    const count = PRODUCTS.filter(product => product.category === category.id).length;
    html += '<button type="button" class="category-card" data-filter="' + category.id + '" aria-pressed="false">' +
      '<span class="category-icon">' + icon(CATEGORY_ICONS[category.id] || '') + '</span>' +
      '<span class="category-name" data-i18n="' + category.nameKey + '"></span>' +
      '<span class="category-count">' + count + ' <span data-i18n="' + (count === 1 ? 'catProduct' : 'catProducts') + '"></span></span>' +
    '</button>';
  });

  categoryGrid.innerHTML = html;
}

function renderProducts() {
  productGroups.innerHTML =
    '<div class="products-grid">' + PRODUCTS.map(productCardHTML).join('') + '</div>';
}

renderCategories();
renderProducts();

/* ─── Les textes des produits viennent de PRODUCTS (une seule source) ─── */
PRODUCTS.forEach(product => {
  I18N.fr['product.' + product.id + '.name'] = product.name.fr;
  I18N.en['product.' + product.id + '.name'] = product.name.en;
  I18N.fr['product.' + product.id + '.desc'] = product.desc.fr;
  I18N.en['product.' + product.id + '.desc'] = product.desc.en;
  I18N.fr['product.' + product.id + '.alt'] = product.alt.fr;
  I18N.en['product.' + product.id + '.alt'] = product.alt.en;
});

/* ─── Pagination des produits ─── */

const PAGE_SIZE = 24;
const pagination = document.getElementById('pagination');
let currentPage = 1;
let activeFilter = 'all';

function filteredProducts() {
  return activeFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(product => product.category === activeFilter);
}

function pageCount() {
  return Math.max(1, Math.ceil(filteredProducts().length / PAGE_SIZE));
}

function renderPagination() {
  const t = I18N[document.documentElement.lang];
  const total = pageCount();

  /* Inutile tant que tous les produits tiennent sur une page. */
  pagination.hidden = total <= 1;
  if (total <= 1) return;

  let html = '<button type="button" class="page-btn" data-page="prev" aria-label="' + t.pagePrev + '"' +
    (currentPage === 1 ? ' disabled' : '') + '>‹</button>';

  for (let i = 1; i <= total; i++) {
    html += '<button type="button" class="page-btn' + (i === currentPage ? ' active' : '') +
      '" data-page="' + i + '"' + (i === currentPage ? ' aria-current="page"' : '') + '>' + i + '</button>';
  }

  html += '<button type="button" class="page-btn" data-page="next" aria-label="' + t.pageNext + '"' +
    (currentPage === total ? ' disabled' : '') + '>›</button>';
  html += '<span class="page-status">' + t.pageText + ' ' + currentPage + ' ' + t.pageOf + ' ' + total + '</span>';

  pagination.innerHTML = html;
}

function renderGrid() {
  const total = pageCount();
  if (currentPage > total) currentPage = total;
  const items = filteredProducts().slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const visible = new Set(items.map(product => product.id));

  document.querySelectorAll('.product-card').forEach(card => {
    card.hidden = !visible.has(card.dataset.product);
  });
  renderPagination();
}

pagination.addEventListener('click', event => {
  const btn = event.target.closest('[data-page]');
  if (!btn || btn.disabled) return;

  const total = pageCount();
  const action = btn.dataset.page;
  if (action === 'prev') currentPage = Math.max(1, currentPage - 1);
  else if (action === 'next') currentPage = Math.min(total, currentPage + 1);
  else currentPage = Number(action);

  renderGrid();
  const top = productGroups.getBoundingClientRect().top + scrollY - 90;
  window.scrollTo({ top: top, behavior: 'smooth' });
});

/* ─── Langue ─── */

let activeModalProduct = null;

function setLanguage(lang) {
  if (!I18N[lang]) lang = 'fr';
  const t = I18N[lang];
  const root = document.documentElement;

  root.lang = lang;
  document.title = t.metaTitle;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = t[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const value = t[el.dataset.i18nHtml];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const value = t[el.dataset.i18nAria];
    if (value !== undefined) el.setAttribute('aria-label', value);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const value = t[el.dataset.i18nAlt];
    if (value !== undefined) el.setAttribute('alt', value);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const value = t[el.dataset.i18nPlaceholder];
    if (value !== undefined) el.setAttribute('placeholder', value);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
  });

  renderPagination();
  refreshModalText();
  localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

let initialLang = localStorage.getItem('lang');
if (!initialLang) {
  initialLang = (navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'fr';
}
setLanguage(initialLang);
renderGrid();

/* ─── Filtre par catégorie ─── */

categoryGrid.addEventListener('click', event => {
  const card = event.target.closest('.category-card');
  if (!card) return;
  const filter = card.dataset.filter;

  categoryGrid.querySelectorAll('.category-card').forEach(btn => {
    const active = btn === card;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  activeFilter = filter;
  currentPage = 1;
  renderGrid();
});

/* ─── Fiche produit (modale) ─── */

const modal = document.getElementById('productModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalImage = document.getElementById('modalImage');
const modalSpecs = document.getElementById('modalSpecs');
const modalOrder = document.getElementById('modalOrder');

function fillModal(product) {
  const card = document.querySelector('.product-card[data-product="' + product.id + '"]');
  const lang = document.documentElement.lang;
  const img = card && card.querySelector('.product-image img');

  modalTitle.textContent = card ? card.querySelector('.product-body h3').textContent : '';
  modalDesc.textContent = card ? card.querySelector('.product-body > p').textContent : '';
  modalPrice.textContent = product.price;

  if (img) {
    modalImage.src = img.getAttribute('src');
    modalImage.alt = img.getAttribute('alt');
  }

  const specs = product.specs[lang] || product.specs.fr || [];
  modalSpecs.innerHTML = specs
    .map(row => '<li><span>' + row[0] + '</span><strong>' + row[1] + '</strong></li>')
    .join('');
  modalOrder.dataset.order = product.id;
}

function openProductModal(id) {
  const product = PRODUCTS.find(item => item.id === id);
  if (!product) return;
  activeModalProduct = id;
  fillModal(product);
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  modal.hidden = true;
  activeModalProduct = null;
  document.body.style.overflow = '';
}

function refreshModalText() {
  if (!activeModalProduct || modal.hidden) return;
  const product = PRODUCTS.find(item => item.id === activeModalProduct);
  if (product) fillModal(product);
}

modal.querySelectorAll('[data-close-modal]').forEach(el => {
  el.addEventListener('click', closeProductModal);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.hidden) closeProductModal();
});

/* ─── Commande via WhatsApp ─── */

function orderProduct(id) {
  const product = PRODUCTS.find(item => item.id === id);
  const card = document.querySelector('.product-card[data-product="' + id + '"]');
  if (!product || !card) return;

  const name = card.querySelector('.product-body h3').textContent;
  const lang = document.documentElement.lang;
  const text = lang === 'en'
    ? "Hello PamPam, I'd like to order:\n" + name + "\nPrice: " + product.price + "\n\nPlease confirm availability."
    : "Bonjour PamPam, je souhaite commander :\n" + name + "\nPrix : " + product.price + "\n\nMerci de me confirmer la disponibilité.";

  openWhatsApp(text);
}

/* ─── Délégation des clics sur les cartes ─── */

document.addEventListener('click', event => {
  const detail = event.target.closest('[data-detail]');
  if (detail) {
    openProductModal(detail.dataset.detail);
    return;
  }

  const order = event.target.closest('[data-order]');
  if (order) {
    orderProduct(order.dataset.order);
  }
});

/* ─── Formulaire de contact ─── */

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const fields = contactForm.elements;
    const name = fields['name'].value.trim();
    const contact = fields['contact'].value.trim();
    const subject = fields['subject'].options[fields['subject'].selectedIndex].text;
    const message = fields['message'].value.trim();

    if (!name || !contact || !message) return;

    const text = 'Nouveau message PamPam\n\n'
      + 'Nom : ' + name + '\n'
      + 'Contact : ' + contact + '\n'
      + 'Sujet : ' + subject + '\n\n'
      + message;

    openWhatsApp(text);

    const success = document.getElementById('formSuccess');
    success.hidden = false;
    contactForm.reset();
    setTimeout(() => { success.hidden = true; }, 8000);
  });
}

/* ─── Thème clair / sombre ─── */

const html = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const saved = localStorage.getItem('theme') || 'light';

html.setAttribute('data-theme', saved);

toggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

/* ─── Animations ─── */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.product-card, .contact-card-wide, .stat, .section-header').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

document.querySelectorAll('.contact-row > *').forEach((el, i) => {
  el.style.setProperty('--delay', `${i * 0.06}s`);
});

/* ─── Menu mobile ─── */

const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggleBtn.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    toggleBtn.classList.remove('open');
  });
});

/* ─── Lien de navigation actif ─── */

const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 200) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

/* ─── Compteurs ─── */

const statsSection = document.getElementById('chiffres');
const statNumbers = document.querySelectorAll('.stat-number');
let counted = false;

if (statsSection) {
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.dataset.count);
          const duration = 2000;
          const start = performance.now();
          function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            stat.textContent = Math.floor(eased * target).toLocaleString();
            if (progress < 1) requestAnimationFrame(update);
            else stat.textContent = stat.dataset.suffix ? target + stat.dataset.suffix : target.toLocaleString() + '+';
          }
          requestAnimationFrame(update);
        });
      }
    });
  }, { threshold: 0.3 }).observe(statsSection);
}
