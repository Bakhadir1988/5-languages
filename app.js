const language = prompt(`Ваш язык: Русский? (да/нет) или выберите язык! (Английский, Немецкий)`);

switch (language) {
  case "да":
    alert("Привет! :D");
    break;
  case "нет":
    alert("Обновите страницу! И выберите язык! (Английский, Немецкий)");
    break;
  case "Английский":
    alert("Hi! :D");
    break;
  case "Немецкий":
    alert("Hallo :D");
    break;
  default:
    alert("Такого языка нет! Обновите страницу!");
}