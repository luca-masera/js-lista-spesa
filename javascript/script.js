//MINESTONE1

let utenteProdotti = ''
let lista =[]




while(utenteProdotti !== 'stop') {
    utenteProdotti = prompt('Quanti prodotti vuoi acquistare?');   
        
    if(utenteProdotti !== 'stop' && utenteProdotti !== ''){
        lista.push(utenteProdotti);
    }
    
    console.log (utenteProdotti);
}

console.log (lista);


const listaEl = document.getElementById('richiesta')


for( i = 0; i < lista.length; i++ ){
    const listaUtenteEl = document.createElement ("li");
    listaUtenteEl.innerHTML = lista[i];
    
    listaEl.appendChild(listaUtenteEl);
}