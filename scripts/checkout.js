import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { cart } from "../data/cart.js";

renderOrderSummary();
renderPaymentSummary();

function updateCheckoutCount() {
  let totalQuantity = 0;

  cart.forEach((item) => {
    totalQuantity += item.quantity;
  });

  document.querySelector(".js-checkout-count").innerHTML =
    `${totalQuantity} items`;
}
updateCheckoutCount();
