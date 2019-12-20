
let planUno = document.querySelector('.plan1');
let planDos = document.querySelector('.plan2');
let planTres = document.querySelector('.plan3');
let planCuatro = document.querySelector('.plan4');

function plan1Seleccionado(){
    planUno.className = "seleccionado";
    planDos.className = "plan2";
    planTres.className = "plan3";
    planCuatro.className = "plan4";

}

function plan2Seleccionado(){
    planDos.className = "seleccionado";
    planUno.className = "plan1";
    planTres.className = "plan3";
    planCuatro.className = "plan4";
}

function plan3Seleccionado(){
    planTres.className = "seleccionado";
    planUno.className = "plan1";
    planDos.className = "plan2";
    planCuatro.className = "plan4";
}
function plan4Seleccionado(){
    planCuatro.className = "seleccionado";
    planUno.className = "plan1";
    planDos.className = "plan2";
    planTres.className = "plan3";
}
