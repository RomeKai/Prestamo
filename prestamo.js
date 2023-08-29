

    
    //CONFIRMS DE PRESTAMO

function confirmar()
{
const acpbtn = document.querySelector(".acept-btn")
const cancel = document.querySelector(".cancel-btn")

acpbtn.addEventListener("click", () => {
    confirm("Esta seguro que quiere confirmar este prestamo en BEEBANK")
});

cancel.addEventListener("click", () => {
    confirm("Esta seguro que quiere desechar este prestamo en BEEBANK")
});
}

//CALCULADORA DE INTERES
function loancalculator() {  
    // Obtiene los datos de los input y los convierte en float
    var valuep = Number(document.getElementById("loanamount").value);
    var interest = Number(document.getElementById("anualinterest").value) / 100;
    var timem = Number(document.getElementById("timeinmonths").value);

    // Valida que los valores sean numéricos y no estén en blanco
    if (isNaN(valuep) || isNaN(interest) || isNaN(timem)) {
        alert("Por favor, ingrese valores numéricos válidos en todos los campos.");
        return;
    }

    // El interés dividido por los 12 meses del año
    var monthlyinterest = interest / 12;

    // Calcula el pago mensual usando la fórmula correcta
    var monthlypay = (valuep * monthlyinterest * Math.pow(1 + monthlyinterest, timem)) / (Math.pow(1 + monthlyinterest, timem) - 1);

    // Calcula el pago total sumando el valor principal
    var totalpayment = monthlypay + valuep;

    // Mostrar en pantalla los resultados y redondearlos con toFixed
    document.getElementById("valuep").innerHTML = valuep.toFixed(2);
    document.getElementById("monthlypay").innerHTML = monthlypay.toFixed(2);
    document.getElementById("totalpayment").innerHTML = totalpayment.toFixed(2);
}








