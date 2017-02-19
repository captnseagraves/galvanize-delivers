$(document).ready(function() {

    let count = {
        'gBurger': 0,
        'gCream': 0,
        'gPizza': 0,
        'gRibs': 0
    }

    let subtotal = 0
    let tax = 0
    let total = 0

    $('.card-action').click(function() {
        let itemName = $(event.target).parent().prev().children().first().html();
        let itemPrice = $(event.target).parent().prev().children().last().html();
        count[itemName]++

            // subtotal
            subtotal += (parseFloat(itemPrice.substring(1)))
        $('#sTotalAmount').text(subtotal.toFixed(2))

        // tax
        tax += (parseFloat(itemPrice.substring(1) * 0.08))
        $('#taxAmount').text(tax.toFixed(2))

        // total
        total += (parseFloat(itemPrice.substring(1)) + parseFloat(itemPrice.substring(1)) * 0.08)
        $('#tTotalAmount').text(total.toFixed(2))

        if (count[itemName] === 1) {
            let body = $('tbody')
            let row = $(`<tr><td class="left-align">${itemName}</td><td class="center ${itemName}">${count[itemName]}</td><td class="right-align">${itemPrice}</td></tr>`)
            $(body).append(row)
        } else {
            $(`.${itemName}`).text(count[itemName])
        }
    })

    $('#submitButton').click(function() {
        let addressText = $(event.target).parent().prev().find('#address').val()
        console.log(addressText);
        if (count['gBurger'] === 0 && count['gCream'] === 0 && count['gPizza'] === 0 && count['gRibs'] === 0) {
            console.log('here');
            Materialize.toast(`Please select an item.`, 4000);
        } else if (addressText.length === 0) {
            Materialize.toast(`Please complete the order form.`, 4000);
        } else {
            Materialize.toast(`Your order has been processed. It is being delivered to ${addressText}.`, 8000);
        }
    })




})
