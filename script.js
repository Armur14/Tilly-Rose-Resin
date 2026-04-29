const products = [
    // Ashtrays
    { title: "prod-multi-colour button ashtray", price: "£13.00", category: "Ashtrays", image: "prod-multi-colour button ashtray.jpg" },
    { title: "prod-pink duck heart ashtray", price: "£16.00", category: "Ashtrays", image: "prod-pink duck heart ashtray.jpg" },
    { title: "prod-Handmade Lavender Resin Cow Ashtray", price: "£15.50", category: "Ashtrays", image: "prod-Handmade Lavender Resin Cow Ashtray, Iridescent Green Grass.jpg" },
    { title: "prod-Green Resin Cherry Ashtray", price: "£14.00", category: "Ashtrays", image: "prod-Green Resin Cherry Ashtray Iridescent Flakes, Octagonal Design.jpg" },
    { title: "prod-Custom text heart ashtray", price: "£17.00", category: "Ashtrays", image: "prod-Custom text heart ashtray.jpg" },
    { title: "prod-Axolotl custom resin ashtray", price: "£16.00", category: "Ashtrays", image: "prod-Axolotl custom resin ashtray.jpg" },
    { title: "prod-Funky Flower shape ashtray", price: "£16.00", category: "Ashtrays", image: "prod-Funky Flower shape ashtray.jpg" },
    { title: "prod-Duck Ashtray", price: "£15.00", category: "Ashtrays", image: "prod-Duck Ashtray Shimmering Resin with Duck Charms.jpg" },
    { title: "prod-Iridescent glitter ashtray", price: "£14.00", category: "Ashtrays", image: "prod-Iridescent glitter ashtray.jpg" },
    { title: "prod-farm animals ashtray", price: "£16.50", category: "Ashtrays", image: "prod-farm animals ashtray.jpg" },
    { title: "prod-Koi fish pond ashtray", price: "£17.00", category: "Ashtrays", image: "prod-Koi fish pond ashtray.jpg" },
    { title: "prod-Duck pond ashtray", price: "£15.00", category: "Ashtrays", image: "prod-Duck pond ashtray.jpg" },
    { title: "prod-custom capybara heart ashtray", price: "£16.00", category: "Ashtrays", image: "prod-custom capybara heart ashtray.jpg" },
    { title: "prod-cow ashtray", price: "£16.00", category: "Ashtrays", image: "prod-cow ashtray.jpg" },
    { title: "prod-penguin ashtray", price: "£16.00", category: "Ashtrays", image: "prod-penguin ashtray.jpg" },
    { title: "prod-Heart shape cow ashtray", price: "£17.00", category: "Ashtrays", image: "prod-Heart shape cow ashtray.jpg" },
    { title: "prod-Christmas duck ashtray", price: "£13.00", category: "Ashtrays", image: "prod-Christmas duck ashtray.jpg" },
    { title: "prod-Rainbow heart ashtray", price: "£14.00", category: "Ashtrays", image: "prod-Rainbow heart ashtray.jpg" },
    { title: "prod-Cow and sheep resin ashtray", price: "£15.00", category: "Ashtrays", image: "prod-Cow and sheep resin ashtray.jpg" },
    { title: "prod-stay lit’ flower ashtray", price: "£17.00", category: "Ashtrays", image: "prod-stay lit’ flower ashtray custom resin design.jpg" },
    
    // Rings
    { title: "prod-Fish tank ring", price: "£12.00", category: "Rings", image: "prod-Fish tank ring, fish ring.jpg" },
    { title: "prod-Chunky Resin Duck Ring", price: "£10.00", category: "Rings", image: "prod-Chunky Resin Duck Ring, Y2K Kawaii Statement Piece.jpg" },
    { title: "prod-Chunky Resin Cow Ring", price: "£10.00", category: "Rings", image: "prod-Chunky Resin Cow Ring Handmade Funky Jewellery.jpg" },
    { title: "prod-Chunky fruit salad rings", price: "£10.00", category: "Rings", image: "prod-Chunky fruit salad rings.jpg" },
    { title: "prod-Citrus Ring mix", price: "£9.00", category: "Rings", image: "prod-Citrus Ring mix.jpg" },
    { title: "prod-Duck Ring", price: "£10.00", category: "Rings", image: "prod-Duck Ring, Y2K ring,.jpg" },
    
    // Trays/Trinkets
    { title: "prod-Moon and star ring dish", price: "£17.00", category: "Trays/Trinkets", image: "prod-Moon and star ring dish.jpg" },
    { title: "prod-frog pond ring dish", price: "£18.00", category: "Trays/Trinkets", image: "prod-frog pond ring dish.jpg" },
    { title: "prod-Pink axolotl trinket dish", price: "£17.00", category: "Trays/Trinkets", image: "prod-Pink axolotl trinket dish.jpg" },
    { title: "prod-Bunny garden ashtray trinket", price: "£20.00", category: "Trays/Trinkets", image: "prod-Bunny garden ashtray trinket.jpg" },
    
    // Coasters & Soap Dishes
    { title: "prod-Heart and flower coasters", price: "£19.00", category: "Coasters & Soap Dishes", image: "prod-Heart and flower coasters.jpg" },
    { title: "prod-Clear iridescent glitter coasters", price: "£19.00", category: "Coasters & Soap Dishes", image: "prod-Clear iridescent glitter coasters.jpg" },
    { title: "prod-Cute duck soap dish", price: "£12.00", category: "Coasters & Soap Dishes", image: "prod-Cute duck soap dish.jpg" },
    { title: "prod-Iridescent glitter soap dish", price: "£12.00", category: "Coasters & Soap Dishes", image: "prod-Iridescent glitter soap dish.jpg" },
    { title: "prod-Duck soap dish", price: "£13.00", category: "Coasters & Soap Dishes", image: "prod-Duck soap dish.jpg" },
    
    // Skulls
    { title: "prod-Clear iridescent skull ornament", price: "£22.00", category: "Skulls", image: "prod-Clear iridescent skull ornament.jpg" },
    { title: "prod-Rainbow iridescent skull ornament", price: "£25.00", category: "Skulls", image: "prod-Rainbow iridescent skull ornament.jpg" }
];

// Pagination State
let currentCategory = 'all';
let itemsToShow = 8;
const ITEMS_PER_PAGE = 8;

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return; // Not on the index page

    grid.innerHTML = ''; // Clear current

    const filtered = currentCategory === 'all' 
        ? products 
        : products.filter(p => p.category === currentCategory);

    const paginated = filtered.slice(0, itemsToShow);

    paginated.forEach((product, index) => {
        let cleanTitle = product.title.replace(/^prod-/, '').trim();
        cleanTitle = cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1);
        
        // URL encode the title for the ID
        const productId = encodeURIComponent(product.title);

        // Wrap card in an anchor tag
        const card = document.createElement('a');
        card.href = `product.html?id=${productId}`;
        card.className = 'product-card glassmorphism';
        card.style.animationDelay = `${(index % 8) * 0.05}s`;
        
        card.innerHTML = `
            <img src="${product.image}" alt="${cleanTitle}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-title">${cleanTitle}</h3>
                <span class="product-price">${product.price}</span>
            </div>
        `;
        
        grid.appendChild(card);
    });

    // View More Button Logic
    const viewMoreBtn = document.getElementById('view-more-btn');
    if (viewMoreBtn) {
        if (itemsToShow < filtered.length) {
            viewMoreBtn.style.display = 'inline-block';
        } else {
            viewMoreBtn.style.display = 'none';
        }
    }
}

// Category Picker Logic
const categoryBtns = document.querySelectorAll('.category-btn');
if (categoryBtns.length > 0) {
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            currentCategory = e.target.getAttribute('data-category');
            itemsToShow = ITEMS_PER_PAGE; // Reset pagination on category change
            renderProducts();
        });
    });
}

// View More Logic
const viewMoreBtn = document.getElementById('view-more-btn');
if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
        itemsToShow += ITEMS_PER_PAGE;
        renderProducts();
    });
}

// Product Detail Logic
function renderProductDetail() {
    const detailContainer = document.getElementById('product-detail');
    if (!detailContainer) return; // Not on product page

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        detailContainer.innerHTML = '<p>Product not found.</p>';
        return;
    }

    const product = products.find(p => p.title === decodeURIComponent(productId));

    if (!product) {
        detailContainer.innerHTML = '<p>Product not found.</p>';
        return;
    }

    let cleanTitle = product.title.replace(/^prod-/, '').trim();
    cleanTitle = cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1);

    // Update page title
    document.title = `${cleanTitle} | Tilly Rose Resin`;

    detailContainer.innerHTML = `
        <img src="${product.image}" alt="${cleanTitle}" class="product-detail-img">
        <div class="product-detail-info">
            <h1>${cleanTitle}</h1>
            <div class="product-detail-price">${product.price}</div>
            <p class="product-detail-desc">
                This unique, handcrafted resin piece is the perfect addition to your collection. 
                Made with love and a passion for vibrant Y2K aesthetics, it features iridescent 
                shimmers and a funky design that stands out.
            </p>
            <div class="shipping-info">
                <strong>Shipping:</strong> Dispatched within 3-5 business days. Carefully packaged for safe arrival.
            </div>
            <button class="cta-button shimmer" onclick="alert('Stripe Checkout Integration Coming Soon!')">Buy Now</button>
        </div>
    `;
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('product-grid')) {
        renderProducts();
    }
    if (document.getElementById('product-detail')) {
        renderProductDetail();
    }
});
