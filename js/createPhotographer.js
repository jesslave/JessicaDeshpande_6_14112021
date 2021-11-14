export default class createPhotographer {

    createPhotographer(data) {
        //Get the main element where we will insert the profiles
        let elt = document.querySelector('.mainClass');

        //Getting the current tag in the url if there is one
        let currentTag = window.location.href.split('#')[1];

        //Foreach photographers in datas we create an article
        data.photographers.forEach(photographer => {

            let templateTags = "";
            let filteredArticle = false;
            //Foreach tags in photographers profile we create a span
            photographer.tags.forEach(tag => {
                //If the tag correspond to the current one, we filter it and we create the focused tag
                if (currentTag == tag) {
                    filteredArticle = true;
                    templateTags = templateTags + `<span class="tag photographer-tag-selected"><a class="tagLink" href="#${tag}">#${tag}</a></span>`
                    //Update the top tag to put the focused color
                    let topTag = document.getElementById(tag+"Tag");
                    topTag.classList.add("photographer-tag-selected");
                }
                //If not, normal tag added
                else {
                    templateTags = templateTags + `<span class="tag photographer-tag"><a class="tagLink" href="#${tag}">#${tag}</a></span>`
                }
            })

            //If there is no filter or if we got a filtered tag we create the article
            if (currentTag == null || filteredArticle) {
            let articleTemplate = `<article class="photographer-article">
                <a class="photographer-link" href="photographer.html?id=${photographer.id}" title="${photographer.name} profile">
                    <img class="photographer-img" src="../medias/PhotographersIDPhotos/${photographer.portrait}" alt="${photographer.name}" />
                    <h2>${photographer.name}</h2>
                    <p class="photographer-infos">
                    <span class="photographer-localisation">${photographer.city} ,  ${photographer.country}</span>
                    <span class="photographer-comment">${photographer.tagline}</span>
                    <span class="photographer-price">${photographer.price} €/jour</span>
                    </p>
                </a>`
                + templateTags 
                +`</article>`;

            //Insertion of the created article into the main
            elt.innerHTML = elt.innerHTML + articleTemplate;
            }
        })
    }

}