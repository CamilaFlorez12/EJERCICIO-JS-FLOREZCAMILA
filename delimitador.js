const delimitador={
    "{":"}",
    "[":"]",
    "(":")"
};
function menu(){
    return Number(prompt("Ingrese una opcion:\n1. Saber si la expresion esta equilibrada\n2. Salir"))
}
function identificaDelimitadores(){
    const pedir=prompt("Ingrese una expresion para saber si esta equilibrada:");
    const pares=[];
    for(let i=0; i< pedir.length;i++){
        const delimitante=pedir[i];
        if (delimitante ==="{"||delimitante==="["||delimitante==="("){
            pares.push(delimitante);
        }else if(delimitante ==="}"||delimitante==="]"||delimitante===")"){
            const ultimo= pares.pop();
            if(delimitador[ultimo] !== delimitante || ultimo===undefined){
                alert("La expresion no esta equilibrada");
                return;
            }
        }
        }
    if (pares.length===0){
        alert("La expresion esta equilibrada");
    } else{
        alert("La expresion no esta equilibrada");
    }
};
let opcion=menu();
while(opcion!==2){
    switch(opcion){
        case 1:
            identificaDelimitadores();
            break;
        case 2:
            alert("Saliendo del programa...");
            break;
        default:
            alert("Ingrese una opcion valida");
            break;
    }
    opcion=menu();
}