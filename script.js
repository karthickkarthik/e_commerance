// Product data
const products = [
    {
        title: 'Floral Print Buttoned',
        price: 450.99,
        oldPrice: 900,
        rating: 4,
        image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        badge: { type: 'new', text: 'NEW' }
    },
    {
        title: 'Floral Print Buttoned',
        price: 450.99,
        oldPrice: 900,
        rating: 4,
        image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        badge: { type: 'hot', text: 'HOT' }
    },
    {
        title: 'Floral Print Buttoned',
        price: 450.99,
        oldPrice: 800,
        rating: 4,
        image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        badge: { type: 'sale', text: 'SALE' }
    },
    {
        title: 'Floral Print Buttoned',
        price: 450.99,
        oldPrice: 80,
        rating: 4,
        image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        badge: { type: 'sale', text: 'SALE' }
    }
];

// Generate products grid
function generateProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" class="product-img">
                <span class="badge ${product.badge.type}">${product.badge.text}</span>
                <button class="wishlist-btn" title="Add to wishlist">
                    <i class="far fa-heart"></i>
                </button>
                <div class="product-add-overlay">
                    <button class="product-add-btn" title="Add to cart">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                </div>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    <span class="old-price">$${product.oldPrice.toFixed(2)}</span>
                </div>
                <button class="btn-add-cart"><i class="fas fa-shopping-cart"></i> Add to cart</button>
            </div>
        </div>
    `).join('');
}

// Generate star rating
function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<i class="fas fa-star filled"></i>';
        } else {
            stars += '<i class="fas fa-star"></i>';
        }
    }
    return stars;
}

// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    generateProducts();
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');
    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Product added to cart!');
        });
    });
    
    // Product add button functionality (overlay button)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.product-add-btn')) {
            e.preventDefault();
            alert('Product added to cart!');
        }
    });
    
    // Wishlist button functionality
    document.addEventListener('click', function(e) {
        const wishlistBtn = e.target.closest('.wishlist-btn');
        if (wishlistBtn) {
            e.preventDefault();
            const icon = wishlistBtn.querySelector('i');
            if (icon) {
                // Add to wishlist (toggle icon)
                if (icon.classList.contains('far')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    wishlistBtn.classList.add('active');
                    // Navigate to wishlist page after adding
                    window.location.href = 'wishlist.html';
                } else {
                    // If already in wishlist, just navigate
                    window.location.href = 'wishlist.html';
                }
            }
        }
    });
    
    // Sidebar offer button
    const offerButton = document.querySelector('.btn-offer');
    if (offerButton) {
        offerButton.addEventListener('click', function() {
            alert('Redirecting to special offers!');
        });
    }
    
    // Countdown timer
    const timerValues = document.querySelectorAll('.timer-value');
    let countdown = {
        days: 120,
        hours: 20,
        minutes: 36,
        seconds: 60
    };
    
    setInterval(function() {
        countdown.seconds--;
        if (countdown.seconds < 0) {
            countdown.seconds = 59;
            countdown.minutes--;
            if (countdown.minutes < 0) {
                countdown.minutes = 59;
                countdown.hours--;
                if (countdown.hours < 0) {
                    countdown.hours = 23;
                    countdown.days--;
                }
            }
        }
        
        if (timerValues[0]) timerValues[0].textContent = countdown.days;
        if (timerValues[1]) timerValues[1].textContent = countdown.hours;
        if (timerValues[2]) timerValues[2].textContent = countdown.minutes;
        if (timerValues[3]) timerValues[3].textContent = countdown.seconds;
    }, 1000);
});

// Mobile menu toggle (for responsive design)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
