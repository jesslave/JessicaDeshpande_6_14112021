import createImage from './createImage.js'
import createVideo from './createVideo.js'

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
                        <div class="contact-button-top"> Contactez moi </div>
                    </div>
                    <div>
                        <img class="photographer-img profile-pic" src="../medias/PhotographersIDPhotos/${photographer.portrait}" alt="${photographer.name}" />
                    </div>
                </section>`;

                    //Insertion of the created article into the main
                    elt.innerHTML = elt.innerHTML + templateCard;

                    //Create a media section
                    let mediaSection = document.createElement('section');
                    mediaSection.id = "mediaContent";
                    mediaSection.classList.add("media-content")

                    //Create the content inside the section
                    this.createPhotographerContent(data, idPhotographer, photographer.name, mediaSection);

                    //Add the section to the main balise
                    elt.appendChild(mediaSection);
            }

    }

    createPhotographerContent(data, idPhotographer, photographerName, mediaSection) {

        //We get the medias related to the photographer drom data
        let medias = data.media.filter(x => x.photographerId == idPhotographer);
        console.log(medias);
        medias.forEach(media => {
            //Image creation
            if (media.image != null) {
                new createImage().createImage(media, photographerName, mediaSection);
            }
            //Video Creation
            else if(media.video != null) {
                new createVideo().createVideo(media, photographerName, mediaSection);
            }
        })













        
    }
}