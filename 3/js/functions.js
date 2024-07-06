/* eslint-disable no-console */
function StringLength(string, nombeMaxLength){
  if(string.length <= nombeMaxLength) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
// Строка короче 20 символов
StringLength ('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
StringLength ('проверяемая строка', 18); // true
// Строка длиннее 10 символов
StringLength ('проверяемая строка', 10); // false

// eslint-disable-next-line no-unused-vars
function polindrom(string){
  string = string.replaceAll (' ','');
  string = string.toLowerCase();
  let newstring = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newstring = newstring + string[i];
  }
  console.log (newstring === string);
  return newstring === string;

}
// Строка является палиндромом
polindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
polindrom('ДовОд'); // true
// Это не палиндром
polindrom('Кекс'); // false
// Это палиндром
polindrom('Лёша на полке клопа нашёл '); // true
