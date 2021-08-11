/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {


  var tableRows = table.getElementsByTagName('tr');
  var rowCount = tableRows.length;

  for (var x = rowCount - 1; x > 0; x--) {
    table.removeChild(tableRows[x]);
  }

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let cartBody = document.getElementsByTagName('tbody')[0];


  // TODO: Iterate over the items in the cart
  for (let i = 0; i < Cart.length; i++) {
    let trElement = document.createElement('tr');
    trElement.setAttribute('id', i);
    cartBody.appendChild(trElement);


    let deleteLink = document.createElement('td');
    deleteLink.textContent = 'x';
    trElement.appendChild(deleteLink);

    let quantityEle = document.createElement('td');
    quantityEle.textContent = cart.items[i].quantity;
    trElement.appendChild(quantityEle);

console.log (cart.items)
    let itemNameEle = document.createElement('td');
    itemNameEle.textContent = cart.items[i].product;
    trElement.appendChild(itemNameEle);

  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {


  if (event.target.textContent === 'x') {
    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    cart.removeItem(event.target.trElement.id);
  }
  // TODO: Save the cart back to local storage
  localStorage.cart = JSON.stringify(cart.Items);
  // TODO: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
