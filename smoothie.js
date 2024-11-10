// Smoothie Class
class Smoothie {
    constructor(size, base, fruits, extras, price) {
        this.size = size;
        this.base = base;
        this.fruits = fruits;
        this.extras = extras;
        this.price = price;
    }

    getDescription() {
        return `
            <p>You ordered a <strong>${this.size}</strong> smoothie with <strong>${this.base}</strong>, including 
            fruits: <strong>${this.fruits.join(", ") || "none"}</strong> and extras: 
            <strong>${this.extras.join(", ") || "none"}</strong>.</p>
            <p class="price">Total Price: $${this.price.toFixed(2)}</p>
        `;
    }
}

function orderSmoothie() {
    // Get size, base, fruits, and extras selections
    const size = document.getElementById("size").value;
    const base = document.getElementById("base").value;
    const fruits = Array.from(document.querySelectorAll("input[name='fruit']:checked")).map(fruit => fruit.value);
    const extras = Array.from(document.querySelectorAll("input[name='extra']:checked")).map(extra => extra.value);

    // Calculate price based on selections
    let price = 0;
    if (size === "small") price += 3.00;
    else if (size === "medium") price += 4.50;
    else if (size === "large") price += 5.50;
    
    price += fruits.length * 0.50;  // 50¢ per fruit
    price += extras.length * 1.00;  // $1.00 per extra

    // Create a new Smoothie object
    const smoothie = new Smoothie(size, base, fruits, extras, price);

    // Display the smoothie description and price on the page
    document.getElementById("orderSummary").innerHTML = smoothie.getDescription();
}
