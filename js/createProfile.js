import createImage from './createImage.js'
import createVideo from './createVideo.js'
import createCounter from './createCounter.js'
import createSelect from './createSelect.js';
import createForm from './createForm.js';
import createLightBox from './createLightBox.js';

export default class createProfile {


    //Create the profil card
    createProfileCard(data, idPhotographer) {

            //Get main balise
            let elt = document.getElementById('main');
            //We get photographer informations from data
            let photographer = data.photographers.find(x => x.id == idPhotographer);

            //If the id exist, we create the card
            if (photographer != null) {
                let templateTags = "";
                //Tags to create
                photographer.tags.forEach(tag => {
                    templateTags = templateTags + `<span class="tag photographer-tag"><a class="tagLink" href="index.html#${tag}">#${tag}</a></span>`
                })

                let templateCard = `
                <section class="profile-card" aria-label="Profile of the photographer">
                    <div class="photographer-profile-infos">
                        <h1 class="photographer-name">${photographer.name}</h1>
                        <span class="photographer-localisation localisation-title">${photographer.city} ,  ${photographer.country}</span>
                        <span class="photographer-comment profile-comment">${photographer.tagline}</span>
                        <nav class="profile-nav">`
                            + templateTags +
                    `   </nav>
                    </div>
                    <div class="contact">
                        <div class="create-form contact-button-top"> Contactez moi </div>
                    </div>
                    <div>
                        <img class="photographer-img profile-pic" src="medias/PhotographersIDPhotos/${photographer.portrait}" alt="${photographer.name}" />
                    </div>
                </section>`;

                    //Insertion of the created article into the main
                    elt.innerHTML = elt.innerHTML + templateCard;

                    //Insertion of the filter
                    new createSelect().createSelect();

                    //Create a media section
                    let mediaSection = document.createElement('section');
                    mediaSection.id = "mediaContent";
                    mediaSection.classList.add("media-content")

                    
                    //We get the medias related to the photographer drom data
                    let medias = data.media.filter(x => x.photographerId == idPhotographer);

                    //Filter by default => popularity
                    medias.sort(function(a, b) {
                        return parseFloat(b.likes) - parseFloat(a.likes);
                    });

                    //Create the content inside the section
                    this.createPhotographerContent(medias, photographer, mediaSection, elt);

                    //Add the section to the main balise
                    elt.appendChild(mediaSection);

                    //Add like and lightbox events
                    new createCounter().addEventAddLike();
                    new createLightBox().addLightboxEvents();

            }

    }

    createPhotographerContent(medias, photographer, mediaSection, mainElement) {            

        //Total like counter
        let counter = 0;
        medias.forEach(media => {
            //Image creation
            if (media.image != null) {
                counter += media.likes;
                new createImage().createImage(media, photographer.name, mediaSection);
            }
            //Video Creation
            else if(media.video != null) {
                counter += media.likes;
                new createVideo().createVideo(media, photographer.name, mediaSection);
            }
        })

        //Create the counter info bellow the page
        new createCounter().createCounter(counter, photographer.price, mainElement);
        //Create lightbox
        new createLightBox().createLightBox(mainElement);
        //Create the form
        new createForm().createForm(photographer.name, mainElement);

    }
}