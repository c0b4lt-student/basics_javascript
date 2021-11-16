const objet = prompt('Entrez le motif de la convocation');
const lastName = prompt('Entrez un nom');
const firstName = prompt('Entrez un prénom');
const gender = prompt('M ou Mme');
const dateAppointement = prompt('Entrez une date de convocation (dd/mm/yyyy)');
const place = prompt('Entrez un numéro de bureau');
const signature = 'Votre agent administratif';

let msg = `A ${lastName.toUpperCase()} ${firstName.toUpperCase()}

    Objet de la convocation: ${objet}

    ${gender.toUpperCase()} ${lastName} ${firstName}, vous êtes convoqué(e) le ${dateAppointement} dans le bureau ${place} pour le motif suivant: ${objet}
    
En vous remerciant.

Votre agent administratif`;
console.log(msg);
