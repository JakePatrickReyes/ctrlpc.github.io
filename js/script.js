var total = 0;
var i = 1;
var itemCost = [];

// Add to cart
function add(n) {

    //alert when confirming order
    var confirmProd = confirm("Comfirm order?");

    if (confirmProd == false) {
        event.preventDefault();
    }
    else {

        //getting all Id of the selected product
        brand = "brand" + n;
        priceId = "price" + n;
        quantityId = "quantity" + n;
        //getting details of the selected shirt
        name = document.getElementById(brand).innerHTML;
        price = document.getElementById(priceId).innerHTML;
        quantity = document.getElementById(quantityId).value;

        //creating a li element to add it to ul 
        var node = document.createElement("LI");
        item = "item" + i;
        node.setAttribute("id", item)
        //cost of the selected product
        itemCost[i - 1] = Number(price) * Number(quantity);
        totItem = Number(price) * Number(quantity);
        i += 1;
        //create a list
        var textnode = document.createTextNode(name + " " + quantity + " x " + price + " = ₱ " + totItem + ".00");
        //add the text to li element
        node.appendChild(textnode);
        //add li element to ul
        document.getElementById("items").appendChild(node);
        total += Number(price) * Number(quantity);

        //update the total
        document.getElementById("total").innerHTML = "Total: " + " ₱ " + total + ".00";

        //add a remove button 
        document.getElementById(item).innerHTML += '<button onclick="deleItem(' + "'" + item + "'" + ')">x</button>';
        alert(name + " is added to your cart.")
    }
}


//remove a product from the cart
function deleItem(cartItem) {
    document.getElementById(cartItem).remove();
    n = Number(cartItem.slice(-1)) - 1;

    //remove the cost of the product deleted from the cart
    total -= itemCost[n];
    // updating the cost of products in the cart
    document.getElementById("total").innerHTML = "Total: " + " ₱ " + total + ".00";

}
//placeorder button onclick
document.getElementById("placeOrder").addEventListener("click",
    function () {
        //declaring variable that holds the id 
        var personName = document.querySelector("#personName").value;
        var street = document.querySelector("#street").value;
        var brgy = document.querySelector("#brgy").value;
        var town = document.querySelector("#town").value;
        var email = document.querySelector("#email").value;
        var contact = document.querySelector("#contact").value;
        var zip = document.querySelector("#zip").value;
        var method = document.querySelector("#method").value;
        var confirmOrder = confirm("Are you sure to place your order?");

        //condition for confirming the order 
        if (confirmOrder == false) {
            event.preventDefault();
        }
        else {
            //condition when textfield is null
            if (personName == "" || email == "" || contact == "" || street == "" || brgy == "" || town == "" || zip == "") {
                alert("Please complete the required field!")
            }
            else {
                //condition on mode of payment
                if (method == "gcash") {
                    prompt("Enter Gcash Number")
                    alert(" Successful! Total price is deducted on your Gcash Wallet.")
                    alert("Thank you " + personName + " for purchasing. Check inbox regularly to view the location and updates on your items.")
                    alert("It will be delivered to " + street + ", " + brgy + ", " + town + " as soon as possible. Thank you!")
                }
                else {
                    alert("Thank you " + personName + " for purchasing. Check inbox regularly to view the location and updates on your items.")
                    alert("It will be delivered to " + street + ", " + brgy + ", " + town + " as soon as possible. Please prepare payment on delivery date. Thank you!")
                }

            }
        }
    });
//checkout button onclick
function checkout() {
    //declaring confirmation variable that alert user
    var confirmAlert = confirm("Are you sure to checkout your order?");

    //condition on alert if user want to proceed or cancel
    if (confirmAlert == false) {
        event.preventDefault();
    }
    else {
        //condition if there are items in cart
        if (total == 0) {
            alert("You have no items in cart to check out!")
        }
        else {
            alert("The total price of the item/s is: ₱ " + total + ".00 . Fill up the form to complete.")
            location = "orderForm.html"
        }
    }
}
