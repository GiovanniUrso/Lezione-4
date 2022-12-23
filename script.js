// Object & Class
// E' il concetto chiave di qualsiasi linguaggio di programmazione
// In JS è leggermente più flessibile
// Tutto cioè che parte da object sarà un tipo derivato ma il tipo di dato di fondo rimarrà object
// La classe è una sorta di stampino con cui definire le proprietà dell'oggetto


let automobile = {
    Marca : 'Fiat',
    Modello : 'Uno',
    Targa : 'CV834GT',
    accensione(accesa){
        if(accesa){
        return accesa;
        }else{
            alert('La Macchina è spenta!')
        }
    }
}




class Persona {
    nome;
    cognome;
    eta;
    professione;
    constructor(nome,cognome,eta,professione){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.professione = professione;
    }

    get(){
        return this.nome;
    }
    set(nomescelto){
        
       return this.nome = nomescelto
    }
}

let io = new Persona ('giovanni','urso', '30','developer');
console.log(io.get())
console.log(io.set('rosario'))

let rosario = new Persona();
console.log(rosario);
rosario.nome = 'Rosario';
rosario.cognome = 'Messina';
rosario.eta = 34;
rosario.professione = 'Impiegato';
console.log(rosario);