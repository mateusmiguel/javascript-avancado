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
    document.getElementById("totalValue").innerHTML = formatValue(total);
}

function setList(list) {
    var table = '<thead><tr><th>Description</th><th>Amount</th><th>Value</th><th>Action</th></tr></thead><tbody>';
    for (var key in list) {
        table += '<tr><td>' + formatDesc(list[key].desc) + '</td><td>' + formatAmount(list[key].amount) + '</td><td>' + formatValue(list[key].value) + '</td><td><button onclick="setUpdate(' + key + ');" class="btn btn-default">Edit</button> <button onclick="deleteData(' + key + ');" class="btn btn-default">Delete</button></td></tr>'
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
    getTotal(list);
}

function formatDesc(desc) {
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatAmount(amount) {
    return parseInt(amount);

}

function formatValue(value) {
    var str = parseFloat(value).toFixed(2) + ""; //concatenar com valor vazio para voltar para string
    str = str.replace(".", ",");
    str = "R$ " + str;
    return str;

}

function addData() {
    if (!validation()) {
        return;
    }
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list.unshift({
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
    document.getElementById("value").value = obj.value;
    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";
    document.getElementById("inputIDUpdate").innerHTML = '<input id="idUpdate" type="hidden" value="' + id + '">';
}

function resetForm(id) {
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("value").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";
    document.getElementById("inputIDUpdate").innerHTML = "";
    document.getElementById("errors").style.display = "none";
}

function updateData() {
    if (!validation()) {
        return;
    }
    var id = document.getElementById("idUpdate").value;
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list[id] = { "desc": desc, "amount": amount, "value": value };
    resetForm();
    setList(list);

}

function deleteData(id) {
    if (confirm("Delete this item?")) {
        if (id === list.length - 1) {//seleciona o último regirsto
            list.pop(); //limpa o último registro da lista    
        } else if (id === 0) { // seleciona a primeiro
            list.shift(); //limpa o primeiro item de uma array
        } else {
            var arrAuxIni = list.slice(0, id); //pega do ínicio até o array
            var arrAuxEnd = list.slice(id + 1); // pega o valor depois id até o final do array         
            list = arrAuxIni.concat(arrAuxEnd); //concatena e junta as arrays
        }
        setList(list); //remonta a lista  
    }
}

function validation() {
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;
    var errors = "";
    document.getElementById("errors").style.display = "none";

    if (desc === "") {
        errors += '<p>Fill out description</p>';

    }
    if (amount === "") {
        errors += '<p>Fill out quantity</p>';

    } else if (amount != parseInt(amount)) {
        errors += '<p>Fill out a valid amount</p>';
    }
    if (value === "") {
        errors += '<p>Fill out value</p>';

    } else if (value != parseFloat(value)) {
        errors += '<p>Fill out a valid value</p>';
    }

    if (errors != "") {
        document.getElementById("errors").style.display = "block";
        document.getElementById("errors").style.backgroundColor = "#ddd";
        document.getElementById("errors").style.color = "#fff";
        document.getElementById("errors").style.padding = "10px";
        document.getElementById("errors").style.margin = "10px 0";
        document.getElementById("errors").style.borderRadius = "4px";
        document.getElementById("errors").innerHTML = "<h3>Error:</h3>" + errors;
        return 0; //
    } else {
        return 1;
    }
}
function deleteList() {
    if (confirm("Delete this list?")) {
        list = [];
        setList(list);
    }
}

setList(list);