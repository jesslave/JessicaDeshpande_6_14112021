import createImage from './createImage.js'
import createVideo from './createVideo.js'
import createCounter from './createCounter.js';
import createLightBox from './createLightBox.js';

export default class orderDropdownEvent {

    filter(data, idPhotographer) {
        //Get the select
        let selectElement = document.getElementById("filterSelect");

        //Media section content
        let mediaContent = document.getElementById("mediaContent");

        //Get the photographer name
        let photographerName = document.querySelector('.photographer-name').innerHTML;
        let medias = data.media.filter(x => x.photographerId == idPhotographer);

        selectElement.addEventListener("change", function() {
            mediaContent.innerHTML = "";

            // Using a different filter depending the selected one
            // Popularity : the most liked first, to reverse, reverse b.likes and a.likes
            if (selectElement.value == "popularite") {
                medias.sort(function(a, b) {
                    return parseFloat(b.likes) - parseFloat(a.likes);
                });
            }
            // Date : the most recent first, to reverse, reverse dateA and dateB
            else if (selectElement.value == "date") {
                medias.sort(function compare(a, b) {
                    var dateA = new Date(a.date);
                    var dateB = new Date(b.date);
                    return dateB - dateA;
                });
            }  

            // Title : alphabetic order
            else if (selectElement.value == "titre") {
                medias.sort(function compare( a, b ) {
                    if ( a.title < b.title ){
                      return -1;
                    }
                    if ( a.title > b.title ){
                      return 1;
                    }
                    return 0;
                });
            }  

            medias.forEach(media => {
                //Image creation
                if (media.image != null) {
                    new createImage().createImage(media, photographerName, mediaContent);
                }
                //Video Creation
                else if(media.video != null) {
                    new createVideo().createVideo(media, photographerName, mediaContent);
                }
                //Putting back like event
                new createCounter().addEventAddLike();
            })
            //Putting back lightbox events
            new createLightBox().addLightboxEvents();
        });

        

    }
}