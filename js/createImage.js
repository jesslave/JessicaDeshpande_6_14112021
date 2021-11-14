export default class createImage {


    //Create the profil card
    createImage(image, photographerName, mediaSection) {

        let templateImage = `
        <article class="img-container" title="${image.title}">
            <img class="content-img" src="../medias/`+ photographerName +`/${image.image}" alt="${image.title}" />
            <div class="bottom">
                <div>${image.title}</div>
                <div class="like">
                    <strong>${image.likes}</strong>
                    <i class="far fa-heart"></i>
                </div>
            </div>
        </article>`;

        //Insertion of the created article into the section
        mediaSection.innerHTML = mediaSection.innerHTML + templateImage;
    }
}