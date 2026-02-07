let cart = {};

function addItem(name, price) {
  if (cart[name]) {
    cart[name].qty++;
  } else {
    cart[name] = { price, qty: 1 };
  }
  updateCart();
}

function removeItem(name) {
  cart[name].qty--;
  if (cart[name].qty <= 0) {
    delete cart[name];
  }
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const bill = document.getElementById("bill");

  cartItems.innerHTML = "";
  let subtotal = 0;

  for (let item in cart) {
    let total = cart[item].price * cart[item].qty;
    subtotal += total;

    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item} x ${cart[item].qty}</span>
        <button onclick="removeItem('${item}')">-</button>
      </div>
    `;
  }

  let gst = subtotal * 0.05;
  let finalAmount = subtotal + gst;

  bill.innerHTML = `
    Subtotal: ₹${subtotal}<br>
    GST (5%): ₹${gst.toFixed(2)}<br>
    <strong>Total: ₹${finalAmount.toFixed(2)}</strong>
  `;
}
