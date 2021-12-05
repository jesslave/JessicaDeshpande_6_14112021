export default class createLightBox {

    createLightBox(mainElement) {

        //light box template
        let lightboxTemplate = `
        <div class="background-form-lightbox">
            <div class="lightbox">
                <div class="left-div">
                    <i class="fas fa-chevron-left fa-2x"></i>
                </div>

                <div class="lightbox-img-container">
                    <img class="lightbox-img" src=""></img>
                    <video class="lightbox-video" src="" controls></video>
                    <span class="lightbox-title"><span>
                </div>

                <div class="right-div">
                    <div class="close-lightbox">X</div>
                    <i class="fas fa-chevron-right fa-2x"></i>
                </div>

            </div>
        </div>

    `;

        //Adding to the main the form
        mainElement.innerHTML = mainElement.innerHTML + lightboxTemplate;

    }

    addLightboxEvents() {
        let lightboxElement = document.querySelector(".background-form-lightbox");
        //Getting media containers
        document.querySelectorAll('.content-img').forEach(item => {
            item.addEventListener('click', event => {
                let target = event.target;
                this.fillLightBox(target);

            })
        })

        //Trigger next lightbox element event
        document.querySelector('.fa-chevron-right').addEventListener('click', eventLightbox => {
            this.getNextEvent();
        });

        //Trigger previous lightbox element event
        document.querySelector('.fa-chevron-left').addEventListener('click', eventLightbox => {
            this.getPreviousEvent();
        });

        //Add shortcut arrow left and right to change element and escape to close the lightbox
        document.addEventListener('keydown', event => {

            if (lightboxElement.style.display == "flex") {
                if (event.key == 'ArrowRight') {
                    this.getNextEvent();
                }
                if (event.key == 'ArrowLeft') {
                    this.getPreviousEvent();
                }
                if (event.key == 'Escape') {
                    lightboxElement.style.display = "none"
                }
            }
        });

        //Close event
        document.querySelector('.close-lightbox').addEventListener('click', event => {

            if (lightboxElement.style.display == "flex") {
                lightboxElement.style.display = "none"
            }
        });
    }

     //Fill the lightbox with data from current event
    fillLightBox(event) {

        //Global Elements needed
        let lightBoxElement = document.querySelector(".background-form-lightbox");
        let imgContainer = document.querySelector(".lightbox-img");
        let videoContainer = document.querySelector(".lightbox-video");
        let imgTitle = document.querySelector(".lightbox-title");
        let currentId = document.querySelector(".hiddenId");
        //Get the media type
        let fileExtension = event.src.split('.').pop();

        //If it's an image the img container appears and video container dissapears
        if (fileExtension == "jpg") {
            imgContainer.src =  event.src;
            imgContainer.alt =  event.parentElement.children[1].children[0].innerText;
            videoContainer.style.display = "none";
            imgContainer.style.display = "block";

        }
        //If it's an video the video container appears and img container dissapears
        else if (fileExtension == "mp4")
        {
            videoContainer.src =  event.src;
            videoContainer.alt =  event.parentElement.children[1].children[0].innerText;
            imgContainer.style.display = "none";
            videoContainer.style.display = "block";
        }

        currentId.innerHTML = event.parentElement.id;

        //Put title
        imgTitle.innerHTML = event.parentElement.children[1].children[0].innerText;
        //Make the lightbox visible
        lightBoxElement.style.display = "flex"

    }

    getNextEvent() {
        let idOfCurrentElement = document.querySelector(".hiddenId").innerHTML;
        let currentElement = document.getElementById(idOfCurrentElement);
        let nextElement = currentElement.nextElementSibling;
        this.fillLightBox(nextElement.children[0])
    }

    getPreviousEvent() {
        let idOfCurrentElement = document.querySelector(".hiddenId").innerHTML;
        let currentElement = document.getElementById(idOfCurrentElement);
        let previousElement = currentElement.previousElementSibling;
        this.fillLightBox(previousElement.children[0])
    }

}