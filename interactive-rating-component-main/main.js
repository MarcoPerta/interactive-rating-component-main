
var app = new Vue(
    {
        el: '#app',
        data: {
            variable: false,
            value1: document.getElementById('option1').value,
            value2: document.getElementById('option2').value,
            value3: document.getElementById('option3').value,
            value4: document.getElementById('option4').value,
            value5: document.getElementById('option5').value,
            selectedValue: null, // variabile per memorizzare valore
        },

        methods: {

            submitForm() {
                // Qui gestisci l'invio del form e la visualizzazione dei risultati
                this.variable = true; // imposto la variabile a true per nascondere il div degli input
            },



            // FUNZIONI PER SALVATAGGIO VOTO
            vote: function (value) {

                if (value === true) {
                    return value;
                };
                console.log(value);
                this.selectedValue = value; // memorizzo il valore selezionato nella variabile selectedValue

                // disabilito gli input non selezionati 
                // const inputs = document.querySelectorAll('.btns input[type="radio"]');
                // inputs.forEach(input => {
                //     if (input.value !== value) {
                //         input.disabled = true;
                //     }
                // });
                // tengo questo pezzo di codice perchè potrebbe essere molto utile in altre occasioni
            },
        }
    }
);

