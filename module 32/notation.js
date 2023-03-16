const student = { 
    name: 'sakib',
    roll: 12,
    marks:{
        math: 67,
        chemistry: 78,
        english: 89
    }

}
const marks = student.marks;
const engish = student.marks.english;
const english = student['marks']['english'];
console.log(english);