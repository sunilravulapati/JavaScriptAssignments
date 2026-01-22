import { getProductById, checkStock } from './product.js';

let cartItems = [];

// Add item to cart
export function addToCart(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return "Product not available";

  if (!checkStock(productId, quantity)) {
    return "Insufficient stock";
  }

  const existingItem = cartItems.find(i => i.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }

  return "Item added to cart";
}

// Remove product from cart
export function removeFromCart(productId) {
  cartItems = cartItems.filter(i => i.productId !== productId);
  return "Item removed from cart";
}

// Update quantity
export function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity)) {
    return "Insufficient stock";
  }

  const item = cartItems.find(i => i.productId === productId);
  if (!item) {
    return "Item not found in cart";
  }

  item.quantity = newQuantity;
  return "Quantity updated";
}

// Return cart items with product details
export function getCartItems() {
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return { ...product, quantity: item.quantity };
  });
}

// Calculate cart total
export function getCartTotal() {
  return getCartItems().reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}

// Clear cart
export function clearCart() {
  cartItems = [];
}
