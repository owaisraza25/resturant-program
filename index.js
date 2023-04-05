let items = prompt("Enter the item : 1) Pizza 2) burger 3) Karhai 4) biryani");

if (items == "pizza") {
    let flavour = prompt("select the flavour : 1) Tikka 2) Fajita 3) Spicy 4) B.B.Q");
    if (flavour == "tikka") {
        let size = prompt("Size of : 1) Small 2) Meduim 3) Large");
        if (size == "small") {
            let price = 500
            let quantity = prompt("How many samll tikka flavour pizzas do you want?")
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        } else if (size == "meduim") {
            let price = 700
            let quantity = prompt("How many meduim tikka flavour pizzas do you want?")
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        } else if (size == "large") {
            let price = 950
            let quantity = prompt("How many large tikka flavour pizzas do you want?")
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        } else {
            alert("Not Available")
        }

    } else if (flavour == "fajita") {
        let size = prompt("Size of : 1) Small 2) Meduim 3) Large");
        if (size == "small") {
            let price = 500
            let quantity = prompt("How many small fajita flavour pizzas do you want?")
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        } else if (size == "meduim") {
            let price = 700
            let quantity = prompt("How many meduim fajita flavour pizzas do you want?")
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        } else if (size == "large") {
            let price = 950
            let quantity = prompt("How many large fajita flavour pizzas do you want?")
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        }  else {
            alert("Not Available")
        }

    } else if (flavour == "spicy") {
        let size = prompt("Size of : 1) Small 2) Meduim 3) Large");
        if (size == "small") {
            let price = 500
            let quantity = prompt("How many small spicy flavour pizzas do you want?")
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        } else if (size == "meduim") {
            let price = 700
            let quantity = prompt("How many meduim spicy flavour pizzas do you want?")
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        } else if (size == "large") {
            let price = 950
            let quantity = prompt("How many large spicy flavour pizzas do you want?")
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        }  else {
            alert("Not Available")
        }


    } else if (flavour == "b.b.q") {
        let size = prompt("Size of : 1) Small 2) Meduim 3) Large");
        if (size == "small") {
            let price = 500
            let quantity = prompt("How many small b.b.q pizzas do you want?")
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        } else if (size == "meduim") {
            let price = 700
            let quantity = prompt("How many meduim  b.b.q pizzas do you want?")
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        } else if (size == "large") {
            let price = 950
            let quantity = prompt("How many large b.b.q pizzas do you want?")
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        } else {
            alert("Not Available")
        }

    } else {
        alert("Not Available")
    }

} else if (items == "burger") {
    let flavour = prompt("available in the : 1) Chicken 2) Beef 3) Zinger");
    if (flavour == "Chicken") {
        let size = prompt("Size of : 1) Regular 2) Jambo");
        if (size == "regular") {
            let price = 180
            let quantity = prompt("How many regular chicken burgers do you want?")
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        } else if (size == "jambo") {
            let price = 280
            let quantity = prompt("How many jambo chicken burgers do you want?")
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        }  else {
            alert("Not Available")
        }

    } else if (flavour == "beef") {
        let size = prompt("Size of : 1)Regular 2) Jambo");
        if (size == "regular") {
            let price = 200
            let quantity = prompt("How many regular beef burgers do you want?")
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        } else if (size == "jambo") {
            let price = 300
            let quantity = prompt("How many jambo beef burgers do you want?")
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        }  else {
            alert("Not Available")
        } 

    } else if (flavour == "zinger") {
        let size = prompt("Size of : 1)Regular 2) Jambo");
        if (size == "regular") {
            let price = 270
            let quantity = prompt("How many regular zinger burgers do you want?")
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        } else if (size == "jambo") {
            let price = 350
            let quantity = prompt("How many jambo zinger burger do you want?")
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        }  else {
            alert("Not Available")
        }

    } else {
        alert("Not Available")
    }

} else if (items == "karhai") {
    let type = prompt("kind of karhai : 1) Chicken karhai 2) Beef karhai");
    if (type == "chicken karhai") {
        let halfFull = prompt("Half, or Full karhai")
        if (halfFull == "half") {
            let quantity = prompt("how many Chicken Karhaies do you want")
            let price = 850
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        } else if (halfFull == "full") {
            let quantity = prompt("how many Chicken Karhaies do you want")
            let price = 1600
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")

        } else {
            alert("Not Available")
        }

    } else if (type == "beef karhai") {
        let halfFull = prompt("Half, or Full karhai")
        if (halfFull == "half") {
            let quantity = prompt("how many beef Karhaies do you want")
            let price = 900
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")
        } else if (halfFull == "full") {
            let quantity = prompt("how many beef Karhaies do you want")
            let price = 1700
            alert( " your payment is " + quantity * price + " rupees")
            alert("Thank you for order")

        } else {
            alert("Not Available")
        }

    } else {
        alert("Not Available")
    }



} else if (items == "biryani") {
    let type = prompt("kind of birynai : 1) Aalo 2) Chicken 3) Beef");
    if (type == "aalo") {
        let price = 120
        let quantity = prompt("How many Aalo biryanies do you want?")
        alert( " your payment is " + quantity * price + " rupees")
        alert("Thank you for order")
    } else if (type == "chicken") {
        let price = 160
        let quantity = prompt("How many Chicken biryanies do you want?")
        alert( " your payment is " + quantity * price + " rupees")
        alert("Thank you for order")
    } else if (type == "beef") {
        let price = 160
        let quantity = prompt("How many Beef biryanies do you want?")
        alert( " your payment is " + quantity * price + " rupees")
        alert("Thank you for order")
    } else {
        alert("Not Available")
    }

} else {
    alert("Not Available")
}