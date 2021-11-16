createPage = () => {

  createBlocs = (blocs) => {
    const numberBlocks = Math.floor(Math.random() * 5) + 1
    for (let i = 0; i < numberBlocks; i++) {
      blocs.push({id: compteur, blocs: []})
      compteur++;
    }
  }

  const page = {blocs: []}
  let compteur = 1;
  createBlocs(page.blocs)
  page.blocs.forEach(bloc => {
    createBlocs(bloc.blocs)
    bloc.blocs.forEach(bloc => {
      createBlocs(bloc.blocs)
      bloc.blocs.forEach(bloc => {
        createBlocs(bloc.blocs)
      })
    })
  })
  return page
}
const page = createPage();
console.log(page)

let idArray = [];

function getBlocsId(my_page, idArray) {
  for (let i = 0; my_page.blocs[i]; i++) {
    idArray.push(my_page.blocs[i].id);
    getBlocsId(my_page.blocs[i], idArray);
  }
}

getBlocsId(page);

console.log(idArray);