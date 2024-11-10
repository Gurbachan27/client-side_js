function orderSmoothie() {
    const size = document.getElementById('size').value;
    const base = document.getElementById('base').value;

    // Get selected fruits and extras
    const selectedFruits = Array.from(document.querySelectorAll('input[name="fruit"]:checked'))
        .map(checkbox => checkbox.value);
    const selectedExtras = Array.from(document.querySelectorAll('input[name="extra"]:checked'))
        .map(checkbox => checkbox.value);

    // Define prices
    const sizePrices = {
        small: 3.00,
        medium: 4.50,
        large: 5.50
    };
    
    const fruitPrice = 0.50;
    const extraPrice = 1.00;

    let totalPrice = sizePrices[size];
    let fruitList = '';
    let extraList = '';

    selectedFruits.forEach(fruit => {
        fruitList += `<li>${fruit.charAt(0).toUpperCase() + fruit.slice(1)} ($${fruitPrice})</li>`;
        totalPrice += fruitPrice;
    });

    selectedExtras.forEach(extra => {
        extraList += `<li>${extra.charAt(0).toUpperCase() + extra.slice(1)} ($${extraPrice})</li>`;
        totalPrice += extraPrice;
    });

    // Build order summary
    const orderSummary = `
        <h3>Your Smoothie Order</h3>
        <p>Size: ${size.charAt(0).toUpperCase() + size.slice(1)} ($${sizePrices[size]})</p>
        <p>Base: ${base.charAt(0).toUpperCase() + base.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
        <p>Fruits: <ul>${fruitList}</ul></p>
        <p>Extras: <ul>${extraList}</ul></p>
        <p class="price">Total: $${totalPrice.toFixed(2)}</p>
    `;
    
    // Display order summary
    document.getElementById('orderSummary').innerHTML = orderSummary;
}
