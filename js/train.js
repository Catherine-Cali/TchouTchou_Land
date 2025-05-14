/************************************************************/
/**
 * Université Sorbonne Paris Nord, Programmation Web
 * Auteurs                       : Arthur BASSETTE/CHANCEREUL - Catherine Sidar CALI 
 * Création                      : 2024/06/02
 * Dernière modification         : 2024/06/16
 */
/************************************************************/

'use strict'

/************************************************************/
/* Constantes */
/************************************************************/

/*------------------------------------------------------------*/
// Dimensions du plateau
/*------------------------------------------------------------*/

// Nombre de cases par défaut du simulateur
const LARGEUR_PLATEAU	= 45;
const HAUTEUR_PLATEAU	= 24;

// Dimensions des cases par défaut en pixels
const LARGEUR_CASE	= 35;
const HAUTEUR_CASE	= 40;

/*------------------------------------------------------------*/
// Tableau des id des boutons
/*------------------------------------------------------------*/

const idBoutons = [
    "bouton_foret",
    "bouton_eau",
    "bouton_rail_horizontal",
    "bouton_rail_vertical",
    "bouton_rail_droite_vers_haut",
    "bouton_rail_haut_vers_droite",
    "bouton_rail_droite_vers_bas",
    "bouton_rail_bas_vers_droite",
	"bouton_selec_aiguillage",
	"banc",
	"lampadaire",
	"gare",
	"ferme",
	"foin",
	"vache", 
	"bouton_train_1",
	"bouton_train_2",
	"bouton_train_4",
	"bouton_train_6"
]

/*------------------------------------------------------------*/
// Types des cases
/*------------------------------------------------------------*/
class Type_de_case{
	static herbe1					= new Type_de_case('herbe1');
	static herbe2					= new Type_de_case('herbe2');
	static herbe3					= new Type_de_case('herbe3');

	// Gare
	static gare1					= new Type_de_case('gare1');
	static gare2					= new Type_de_case('gare2');
	static gare3					= new Type_de_case('gare3');
	static gare4					= new Type_de_case('gare4');
	static gare5					= new Type_de_case('gare5');
	static gare6					= new Type_de_case('gare6');
	static gare7					= new Type_de_case('gare7');
	static gare8					= new Type_de_case('gare8');
	static gare9					= new Type_de_case('gare9');
	static gare10					= new Type_de_case('gare10');
	static gare11					= new Type_de_case('gare11');
	static gare12					= new Type_de_case('gare12');

	// Ferme

	static ferme1 = new Type_de_case('ferme1');
	static ferme2 = new Type_de_case('ferme2');
	static ferme3 = new Type_de_case('ferme3');
	static ferme4 = new Type_de_case('ferme4');
	static ferme5 = new Type_de_case('ferme5');
	static ferme6 = new Type_de_case('ferme6');
	static ferme7 = new Type_de_case('ferme7');
	static ferme8 = new Type_de_case('ferme8');
	static ferme9 = new Type_de_case('ferme9');
	static ferme10 = new Type_de_case('ferme10');
	static ferme11 = new Type_de_case('ferme11');
	static ferme12 = new Type_de_case('ferme12');



	static Eau						= new Type_de_case('eau');

	static Ile						= new Type_de_case('ile');

	static Nenuphar					= new Type_de_case('nenuphar');
	static pierreEau					= new Type_de_case('pierreEau');

	static Fleur					= new Type_de_case('fleur');

	static Fleur2					= new Type_de_case('fleur2');

	static Plateforme					= new Type_de_case('plateforme');

	static Lampadaire1					= new Type_de_case('lampadaire1');
	static Lampadaire2					= new Type_de_case('lampadaire2');
	static banc1					= new Type_de_case('banc1');
	static banc2					= new Type_de_case('banc2');

	static foin1					= new Type_de_case('foin1');
	static foin2					= new Type_de_case('foin2');

	static barriere					= new Type_de_case('barriere');
	static barriere2					= new Type_de_case('barriere2');

	static Vache						= new Type_de_case('vache');


	static Rail_horizontal			= new Type_de_case('rail horizontal');

	static Rail_vertical			= new Type_de_case('rail vertical');

	// NOTE: faisant la jonction de horizontal à vertical en allant vers la droite puis vers le haut (ou de vertical vers horizontal en allant de bas vers gauche)
	static Rail_droite_vers_haut	= new Type_de_case('rail droite vers haut');

	// NOTE: faisant la jonction de vertical à horizontal en allant vers le haut puis vers la droite (ou de horizontal à vertical en allant de gauche vers le bas)
	static Rail_haut_vers_droite	= new Type_de_case('rail haut vers droite');

	// NOTE: faisant la jonction de horizontal à vertical en allant vers la droite puis vers le bas (ou de vertical vers horizontal en allant de haut vers gauche)
	static Rail_droite_vers_bas		= new Type_de_case('rail droite vers bas');

	// NOTE: faisant la jonction de vertical à horizontal en allant vers le bas puis vers la droite (ou de horizontal à vertical en allant de gauche vers le haut)
	static Rail_bas_vers_droite		= new Type_de_case('rail bas vers droite');

	constructor(nom) {
		this.nom = nom;
	}
}


/*------------------------------------------------------------*/
// Types de train
/*------------------------------------------------------------*/
class Type_de_train{
	static Loco				= new Type_de_train('locomotive');

	constructor(nom) {
		this.nom = nom;
	}
}


/*------------------------------------------------------------*/
// Images
/*------------------------------------------------------------*/
const IMAGE_EAU = new Image();
IMAGE_EAU.src = 'images/eau.png';

const IMAGE_HERBE1 = new Image();
IMAGE_HERBE1.src = 'images/herbe1.png';

const IMAGE_HERBE2 = new Image();
IMAGE_HERBE2.src = 'images/herbe2.png';

const IMAGE_HERBE3 = new Image();
IMAGE_HERBE3.src = 'images/herbe3.png';

// GARE

const IMAGE_GARE1 = new Image();
IMAGE_GARE1.src = 'images/gare1.png';

const IMAGE_GARE2 = new Image();
IMAGE_GARE2.src = 'images/gare2.png';

const IMAGE_GARE3 = new Image();
IMAGE_GARE3.src = 'images/gare3.png';

const IMAGE_GARE4 = new Image();
IMAGE_GARE4.src = 'images/gare4.png';

const IMAGE_GARE5 = new Image();
IMAGE_GARE5.src = 'images/gare5.png';

const IMAGE_GARE6 = new Image();
IMAGE_GARE6.src = 'images/gare6.png';

const IMAGE_GARE7 = new Image();
IMAGE_GARE7.src = 'images/gare7.png';

const IMAGE_GARE8 = new Image();
IMAGE_GARE8.src = 'images/gare8.png';

const IMAGE_GARE9 = new Image();
IMAGE_GARE9.src = 'images/gare9.png';

const IMAGE_GARE10 = new Image();
IMAGE_GARE10.src = 'images/gare10.png';

const IMAGE_GARE11 = new Image();
IMAGE_GARE11.src = 'images/gare11.png';

const IMAGE_GARE12 = new Image();
IMAGE_GARE12.src = 'images/gare12.png';


// FERME


const IMAGE_FERME1 = new Image();
IMAGE_FERME1.src = 'images/ferme1.png';

const IMAGE_FERME2 = new Image();
IMAGE_FERME2.src = 'images/ferme2.png';

const IMAGE_FERME3 = new Image();
IMAGE_FERME3.src = 'images/ferme3.png';

const IMAGE_FERME4 = new Image();
IMAGE_FERME4.src = 'images/ferme4.png';

const IMAGE_FERME5 = new Image();
IMAGE_FERME5.src = 'images/ferme5.png';

const IMAGE_FERME6 = new Image();
IMAGE_FERME6.src = 'images/ferme6.png';

const IMAGE_FERME7 = new Image();
IMAGE_FERME7.src = 'images/ferme7.png';

const IMAGE_FERME8 = new Image();
IMAGE_FERME8.src = 'images/ferme8.png';

const IMAGE_FERME9 = new Image();
IMAGE_FERME9.src = 'images/ferme9.png';

const IMAGE_FERME10 = new Image();
IMAGE_FERME10.src = 'images/ferme10.png';

const IMAGE_FERME11 = new Image();
IMAGE_FERME11.src = 'images/ferme11.png';

const IMAGE_FERME12 = new Image();
IMAGE_FERME12.src = 'images/ferme12.png';



const IMAGE_PLATEFORME = new Image();
IMAGE_PLATEFORME.src = 'images/plateforme.png';

const IMAGE_LAMPADAIRE1 = new Image();
IMAGE_LAMPADAIRE1.src = 'images/lampadaire1.png';

const IMAGE_LAMPADAIRE2 = new Image();
IMAGE_LAMPADAIRE2.src = 'images/lampadaire2.png';

const IMAGE_BANC1 = new Image();
IMAGE_BANC1.src = 'images/banc1.png';

const IMAGE_BANC2 = new Image();
IMAGE_BANC2.src = 'images/banc2.png';

const IMAGE_FOIN1 = new Image();
IMAGE_FOIN1.src = 'images/foin1.png';

const IMAGE_FOIN2 = new Image();
IMAGE_FOIN2.src = 'images/foin2.png';

const IMAGE_BARRIERE = new Image();
IMAGE_BARRIERE.src = 'images/barriere.png';

const IMAGE_BARRIERE2 = new Image();
IMAGE_BARRIERE2.src = 'images/barriere2.png';

const IMAGE_NENUPHAR = new Image();
IMAGE_NENUPHAR.src = 'images/nenuphar.png';

const IMAGE_ILE = new Image();
IMAGE_ILE.src = 'images/ile.png';

const IMAGE_PIERREEAU = new Image();
IMAGE_PIERREEAU.src = 'images/pierreEau.png';

const IMAGE_FLEUR = new Image();
IMAGE_FLEUR.src = 'images/fleur.png';

const IMAGE_FLEUR2 = new Image();
IMAGE_FLEUR2.src = 'images/fleur2.png';

const IMAGE_LOCO = new Image();
IMAGE_LOCO.src = 'images/locomotive.png';

const IMAGE_RAIL_HORIZONTAL = new Image();
IMAGE_RAIL_HORIZONTAL.src = 'images/rail-horizontal.png';

const IMAGE_RAIL_VERTICAL = new Image();
IMAGE_RAIL_VERTICAL.src = 'images/rail-vertical.png';

const IMAGE_RAIL_BAS_VERS_DROITE = new Image();
IMAGE_RAIL_BAS_VERS_DROITE.src = 'images/rail-bas-vers-droite.png';

const IMAGE_RAIL_DROITE_VERS_BAS = new Image();
IMAGE_RAIL_DROITE_VERS_BAS.src = 'images/rail-droite-vers-bas.png';

const IMAGE_RAIL_DROITE_VERS_HAUT = new Image();
IMAGE_RAIL_DROITE_VERS_HAUT.src = 'images/rail-droite-vers-haut.png';

const IMAGE_RAIL_HAUT_VERS_DROITE = new Image();
IMAGE_RAIL_HAUT_VERS_DROITE.src = 'images/rail-haut-vers-droite.png';

const IMAGE_WAGON = new Image();
IMAGE_WAGON.src = 'images/wagon.png';

const IMAGE_MONSTRE1 = new Image();
IMAGE_MONSTRE1.src = 'images/Palkia1.png';

const IMAGE_MONSTRE2 = new Image();
IMAGE_MONSTRE2.src = 'images/Palkia2.png';

const IMAGE_MONSTRE3 = new Image();
IMAGE_MONSTRE3.src = 'images/Palkia3.png';

const IMAGE_MONSTRE4 = new Image();
IMAGE_MONSTRE4.src = 'images/Palkia4.png';

const IMAGE_EXPLOSION1 = new Image();
IMAGE_EXPLOSION1.src = 'images/explosion1.png';

const IMAGE_EXPLOSION2 = new Image();
IMAGE_EXPLOSION2.src = 'images/explosion2.png';

const IMAGE_EXPLOSION3 = new Image();
IMAGE_EXPLOSION3.src = 'images/explosion3.png';

const IMAGE_VACHE1 = new Image();
IMAGE_VACHE1.src = 'images/vache1.png';



/************************************************************/
// Variables globales
/************************************************************/

let bouton_actif;
let top_canva = 0;
let left_canva = 0;
let trains = [];
let nb_trains = 0;
let en_pause = 1;
let aiguillages = [];
let destruction = 0;
let trains_supp = [];
let palkia;


/************************************************************/
/* Classes */
/************************************************************/

/*------------------------------------------------------------*/
// Plateau
/*------------------------------------------------------------*/
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
  } 


class Plateau{
	/* Constructeur d'un plateau vierge */
	constructor(){
		this.largeur = LARGEUR_PLATEAU;
		this.hauteur = HAUTEUR_PLATEAU;

		// État des cases du plateau
		// NOTE: tableau de colonnes, chaque colonne étant elle-même un tableau de cases (beaucoup plus simple à gérer avec la syntaxe case[x][y] pour une coordonnée (x,y))
		this.cases = [];
		for (let x = 0; x < this.largeur; x++) {
			this.cases[x] = [];
			for (let y = 0; y < this.hauteur; y++) {
				this.cases[x][y] = Type_de_case.herbe1;
			}
		}

		for (let x = 0; x < 100; x++) {
			let x1 = getRandomInt(0,this.largeur);
			let y1 = getRandomInt(0,this.hauteur);
			this.cases[x1][y1] = Type_de_case.herbe2;
		}

		for (let x = 0; x < 100; x++) {
			let x1 = getRandomInt(0,this.largeur);
			let y1 = getRandomInt(0,this.hauteur);
			this.cases[x1][y1] = Type_de_case.herbe3;
		}

		for (let x = 0; x < 50; x++) {
			let x1 = getRandomInt(0,this.largeur);
			let y1 = getRandomInt(0,this.hauteur);
			this.cases[x1][y1] = Type_de_case.Fleur;
		}

		for (let x = 0; x < 50; x++) {
			let x1 = getRandomInt(0,this.largeur);
			let y1 = getRandomInt(0,this.hauteur);
			this.cases[x1][y1] = Type_de_case.Fleur2;
		}
	}
}

/*------------------------------------------------------------*/
// Train
/*------------------------------------------------------------*/

class Train{
	/*Constructeur d'un train*/
	constructor(x,y,n){
		this.x = x;
		this.y = y;
		this.direction = "droite";
		this.numero = nb_trains;
		this.nb_wagon = n;
		this.wagons = [];
		for(let i = 1; i <= this.nb_wagon;i++){
			this.wagons.push(new Wagon(x-i,y));
		}
	}
}

class Wagon{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
}

class Aiguillage{
	constructor(x,y,n){
		this.x = x;
		this.y = y;
		this.num = n;
		this.etat = 0;
	}
}

class Monstre{
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.etat = 0
		this.direction = "";
	}
}


/************************************************************/
// Méthodes
/************************************************************/

function image_of_case(type_de_case){
	switch(type_de_case){
		case Type_de_case.herbe1				: return IMAGE_HERBE1;
		case Type_de_case.herbe2				: return IMAGE_HERBE2;
		case Type_de_case.herbe3				: return IMAGE_HERBE3;
		case Type_de_case.gare1				: return IMAGE_GARE1;
		case Type_de_case.gare2				: return IMAGE_GARE2;
		case Type_de_case.gare3				: return IMAGE_GARE3;
		case Type_de_case.gare4				: return IMAGE_GARE4;
		case Type_de_case.gare5				: return IMAGE_GARE5;
		case Type_de_case.gare6				: return IMAGE_GARE6;
		case Type_de_case.gare7				: return IMAGE_GARE7;
		case Type_de_case.gare8				: return IMAGE_GARE8;
		case Type_de_case.gare9				: return IMAGE_GARE9;
		case Type_de_case.gare10			: return IMAGE_GARE10;
		case Type_de_case.gare11				: return IMAGE_GARE11;
		case Type_de_case.gare12				: return IMAGE_GARE12;

		case Type_de_case.ferme1                : return IMAGE_FERME1;
		case Type_de_case.ferme2                : return IMAGE_FERME2;
		case Type_de_case.ferme3                : return IMAGE_FERME3;
		case Type_de_case.ferme4                : return IMAGE_FERME4;
		case Type_de_case.ferme5                : return IMAGE_FERME5;
		case Type_de_case.ferme6                : return IMAGE_FERME6;
		case Type_de_case.ferme7                : return IMAGE_FERME7;
		case Type_de_case.ferme8                : return IMAGE_FERME8;
		case Type_de_case.ferme9                : return IMAGE_FERME9;
		case Type_de_case.ferme10               : return IMAGE_FERME10;
		case Type_de_case.ferme11               : return IMAGE_FERME11;
		case Type_de_case.ferme12               : return IMAGE_FERME12;

		case Type_de_case.Plateforme				: return IMAGE_PLATEFORME;
		case Type_de_case.barriere				: return IMAGE_BARRIERE;
		case Type_de_case.barriere2				: return IMAGE_BARRIERE2;
		case Type_de_case.Lampadaire1				: return IMAGE_LAMPADAIRE1;
		case Type_de_case.Lampadaire2				: return IMAGE_LAMPADAIRE2;
		case Type_de_case.banc1				: return IMAGE_BANC1;
		case Type_de_case.banc2				: return IMAGE_BANC2;
		case Type_de_case.foin1				: return IMAGE_FOIN1;
		case Type_de_case.foin2				: return IMAGE_FOIN2;
		case Type_de_case.Eau					: return IMAGE_EAU;
		case Type_de_case.Nenuphar				: return IMAGE_NENUPHAR;
		case Type_de_case.Ile				: return IMAGE_ILE;
		case Type_de_case.pierreEau				: return IMAGE_PIERREEAU;
		case Type_de_case.Fleur					: return IMAGE_FLEUR;
		case Type_de_case.Fleur2				: return IMAGE_FLEUR2;
		case Type_de_case.Rail_horizontal		: return IMAGE_RAIL_HORIZONTAL;
		case Type_de_case.Rail_vertical			: return IMAGE_RAIL_VERTICAL;
		case Type_de_case.Rail_droite_vers_haut	: return IMAGE_RAIL_DROITE_VERS_HAUT;
		case Type_de_case.Rail_haut_vers_droite	: return IMAGE_RAIL_HAUT_VERS_DROITE;
		case Type_de_case.Rail_droite_vers_bas	: return IMAGE_RAIL_DROITE_VERS_BAS;
		case Type_de_case.Rail_bas_vers_droite	: return IMAGE_RAIL_BAS_VERS_DROITE;
		case Type_de_case.Vache					: return IMAGE_VACHE1;
    }
}

function image_of_train(type_de_train){
	switch(type_de_train){
		case Type_de_train.Loco					: return IMAGE_LOCO;
		case Type_de_train.Wagon				: return IMAGE_WAGON;
    }
}


function dessine_case(contexte, plateau, x, y){
	const la_case = plateau.cases[x][y];
	let image_a_afficher = image_of_case(la_case);
	// Affiche l'image concernée
	contexte.drawImage(image_a_afficher, x * LARGEUR_CASE, y * HAUTEUR_CASE, LARGEUR_CASE, HAUTEUR_CASE);
}

function dessine_loco(contexte,x,y){
	let image_a_afficher = image_of_train(Type_de_train.Loco);
	contexte.drawImage(image_a_afficher, x * LARGEUR_CASE, y * HAUTEUR_CASE, LARGEUR_CASE, HAUTEUR_CASE);
}

function dessine_wagon(contexte,x,y){
	let image_a_afficher = image_of_train(Type_de_train.Wagon);
	contexte.drawImage(image_a_afficher, x * LARGEUR_CASE, y * HAUTEUR_CASE, LARGEUR_CASE, HAUTEUR_CASE);
}

function dessine_nouveau_train(contexte,nb_w, x, y){
	trains.push(new Train(x,y,nb_w));
	nb_trains ++;
	let image_a_afficher = image_of_train(Type_de_train.Loco);
	// Affiche l'image concernée
	contexte.drawImage(image_a_afficher, x * LARGEUR_CASE, y * HAUTEUR_CASE, LARGEUR_CASE, HAUTEUR_CASE);
	image_a_afficher = image_of_train(Type_de_train.Wagon);
	for(let i = 0; i < nb_w; i++){
		x--;
		contexte.drawImage(image_a_afficher, x * LARGEUR_CASE, y * HAUTEUR_CASE, LARGEUR_CASE, HAUTEUR_CASE);
	}
}

function playAudio(audioNom){
	const audio = new Audio(audioNom); 
	audio.play();
}


function avancer(contexte,plateau,train,x,y){
	if(train.nb_wagon > 0){
		dessine_case(contexte,plateau,train.wagons[train.nb_wagon - 1 ].x,train.wagons[train.nb_wagon - 1 ].y);
	}
	else{
		dessine_case(contexte,plateau,train.x,train.y);
	}
	for(let i = train.nb_wagon-1; i > 0; i--){
		train.wagons[i].x = train.wagons[i-1].x;
		train.wagons[i].y = train.wagons[i-1].y;
	}
	if(train.nb_wagon > 0){
		train.wagons[0].x = train.x;
		train.wagons[0].y = train.y;
	}
	train.x = x;
	train.y = y;
	dessine_loco(contexte,x,y);
	for(let i = 0; i < train.nb_wagon;i++){
		dessine_wagon(contexte,train.wagons[i].x,train.wagons[i].y,);
	}
}

function détruire(contexte,plateau,train){
	for(let i = 0; i < train.nb_wagon;i++){
		dessine_case(contexte,plateau,train.wagons[i].x,train.wagons[i].y);
	}
	if(trains.length  > 1){
		trains.splice(train.numero,1);
	}
	else{
		trains.pop();
	}
	nb_trains--;
	explosion(contexte,plateau,train.x,train.y);
}

function test_avancer(train,contexte,plateau){
	let next_case = null;
		switch(train.direction){
			case "droite" :
				if(train.x+1 < LARGEUR_PLATEAU){
					next_case = plateau.cases[train.x+1][train.y];
					if((next_case === Type_de_case.Rail_droite_vers_haut) && (test_monstre(train.x+1,train.y,train))){
						train.direction = "haut";
					}
					if(next_case === Type_de_case.Rail_droite_vers_bas && (test_monstre(train.x+1,train.y,train))){
						train.direction = "bas";
					}
					if((test_monstre(train.x+1,train.y,train)) && (next_case === Type_de_case.Rail_horizontal) || (next_case === Type_de_case.Rail_droite_vers_haut) || (next_case === Type_de_case.Rail_droite_vers_bas) ){
						avancer(contexte,plateau,train,train.x+1,train.y);
					}
					else{
						détruire(contexte,plateau,train);
					}
				}
				else{
					détruire(contexte,plateau,train);
				}
				break;
			case "gauche" :
				if(train.x-1 >= 0){
					next_case = plateau.cases[train.x-1][train.y];
					if(next_case === Type_de_case.Rail_haut_vers_droite && (test_monstre(train.x-1,train.y,train))){
						train.direction = "bas";
					}
					if(next_case === Type_de_case.Rail_bas_vers_droite && (test_monstre(train.x-1,train.y,train))){
						train.direction = "haut";
					}
					if((test_monstre(train.x-1,train.y,train)) && (next_case === Type_de_case.Rail_horizontal) || (next_case === Type_de_case.Rail_haut_vers_droite) || (next_case === Type_de_case.Rail_bas_vers_droite)  ){
						avancer(contexte,plateau,train,train.x-1,train.y);
					}
					else{
						détruire(contexte,plateau,train);
					}
				}
				else{
					détruire(contexte,plateau,train);
				}
				break;
			case "haut" :
				if(train.y-1 >= 0){
					next_case = plateau.cases[train.x][train.y-1];
					if(next_case === Type_de_case.Rail_haut_vers_droite && (test_monstre(train.x,train.y-1,train))){
						train.direction = "droite";
					}
					if(next_case === Type_de_case.Rail_droite_vers_bas && (test_monstre(train.x,train.y-1,train))){
						train.direction = "gauche";
					}
					if( (test_monstre(train.x,train.y-1,train)) && (next_case === Type_de_case.Rail_vertical) || (next_case === Type_de_case.Rail_haut_vers_droite) || (next_case === Type_de_case.Rail_droite_vers_bas) ){
						avancer(contexte,plateau,train,train.x,train.y-1);
					}
					else{
						détruire(contexte,plateau,train);
					}
				}
				else{
					détruire(contexte,plateau,train);
				}
				break;
			case "bas" :
				if(train.y+1 < HAUTEUR_PLATEAU){
					next_case = plateau.cases[train.x][train.y+1];
					if(next_case === Type_de_case.Rail_droite_vers_haut && (test_monstre(train.x,train.y+1,train))){
						train.direction = "gauche";
					}
					if(next_case === Type_de_case.Rail_bas_vers_droite && (test_monstre(train.x,train.y+1,train))){
						train.direction = "droite";
					}
					if( (test_monstre(train.x,train.y+1,train)) && (next_case === Type_de_case.Rail_vertical) || (next_case === Type_de_case.Rail_droite_vers_haut) || (next_case === Type_de_case.Rail_bas_vers_droite)){
						avancer(contexte,plateau,train,train.x,train.y+1); 
					}
					else{
						détruire(contexte,plateau,train);
					}
				}
				else{
					détruire(contexte,plateau,train);
				}
				break;
			default: 
				return false; 
		
		}
	return false; 
}



function maj_train(contexte,plateau){
	if(en_pause === 1){
		for(let i = 0; i < nb_trains;i++){
			test_avancer(trains[i],contexte,plateau);
		}
		maj_monstre(contexte,plateau,palkia);
	}
}


function dessine_plateau(page, plateau){
	// Dessin du plateau avec paysages et rails
	for (let x = 0; x < plateau.largeur; x++) {
		for (let y = 0; y < plateau.hauteur; y++) {
			dessine_case(page, plateau, x, y);
		}
	}
}

function calcCoordX(pos){//Transforme le coordonnées du canva en x en coordonnées de plateau
	let x = -1;
	let i = pos;
	while( i > 0){
		if(i > 0){
			x += 1;
		}
		i-=LARGEUR_CASE;
	} 
	return x;
}

function calcCoordY(pos){ //Transforme le coordonnées du canva en y en coordonnées de plateau
	let y = -1;
	let i = pos;
	while( i > 0){
		if(i > 0){
			y += 1;
		}
		i-=HAUTEUR_CASE;
	} 
	return y;
}

function test_train(x,y,nb_wag){ //Permet de tester si un train se trouve à la position x,y ou là ou les wagons devraients se trouver

	for(let i = 0; i<nb_trains;i++){
		if(trains[i].x === x && (trains[i].y === y)){
			return false;
		}
		for(let j = 0; j < trains[i].nb_wagon;j++){
			if(trains[i].wagons[j].x === x && (trains[i].wagons[j].y === y)){
				return false;
			}
		}
		for(let j = 1; j <= nb_wag;j++){
			if(trains[i].x === x-j && (trains[i].y === y)){
				return false;
			}
			for(let k = 0 ; k < trains[i].nb_wagon ; k++){
				if(trains[i].wagons[k].x === x-j && (trains[i].wagons[k].y === y)){
					return false;
				}
			}
		}
	}

	return true;
}

function dessiner_lampadaire(contexte,plateau,x,y){ //dessine un lampadaire de hauteur 2
	if(y-1 >= 0){
		plateau.cases[x][y] = Type_de_case.Lampadaire1;
		plateau.cases[x][y-1] = Type_de_case.Lampadaire2;

		dessine_case(contexte,plateau,x,y);
		dessine_case(contexte,plateau,x,y-1);
	}
}

function dessiner_banc(contexte,plateau,x,y){ //dessine un banc de longeur 2
	if(x+1  <= LARGEUR_PLATEAU){
		plateau.cases[x][y] = Type_de_case.banc1;
		plateau.cases[x+1][y] = Type_de_case.banc2;

		dessine_case(contexte,plateau,x,y);
		dessine_case(contexte,plateau,x+1,y);
	}
}

function dessiner_foin(contexte,plateau,x,y){ //dessine un foin de longeur 2
	if(x+1  <= LARGEUR_PLATEAU){
		plateau.cases[x][y] = Type_de_case.foin1;
		plateau.cases[x+1][y] = Type_de_case.foin2;

		dessine_case(contexte,plateau,x,y);
		dessine_case(contexte,plateau,x+1,y);
	}
}


function dessiner_gare(contexte,plateau,x,y){ //dessine une case de taille 3x4
	if((x+1 <=LARGEUR_PLATEAU) && (x+2 <= LARGEUR_PLATEAU) && (x-1 >=0) && (y-1) >= 0 && (y-2 >= 0)){
		plateau.cases[x-1][y-2] = Type_de_case.gare1;
		plateau.cases[x][y-2] = Type_de_case.gare4;
		plateau.cases[x+1][y-2] = Type_de_case.gare7;
		plateau.cases[x+2][y-2] = Type_de_case.gare10;

		plateau.cases[x-1][y-1] = Type_de_case.gare2;
		plateau.cases[x][y-1] = Type_de_case.gare5;
		plateau.cases[x+1][y-1] = Type_de_case.gare8;
		plateau.cases[x+2][y-1] = Type_de_case.gare11;

		plateau.cases[x-1][y] = Type_de_case.gare3;
		plateau.cases[x][y] = Type_de_case.gare6;
		plateau.cases[x+1][y] = Type_de_case.gare9;
		plateau.cases[x+2][y] = Type_de_case.gare12;

		for(let i = -1; i<=2;i++){
			for(let j = 0;j >= -2;j--){
				dessine_case(contexte,plateau,x+i,y+j);
			}
		}
	}
}

function dessiner_ferme(contexte, plateau, x, y) { // dessine une case de taille 3x4
    if ((x + 1 <= LARGEUR_PLATEAU) && (x + 2 <= LARGEUR_PLATEAU) && (x - 1 >= 0) && (y - 1 >= 0) && (y - 2 >= 0)) {
        plateau.cases[x - 1][y - 2] = Type_de_case.ferme1;
        plateau.cases[x][y - 2] = Type_de_case.ferme4;
        plateau.cases[x + 1][y - 2] = Type_de_case.ferme7;
        plateau.cases[x + 2][y - 2] = Type_de_case.ferme10;

        plateau.cases[x - 1][y - 1] = Type_de_case.ferme2;
        plateau.cases[x][y - 1] = Type_de_case.ferme5;
        plateau.cases[x + 1][y - 1] = Type_de_case.ferme8;
        plateau.cases[x + 2][y - 1] = Type_de_case.ferme11;

        plateau.cases[x - 1][y] = Type_de_case.ferme3;
        plateau.cases[x][y] = Type_de_case.ferme6;
        plateau.cases[x + 1][y] = Type_de_case.ferme9;
        plateau.cases[x + 2][y] = Type_de_case.ferme12;

        for (let i = -1; i <= 2; i++) {
            for (let j = 0; j >= -2; j--) {
                dessine_case(contexte, plateau, x + i, y + j);
            }
        }
    }
}

function dessiner_vache(contexte,x,y){ //Dessine le mosntre en x,y
	contexte.drawImage(IMAGE_VACHE1, x * LARGEUR_CASE, y * HAUTEUR_CASE, LARGEUR_CASE, HAUTEUR_CASE);
}



function clignotement_aiguillage(bouton){ //Fait une alternance sur le bouton aiguillage entre rail-droite-vers-bas et rail-droite-vers-haut
	let source = bouton.getAttribute("src");
	if(source === IMAGE_RAIL_DROITE_VERS_BAS.src){
		bouton.setAttribute("src",IMAGE_RAIL_DROITE_VERS_HAUT.src);
	}
	else{
		bouton.setAttribute("src",IMAGE_RAIL_DROITE_VERS_BAS.src);
	}
}

function ajouter_aiguillage(x,y){ //Création d'un aiguillage
	console.log(aiguillages.length);
	aiguillages.push(new Aiguillage(x,y,aiguillages.length +1));
	console.log(aiguillages.length);
}

function modifier_aiguillage(aiguillage,contexte,plateau){
	if (aiguillage.etat === 1) {
		plateau.cases[aiguillage.x][aiguillage.y] = Type_de_case.Rail_droite_vers_bas;
		aiguillage.etat = 0; // Réinitialiser aiguillage après avoir mis à jour le plateau
	} 
	else {
		plateau.cases[aiguillage.x][aiguillage.y] = Type_de_case.Rail_droite_vers_haut;
		aiguillage.etat = 1; // Mettre à jour aiguillage après avoir mis à jour le plateau
	}
	dessine_case(contexte, plateau, aiguillage.x,aiguillage.y); 
}

function dessiner_monstre(contexte,x,y){ //Dessine le mosntre en x,y
	contexte.drawImage(IMAGE_MONSTRE1, x * LARGEUR_CASE, (y-1) * HAUTEUR_CASE, LARGEUR_CASE, HAUTEUR_CASE);
	contexte.drawImage(IMAGE_MONSTRE2, x * LARGEUR_CASE, y * HAUTEUR_CASE, LARGEUR_CASE, HAUTEUR_CASE);
	contexte.drawImage(IMAGE_MONSTRE3, (x+1) * LARGEUR_CASE, (y-1) * HAUTEUR_CASE, LARGEUR_CASE, HAUTEUR_CASE);
	contexte.drawImage(IMAGE_MONSTRE4, (x+1) * LARGEUR_CASE, y * HAUTEUR_CASE, LARGEUR_CASE, HAUTEUR_CASE);

}



function explosion(contexte,plateau,x,y){
	contexte.drawImage(IMAGE_EXPLOSION1, x * LARGEUR_CASE, y * HAUTEUR_CASE, LARGEUR_CASE, HAUTEUR_CASE);
	sleep(300).then( () => contexte.drawImage(IMAGE_EXPLOSION2, x * LARGEUR_CASE, y * HAUTEUR_CASE, LARGEUR_CASE, HAUTEUR_CASE));
	sleep(500).then( () => contexte.drawImage(IMAGE_EXPLOSION3, x * LARGEUR_CASE, y * HAUTEUR_CASE, LARGEUR_CASE, HAUTEUR_CASE));
	sleep(500).then( () => dessine_case(contexte, plateau,x,y));
	playAudio("son/explosion.mp3");
}

function sleep(ms){
	return new Promise(resolve => setTimeout(resolve,ms));
}

function maj_monstre(contexte,plateau,monstre){
	dessine_case(contexte,plateau,monstre.x,monstre.y);
	dessine_case(contexte,plateau,monstre.x+1,monstre.y);
	dessine_case(contexte,plateau,monstre.x+1,monstre.y-1);
	dessine_case(contexte,plateau,monstre.x,monstre.y-1);
	if(monstre.etat === 0){
		let dir = getRandomInt(1,4);
		switch (dir){
			case 1 : 
				monstre.direction = "haut";
				break;
			case 2 : 
				monstre.direction = "bas";
				break;
			case 3 : 
				monstre.direction = "droite";
				break;
			case 4 : 
				monstre.direction = "gauche";
				break;
			default : 
				monstre.direction = "droite";
		}
	}
	switch(monstre.direction){
		case "haut" : 
			if(monstre.y-2 >= 0){
				monstre.y -= 1;
			}
			break;
		case "bas" : 
			if(monstre.y+1 < HAUTEUR_PLATEAU ){
				monstre.y += 1;
			}
			break;
		case "droite" : 
			if(monstre.x+2 < LARGEUR_PLATEAU){
				monstre.x += 1;
			}
			break;
		case "gauche" : 
			if(monstre.x-1 >= 0){
				monstre.x += 1;
			}
			break;
		default : 
			console.log("Pas de déplacement possible");
			break;
	}
	monstre.etat = monstre.etat + 1;
	if(monstre.etat === 3){
		monstre.etat = 0;
	}
	dessiner_monstre(contexte,monstre.x, monstre.y);
}

function test_monstre(x,y,train){
	if((x === palkia.x) && (y === palkia.y)){
		return false;
	}
	if((x === palkia.x+1) && (y === palkia.y)){
		return false;
	}
	if((x === palkia.x+1) && (y === palkia.y-1)){
		return false;
	}
	if((x === palkia.x) && (y === palkia.y-1)){
		return false;
	}
	for(let i = 0; i < train.wagons.length;i++){
		if((train.wagons[i].x === palkia.x) && (train.wagons[i].y === palkia.y)){
			return false;
		}
		if((train.wagons[i].x === palkia.x+1) && (train.wagons[i].y === palkia.y)){
			return false;
		}
		if((train.wagons[i].x === palkia.x+1) && (train.wagons[i].y === palkia.y-1)){
			return false;
		}
		if((train.wagons[i].x === palkia.x) && (train.wagons[i].y === palkia.y-1)){
			return false;
		}
	}
	return true;
}


/************************************************************/
// Plateau de jeu initial
/************************************************************/


// NOTE : ne pas modifier le plateau initial
function cree_plateau_initial(plateau){

	// parcours qui passe vers la gare 

	for(let x = 0; x <= 22; x++){
		plateau.cases[x][7] = Type_de_case.Rail_horizontal;
	}
	plateau.cases[23][7] = Type_de_case.Rail_droite_vers_bas;

	for(let y = 8; y <= 11; y++){
		plateau.cases[23][y] = Type_de_case.Rail_vertical;
	}

	plateau.cases[23][12] = Type_de_case.Rail_bas_vers_droite;

	for(let x = 24; x <= 44; x++){
		plateau.cases[x][12] = Type_de_case.Rail_horizontal;
	}

	for(let x = 26; x <= 35; x++){
		plateau.cases[x][11] = Type_de_case.Plateforme;
	}

	plateau.cases[27][10] = Type_de_case.Lampadaire2;
	plateau.cases[27][11] = Type_de_case.Lampadaire1;

	plateau.cases[30][11] = Type_de_case.banc1;
	plateau.cases[31][11] = Type_de_case.banc2;

	plateau.cases[34][10] = Type_de_case.Lampadaire2;
	plateau.cases[34][11] = Type_de_case.Lampadaire1;

	for(let x = 26; x <= 35; x++){
		plateau.cases[x][13] = Type_de_case.Plateforme;
	}

	for(let x = 24; x <= 44; x++){
		plateau.cases[x][14] = Type_de_case.Rail_horizontal;
	}

	plateau.cases[23][14] = Type_de_case.Rail_haut_vers_droite;

	for(let y = 15; y <= 20; y++){
		plateau.cases[23][y] = Type_de_case.Rail_vertical;
	}

	plateau.cases[23][21] = Type_de_case.Rail_droite_vers_haut;

	for(let x = 20; x <= 22; x++){
		plateau.cases[x][21] = Type_de_case.Rail_horizontal;
	}

	plateau.cases[19][21] = Type_de_case.Rail_haut_vers_droite;

	for(let y = 22; y <= 25; y++){
		plateau.cases[19][y] = Type_de_case.Rail_vertical;
	}

	for(let y = 0; y <= 6; y++){
		plateau.cases[23][y] = Type_de_case.Rail_vertical;
	}
/*
	for(let x = 14; x <= 18; x++){
		plateau.cases[x][2] = Type_de_case.barriere;
	}

	for(let y = 3; y <= 5; y++){
		plateau.cases[14][y] = Type_de_case.barriere2;
	}


	for(let x = 14; x <= 18; x++){
		plateau.cases[x][5] = Type_de_case.barriere;
	}
*/



		// Plan d'eau 1
	for(let x = 35; x <= 40; x++){
		for(let y = 2; y <= 6; y++){
			let x1 = getRandomInt(0, 100);
			if(x1 > 35){  
				plateau.cases[x][y] = Type_de_case.Eau;
			}
			else if(x1 > 20 && x1 <= 35){  
				plateau.cases[x][y] = Type_de_case.Nenuphar;
			}
			else if(x1 > 10 && x1 <= 25){   // Demandez à Arthur comment faire pour en mettre plus 
				plateau.cases[x][y] = Type_de_case.pierreEau; 
			}
			else {
				plateau.cases[x][y] = Type_de_case.Ile;
			}
		}
	}

	// Plan d'eau 2
	for(let x = 10; x <= 19; x++){
		for(let y = 10; y <= 19; y++){
			let x1 = getRandomInt(0, 100);
			if(x1 > 35){  
				plateau.cases[x][y] = Type_de_case.Eau;
			}
			else if(x1 > 20 && x1 <= 35){  
				plateau.cases[x][y] = Type_de_case.Nenuphar;
			}
			else if(x1 > 10 && x1 <= 25){   // Demandez à Arthur comment faire pour en mettre plus 
				plateau.cases[x][y] = Type_de_case.pierreEau; 
			}
			else {
				plateau.cases[x][y] = Type_de_case.Ile;
			}
		}
	}



}

/************************************************************/
// Fonction principale
/************************************************************/

function tchou(){
	console.log("Tchou, attention au départ !");
	/*------------------------------------------------------------*/
	// Variables DOM
	/*------------------------------------------------------------*/
	const contexte = document.getElementById('simulateur').getContext("2d");
	const canva = document.getElementById("simulateur");
	const pause = document.getElementById("bouton_pause");
	const bouton_aiguillage = document.getElementById("bouton_aiguillage");
	
	let boutons = [];
	for( let i = 0 ; i < idBoutons.length ; i++  ){
		boutons.push(document.getElementById(idBoutons[i]));
	}
	// NOTE: ce qui suit est sûrement à compléter voire à réécrire intégralement

	let rect_canva = canva.getBoundingClientRect();
	top_canva = rect_canva.top;
	left_canva = rect_canva.left;


	//Activation et désactivation des boutons

	bouton_actif = boutons[0];
	boutons[0].toggleAttribute("disabled");

	boutons.forEach((e) => {
		e.addEventListener("click", () => {
			e.toggleAttribute("disabled");
			bouton_actif.toggleAttribute("disabled");
			bouton_actif = e;
			});
	});

	canva.addEventListener("click", (e) => {
		let pos_x = e.clientX - left_canva;
		let pos_y = e.clientY - top_canva;
		let y = calcCoordY(pos_y);
		let x = calcCoordX(pos_x);
		for(let i = 0; i < aiguillages.length;i++){
			console.log(aiguillages[i],x,y);
			if(x === aiguillages[i].x && y === aiguillages[i].y){
				aiguillages.splice(i,1);
			}
		}
		switch(bouton_actif){
			case boutons[0] : 
				plateau.cases[x][y] = Type_de_case.herbe1;
				dessine_case(contexte,plateau,x,y);
				break;
			case boutons[1] : 
				plateau.cases[x][y] = Type_de_case.Eau;
				dessine_case(contexte,plateau,x,y);
				break;
			case boutons[2] : 
				plateau.cases[x][y] = Type_de_case.Rail_horizontal;
				dessine_case(contexte,plateau,x,y);
				break;
			case boutons[3] : 
				plateau.cases[x][y] = Type_de_case.Rail_vertical;
				dessine_case(contexte,plateau,x,y);
				break;
			case boutons[4] : 
				plateau.cases[x][y] = Type_de_case.Rail_droite_vers_haut;
				dessine_case(contexte,plateau,x,y);
				break;
			case boutons[5] : 
				plateau.cases[x][y] = Type_de_case.Rail_haut_vers_droite;
				dessine_case(contexte,plateau,x,y);
				break;
			case boutons[6] : 
				plateau.cases[x][y] = Type_de_case.Rail_droite_vers_bas;
				dessine_case(contexte,plateau,x,y);
				break;
			case boutons[7] : 
				plateau.cases[x][y] = Type_de_case.Rail_bas_vers_droite;
				dessine_case(contexte,plateau,x,y);
				break;
			case boutons[8] : 
				plateau.cases[x][y] = Type_de_case.Rail_droite_vers_bas;
				dessine_case(contexte,plateau,x,y);
				ajouter_aiguillage(x,y);
				break;
			case boutons[9] : 
				dessiner_banc(contexte,plateau,x,y);
				break;
			case boutons[10] : 
				dessiner_lampadaire(contexte,plateau,x,y);
				break;	
			case boutons[11] : 
				dessiner_gare(contexte,plateau,x,y);
				break;	
			case boutons[12] : 
				dessiner_ferme(contexte,plateau,x,y);
				break;	
			case boutons[13] : 
				dessiner_foin(contexte,plateau,x,y);
				break;	
			case boutons[14] : 
			plateau.cases[x][y] = Type_de_case.Vache;
			dessine_case(contexte,plateau,x,y);
				break;	
			default: 
				if(plateau.cases[x][y] === Type_de_case.Rail_horizontal ){
					let check_rail = true;
					switch(bouton_actif){
						case boutons[15]:
							if(test_train(x,y,0)){
								dessine_nouveau_train(contexte,0,x,y);
							}
							break; 
						case boutons[16]:
							if( x-1 >= 0 && plateau.cases[x-1][y] === Type_de_case.Rail_horizontal){
								if(test_train(x,y,1)){
									dessine_nouveau_train(contexte,1,x,y);
								}
							}
							break; 
						case boutons[17]:
							for(let i = 1; i < 4;i++){
								if(x-i<0 ||plateau.cases[x-i][y]!== Type_de_case.Rail_horizontal){
									check_rail = false
								}
							}
							if(check_rail === true ){
								if(test_train(x,y,3)){
									dessine_nouveau_train(contexte,3,x,y);
								}
							}
							break;
						case boutons[18]:
							for(let i = 1; i < 6;i++){
								if(x-i<0 || plateau.cases[x-i][y]!== Type_de_case.Rail_horizontal){
									check_rail = false
								}
							}
							if(check_rail === true ){
								if(test_train(x,y,5)){
									dessine_nouveau_train(contexte,5,x,y);
								}
							}
							break; 
					}
				}
		}
	});

	pause.addEventListener("click",() => {
		if(en_pause === 1){
			en_pause = 0;
			pause.innerText = "Redemarrer" ;
		}
		else{
			en_pause = 1;
			pause.innerText = "Pause" ;
		}

	});

	bouton_aiguillage.addEventListener("click", () => {
		for(let i = 0;i < aiguillages.length;i++){
			console.log("Changement d'aiguillage");
			modifier_aiguillage(aiguillages[i],contexte,plateau);
		}
	});

	// Création du plateau
	let plateau = new Plateau();
	cree_plateau_initial(plateau);

	// Dessine le plateau
	dessine_plateau(contexte, plateau);
	dessiner_gare(contexte, plateau,30,10); 
	dessiner_ferme(contexte,plateau,8,3); 
	dessiner_foin(contexte, plateau,3,3 ); 
	dessiner_foin(contexte, plateau,3,2 ); 
	dessiner_foin(contexte, plateau,5,2 ); 
	dessiner_foin(contexte, plateau,5,3); 
	dessiner_foin(contexte, plateau,15,3);
	dessiner_vache(contexte, 5,4); 
	dessiner_vache(contexte, 2,2); 
	dessiner_vache(contexte, 5,1); 
	dessiner_vache(contexte, 9,5); 
	dessiner_vache(contexte, 10,8); 
	dessiner_vache(contexte, 15,4); 
	dessiner_vache(contexte, 17,3); 
	dessiner_vache(contexte, 17,6); 
	dessiner_vache(contexte, 16,2); 
	dessiner_vache(contexte, 14,2); 
	 
	dessine_nouveau_train(contexte,3,3,7);
	dessine_nouveau_train(contexte,1,21,21);
	ajouter_aiguillage(23,7);

	palkia = new Monstre(8,8);
	dessiner_monstre(contexte,8,8);



	setInterval(maj_train,500,contexte,plateau);
	setInterval(clignotement_aiguillage,500,boutons[8]);

	setInterval(()=>{
		if (Math.random() < 0.25 && nb_trains>0) {
	
			playAudio("son/trainvap.mp3");
	
	  }
	  },1500);
	  window.alert("Bonjour" + " " + "et " + " " + "bienvenue " + "à " + " " + "TchouTchou Land !"+" " +" " + " Monde crée "+" " +"par "+ "Arthur et Catherine, "+ "nous vous souhaitons une bonne visite");
}

/************************************************************/
// Programme principal
/************************************************************/
// NOTE: rien à modifier ici !
window.addEventListener("load", () => {
	// Appel à la fonction principale
	tchou();
});
