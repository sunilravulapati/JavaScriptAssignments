import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// TODO: Implement these functions

export function processPayment(paymentMethod, couponCode = null) {
    // 1. Get cart items and total
    // 2. Apply discount if coupon provided
    // 3. Validate payment method (card/upi/cod)
    // 4. Process payment (simulate)
    // 5. Reduce stock for all items
    // 6. Clear cart
    // 7. Generate order summary

    // Return order summary:
    // {
    //   orderId: ...,
    //   items: [...],
    //   subtotal: ...,
    //   discount: ...,
    //   total: ...,
    //   paymentMethod: ...,
    //   status: 'success/failed',
    //   message: '...'
    // }
    if (!validatePaymentMethod(paymentMethod)) {
        return {
            status: "failed",
            message: "illegal payment mode"
        };
    }

    const items = getCartItems();
    if (items.length === 0) {
        return {
            status: "failed",
            message: "cart is empty"
        };
    }

    const subtotal = getCartTotal();

    let discount = 0;
    let total = subtotal;

    if (couponCode) {
        const discountedPrice = applyDiscount(subtotal, couponCode, items);
        discount = discountedPrice.discount;
        total = discountedPrice.finalTotal;
    }

    // Reduce stock
    items.forEach(item => {
        reduceStock(item.id, item.quantity);
    });

    clearCart();

    // Remove stock info from order items (BEST PRACTICE)
    const orderItems = items.map(({ stock, ...rest }) => rest);

    return {
        orderId: generateOrderId(),
        items: orderItems,
        subtotal,
        discount,
        total,
        paymentMethod,
        status: "success",
        message: "order placed"
    };
}
export function validatePaymentMethod(method) {
    // Check if method is valid (card/upi/cod)
    let modes = ['card', 'upi', 'cod']
    return modes.includes(method)
}

function generateOrderId() {
    // Generate random order ID
    return 'ORD' + Date.now();
}