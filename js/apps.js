/**
 * AURA — Universal State Management & Controller (Rock-Solid Edition)
 */

// Global State
window.State = {
  cart: JSON.parse(localStorage.getItem('aura_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('aura_wishlist')) || [],

  saveCart() {
    localStorage.setItem('aura_cart', JSON.stringify(this.cart));
    updateBadges();
    renderCartDrawer();
  },

  saveWishlist() {
    localStorage.setItem('aura_wishlist', JSON.stringify(this.wishlist));
    updateBadges();
    updateWishlistIcons();
  },

  addToCart(productId, size = null, color = null, quantity = 1) {
    if (typeof AURA_PRODUCTS === 'undefined') return;
    const product = AURA_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const chosenSize = size || (product.sizes && product.sizes[0]) || 'Standard';
    const chosenColor = color || (product.colors && product.colors[0]) || 'Standard';

    const existingIndex = this.cart.findIndex(
      item => item.id === productId && item.size === chosenSize && item.color === chosenColor
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += Number(quantity);
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        size: chosenSize,
        color: chosenColor,
        quantity: Number(quantity)
      });
    }

    this.saveCart();
    showToast(`Added "${product.name}" (${chosenSize}) to your bag.`);
    openCartDrawer();
  },

  removeFromCart(index) {
    const item = this.cart[index];
    if (!item) return;
    this.cart.splice(index, 1);
    this.saveCart();
    if (typeof renderCartPage === 'function') renderCartPage();
    showToast(`Removed item from your shopping bag.`);
  },

  updateQuantity(index, newQty) {
    if (newQty <= 0) {
      this.removeFromCart(index);
      return;
    }
    if (this.cart[index]) {
      this.cart[index].quantity = newQty;
      this.saveCart();
      if (typeof renderCartPage === 'function') renderCartPage();
    }
  },

  toggleWishlist(productId) {
    if (typeof AURA_PRODUCTS === 'undefined') return;
    const product = AURA_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const index = this.wishlist.indexOf(productId);
    if (index > -1) {
      this.wishlist.splice(index, 1);
      showToast(`Removed from Wishlist`);
    } else {
      this.wishlist.push(productId);
      showToast(`Saved to Wishlist: ${product.name}`);
    }
    this.saveWishlist();
    if (typeof renderWishlistPage === 'function') renderWishlistPage();
  },

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  },

  getCartTotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }
};

/* ----------------------------------------------------
   MODAL INJECTION (Runs automatically and ensures DOM readiness)
   ---------------------------------------------------- */
function ensureModalsInjected() {
  if (document.getElementById('quick-view-modal')) return; // Already present

  const modalHTML = `
    <!-- Cart Slide-Over Drawer -->
    <div id="cart-drawer" style="display: none;" class="fixed inset-0 z-50 overflow-hidden" aria-modal="true">
      <div class="fixed inset-0 bg-black/60 transition-opacity" onclick="closeCartDrawer()"></div>
      <div class="fixed inset-y-0 right-0 max-w-full flex pl-10 z-10">
        <div class="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          <div class="p-6 border-b border-neutral-100 flex items-center justify-between">
            <h2 class="text-base font-serif tracking-wider uppercase font-semibold text-neutral-900">
              Shopping Bag (<span class="cart-badge-count">0</span>)
            </h2>
            <button onclick="closeCartDrawer()" class="p-2 text-neutral-400 hover:text-neutral-900 text-xl font-light">✕</button>
          </div>
          <div id="cart-drawer-items" class="flex-1 overflow-y-auto p-6 space-y-6">
            <!-- Rendered Items -->
          </div>
          <div class="p-6 border-t border-neutral-100 bg-[#FCFCFA] space-y-4">
            <div class="flex justify-between text-sm">
              <span class="text-neutral-500">Subtotal</span>
              <span id="drawer-subtotal" class="font-semibold text-neutral-900">$0.00</span>
            </div>
            <p class="text-[11px] text-neutral-400">Taxes and express shipping calculated at checkout.</p>
            <a href="cart.html" class="block w-full py-4 bg-neutral-900 text-white text-center text-xs font-semibold uppercase tracking-widest hover:bg-[#C5A880] transition-colors">
              Review Bag & Checkout
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick View Modal -->
    <div id="quick-view-modal" style="display: none;" class="fixed inset-0 z-50 overflow-y-auto items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div class="relative bg-white max-w-3xl w-full mx-auto shadow-2xl overflow-hidden border border-neutral-200">
        <button onclick="closeQuickView()" class="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700 font-bold">✕</button>
        <div id="quick-view-content" class="grid grid-cols-1 md:grid-cols-2">
          <!-- Dynamic Content -->
        </div>
      </div>
    </div>

    <!-- Search Modal -->
    <div id="search-modal" style="display: none;" class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-6 flex flex-col items-center">
      <div class="w-full max-w-2xl mt-12">
        <div class="flex justify-between items-center mb-6">
          <span class="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">Search the Collection</span>
          <button onclick="toggleSearchModal(false)" class="text-white hover:text-[#C5A880] text-2xl font-light">✕</button>
        </div>
        <input 
          type="text" 
          id="global-search-input" 
          placeholder="Search by garment name, coat, dress, boots..."
          class="w-full bg-white/10 border-b-2 border-neutral-400 text-white placeholder-neutral-400 px-4 py-3 text-lg focus:outline-none focus:border-[#C5A880]"
        />
        <div id="search-results-dropdown" class="mt-6 max-h-[60vh] overflow-y-auto space-y-3"></div>
      </div>
    </div>

    <!-- Toast Notifications -->
    <div id="toast-container" class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none"></div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
  setupSearch();
}

/* ----------------------------------------------------
   QUICK VIEW FUNCTIONS
   ---------------------------------------------------- */
window.openQuickView = function(productId) {
  ensureModalsInjected();
  const product = AURA_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const content = document.getElementById('quick-view-content');
  if (!content) return;

  const sizes = product.sizes || ['Standard'];
  const colors = product.colors || ['Original'];
  const isWished = State.isInWishlist(product.id);

  content.innerHTML = `
    <div class="relative bg-neutral-100 aspect-[3/4] md:aspect-auto">
      <img src="${product.image}" id="qv-main-img" alt="${product.name}" class="w-full h-full object-cover">
      ${product.discount ? `<span class="absolute top-3 left-3 bg-neutral-900 text-white text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1">${product.discount}</span>` : ''}
    </div>
    <div class="p-8 flex flex-col justify-between bg-white">
      <div class="space-y-4">
        <div>
          <span class="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold">${product.category}</span>
          <h2 class="font-serif text-2xl text-neutral-900 mt-1">${product.name}</h2>
          <div class="flex items-center gap-3 mt-2">
            <span class="text-xl font-semibold text-neutral-900">$${product.price.toFixed(2)}</span>
            ${product.oldPrice ? `<span class="text-sm text-neutral-400 line-through">$${product.oldPrice.toFixed(2)}</span>` : ''}
            <span class="text-xs text-amber-500 font-medium">★ ${product.rating} (${product.reviewsCount})</span>
          </div>
        </div>

        <p class="text-xs text-neutral-600 leading-relaxed">${product.description}</p>
        
        <!-- Size Selector -->
        <div>
          <label class="block text-[11px] uppercase tracking-wider font-bold text-neutral-800 mb-2">Size</label>
          <div class="flex flex-wrap gap-2" id="qv-size-group">
            ${sizes.map((s, idx) => `
              <button 
                type="button"
                onclick="selectPill(this, 'qv-size')" 
                data-val="${s}" 
                class="qv-size px-3 py-1.5 border text-xs font-semibold transition-colors ${idx === 0 ? 'border-neutral-900 bg-neutral-900 text-white' : 'border-neutral-200 text-neutral-800 hover:border-neutral-900'}"
              >
                ${s}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Color Selector -->
        <div>
          <label class="block text-[11px] uppercase tracking-wider font-bold text-neutral-800 mb-2">Color</label>
          <div class="flex flex-wrap gap-2" id="qv-color-group">
            ${colors.map((c, idx) => `
              <button 
                type="button"
                onclick="selectPill(this, 'qv-color')" 
                data-val="${c}" 
                class="qv-color px-3 py-1.5 border text-xs font-semibold transition-colors ${idx === 0 ? 'border-neutral-900 bg-neutral-900 text-white' : 'border-neutral-200 text-neutral-800 hover:border-neutral-900'}"
              >
                ${c}
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="mt-8 flex gap-3">
        <button 
          onclick="addQuickViewToCart('${product.id}')" 
          class="flex-1 py-3.5 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#C5A880] transition-colors"
        >
          Add to Bag
        </button>
        <a 
          href="product-details.html?id=${product.id}" 
          class="px-4 py-3.5 border border-neutral-900 text-neutral-900 text-xs font-semibold uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors"
        >
          Details
        </a>
      </div>
    </div>
  `;

  const modal = document.getElementById('quick-view-modal');
  if (modal) {
    modal.style.display = 'flex';
  }
};

window.closeQuickView = function() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) modal.style.display = 'none';
};

window.selectPill = function(btn, groupClass) {
  document.querySelectorAll('.' + groupClass).forEach(el => {
    el.classList.remove('border-neutral-900', 'bg-neutral-900', 'text-white');
    el.classList.add('border-neutral-200', 'text-neutral-800');
  });
  btn.classList.remove('border-neutral-200', 'text-neutral-800');
  btn.classList.add('border-neutral-900', 'bg-neutral-900', 'text-white');
};

window.addQuickViewToCart = function(productId) {
  const activeSize = document.querySelector('.qv-size.bg-neutral-900')?.getAttribute('data-val');
  const activeColor = document.querySelector('.qv-color.bg-neutral-900')?.getAttribute('data-val');
  State.addToCart(productId, activeSize, activeColor, 1);
  closeQuickView();
};

/* ----------------------------------------------------
   CART DRAWER & TOAST CONTROLLERS
   ---------------------------------------------------- */
window.openCartDrawer = function() {
  ensureModalsInjected();
  renderCartDrawer();
  const drawer = document.getElementById('cart-drawer');
  if (drawer) drawer.style.display = 'block';
};

window.closeCartDrawer = function() {
  const drawer = document.getElementById('cart-drawer');
  if (drawer) drawer.style.display = 'none';
};

function renderCartDrawer() {
  const container = document.getElementById('cart-drawer-items');
  const subtotalEl = document.getElementById('drawer-subtotal');
  if (!container) return;

  if (State.cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16">
        <p class="font-serif text-xl text-neutral-400 italic mb-3">Your shopping bag is empty</p>
        <a href="shop.html" onclick="closeCartDrawer()" class="inline-block px-6 py-2.5 bg-neutral-900 text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A880]">Explore Shop</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '$0.00';
    return;
  }

  container.innerHTML = State.cart.map((item, index) => `
    <div class="flex gap-4 pb-4 border-b border-neutral-100">
      <img src="${item.image}" alt="${item.name}" class="w-16 h-20 object-cover bg-neutral-100">
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between text-xs font-medium">
            <h4 class="font-serif text-sm text-neutral-900 font-semibold">${item.name}</h4>
            <button onclick="State.removeFromCart(${index})" class="text-neutral-400 hover:text-red-500">✕</button>
          </div>
          <p class="text-[11px] text-neutral-400 mt-0.5">${item.size} / ${item.color}</p>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex items-center border border-neutral-200">
            <button onclick="State.updateQuantity(${index}, ${item.quantity - 1})" class="px-2.5 py-0.5 text-xs text-neutral-600 hover:bg-neutral-100">-</button>
            <span class="px-2.5 text-xs font-semibold">${item.quantity}</span>
            <button onclick="State.updateQuantity(${index}, ${item.quantity + 1})" class="px-2.5 py-0.5 text-xs text-neutral-600 hover:bg-neutral-100">+</button>
          </div>
          <span class="text-xs font-semibold text-neutral-900">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  `).join('');

  if (subtotalEl) subtotalEl.textContent = `$${State.getCartTotal().toFixed(2)}`;
}

window.showToast = function(message) {
  ensureModalsInjected();
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-enter pointer-events-auto flex items-center gap-3 bg-neutral-900 text-white text-xs px-5 py-3.5 shadow-2xl border-l-4 border-[#C5A880]';
  toast.innerHTML = `<span>✦</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

/* ----------------------------------------------------
   SEARCH MODAL
   ---------------------------------------------------- */
window.toggleSearchModal = function(show) {
  ensureModalsInjected();
  const modal = document.getElementById('search-modal');
  if (!modal) return;
  modal.style.display = show ? 'flex' : 'none';
  if (show) document.getElementById('global-search-input')?.focus();
};

function setupSearch() {
  const input = document.getElementById('global-search-input');
  if (!input) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const resultsContainer = document.getElementById('search-results-dropdown');
    if (!resultsContainer) return;

    if (!query) {
      resultsContainer.innerHTML = '';
      return;
    }

    const filtered = AURA_PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `<p class="text-neutral-400 text-xs py-4">No results found for "${query}".</p>`;
      return;
    }

    resultsContainer.innerHTML = filtered.map(item => `
      <a href="product-details.html?id=${item.id}" class="flex items-center gap-4 p-3 bg-white/10 hover:bg-white/20 transition-colors border border-white/5">
        <img src="${item.image}" class="w-12 h-14 object-cover">
        <div>
          <h4 class="font-serif text-white text-sm">${item.name}</h4>
          <p class="text-[11px] text-[#C5A880] uppercase tracking-wider">${item.category} — $${item.price.toFixed(2)}</p>
        </div>
      </a>
    `).join('');
  });
}

function updateBadges() {
  const cartCount = State.getCartCount();
  const wishCount = State.wishlist.length;

  document.querySelectorAll('.cart-badge-count').forEach(el => {
    el.textContent = cartCount;
    el.classList.toggle('hidden', cartCount === 0);
  });

  document.querySelectorAll('.wishlist-badge-count').forEach(el => {
    el.textContent = wishCount;
    el.classList.toggle('hidden', wishCount === 0);
  });
}

function updateWishlistIcons() {
  document.querySelectorAll('[data-wishlist-btn]').forEach(btn => {
    const id = btn.getAttribute('data-wishlist-btn');
    const isWished = State.isInWishlist(id);
    const svg = btn.querySelector('svg');
    if (svg) {
      if (isWished) {
        svg.setAttribute('fill', 'currentColor');
        svg.setAttribute('stroke-width', '0');
        svg.classList.add('text-rose-500', 'fill-rose-500');
        svg.classList.remove('text-neutral-700');
      } else {
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke-width', '1.8');
        svg.classList.remove('text-rose-500', 'fill-rose-500');
        svg.classList.add('text-neutral-700');
      }
    }
  });
}

// Auto-run on document ready
document.addEventListener('DOMContentLoaded', () => {
  ensureModalsInjected();
  updateBadges();
  updateWishlistIcons();
});
