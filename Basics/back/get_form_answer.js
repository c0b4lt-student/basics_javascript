const el = document.getElementById('register-form');
el.addEventListener('submit', (event) => {
  event.preventDefault();

  let civility = event.target.female.checked ? 'Mme' : 'Mr';
  let name = event.target.name.value;
  let category = event.target.category.value;
  let newsletter = event.target.newsletter.checked;

  console.log({civility, name, category, newsletter});
  // Les variables déclarées ci-dessus contiennent les données du formulaire
  let msg = `Bonjour ${civility} ${name}. ` +
  `${civility ? 'Merci de vous être abonné à notre newsletter' : 'Inscrivez-vous vite à notre newsletter'}, ` +
  `elle permettra de vous envoyer de délicieuses recettes de votre catégorie préférée : `;

  switch (category) {
    case 'cold-starter':
      msg += 'Entrée froide';
      break;
    case 'soup':
      msg += 'Soupe';
      break;
    case 'main-course':
      msg += 'Plat principale';
      break;
    case 'fruit-dessert':
      msg += 'Dessert fruité';
      break;
    case 'chocolate-dessert':
      msg += 'Dessert au chocolat';
      break;
    default:
      msg += 'Un peu de tout';
  } //Selectionne le message approprié en fonction de catégorie;
  alert(msg);
});
