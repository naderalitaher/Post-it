class Post_it {
    largeur;
    hauteur;
    departX;
    departY; 
    Couleurdefond;
    couleurtexte;
    texte;
    id;
    largeurZoneText;
    hauteurZoneText;
    contenu;

    constructor(departX, departY, largeur, hauteur, couleurfond, couleurtext, titre , id ) 
    // largeurZoneText, hauteurZoneText, contenu
    {

        this.departX = departX;
        this.departY = departY;
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.couleurfond = couleurfond;
        this.couleurtext = couleurtext;
        this.titre = titre;
        this.id = id;
        // this.largeurZoneText=largeurZoneText;
        // this.hauteurZoneText=hauteurZoneText;
        // this.contenu=contenu;
    
    }
    
    affichePost_it() {

        let monPost_it = document.getElementById('this.id')

        if(monPost_it===null){

            monPost_it = document.createElement('div')
            monPost_it.id ='this.id';
        }

        monPost_it.id = this.id
        monPost_it.style.width = this.largeur+'px'
        monPost_it.style.height = this.hauteur+'px'
        monPost_it.style.position = 'fixed'
        monPost_it.style.top = this.departY+'px'
        monPost_it.style.left = this.departX+'px'
        monPost_it.style.backgroundColor = this.Couleurdefond;
        document.getElementById('Post_it').appendChild(monPost_it);
    
        monPost_it.innerHTML = this.texte

           // Fonctions pour les deplacer les redimensionner et modifier le texte 

    let monTitre = document.createElement('h1')
    monTitre.style.color=this.couleurTexte;
    monTitre.style.fontSize=this.taille+'px';
    monTitre.innerHTML=this.titre
    monPost_it.appendChild(monTitre)


    let monText=document.createElement('textarea')
    monText.id='text';
    monText.style.width=this.largeurZoneText+'%';
    monText.style.height=this.hauteurZoneText+'%';
    monText.style.backgroundColor=this.couleurFond;
    monText.innerHTML = this.contenu;
    monPost_it.appendChild(monText)

    let divBoutton = document.createElement('div');
    divBoutton.className='divB'

    let monBoutonBouge=document.createElement('button')
    monBoutonBouge.className='bouton';
    let maValue = document.createElement('i')
    maValue.classList.add("fas")
    maValue.classList.add( "fa-arrows-alt")
    

    let monBoutonSupp=document.createElement('button')
    monBoutonSupp.className='bouton';
    let maValue1 = document.createElement('i')
    maValue1.classList.add("fas")
    maValue1.classList.add( "fa-trash-alt")
    

    let monBoutonRedimension=document.createElement('button')
    monBoutonRedimension.className='bouton';
    let maValue2 = document.createElement('i')
    maValue2.classList.add("fas")
    maValue2.classList.add("fa-expand-arrows-alt")
    
    


    let monBoutonEdition=document.createElement('button')
    monBoutonEdition.className='bouton';
    let maValue3 = document.createElement('i')
    maValue3.classList.add("fas")
    maValue3.classList.add("fa-edit")
    


    monBoutonBouge.appendChild(maValue)
    monBoutonSupp.appendChild(maValue1)
    monBoutonRedimension.appendChild(maValue2)
    monBoutonEdition.appendChild(maValue3)



    divBoutton.appendChild(monBoutonBouge)
    divBoutton.appendChild(monBoutonSupp)
    divBoutton.appendChild(monBoutonRedimension)
    divBoutton.appendChild(monBoutonEdition)
    


    monPost_it.appendChild(divBoutton)
    

    document.getElementById('monPost_it').appendChild(Post_it)

    }
 

    
  

    deplacePost_it(newX, newY) {
        this.departX = newX
        this.departY = newY
     }

    ecrirePost_it(nouveautexte){
        this.texte = nouveautexte
     }

    redimentionnePost_it(largeur, hauteur){
        this.largeur = largeur
        this.hauteur = hauteur
        }
 

    }
        // fonction createPost_it() { 
      
        //     let monPost_it = new Post_it(100,100,180,180,'yellow','white','Annotation importante', 'List to do')
        //     monPost_it.creatPost_it()
        // }
  



    
// let mouse_down = false;

// function on_mouse_down_square(event1,event2,event3) {
//  mouse_down=true;
// }

// function on_mouse_up(event1,event2,event3){
//  mouse_down=false;
// }

// document.onmousemove = on_mouse_move;

// document.onmouseup = on_mouse_up;

// function on_mouse_move(event1,event2,event3) {
//   if (mouse_down === true) {
//     document.querySelector('#option').style.left = event.clientX-50+'px';
//     document.querySelector('#option').style.top = event.clientY-50+'px';
    
//   }
// }



let monPost_it = new Post_it (50, 50, 180, 180, 'orange', 'black', 120,  'Hello', 90,50,'Notes')
monPost_it.affichePost_it()
monPost_it.deplacePost_it(500, 180)
monPost_it.affichePost_it()
monPost_it.redimentionnePost_it(400, 400)
monPost_it.affichePost_it()
monPost_it.ecrirePost_it(monPostit.contenu + '- Annotation importante-')
monPost_it.affichePost_it()
// 500, 500,'pink', 'black', 120, 150


window.addEventListener

// let monPost_it2 = new Post_it (50,280,180,180,'red', 'green', 'Hello', '', 90,50,'Notes')
// monPost_it.ecrirePost_it("Annotation importante")
// monPost_it2.affichePost_it()

// let monPost_it3 = new Post_it (50,50,'grey', 'red', 80,90, 'hello', 90,50,'Notes')
// monPost_it.ecrirePost_it("Annotation importante")
// monPost_it3.affichePost_it()


// technique simple 

// click / monPost_it  -> bouge=vrai

// document.body.addEventListener("mousemove", (e)) =>{
//    let pos X = e.clientX
//    let pos Y = e.clientY
//    monPost_it.deplacePost_it(posX, posY)
//    Post_it.affichePost_it;
// }
        



