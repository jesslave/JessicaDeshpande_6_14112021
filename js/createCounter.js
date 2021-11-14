export default class createCounter {


    //Create the profil card
    createCounter(counter, price, main) {

        let templateCounter = `
        <div class="like-counter">
            <div class="container">
                <div class="total-counter">`
                + counter + 
                `</div> 
                <i class="fas fa-heart"></i>
            </div>
            <div>`+ price +  `€ / jour </div>
        </div>`;

        //Insertion of the created article into the section
        main.innerHTML = main.innerHTML + templateCounter;
    }

    addEventAddLike() {

        //Getting element and value of total count
        document.querySelectorAll('.like').forEach(item => {
            item.addEventListener('click', event => {

                //To prevent the event triggering twice
                event.stopPropagation();

                //Get needed elements
                let currentLikeElement = event.target.parentNode.firstElementChild;
                let currentLikeElementValue = parseInt(currentLikeElement.innerHTML);
                let totalCountElement = document.querySelector('.total-counter');
                let totalCountValue = parseInt(totalCountElement.innerHTML);
                let classList = event.target.classList;

                //Change classes and incrasing likes depending the initial button values
                if (classList.contains('empty-like')) {
                    classList.replace('empty-like', 'filled-like');
                    classList.replace('far', 'fas');
                    totalCountValue += 1;
                    currentLikeElementValue +=1;
                }
                else {
                    classList.replace('filled-like', 'empty-like');
                    classList.replace('fas', 'far');
                    totalCountValue -= 1;
                    currentLikeElementValue -= 1;
                }

                totalCountElement.innerHTML = totalCountValue;
                currentLikeElement.innerHTML = currentLikeElementValue;


            })
        })

    }
    
}