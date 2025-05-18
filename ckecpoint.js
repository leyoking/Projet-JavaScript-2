//Fonctions de manipulation de chaînes

//Inverser une chaîne
function inverserChaine(chaine) {
  return chaine.split('').reverse().join('');
}

// 2. Compter les caractères
function compterCaracteres(chaine) {
  return chaine.length;
}

//Mettre les mots en majuscule
function mettreMajuscules(chaine) {
  return chaine.split(' ')
    .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
    .join(' ');}


//Fonctions de tableau

//Rechercher le maximum et le minimum
function trouverMax(tableau) {
  return Math.max(tableau);
}

function trouverMin(tableau) {
  return Math.min(tableau);
}

//Somme d'un tableau
function sommeTableau(tableau) {
  return tableau.reduce((acc, val) => acc + val, 0);
}

//Filtrer le tableau
function filtrerTableau(tableau, condition) {
  return tableau.filter(condition);
}


//Fonctions mathématiques
//Vérification des nombres premiers
function estPremier(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

//Suite de Fibonacci
function fibonacci(n) {
  let suite = [0, 1];
  
  for (let i = 2; i < n; i++) {
    suite[i] = suite[i - 1] + suite[i - 2];
  }
  
  return suite.slice(0, n);}
