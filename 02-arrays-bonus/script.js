const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

// const reversedTeachers = teachers.reverse()

const reversedTeachers = [];

for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers.push(teachers[i]);
}

console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

// const longNames = teachers.filter(teacher => teacher.length <= 5);

const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}

console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === "Ed") {
    teachers.splice(i, 1);
  }
}

console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

// soluzione alternativa
// const isFabioPresent = teachers.indexOf('Fabio') >= 0;

let yesornot = false;

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === "Fabio") {
    yesornot = true;
  }
}

const isFabioPresent = yesornot;
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString

// let allTeachers = teachers.join(', ');

let allTeachers = "";

for (let i = 0; i < teachers.length; i++) {
  allTeachers = allTeachers + teachers[i] + ",";
}

const teachersString = allTeachers;
console.log(teachersString);
