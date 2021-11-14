export default class createProfile {


    //Create the profil card
    createProfileCard(data, idPhotographer) {

            //Get main balise
            let elt = document.getElementById('main');
            let photographer = data.photographers.find(x => x.id == idPhotographer);

            //If the id exist, we create the card
            if (photographer != null) {
                let templateTags = "";
                //Tags to create
                photographer.tags.forEach(tag => {
                    templateTags = templateTags + `<span class="tag photographer-tag"><a class="tagLink" href="index.html#${tag}">#${tag}</a></span>`
                })

                let templateCard = `
                <section class="profileCard" aria-label="Profile of the photographer">
                    <div class="photographer-profile-infos">
                        <h1 class="photographer-name">${photographer.name}</h1>
                        <span class="photographer-localisation localisation-title">${photographer.city} ,  ${photographer.country}</span>
                        <span class="photographer-comment profile-comment">${photographer.tagline}</span>
                        <nav class="profile-nav">`
                            + templateTags +
                    `   </nav>
                    </div>
                    <div>
                        <div class="contact-button-top"> Contactez moi </div>
                    </div>
                    <div>
                        <img class="photographer-img profile-pic" src="../medias/PhotographersIDPhotos/${photographer.portrait}" alt="${photographer.name}" />
                    </div>
                </section>`;

                    //Insertion of the created article into the main
                    elt.innerHTML = elt.innerHTML + templateCard;

                    this.createPhotographerContent(data, idPhotographer);
            }

    }

    createPhotographerContent(data, idPhotographer) {
        //Get main balise
        let elt = document.getElementById('main');
        let medias = data.media.find(x => x.id == idPhotographer);


        
    }
}