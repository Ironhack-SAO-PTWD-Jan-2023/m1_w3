// exemplo: lista de alunos
// const students = [
//   'Bruno',
//   'Natalia',
//   'Matheus',
//   'Hercules',
//   'André',
//   'João Victor',
//   'João Vitor',
//   'Lucas'
// ]

// console.log(students[4]);

// const student1 = {
//   name: 'Bruno', age: 31
// }

// const student2 = {
//   name: 'Natalia', age: 32
// }

// console.log(student1.name);
// console.log(student2.age);

// DADOS ANINHADOS // NESTED DATA

const students = [
  { name: 'Bruno', age: 31 },
  { name: 'Natalia', age: 32 },
  { name: 'Matheus', age: 31 }
];

console.log(students);
console.log(students[1]);
console.log(students[1].name);

// adicionando dados
students.push({ name: 'Hercules', age: 41 });

const newStudent = { name: 'André', age: 36 };
students.push(newStudent);

students[3].hobby = 'corrida';

console.log(students);

const teacher = {
  name: 'Daniel',
  age: 38
}

const school = {
  name: 'Ironhack',
  classrooms: [
    {
      number: 97,
      teacher: teacher,
      students: students
    }
  ]
}

const fruits = [
  ['goiaba', 'maça', 'banana'],
  ['abacaxi', 'lichia', 'manga']
]

console.log(school.classrooms[0].teacher.name);
console.log(fruits[0][1])

