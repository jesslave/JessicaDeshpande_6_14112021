export default class createVideo {


    //Create the profil card
    createVideo(video, photographerName, mediaSection) {

        let templateVideo = `
        <article class="img-container" title="${video.title}">
            <video class="content-img" controls />
                <source src="../medias/`+ photographerName +`/${video.video}" alt="${video.title}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="bottom">
                <div>${video.title}</div>
                <div class="like">
                    <strong>${video.likes}</strong>
                    <i class="far fa-heart"></i>
                </div>
            </div>
        </article>`;

        //Insertion of the created article into the section
        mediaSection.innerHTML = mediaSection.innerHTML + templateVideo;
    }
}