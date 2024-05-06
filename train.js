const n = 12;
console.log(n);
//Calculer la somme
let l = [11, 21, 14];
let sum = 0;
for (note of l) {
  sum += note;
}
console.log(sum);
const sum1 = l.reduce((acc, note) => acc + note, 0);
console.log(sum1);
//filtrer les notes > 11
let f = l.filter((x) => x > 11);
//Ajouter 1 sur chaque valeur du tableau
let m = l.map((x) => x + 1);

console.log(f);
console.log(m);
//Trier le tableau dans l'ordre décroissant
l.sort((b, a) => a - b);
console.log(l);

const max = Math.max(...l);
console.log(max);
//Afficher les indexe du tableau avec for....in
for (i in l) {
  console.log(i);
}
//Afficher les élements du tableau avec for...of
for (i of l) {
  console.log(i);
}
//Poo
class Rectangle {
  constructor(largeur, longueur) {
    this.largeur = largeur;
    this.longueur = longueur;
  }
  get perimeter() {
    let p = (this.largeur + this.longueur) * 2;
    return `Le périmetre est : ${p} m`;
  }
  get isValid() {
    return this.largeur >= 0 && this.longueur >= 0;
  }
}
class Carre extends Rectangle {
  constructor(largeur) {
    super(largeur, largeur);
  }
  /* get perimeter() {
    return this.largeur * 4;
  } */
  /* get isValid() {
    return this.largeur >= 0;
  } */
}
const rec = new Rectangle(10, 20);
const r = new Rectangle(10, -20);
const car = new Carre(10);
console.log(rec.perimeter);
console.log(r.isValid);
console.log(rec.isValid);
console.log(car);
console.log(car.isValid);
console.log(car.perimeter);
