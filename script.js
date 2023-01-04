// Object & Class
// E' il concetto chiave di qualsiasi linguaggio di programmazione
// In JS è leggermente più flessibile
// Tutto ciò che parte da object sarà un tipo derivato ma il tipo di dato di fondo rimarrà object
// La classe è una sorta di stampino con cui definire le proprietà dell'oggetto




class Persona {                // Questa è una classe. In javascript abbiamo parecchia libertà per definire classi quindi utilizziamo la sintassi 'class Miaclasse', per comvenzione il nome di una classe inizia sempre per lettera maiuscola.
    nome;                      // Una classe definisce le proprietà e i metodi che avrà il mio oggetto che istanzierò da quella classe
    cognome;                   // Non è necessario definire le classi prima del costruttore, ma ATTENZIONE! SOLO IN JAVASCRIPT!
    eta;
    professione;
    constructor()       // Ogni classe, in qualsiasi linguaggio possiede impliciamente un costruttore vuoto
    constructor(nome,cognome,eta,professione){  // Il costruttore è lo stampino attraverso il quale descrivo le proprietà che avrà il mio oggetto
        this.nome = nome;
        this.cognome = cognome;                 // this. Si riferisce sempre all'ultima istanza.
        this.eta = eta;
        this.professione = professione;
    }

    get(){
        return this.nome;                       // I metodi get e set generalmente sono impliciti, ogni classe quindi per ogni sua proprietà possiede un metodo get e un metodo set
    }
    set(nomescelto){
        
       return this.nome = nomescelto
    }
}

let io =  new Persona ('giovanni','urso', 30,'developer');  // Questa è un'istanza della classe Persona, dopo aver ist
// Salvo l'intero oggetto in una variabile o in una costante, se uso const posso modificarne le proprietà


console.log(io.get())
console.log(io.set('rosario'))

let rosario = new Persona();
console.log(rosario);
rosario.nome = 'Rosario';       // Posso istanziare un oggetto senza descriverne le proprietà e poi implementarle successivamente, perchè ho sempre un costruttore inizialmente vuoto.
rosario.cognome = 'Messina';
rosario.eta = 34;
rosario.professione = 'Impiegato';
console.log(rosario);



class Studente {
    nome;
    cognome;
    scuola;
    indirizzo;

   constructor(nome,cognome,scuola,indirizzo){
    this.nome = nome;
    this.cognome = cognome;
    this.scuola = scuola;
    this.indirizzo = indirizzo;
   }


}

let paolo = new Studente ('paolo','rossi','bocconi', {via:'via dei matti',
                                                    cap:88541,
                                                    citta : 'torino'})

paolo.indirizzo.cap = 99844;
console.log(paolo);                                                    