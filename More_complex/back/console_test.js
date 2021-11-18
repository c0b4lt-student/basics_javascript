let uname = prompt('Quel est votre id ?');
is_confirmed = confirm('Votre id est bien ' + uname + ' ?');
if (is_confirmed) {
  alert(`Connexion de ${uname}`)
}
else {
  alert(`Deconnexion de ${uname}`)
}
console.log(uname);