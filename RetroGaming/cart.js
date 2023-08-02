"use strict";
// code writes out shopping cart table. Amy Onwudinanti 04/21/20

var cartHTML = "<table><thead><tr><th>Item Description</th><th>Price</th><th>Qty</th><th>Total</th>";
var subtotal = 0;

for (var i = 0; i < item.length; i++) {
  cartHTML += "<tr><td>" + item[i] + "</td>";
  cartHTML += "<td>$" + price[i] + "</td>";
  cartHTML += "<td>" + qty[i] + "</td>";

  var cost = price[i] * qty[i];

  cartHTML = cartHTML + "<td>$" + cost + "</td></tr>";
  subtotal += cost;
}

var serviceCharge = Math.round(subtotal) * .05;
var orderTotal =  subtotal + serviceCharge;
orderTotal.toFixed(2);

cartHTML += "</tbody><tfoot><tr><td colspan='3'>Subtotal<td><td>$" + subtotal + "</td></tr>";
cartHTML += "<tr><td colspan='3'>* Service Charge<td><td>$" + serviceCharge + "</td></tr>";
cartHTML += "<tr><td colspan='3'>Total<td><td>$" + orderTotal + "</td></tr></tfoot></table>";

document.getElementById("cart").innerHTML = cartHTML;

var now = new Date();
var shipDays = now.getDate() + 10;
now.setDate(shipDays);
document.getElementById("sdate").innerHTML = "* Orders placed today will be shipped by " + now.toDateString();
