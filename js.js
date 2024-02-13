let confirmation = confirm("Do you have an account?");

let prompt1, prompt2;

if (confirmation === true) {
    prompt1 = prompt("Your name");
    prompt2 = prompt("Your surname");
}
let qiymet = 0;
class mehsul {
    #alma = 5;
    #armud = 10;
    #heyva = 8;
    hesabla() {
        if (confirmation === true) {
            qiymet = (this.#alma * 2 + this.#armud * 3 + this.#heyva * 2.5) * 0.8;
            alert(`Xos geldiniz, ${prompt1} ${prompt2}! Qiymet: ${qiymet}`);
        } else {
            qiymet = this.#alma * 2 + this.#armud * 3 + this.#heyva * 2.5;
            console.log(qiymet);
            alert(`Xos geldiniz! Qiymet: ${qiymet}`);
        }
    }
}
class customer {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
let customer1;
if (confirmation === true) {
    customer1 = new customer(prompt1, prompt2);
} else {
    customer1 = new customer("Anonymous", "");
}
let mehsul1 = new mehsul();
mehsul1.hesabla();
