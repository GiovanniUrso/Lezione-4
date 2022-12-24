// Object & Class
// E' il concetto chiave di qualsiasi linguaggio di programmazione
// In JS è leggermente più flessibile
// Tutto cioè che parte da object sarà un tipo derivato ma il tipo di dato di fondo rimarrà object
// La classe è una sorta di stampino con cui definire le proprietà dell'oggetto


let automobile = {             // Questa è un'istanza della classe object, per definizione è un oggetto letterale, sono rari i casi in cui si utilizza un oggetto letterale.
    Marca : 'Fiat',            // In qualsiasi linguaggio di programmazaione è Best Practies 'Tipizzare' ogni oggetto
    Modello : 'Uno',           // In un oggetto ho delle proprietà e dei metodi
    Targa : 'CV834GT',         // Le proprietà le definisco con la sintassi chiave:valore, la chiave sarà semplicemente il nome di quella proprietà, il valore può essere di qualsiasi tipo. N.B. posso avere un valore di tipo obj, quindi un oggetto anidato dentro un altro oggetto!
    accensione(accesa){        // I metodi sono funzioni. Definiscono ciò che quell'oggetto è capace di fare. Si usa sempre una logica di base per scrivere metodi.
        if(accesa){
        return accesa;
        }else{
            alert('La Macchina è spenta!')
        }
    }
}




class Persona {                // Questa è una classe. In javascript abbiamo parecchia libertà per definire classi quindi utilizziamo la sintassi 'class Miaclasse', per comvenzione il nome di una classe inizia sempre per lettera maiuscola.
    nome;                      // Una classe definisce le proprietà e i metodi che avrà il mio oggetto che istanzierò da quella classe
    cognome;
    eta;
    professione;
    constructor(nome,cognome,eta,professione){  // Il costruttore è lo stampino attraverso il quale descrivo le proprietà che avrà il mio oggetto
        this.nome = nome;
        this.cognome = cognome;                 // this. Si riferisce sempre all'ultima istanza.
        this.eta = eta;
        this.professione = professione;
    }

    get(){
        return this.nome;                       // I metodi get e set generalmente sono impliciti, ogni classe possiede un metodo get e un metodo set
    }
    set(nomescelto){
        
       return this.nome = nomescelto
    }
}

let io = new Persona ('giovanni','urso', '30','developer');  // Questa è un'istanza della classe Persona, dopo aver istanziato un oggetto il tipo di quell'oggetto sarà la classe stessa.
console.log(io.get())
console.log(io.set('rosario'))

let rosario = new Persona();
console.log(rosario);
rosario.nome = 'Rosario';       // Posso istanziare un oggetto senza descriverne le proprietà e poi implementarle successivamente.
rosario.cognome = 'Messina';
rosario.eta = 34;
rosario.professione = 'Impiegato';
console.log(rosario);