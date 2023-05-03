function checkDay() {
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;

  var date = new Date(year, month - 1, day);
  var dayOfWeek = date.getDay();

  var result = document.getElementById("result");
  switch (dayOfWeek) {
    case 0:
      result.innerHTML = "Domingo (Fin de semana)";
      break;
    case 1:
      result.innerHTML = "Lunes (Laborable)";
      break;
    case 2:
      result.innerHTML = "Martes (Laborable)";
      break;
    case 3:
      result.innerHTML = "Miércoles (Laborable)";
      break;
    case 4:
      result.innerHTML = "Juevez (Laborable)";
      break;
    case 5:
      result.innerHTML = "Viernes (Laborable)";
      break;
    case 6:
      result.innerHTML = "Sábado (Fin de semana)";
      break;
  }
}