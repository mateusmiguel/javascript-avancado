var list = [
    {"desc":"rice","amount":"1", "value":"5.40"},
    {"desc":"beer","amount":"12", "value":"1.99"},
    {"desc":"meat","amount":"1", "value":"15.00"}
];

function getTotal (list) {
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

console.log (getTotal(list));