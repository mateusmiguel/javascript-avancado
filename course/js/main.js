var list = [
    { "desc": "rice", "amount": "1", "value": "5.40" },
    { "desc": "beer", "amount": "12", "value": "1.99" },
    { "desc": "meat", "amount": "1", "value": "15.00" }
];

function getTotal(list) {
    var total = 0;
    for (var key in list) {
        total += list[key].value * list[key].amount;
    }

    // Equivalente:

    // for (i = 0; i < list.length; i++) { 
    //     total += list[i].value * list[i].amount;
    //     console.log(list[i]);
    // }

    return total;
}

function setList(list) {
    var table = '<thead><tr><th>Description</th><th>Amount</th><th>Value</th><th>Action</th></tr></thead><tbody>';
    for (var key in list) {
        table += '<tr><td>'+ list[key].desc +'</td><td>'+ list[key].amount +'</td><td>'+ list[key].value +'</td><td><a href="#">Edit</a> | <a href="#">Delete</a></td></tr>'
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}
setList(list);
console.log(getTotal(list));