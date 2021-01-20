function filtro() {
    var input, filtro, table, tr, td, i, txtValue;
    input = document.getElementById("inputFiltro");
    filtro = input.value.toUpperCase();
    table = document.getElementById("tablaEmpleados");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filtro) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }