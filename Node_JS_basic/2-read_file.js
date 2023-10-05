const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, { encoding: 'utf8' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const tableau = data.split('\n'); // on récupère la chaine sous forme de tableau

  let tableauPropre = tableau.filter((element) => element !== '' && element !== null && element !== undefined); // on récupère que les lignes non vides
  tableauPropre = tableauPropre.slice(1); // on cut l'entête des colonnes

  console.log(`Number of students: ${tableauPropre.length}`);

  const tableauDetail = tableauPropre.map((element) => element.split(',')); // on sous decoupe chaque string en tableau

  let csStudent = 0;
  const csStudentName = [];
  let sweStudent = 0;
  const sweStudentName = [];
  let student = '';

  for (let i = 0; i < tableauDetail.length; i += 1) {
    student = tableauDetail[i];

    if (student[student.length - 1] === 'CS') {
      csStudent += 1;
      csStudentName.push(student[0]);
    }
    if (student[student.length - 1] === 'SWE') {
      sweStudent += 1;
      sweStudentName.push(student[0]);
    }
  }

  console.log(`Number of students in CS: ${csStudent}. List: ${csStudentName.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudent}. List: ${sweStudentName.join(', ')}`);
}

module.exports = countStudents;
