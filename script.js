// DATA PRODUK
const products = [
    {
        name: "Bawang Merah Segar",
        price: "Rp 9.000",
        type: "Organik",
        cat: "Sayur",
        image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        bgClass: "bg-organic"
    },
    {
        name: "Selada Hijau Organik",
        price: "Rp 8.000",
        type: "Organik",
        cat: "Sayur",
        image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        bgClass: "bg-organic"
    },
    {
        name: "Wortel Organik",
        price: "Rp 10.000",
        type: "Organik",
        cat: "Sayur",
        image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        bgClass: "bg-organic"
    },
    {
        name: "Apel Fuji",
        price: "Rp 35.000",
        type: "Non-Organik",
        cat: "Buah",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        bgClass: "bg-non"
    }
];

// RENDER PRODUK
const productContainer = document.getElementById('featured-products');
products.forEach(product => {
    const card = `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <span class="badge-type ${product.bgClass}">${product.type}</span>
                <span class="product-cat">${product.cat}</span>
                <h3 class="product-title">${product.name}</h3>
                <span class="product-price">${product.price}</span>
                <button class="btn-cart" onclick="addToCart()"><i class="fa-solid fa-cart-plus"></i> Tambah ke Keranjang</button>
            </div>
        </div>
    `;
    productContainer.innerHTML += card;
});

// NAVIGASI HALAMAN (SPA SEDERHANA)
function showPage(pageId) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    
    // Reset scroll ke atas
    window.scrollTo(0, 0);

    // Tampilkan halaman target
    // Mapping ID
    const map = {
        'home': 'home-page',
        'about': 'about-page',
        'contact': 'contact-page',
        'account': 'account-page',
        'products': 'home-page' // Untuk demo ini, produk gabung di home dulu atau scroll ke bawah
    };

    const target = document.getElementById(map[pageId]);
    if (target) {
        target.style.display = 'block';
    }

    if (pageId === 'products') {
        document.getElementById('featured-products').scrollIntoView({ behavior: 'smooth' });
    }
}

// NAVIGASI TAB AKUN
function switchAccountTab(tabName) {
    // Reset tombol active
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    // Reset konten active
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Set active baru
    // Cari tombol yang di-klik (ini cara gampangnya, di real app pakai event listener lebih rapi)
    const buttons = document.querySelectorAll('.tab-btn');
    if(tabName === 'profile') buttons[0].classList.add('active');
    if(tabName === 'orders') buttons[1].classList.add('active');
    if(tabName === 'wishlist') buttons[2].classList.add('active');
    if(tabName === 'logout') buttons[3].classList.add('active');

    document.getElementById(`tab-${tabName}`).classList.add('active');
}

// FUNGSI LAINNYA
function addToCart() {
    alert("Produk berhasil ditambahkan ke keranjang!");
    const badge = document.querySelector('.badge');
    let count = parseInt(badge.innerText);
    badge.innerText = count + 1;
}

function toggleMenu() {
    alert("Menu Mobile Toggle (Implementasi responsif bisa ditambahkan di CSS)");
}