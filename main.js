$(document).ready(function() {
    // slider
  $('.slider').slider();


    let count = {
        gBurger: 1,
        gCream: 1,
        gZaa: 1,
        gRibs: 1
    }

    let tbody = document.getElementById('tBod')
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdCount = document.createElement('td');
    let tdPrice = document.createElement('td')
    let subTots = document.getElementById('sTotal')
    // let subTotal = 0
    // let taxSum = (0 * 0.08)
    // let total = subTotal + tax

    function createItem(name, price) {
        if (count[name] === 1) {
            let tr = document.createElement('tr');
            let tdName = document.createElement('td');
            let tdCount = document.createElement('td');
            let tdPrice = document.createElement('td')
            tdCount.className = name + "Count"
            tdPrice.className = name + "Price"
            tdName.innerText = name;
            tdCount.innerText = count[name]
            tdPrice.innerText = '$' + price
            tr.appendChild(tdName)
            tr.appendChild(tdCount)
            tr.appendChild(tdPrice)
            tbody.appendChild(tr);

            // subtotal
            let subTots = document.getElementById('sTotal')
            let subNum = (Number(0) + Number(price))
            subTots.innerText = 'Subtotal = $' + subNum

            // tax
            let tax = (Number(0) + Number((price * 0.08).toFixed(2)))

            // add just the tax of the last item to a counter
            let tax1 = document.getElementById('taxy')
            tax1.innerText = 'Tax = $' + tax

            //   // total
            let realTots = document.getElementById('tTotal')
            let tots = (subNum += tax).toFixed(2)
            console.log(tots);
            realTots.innerText = 'Total = $' + tots


        } else {

            let Qty = document.getElementsByClassName(name+"Count")[0];
            Qty.innerText = count[name]
            // let Price = document.getElementsByClassName(name+"Price")[0];
            // console.log(Price);
            // Price.innerText = '$' + (price * count[name]).toFixed(2)
            let subTots = document.getElementById('sTotal')
            subTots.innerText = 'Subtotal = $' + (subTotal += price).toFixed(2)
            let subNum = (subTotal += price).toFixed(2)
            let tax = (subTotal * 0.08).toFixed(2)
            let tax1 = document.getElementById('taxy')
            tax1.innerText = 'Tax = $' + tax
            let realTots = document.getElementById('tTotal')
            realTots.innerText = 'Total = $' + (parseInt(subNum) + parseInt(tax)).toFixed(2)
        }

    }

    // burger click
    let burgerOrder = document.getElementById("burgerOrder")
    burgerOrder.addEventListener("click", function() {
        createItem("gBurger", 12.95);
        count['gBurger']++;
    })

    //  icecream click
    let iceOrder = document.getElementById("iceCreamOrder")
    iceOrder.addEventListener("click", function() {
        createItem("gCream", 3.95);
        count['gCream']++;
    })

    // pizza order
    let pizzaOrder = document.getElementById("pizzaOrder")
    pizzaOrder.addEventListener("click", function() {
        createItem("gZaa", 4.95);
        count['gZaa']++;
    })

    // ribs order
    let ribsOrder = document.getElementById("ribsOrder")
    ribsOrder.addEventListener("click", function() {
        createItem("gRibs", 14.95);
        count['gRibs']++;
    })




})
