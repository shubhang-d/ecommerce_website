function closeSidebar(){
    document.getElementById("sidebarOverlay").style.visibility='hidden';
}

function openNav(){
    document.getElementById("sidebarOverlay").style.visibility='visible';
}

function scrolltoview(){
    const elem = document.getElementById("sec-1");
    elem.scrollIntoView({behavior: "smooth"});
}

function createCartElement(link, title, price){
    const cartProduct = document.createElement("div");
    cartProduct.classList="cart-product";
    const anotherCartDiv = document.createElement("div");
    anotherCartDiv.classList="another-cart-div";
    cartProduct.append(anotherCartDiv);
    const img = document.createElement("img");
    img.classList="cart-product-image";
    img.src=link;
    img.alt="chair";
    anotherCartDiv.append(img);
    const cartProductdesc = document.createElement("div");
    cartProductdesc.classList="cart-product-desc";
    anotherCartDiv.append(cartProductdesc);
    const cartProductTitle = document.createElement("p");
    cartProductTitle.classList="cart-product-title";
    cartProductTitle.innerText=title;
    cartProductdesc.append(cartProductTitle);
    const cartProductPrice = document.createElement("p");
    cartProductPrice.classList="cart-product-price";
    cartProductPrice.innerText=price;
    cartProductdesc.append(cartProductPrice);

    const cartProductsCards = document.querySelector(".cart-products-cards");
    cartProductsCards.append(cartProduct);

}