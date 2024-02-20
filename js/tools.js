
function addToCart(productId, productName, productPrice, quantity) {
    // 获取当前购物车信息
    let cart = JSON.parse(getCookie('cart')) || [];

    // 检查购物车中是否已有相同商品，如果有则更新数量，否则添加新商品
    let existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
    existingProduct.quantity += quantity;
    } else {
    cart.push({ id: productId, name: productName, price: productPrice, quantity: quantity });
    }

    // 将购物车信息保存到Cookie中
    setCookie('cart', JSON.stringify(cart), 7);
    const res = JSON.parse(getCookie('cart')) || [];
     // 输出 cart Cookie 的值到控制台
    console.log('Cart Cookie:', res);
    alert('商品已添加到购物车！');
}

// 获取指定名称的Cookie
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
        return decodeURIComponent(cookieValue);
    }
    }
    return null;
}

// 设置Cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
}