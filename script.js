class Smoothie {
    constructor(size, base, fruits, extras) {
        this.size = size;
        this.base = base;
        this.fruits = fruits;
        this.extras = extras;

        // Define prices for different options
        this.sizePrices = { small: 3.00, medium: 4.50, large: 5.50 };
        this.fruitPrice = 0.50;
        this.extraPrice = 1.00;
    }

    calculateTotal() {
        let total = this.sizePrices[this.size];
        total += this.fruits.length * this.fruitPrice;
        total += this.extras.length * this.extraPrice;
        return total;
    }

    getSummary() {
        const fruitList = this.fruits.map(fruit => `<li>${this.capitalize(fruit)} ($${this.fruitPrice})</li>`).join('');
        const extraList = this.extras.map(extra => `<li>${this.capitalize(extra)} ($${this.extraPrice})</li>`).join('');

        return `
            <h3>Your Smoothie Order</h3>
            <p>Size: ${this.capitalize(this.size)} ($${this.sizePrices[this.size]})</p>
            <p>Base: ${this.capitalize(this.base.replace(/-/g, ' '))}</p>
            <p>Fruits: <ul>${fruitList || '<li>No fruits selected</li>'}</ul></p>
            <p>Extras: <ul>${extraList || '<li>No extras selected</li>'}</ul></p>
            <p class="price">Total: $${this.calculateTotal().toFixed(2)}</p>
        `;
    }

    capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}

// Function to handle smoothie order creation
function orderSmoothie() {
    // Gather values from form inputs
    const size = document.getElementById('size').value;
    const base = document.getElementById('base').value;
    const selectedFruits = Array.from(document.querySelectorAll('input[name="fruit"]:checked')).map(checkbox => checkbox.value);
    const selectedExtras = Array.from(document.querySelectorAll('input[name="extra"]:checked')).map(checkbox => checkbox.value);

    // Create a new Smoothie instance
    const smoothie = new Smoothie(size, base, selectedFruits, selectedExtras);

    // Display the order summary in the HTML
    document.getElementById('orderSummary').innerHTML = smoothie.getSummary();
}
