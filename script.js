const products = [

    {
        id: 1,
        name: "Slim Fit Casual Shirt",
        brand: "Roadster",
        category: "men",
        price: 899,
        original: 1799,
        discount: 50,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
        description: "Comfortable slim-fit casual shirt suitable for everyday wear."
    },

    {
        id: 2,
        name: "Classic Denim Jacket",
        brand: "Urban Style",
        category: "men",
        price: 1499,
        original: 2999,
        discount: 50,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
        description: "Classic denim jacket with a modern casual fit."
    },

    {
        id: 3,
        name: "Floral Summer Dress",
        brand: "berry dress",
        category: "Women",
        price: 800,
        original: 2499,
        discount: 52,
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=80",
        description: "Beautiful floral dress perfect for summer outings."
    },

    {
        id: 4,
        name: "Women's Casual Outfit",
        brand: "Roadster",
        category: "women",
        price: 1399,
        original: 2799,
        discount: 50,
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80",
        description: "Trendy everyday outfit with a comfortable fit."
    },

    {
        id: 5,
        name: "Kids Casual Outfit",
        brand: "H&M Kids",
        category: "kids",
        price: 799,
        original: 1599,
        discount: 50,
        image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80",
        description: "Comfortable casual clothing for kids."
    },

    {
        id: 6,
        name: "Kids Fashion Set",
        brand: "Little Style",
        category: "kids",
        price: 999,
        original: 1999,
        discount: 50,
        image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80",
        description: "Stylish and comfortable kids fashion set."
    },

    {
        id: 7,
        name: "Beauty Essentials",
        brand: "Glow Beauty",
        category: "beauty",
        price: 599,
        original: 999,
        discount: 40,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80",
        description: "Everyday beauty essentials for your routine."
    },

    {
        id: 8,
        name: "Premium Sunglasses",
        brand: "Urban Vision",
        category: "men",
        price: 999,
        original: 1999,
        discount: 50,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
        description: "Modern sunglasses with a premium look."
    },

    {
        id: 9,
        name: "Women's Handbag",
        brand: "Lavie",
        category: "women",
        price: 1299,
        original: 2599,
        discount: 50,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
        description: "Elegant handbag suitable for work and casual outings."
    },

    {
        id: 10,
        name: "Running Shoes",
        brand: "Nike",
        category: "men",
        price: 2499,
        original: 4999,
        discount: 50,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
        description: "Lightweight running shoes designed for everyday comfort."
    }

];


let cart = [];


/* DISPLAY PRODUCTS */

function displayProducts(list) {

    const grid = document.getElementById("productGrid");

    grid.innerHTML = "";

    if (list.length === 0) {

        grid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:50px">
                <h2>No products found</h2>
                <p>Try another search.</p>
            </div>
        `;

        return;
    }


    list.forEach(product => {

        const card = document.createElement("div");

        card.className = "product";

        card.innerHTML = `

            <button class="wishlist"
                onclick="event.stopPropagation(); addWishlist(${product.id})">
                ♡
            </button>

            <img
                class="product-image"
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="product-info">

                <h3>${product.brand}</h3>

                <p>${product.name}</p>

                <span class="price">
                    ₹${product.price}
                </span>

                <span class="original">
                    ₹${product.original}
                </span>

                <span class="discount">
                    (${product.discount}% OFF)
                </span>

            </div>
        `;


        card.onclick = function () {
            showProduct(product.id);
        };


        grid.appendChild(card);

    });
}


/* CATEGORY FILTER */

function filterProducts(category) {

    if (category === "all") {

        displayProducts(products);

    } else {

        const filtered = products.filter(
            product => product.category === category
        );

        displayProducts(filtered);
    }

    window.scrollTo({
        top: document.querySelector(".products-section").offsetTop - 80,
        behavior: "smooth"
    });
}


/* SEARCH */

function searchProducts() {

    const search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const result = products.filter(product =>

        product.name.toLowerCase().includes(search) ||

        product.brand.toLowerCase().includes(search) ||

        product.category.toLowerCase().includes(search)

    );

    displayProducts(result);
}


/* SORT */

function sortProducts() {

    const value =
        document.getElementById("sortSelect").value;

    let sorted = [...products];


    if (value === "low") {

        sorted.sort((a, b) => a.price - b.price);

    }

    else if (value === "high") {

        sorted.sort((a, b) => b.price - a.price);

    }

    else if (value === "discount") {

        sorted.sort((a, b) => b.discount - a.discount);

    }

    displayProducts(sorted);
}


/* PRODUCT DETAILS */

function showProduct(id) {

    const product =
        products.find(p => p.id === id);

    document.getElementById("detailImage").src =
        product.image;

    document.getElementById("detailName").textContent =
        product.name;

    document.getElementById("detailBrand").textContent =
        product.brand;

    document.getElementById("detailPrice").textContent =
        `₹${product.price}`;

    document.getElementById("detailDescription").textContent =
        product.description;

    document.getElementById("detailAddButton").onclick =
        function () {
            addToCart(product.id);
            closeProduct();
        };

    document.getElementById("productModal").style.display =
        "flex";
}


function closeProduct() {

    document.getElementById("productModal").style.display =
        "none";
}


/* CART */

function addToCart(id) {

    const product =
        products.find(p => p.id === id);

    cart.push(product);

    updateCartCount();

    alert(`${product.name} added to bag`);
}


function updateCartCount() {

    document.getElementById("cartCount").textContent =
        cart.length;
}


function openCart() {

    const modal =
        document.getElementById("cartModal");

    modal.style.display = "flex";

    renderCart();
}


function closeCart() {

    document.getElementById("cartModal").style.display =
        "none";
}


function renderCart() {

    const container =
        document.getElementById("cartItems");

    container.innerHTML = "";

    let total = 0;


    if (cart.length === 0) {

        container.innerHTML = `
            <div style="text-align:center;padding:40px">
                <h3>Your bag is empty</h3>
                <p>Add something you like!</p>
            </div>
        `;

    }


    cart.forEach((product, index) => {

        total += product.price;

        container.innerHTML += `

            <div class="cart-item">

                <img src="${product.image}">

                <div class="cart-item-info">

                    <h3>${product.brand}</h3>

                    <p>${product.name}</p>

                    <strong>
                        ₹${product.price}
                    </strong>

                    <div
                        class="remove"
                        onclick="removeFromCart(${index})">
                        Remove
                    </div>

                </div>

            </div>
        `;

    });


    document.getElementById("cartTotal").textContent =
        `₹${total}`;
}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCartCount();

    renderCart();
}


/* WISHLIST */

function addWishlist(id) {

    const product =
        products.find(p => p.id === id);

    alert(`${product.name} added to wishlist ❤️`);
}


function showWishlist() {

    alert("Your wishlist will appear here.");
}


/* CHECKOUT */

function checkout() {

    if (cart.length === 0) {

        alert("Your bag is empty.");

        return;
    }

    alert(
        "Demo checkout successful! " +
        "Connect a payment gateway for real orders."
    );
}


/* INITIAL LOAD */

displayProducts(products);