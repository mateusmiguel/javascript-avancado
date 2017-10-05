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
    table += '<tr><td>'+ formatDesc(list[key].desc) +'</td><td>'+ list[key].amount +'</td><td>'+ formatValue(list[key].value) +'</td><td><button onclick="setUpdate('+key+');" class="btn btn-default">Edit</button> <button class="btn btn-default">Delete</button></td></tr>'
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}

function formatDesc(desc) {
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatValue(value) {
    var str = parseFloat(value).toFixed(2) + ""; //concatenar com valor vazio para voltar para string
    str = str.replace(".", ",");
    str = "R$ " + str;
    return str;

}

function addData () {
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list.unshift ({
        "desc": desc,
        "amount": amount,
        "value": value
    });
    //renderiza de novo e recarrega com a inserção
    setList(list);
}

function setUpdate(id) {
    var obj = list[id];
    document.getElementById("desc").value = obj.desc;
    document.getElementById("amount").value = obj.amount;
    document.getElementById("value").value = obj.desc;
    document.getElementById("btnUpdate").style.display = "inline-block";  
    document.getElementById("btnAdd").style.display = "none";  
}

function resetForm(id) {
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("value").value = "";
    document.getElementById("btnUpdate").style.display = "none";  
    document.getElementById("btnAdd").style.display = "inline-block";  
}

setList(list);
console.log(getTotal(list));