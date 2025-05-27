
const delimitador=prompt("Ingrese una expresion para ver si esta equilibrada:");
function equilibrada(){
    const pilares={
        "{": "}",
        "(":")",
        "[":"]"
    }
    for (let i = 0; i < pilares.length; i++) {
        let caracter = delimitador[i];
        if (pilares[caracter]!== pilares[caracter]){
            alert("La expresion no esta equilibrada")
            return false;
        }else if (Object.values(pilares).includes(caracter)){
            if (pila.length ===0){
                return false;
            }else if (Object.keys(pilares).includes(caracter)){
                let ultimo = delimitadorindexOf(caracter);
                if (ultimo === -1){
                    alert("La expresion no esta equilibrada")
                    return false;
                }
                else if (pilares[ultimo]!== caracter){
                    alert("La expresion no esta equilibrada")
                    return false;
                }else if(pilares[1][-1]!== delimitador.has(caracter)){
                    alert("La expresion no esta equilibrada")
                    return false;
                    
                }else{
                    return true;
                }
            }
        }

    }

}