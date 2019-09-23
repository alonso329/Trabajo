function mostrarTabla() {
  var formulario = document.getElementById('formulario');
  var tabla = document.getElementById('tabla');
  var cuerpoTabla = document.getElementById('cuerpoT');
  var materia = document.getElementById('materia');
  var nombre = document.getElementById('nombre').value;
  var anio = document.getElementById('anio').value;
  var calificacion = document.getElementById('calificacion').value;
  var edad = 2019 - parseInt(anio);
  var califProgra = null;
  var califSistemas = null;
  var promedioProgra;
  var promedioSistemas;

  if (materia.value == 'programacion') {
    califProgra = parseInt(calificacion);
  } else {
    califSistemas = parseInt(calificacion);
  }

  cuerpoTabla.innerHTML += `
    <tr>
      <th scope="row">${nombre}</th>
      <td>${edad}</td>
      <td>${califProgra}</td>
      <td>${califSistemas}</td>
    </tr>
  `;
}
