export default class createForm {

    createForm(photographerName, mainElement) {

        let formTemplate = `
            <div class="background-form">
                <form class="contact-form">
                    <div class="header-form">
                        <h1 class="title-form">Contactez-moi `+ photographerName +`</h1>
                        <div class="close-form">X</div>
                    </div>

                    <div class="form-data">
                        <label class="input-label" aria-label="First Name">Prénom</label><br>
                        <input class="text-control" type="text" id="first" name="first" minlength="2" /><br>
                        <label class="firstname-error">Veuillez entrer 2 caractères ou plus pour le champ du prénom</label>
                    </div>

                    <div class="form-data">
                        <label class="input-label" aria-label="Last name">Nom</label><br>
                        <input class="text-control" type="text" id="last" name="last" /><br>
                        <label class="name-error">Veuillez entrer 2 caractères ou plus pour le champ du nom</label>
                    </div>
                
                    <div class="form-data">
                        <label class="input-label" aria-label="Email">E-mail</label><br>
                        <input class="text-control" type="email" id="email" name="email" /><br>
                        <label class="email-error">Veuillez enter une adresse email valide</label>
                    </div>

                    <div class="form-data">
                        <label class="input-label" aria-label="Message">Votre message</label><br>
                        <textarea class="textarea-control" rows="5" id="msg" name="msg" /></textarea><br>
                        <label class="msg-error">Veuillez enter un message</label>
                    </div>

                    <input id="submit" class="send-form" type="submit" value=Envoyer />

                </form>
            </div>

        `;

        //Adding to the main the form
        mainElement.innerHTML = mainElement.innerHTML + formTemplate;
        
        this.callForm();
        this.applyFormEvents();


    }

    //Make the form appears and reset the values/errors
    callForm() {

        document.querySelectorAll('.create-form').forEach(item => {
            item.addEventListener('click', event => {
                
                this.resetForm();
                //Make the form visible
                document.querySelector('.background-form').style.display = "flex";
            })
        })
    }

    //Appy the close form event and the submit form event
    applyFormEvents() {

        //Inputs
        const firstNameInput = document.getElementById("first");
        const lastNameInput = document.getElementById("last");
        const emailNameInput = document.getElementById("email");
        const msgNameInput = document.getElementById("msg");

        //Errors
        const firstNameError = document.querySelector(".firstname-error");
        const nameError = document.querySelector(".name-error");
        const emailError = document.querySelector(".email-error");
        const msgError = document.querySelector(".msg-error");

        document.querySelector('.close-form').addEventListener('click', event => {
            event.target.parentElement.parentElement.parentElement.style.display = "none"
            this.resetForm();
            this.resetErrors();
        });

        document.querySelector('.send-form').addEventListener('click', event => {

            //Reset errors
            this.resetErrors();

            //Controls that fields are ok
            if (firstNameInput.value.length < 2) {
                firstNameError.style.display = "block";
                firstNameInput.style.borderColor = "red";
            }
            else if (lastNameInput.value.length < 2) {
                nameError.style.display = "block";
                lastNameInput.style.borderColor = "red";
            }
            else if (emailNameInput.value.length < 2) {
                emailError.style.display = "block";
                emailNameInput.style.borderColor = "red";
            }
            else if (msgNameInput.value < 2) {
                msgError.style.display = "block";
                msgNameInput.style.borderColor = "red";
            }
            //Send result to logs and hide form
            else {
            console.log("Prenom: " + firstNameInput.value + " Nom: " + lastNameInput.value + " Email: " + emailNameInput.value + " Message: " + msgNameInput.value );
            event.target.parentElement.parentElement.style.display = "none"

            }
            event.preventDefault(); 
        });
    }

    //Reset form
    resetForm() {
        //Inputs
        const firstNameInput = document.getElementById("first");
        const lastNameInput = document.getElementById("last");
        const emailNameInput = document.getElementById("email");
        const msgNameInput = document.getElementById("msg");
        
        //Reset values
        firstNameInput.value = "";
        lastNameInput.value = "";
        emailNameInput.value = "";
        msgNameInput.value = "";
    }

    //Reset form errors
    resetErrors() {
        //Inputs
        const firstNameInput = document.getElementById("first");
        const lastNameInput = document.getElementById("last");
        const emailNameInput = document.getElementById("email");
        const msgNameInput = document.getElementById("msg");

        //Errors
        const firstNameError = document.querySelector(".firstname-error");
        const nameError = document.querySelector(".name-error");
        const emailError = document.querySelector(".email-error");
        const msgError = document.querySelector(".msg-error");

        firstNameError.style.display = "none";
        firstNameInput.style.borderColor = "transparent";
        nameError.style.display = "none";
        lastNameInput.style.borderColor = "transparent";
        emailError.style.display = "none";
        emailNameInput.style.borderColor = "transparent";
        msgError.style.display = "none";
        msgNameInput.style.borderColor = "transparent";
      }
    
}