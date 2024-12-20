import data from "./products.js";

const productList = document.querySelector("#product-list");

let productAmount = document.querySelector("#product-amount");
productAmount.textContent = data.products.length <= 1 ? `(${data.products.length} product)` : `(${data.products.length} products)`;

let totalPrice = 0;

data.products.forEach((product) => {

    const products = document.createElement("div");
    products.classList.add("product");

    // Supplier Box

    const supplierBox = document.createElement("div");
    supplierBox.classList.add("supplier-box");

    const supplierTitle = document.createElement("span");
    supplierTitle.classList.add("supplier-title");
    supplierTitle.textContent = `Supplier: ${product.supplier}`;

    const shippingStatus = document.createElement("span");
    shippingStatus.classList.add("shipping-status");
    shippingStatus.textContent = `${product.shippingStatus ? "shipping free" : "no shipping free"}`;
    
    supplierBox.appendChild(supplierTitle);
    supplierBox.appendChild(shippingStatus);

    // Product Details

    const productDetails = document.createElement("div");
    productDetails.classList.add("product-details");

    const productImgContainer = document.createElement("div");
    productImgContainer.classList.add("product-img");
    const productImg = document.createElement("img");
    productImg.src = `${product.productImage}`;
    productImg.height = "150";
    productImg.width = "150";
    productImgContainer.appendChild(productImg);

    const productTextContainer = document.createElement("div");
    productTextContainer.classList.add("product-texts");

    const productName = document.createElement("span");
    productName.classList.add("product-name");
    productName.textContent = `${product.productName}`;
    productTextContainer.appendChild(productName);

    const productDescription = document.createElement("div");
    productDescription.classList.add("product-description");
    productDescription.textContent = `${product.productDescription}`;
    productTextContainer.appendChild(productDescription);

    const hirePurchaseStatus = document.createElement("span");
    hirePurchaseStatus.classList.add("hire-purchase-status");
    hirePurchaseStatus.textContent = `${product.hirePurchaseStatus ? "Accepting installment payment" : "No installment payment"}`
    productTextContainer.appendChild(hirePurchaseStatus);

    productDetails.appendChild(productImgContainer);
    productDetails.appendChild(productTextContainer);

    // Product Operations

    const productOperations = document.createElement("div");
    productOperations.classList.add("product-operations");

    const productPurchasing = document.createElement("div");
    productPurchasing.classList.add("product-purchasing");
    const amountDecrementBtn = document.createElement("button");
    amountDecrementBtn.innerHTML = `<i class="fa-solid fa-minus"></i>`;

    let amountInput = document.createElement("input");
    amountInput.classList.add("product-amount");
    amountInput.value = 1;
    amountInput.disabled = true;

    const amountIncrementBtn = document.createElement("button");
    amountIncrementBtn.innerHTML = `<i class="fa-solid fa-plus"></i>`;

    productPurchasing.appendChild(amountDecrementBtn);
    productPurchasing.appendChild(amountInput);
    productPurchasing.appendChild(amountIncrementBtn);

    let productPrice = document.createElement("span");
    productPrice.classList.add("product-price");
    productPrice.textContent = `${product.productPrice} TL`;

    const productRemoveBtn = document.createElement("button");
    productRemoveBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    productOperations.appendChild(productPurchasing);
    productOperations.appendChild(productPrice);
    productOperations.appendChild(productRemoveBtn);


    // General Appending

    products.appendChild(supplierBox);
    products.appendChild(productDetails);
    products.appendChild(productOperations);

    productList.appendChild(products);


    // Functions

    productRemoveBtn.addEventListener("click", () => {
        productList.removeChild(products);
    });

    
    amountIncrementBtn.addEventListener("click", () => {
            ++amountInput.value;
            productPrice.textContent = `${product.productPrice * amountInput.value} TL`;
    });


    amountDecrementBtn.addEventListener("click", () => {
       if(amountInput.value > 1){
            --amountInput.value;
            productPrice.textContent = `${product.productPrice * amountInput.value} TL`;
       }
    });


    totalPrice = totalPrice + Number(product.productPrice);

});



const cartSummary = document.querySelector("#cart-summary span");
cartSummary.textContent = `Total Price: ${totalPrice} TL`;