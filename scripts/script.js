let terminal = window.prompt("Veuillez choisir une commande parmis la liste ci-dessous : \n 1 - Afficher les films \n 2 - Ajouter \n 3 - Modifier \n 4 - Supprimer");

let ContentFilms = [];

class Films {
    constructor(Name, Type, disponible){

    this.Name = Name;
    this.Type = Type;
    //this.Date = Name
    this.disponible = disponible;
    }
}

console.log(ContentFilms);

switch (terminal) {
    //Display all films in Array ContentFilms if i enter '1' in Prompt.
    case '1':
      for (let i = 0; i < ContentFilms.length; i++) {
        console.log(ContentFilms[i]);
      }
      break;
      //Create a new Object with new propeties in Prompt
    case '2':
        let Film = new Films();
        //Check if Prompt is NOT empty
        if(terminal){
            //Fetch the value of prompt for add new features at Object
            let name = window.prompt("Ajouter un nom à votre film");
            Film.Name = name;
            if (terminal) {
                let type = window.prompt("Ajouter un Type à votre film");
                Film.Type = type;
                if (terminal) {
                    let Disponible = window.prompt("Ajouter un Disponibilité à votre film");
                    Film.disponible = Disponible;
                                  }
            }
        }
        ContentFilms.push(Film);
    case '3' || '1':
        let NewTerminal = window.prompt("Veuillez choisir une commande parmis la liste ci-dessous : \n 1 - Afficher les films \n 2 - Ajouter \n 3 - Modifier \n 4 - Supprimer");
        switch (NewTerminal) {
            case '1':
                for (const ContentFilm of ContentFilms) {
                    console.log(ContentFilm);
                }
                break;
        
            default:
                break;
        }
    default:
  }
  