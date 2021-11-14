export default class createVideo {


    //Create the profil card
    createVideo(video, photographerName, mediaSection) {

        let templateVideo = `
        <article class="img-container" title="${video.title}">
            <video class="content-img" controls src="../medias/`+ photographerName +`/${video.video}" alt="${video.title}"></video>
            <div class="bottom">
                <div>${video.title}</div>
                <div>
                    <strong>${video.likes}</strong>
                    <i class="like empty-like far fa-heart"></i>
                </div>
            </div>
        </article>`;

        //Insertion of the created article into the section
        mediaSection.innerHTML = mediaSection.innerHTML + templateVideo;
    }
}