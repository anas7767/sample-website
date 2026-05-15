const products = [
  {
    id: "aashirvaad-atta",
    name: "Aashirvaad Superior MP Atta 10 kg Case of 6",
    brand: "ITC",
    category: "Staples",
    sku: "ST-ITC-ATTA-60",
    price: 2580,
    mrp: 3180,
    moq: 2,
    stock: 96,
    margin: 19,
    velocity: 98,
    pack: "10 kg x 6",
    visual: "ATTA",
    scheme: "Buy 4 cases and unlock 2% extra margin",
    delivery: "Dispatch in 18h",
    tone: "#fff2c2",
    brandColor: "#e26b00",
    image: "https://s7ap1.scene7.com/is/image/itcportalprod/desktop%20mp%20atta?fmt=webp-alpha"
  },
  {
    id: "india-gate-rice",
    name: "India Gate Everyday Basmati Rice 10 kg Bags",
    brand: "KRBL",
    category: "Staples",
    sku: "ST-KRBL-RICE-25",
    price: 2210,
    mrp: 2650,
    moq: 3,
    stock: 112,
    margin: 17,
    velocity: 94,
    pack: "25 kg",
    visual: "RICE",
    scheme: "Staples price lock valid today",
    delivery: "Dispatch in 24h",
    tone: "#fff7db",
    brandColor: "#1d7a48",
    image: "https://www.indiagatefoods.com/wp-content/uploads/2023/03/IG-Everyday-10kg-front-1.webp"
  },
  {
    id: "fortune-oil",
    name: "Fortune Sunlite Sunflower Oil 15 L Tin",
    brand: "Adani Wilmar",
    category: "Staples",
    sku: "ST-AW-OIL-15",
    price: 1840,
    mrp: 2110,
    moq: 2,
    stock: 74,
    margin: 13,
    velocity: 89,
    pack: "15 L",
    visual: "OIL",
    scheme: "Free delivery on 8+ tins",
    delivery: "Dispatch in 18h",
    tone: "#eaf7db",
    brandColor: "#f0a000",
    image: "https://www.fortunefoods.com/wp-content/uploads/2022/12/02_0004_Sunlite-15-ltr-fornt-Tin.png"
  },
  {
    id: "tata-salt",
    name: "Tata Salt 1 kg Pouches Case of 50",
    brand: "Tata Consumer",
    category: "Staples",
    sku: "ST-TATA-SALT-50",
    price: 1160,
    mrp: 1400,
    moq: 2,
    stock: 156,
    margin: 17,
    velocity: 92,
    pack: "1 kg x 50",
    visual: "SALT",
    scheme: "Fast reorder SKU for kirana stores",
    delivery: "Dispatch in 12h",
    tone: "#e9f3ff",
    brandColor: "#1f6fbf",
    image: "https://www.tataconsumer.com/sites/g/files/gfwrlq316/files/Tata-Salt-Banner_800x783%20%282%29_0.jpg"
  },
  {
    id: "tata-tea",
    name: "Tata Tea Premium Regional Tea Packs Case",
    brand: "Tata Consumer",
    category: "Beverages",
    sku: "BV-TATA-TEA-12",
    price: 4560,
    mrp: 5520,
    moq: 1,
    stock: 54,
    margin: 17,
    velocity: 86,
    pack: "1 kg x 12",
    visual: "TEA",
    scheme: "Assorted beverage billing supported",
    delivery: "Dispatch in 24h",
    tone: "#e5f0ff",
    brandColor: "#b42424",
    image: "https://www.tataconsumer.com/sites/g/files/gfwrlq316/files/tata-tea-india.png"
  },
  {
    id: "nescafe",
    name: "Nescafe Classic Coffee 180 g Jars Case of 12",
    brand: "Nestle",
    category: "Beverages",
    sku: "BV-NES-COF-12",
    price: 5940,
    mrp: 7140,
    moq: 1,
    stock: 28,
    margin: 17,
    velocity: 74,
    pack: "200 g x 12",
    visual: "COF",
    scheme: "Premium beverage counter offer",
    delivery: "Dispatch in 24h",
    tone: "#f0ebe5",
    brandColor: "#7a3c14",
    image: "https://www.nescafe.com/in/sites/default/files/styles/plp_card_image/public/2025-05/IN_2025_Nescafe-Cl_180g-Jar-960x960-3D.png.webp?itok=M_pvJ-sD"
  },
  {
    id: "real-juice",
    name: "Real Mixed Fruit Juice 1 L Cartons Case of 24",
    brand: "Dabur",
    category: "Beverages",
    sku: "BV-DAB-JUICE-24",
    price: 2040,
    mrp: 2640,
    moq: 3,
    stock: 88,
    margin: 23,
    velocity: 82,
    pack: "1 L x 24",
    visual: "JUICE",
    scheme: "Buy 6 cases and save extra 3%",
    delivery: "Dispatch in 18h",
    tone: "#e9f7ff",
    brandColor: "#0f8c4a",
    image: "https://www.daburshop.com/cdn/shop/files/MIXED_FRUIT_FOP-removebg-preview.png?v=1762947951&width=1445"
  },
  {
    id: "horlicks",
    name: "Horlicks Classic Malt 500 g Case of 12",
    brand: "HUL",
    category: "Beverages",
    sku: "BV-HUL-HOR-12",
    price: 3720,
    mrp: 4380,
    moq: 1,
    stock: 34,
    margin: 15,
    velocity: 78,
    pack: "500 g x 12",
    visual: "MALT",
    scheme: "High value health drink SKU",
    delivery: "Dispatch in 24h",
    tone: "#eef4ff",
    brandColor: "#174ea6",
    image: "https://www.horlicks.in/cdn/shop/files/Horlicks_Classic_Malt.png?v=1723616905&width=1946"
  },
  {
    id: "brit-good-day",
    name: "Britannia Good Day 52 g Carton of 120",
    brand: "Britannia",
    category: "Snacks",
    sku: "SN-BRI-GD-120",
    price: 960,
    mrp: 1200,
    moq: 5,
    stock: 180,
    margin: 20,
    velocity: 97,
    pack: "52 g x 120",
    visual: "BIS",
    scheme: "Counter display margin pack",
    delivery: "Dispatch in 12h",
    tone: "#fff4db",
    brandColor: "#a2262f",
    image: "https://groceryhub.nl/cdn/shop/files/GH-BritanniaGoodDay-ButterCookies1.jpg?v=1697019996&width=1080"
  },
  {
    id: "parle-g",
    name: "Parle-G Gold 250 g Case of 60",
    brand: "Parle",
    category: "Snacks",
    sku: "SN-PAR-G-60",
    price: 1710,
    mrp: 2100,
    moq: 3,
    stock: 132,
    margin: 19,
    velocity: 96,
    pack: "250 g x 60",
    visual: "BIS",
    scheme: "Fast-moving family pack",
    delivery: "Dispatch in 12h",
    tone: "#fff0d5",
    brandColor: "#f08a00",
    image: "https://www.parleproducts.com/Uploads/prdsmallimage/99prodsmall_parle-gold.png"
  },
  {
    id: "bingo",
    name: "Bingo Mad Angles 50 g Display Box of 60",
    brand: "ITC",
    category: "Snacks",
    sku: "SN-ITC-BIN-60",
    price: 720,
    mrp: 1200,
    moq: 5,
    stock: 164,
    margin: 40,
    velocity: 90,
    pack: "50 g x 60",
    visual: "CHIP",
    scheme: "Top deal: 40% retail margin",
    delivery: "Dispatch in 18h",
    tone: "#fff3c9",
    brandColor: "#da2b2b",
    image: "https://www.bbassets.com/media/uploads/p/s/40172829_11-bingo-mad-angles-chips-achaari-masti.jpg"
  },
  {
    id: "maggi",
    name: "Maggi Masala Noodles 70 g Case of 96",
    brand: "Nestle",
    category: "Snacks",
    sku: "SN-NES-MAG-96",
    price: 1344,
    mrp: 1728,
    moq: 4,
    stock: 118,
    margin: 22,
    velocity: 95,
    pack: "70 g x 96",
    visual: "NOOD",
    scheme: "Student area recommended SKU",
    delivery: "Dispatch in 18h",
    tone: "#fff7c9",
    brandColor: "#d8a400",
    image: "https://www.madewithnestle.ca/content/dam/nestlecanadaincprogram/maggi/en/products/masala_cdn_3dsm.png"
  },
  {
    id: "dove-soap",
    name: "Dove Original Beauty Bar Multipack Case",
    brand: "HUL",
    category: "Personal Care",
    sku: "PC-HUL-DOVE-72",
    price: 3564,
    mrp: 4320,
    moq: 2,
    stock: 62,
    margin: 18,
    velocity: 76,
    pack: "100 g x 72",
    visual: "SOAP",
    scheme: "Personal care combo eligible",
    delivery: "Dispatch in 24h",
    tone: "#f2edff",
    brandColor: "#5266c7",
    image: "https://assets.unileversolutions.com/v1/123254540.png"
  },
  {
    id: "colgate",
    name: "Colgate Strong Teeth 100 g Case of 48",
    brand: "Colgate",
    category: "Personal Care",
    sku: "PC-COL-TOOTH-48",
    price: 1560,
    mrp: 1920,
    moq: 3,
    stock: 84,
    margin: 19,
    velocity: 84,
    pack: "100 g x 48",
    visual: "PASTE",
    scheme: "Oral care shelf restock",
    delivery: "Dispatch in 18h",
    tone: "#ffe8e8",
    brandColor: "#d8172e",
    image: "https://pxmshare.colgatepalmolive.com/JPEG_1500/9a9eXWnwNideZ9eOYnTZY.jpg"
  },
  {
    id: "dabur-red",
    name: "Dabur Red Toothpaste 200 g Case of 36",
    brand: "Dabur",
    category: "Personal Care",
    sku: "PC-DAB-RED-36",
    price: 2460,
    mrp: 3060,
    moq: 2,
    stock: 40,
    margin: 20,
    velocity: 71,
    pack: "200 g x 36",
    visual: "PASTE",
    scheme: "Ayurvedic oral care demand rising",
    delivery: "Dispatch in 24h",
    tone: "#ffecec",
    brandColor: "#bd1e2d",
    image: "https://www.dabur.com/Brands/Oral%20Care/Dabur%20Red%20Paste/5.jpg"
  },
  {
    id: "parachute",
    name: "Parachute Coconut Oil 500 ml Case of 24",
    brand: "Marico",
    category: "Personal Care",
    sku: "PC-MAR-OIL-24",
    price: 3360,
    mrp: 4056,
    moq: 2,
    stock: 30,
    margin: 17,
    velocity: 69,
    pack: "500 ml x 24",
    visual: "HAIR",
    scheme: "Repeat buyer special",
    delivery: "Dispatch in 24h",
    tone: "#e8fbff",
    brandColor: "#186fa8",
    image: "https://mallowco.com/uploads/products-thumbnails/w0uq9hfbqblcg1zltbakiwz.jpg"
  },
  {
    id: "surf-excel",
    name: "Surf Excel Easy Wash Detergent 1 kg Case of 24",
    brand: "HUL",
    category: "Home Care",
    sku: "HC-HUL-SURF-24",
    price: 2880,
    mrp: 3600,
    moq: 3,
    stock: 22,
    margin: 20,
    velocity: 87,
    pack: "1 kg x 24",
    visual: "DETER",
    scheme: "Buy 3+ cases and save extra",
    delivery: "Dispatch in 24h",
    tone: "#e9f2ff",
    brandColor: "#2459c4",
    image: "https://uvkart.com/static/uploads/products/surf-excel-easy-wash-1kg-1767767205.webp"
  },
  {
    id: "vim-bar",
    name: "Vim Dishwash Bar 300 g Case of 48",
    brand: "HUL",
    category: "Home Care",
    sku: "HC-HUL-VIM-48",
    price: 1152,
    mrp: 1440,
    moq: 4,
    stock: 72,
    margin: 20,
    velocity: 88,
    pack: "300 g x 48",
    visual: "VIM",
    scheme: "Kitchen cleaning volume pack",
    delivery: "Dispatch in 18h",
    tone: "#e6f8e9",
    brandColor: "#0c8d42",
    image: "https://www.starquik.com/cdn/shop/files/SQ108469_FOP_f94d1fa0-e186-4545-a0c3-45eaa74a0221.jpg?v=1776848423&width=1445"
  },
  {
    id: "goodknight",
    name: "Goodknight Gold Flash Vaporizer Case of 24",
    brand: "Godrej",
    category: "Home Care",
    sku: "HC-GOD-GK-24",
    price: 2136,
    mrp: 2640,
    moq: 2,
    stock: 18,
    margin: 19,
    velocity: 66,
    pack: "45 ml x 24",
    visual: "GK",
    scheme: "Seasonal insect care demand",
    delivery: "Dispatch in 24h",
    tone: "#ecf0ff",
    brandColor: "#332f90",
    image: "https://international.godrejcp.com/site-images/products/goodknight-gold-flash-liquid-vaporizer.jpg"
  },
  {
    id: "harpic",
    name: "Harpic Bathroom Cleaner 1 L Case of 12",
    brand: "Reckitt",
    category: "Home Care",
    sku: "HC-REC-HAR-12",
    price: 1980,
    mrp: 2340,
    moq: 2,
    stock: 0,
    margin: 15,
    velocity: 63,
    pack: "1 L x 12",
    visual: "CLEAN",
    scheme: "Restock request available",
    delivery: "Out of stock",
    tone: "#edf5ff",
    brandColor: "#0d4d91",
    image: "https://www.harpic.co.in/static/b0f63d474ff5eeae7bca01f316c1a87c/566b0/Harpic_-_IN_-_en-IN-harpic_bathroom_cleaner_lemon_fresh_1000ml.webp"
  },
  {
    id: "shipping-box",
    name: "Corrugated Shipping Boxes Set of 100",
    brand: "Feri",
    category: "Packaging",
    sku: "PK-FERI-BOX-100",
    price: 2250,
    mrp: 2890,
    moq: 2,
    stock: 92,
    margin: 22,
    velocity: 70,
    pack: "Set of 100",
    visual: "BOX",
    scheme: "Useful for delivery and resale packing",
    delivery: "Dispatch in 24h",
    tone: "#fff1e7",
    brandColor: "#9b5a25"
  },
  {
    id: "carry-bags",
    name: "Large Carry Bags Pack of 1000",
    brand: "Feri",
    category: "Packaging",
    sku: "PK-FERI-BAG-1000",
    price: 1180,
    mrp: 1540,
    moq: 2,
    stock: 48,
    margin: 23,
    velocity: 61,
    pack: "1000 pcs",
    visual: "BAG",
    scheme: "Counter checkout essential",
    delivery: "Dispatch in 24h",
    tone: "#eef8f0",
    brandColor: "#237a4f"
  }
];

const state = {
  category: "all",
  brand: "all",
  query: "",
  sort: "popular",
  stockOnly: false,
  cart: {}
};

const formatter = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0
});

const productGrid = document.querySelector("#productGrid");
const categoryList = document.querySelector("#categoryList");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const searchCategory = document.querySelector("#searchCategory");
const sortSelect = document.querySelector("#sortSelect");
const stockToggle = document.querySelector("#stockToggle");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTitle = document.querySelector("#cartTitle");
const subtotalEl = document.querySelector("#subtotal");
const taxEl = document.querySelector("#tax");
const deliveryEl = document.querySelector("#delivery");
const grandTotalEl = document.querySelector("#grandTotal");
const checkoutButton = document.querySelector("#checkoutButton");
const checkoutDialog = document.querySelector("#checkoutDialog");
const checkoutMessage = document.querySelector("#checkoutMessage");
const accountDialog = document.querySelector("#accountDialog");
const cartPanel = document.querySelector("#cartPanel");
const sidebar = document.querySelector("#sidebar");
const resultEyebrow = document.querySelector("#resultEyebrow");
const resultTitle = document.querySelector("#resultTitle");
const brandButtons = document.querySelectorAll("[data-brand]");

function money(value) {
  return `Rs. ${formatter.format(value)}`;
}

function categories() {
  return ["all", ...new Set(products.map((product) => product.category))];
}

function renderCategories() {
  categoryList.innerHTML = categories()
    .map((category) => {
      const count = category === "all"
        ? products.length
        : products.filter((product) => product.category === category).length;
      const label = category === "all" ? "All products" : category;
      return `
        <button class="category-button ${state.category === category ? "active" : ""}" data-category="${category}">
          <span>${label}</span>
          <strong>${count}</strong>
        </button>
      `;
    })
    .join("");
}

function renderBrandButtons() {
  brandButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.brand === state.brand);
  });
}

function filteredProducts() {
  let items = products.filter((product) => {
    const categoryMatch = state.category === "all" || product.category === state.category;
    const brandMatch = state.brand === "all" || product.brand === state.brand;
    const query = state.query.toLowerCase();
    const queryMatch = !query || [product.name, product.category, product.sku, product.brand].some((value) => value.toLowerCase().includes(query));
    const stockMatch = !state.stockOnly || product.stock > 0;
    return categoryMatch && brandMatch && queryMatch && stockMatch;
  });

  if (state.sort === "priceLow") items = items.sort((a, b) => a.price - b.price);
  if (state.sort === "priceHigh") items = items.sort((a, b) => b.price - a.price);
  if (state.sort === "margin") items = items.sort((a, b) => b.margin - a.margin);
  if (state.sort === "popular") items = items.sort((a, b) => b.velocity - a.velocity);

  return items;
}

function stockLabel(product) {
  if (product.stock === 0) return `<span class="out-stock">Out of stock</span>`;
  if (product.stock <= 24) return `<span class="low-stock">Only ${product.stock} cases left</span>`;
  return `<span>${product.stock} cases available</span>`;
}

function productImageMarkup(product) {
  const fallback = `
    <div class="packshot ${product.image ? "product-fallback" : ""}" ${product.image ? "hidden" : ""} aria-hidden="true">
      <span>${product.brand}</span>
      <strong>${product.visual}</strong>
      <em>${product.pack}</em>
    </div>
  `;

  if (!product.image) return fallback;

  return `
    <div class="image-stage">
      <img class="product-photo" src="${product.image}" alt="${product.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">
      ${fallback}
    </div>
  `;
}

function renderProducts() {
  const items = filteredProducts();
  const brandPart = state.brand === "all" ? "" : ` - ${state.brand}`;
  resultEyebrow.textContent = state.category === "all" ? `All wholesale products${brandPart}` : `${state.category} wholesale${brandPart}`;
  resultTitle.textContent = state.query
    ? `${items.length} result${items.length === 1 ? "" : "s"} for "${state.query}"`
    : "B2B FMCG ordering for kirana stores and resellers";

  productGrid.innerHTML = items.length
    ? items.map((product) => `
      <article class="product-card">
        <div class="product-art" style="--tone: ${product.tone}; --brand-color: ${product.brandColor}">
          <span class="badge">${product.stock > 0 ? `${product.margin}% margin` : "Restock soon"}</span>
          <span class="assured-badge">Feri Assured</span>
          ${product.image ? productImageMarkup(product) : `<div class="image-stage">${productImageMarkup(product)}</div>`}
        </div>
        <div class="product-body">
          <div class="brand-line">
            <span>${product.brand}</span>
            <span>${product.category}</span>
          </div>
          <h3>${product.name}</h3>
          <div class="product-meta">
            <span>${product.sku}</span>
            <span>MOQ ${product.moq}</span>
          </div>
          <div class="price-row">
            <strong>${money(product.price)}</strong>
            <span>MRP ${money(product.mrp)}</span>
          </div>
          <div class="scheme-line">${product.scheme}</div>
          <div class="stock-line">
            ${stockLabel(product)}
            <span>${product.delivery}</span>
          </div>
          <div class="qty-row">
            <input type="number" min="${product.moq}" value="${product.moq}" aria-label="Quantity for ${product.name}" data-qty="${product.id}">
            <button data-add="${product.id}" ${product.stock === 0 ? "disabled" : ""}>Add</button>
          </div>
        </div>
      </article>
    `).join("")
    : `<div class="cart-empty">No products match this selection.</div>`;
}

function cartEntries() {
  return Object.entries(state.cart)
    .map(([id, qty]) => ({ product: products.find((item) => item.id === id), qty }))
    .filter((entry) => entry.product);
}

function cartTotals() {
  const subtotal = cartEntries().reduce((sum, entry) => sum + entry.product.price * entry.qty, 0);
  const tax = Math.round(subtotal * 0.18);
  const delivery = subtotal > 25000 || subtotal === 0 ? 0 : 390;
  return { subtotal, tax, delivery, grand: subtotal + tax + delivery };
}

function renderCart() {
  const entries = cartEntries();
  const count = entries.reduce((sum, entry) => sum + entry.qty, 0);
  const totals = cartTotals();

  cartCount.textContent = count;
  cartTitle.textContent = count ? `${count} case${count === 1 ? "" : "s"} selected` : "Cart is empty";
  checkoutButton.disabled = count === 0;

  cartItems.innerHTML = entries.length
    ? entries.map(({ product, qty }) => `
      <div class="cart-item">
        <div>
          <strong>${product.name}</strong>
          <span>${qty} x ${money(product.price)} = ${money(qty * product.price)}</span>
        </div>
        <div class="cart-controls">
          <button data-dec="${product.id}" aria-label="Decrease ${product.name}">-</button>
          <strong>${qty}</strong>
          <button data-inc="${product.id}" aria-label="Increase ${product.name}">+</button>
        </div>
      </div>
    `).join("")
    : `<div class="cart-empty">Add products to prepare a purchase order.</div>`;

  subtotalEl.textContent = money(totals.subtotal);
  taxEl.textContent = money(totals.tax);
  deliveryEl.textContent = totals.delivery ? money(totals.delivery) : "Free";
  grandTotalEl.textContent = money(totals.grand);
}

function addToCart(id, qty) {
  const product = products.find((item) => item.id === id);
  if (!product || product.stock === 0) return;
  const safeQty = Math.max(product.moq, Number(qty) || product.moq);
  state.cart[id] = (state.cart[id] || 0) + safeQty;
  renderCart();
}

function updateCart(id, change) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  const nextQty = (state.cart[id] || 0) + change;
  if (nextQty < product.moq) {
    delete state.cart[id];
  } else {
    state.cart[id] = nextQty;
  }
  renderCart();
}

categoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  searchCategory.value = state.category;
  sidebar.classList.remove("open");
  renderCategories();
  renderProducts();
});

brandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.brand = button.dataset.brand;
    renderBrandButtons();
    renderProducts();
  });
});

document.querySelectorAll("[data-offer-category]").forEach((button) => {
  button.addEventListener("click", () => {
    state.category = button.dataset.offerCategory;
    state.brand = "all";
    searchCategory.value = state.category;
    renderCategories();
    renderBrandButtons();
    renderProducts();
  });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = searchInput.value.trim();
  state.category = searchCategory.value;
  renderCategories();
  renderProducts();
});

sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  renderProducts();
});

stockToggle.addEventListener("change", () => {
  state.stockOnly = stockToggle.checked;
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  const qtyInput = productGrid.querySelector(`[data-qty="${button.dataset.add}"]`);
  addToCart(button.dataset.add, qtyInput.value);
});

cartItems.addEventListener("click", (event) => {
  const inc = event.target.closest("[data-inc]");
  const dec = event.target.closest("[data-dec]");
  if (inc) updateCart(inc.dataset.inc, 1);
  if (dec) updateCart(dec.dataset.dec, -1);
});

document.querySelector("#cartButton").addEventListener("click", () => {
  cartPanel.classList.add("open");
});

document.querySelector("#closeCartButton").addEventListener("click", () => {
  cartPanel.classList.remove("open");
});

document.querySelector("#menuButton").addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

document.querySelector("#viewDealsButton").addEventListener("click", () => {
  state.sort = "margin";
  state.category = "all";
  state.brand = "all";
  sortSelect.value = "margin";
  searchCategory.value = "all";
  renderCategories();
  renderBrandButtons();
  renderProducts();
});

document.querySelector("#accountButton").addEventListener("click", () => {
  accountDialog.showModal();
});

checkoutButton.addEventListener("click", () => {
  const totals = cartTotals();
  checkoutMessage.textContent = `Total order value is ${money(totals.grand)} including GST and delivery.`;
  checkoutDialog.showModal();
});

renderCategories();
renderBrandButtons();
renderProducts();
renderCart();
