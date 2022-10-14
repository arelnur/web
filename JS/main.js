console.log("My name is Elnur");
const myBD = prompt ("Введите дату Вашего рождения (пример: 12/31/1999)")
const totalDays = (new Date().getTime() - new Date(myBD).getTime()) / 1000 / 60 / 60 / 24
console.log(totalDays);