export default class createSelect {


    //Create the profil card
    createSelect() {

        //Get main balise
        let elt = document.getElementById('main');

        let templateSelect = `
            <div class="selection-container">
                <div class="select-text">Trier par</div>
                <select name="filter" id="filterSelect" class="select">
                    <option value="popularite">Popularité</option>
                    <option value="date">Date</option>
                    <option value="titre">Titre</option>
                </select>
            <div>
        `;

        //Insertion of the created article into the section
        elt.innerHTML = elt.innerHTML + templateSelect;
    }
}