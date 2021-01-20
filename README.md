# Prueba técnica – Solution Engineer

_Realizar una aplicación web que permita filtrar la base de datos de un grupo de empleados y exportar dicha lista filtrada en un documento según formato seleccionado (Excel, CSV o PDF)._

_Presentada por: Pilar Camargo Márquez_
- [Página personal](https://about.me/justoneye)
- [GitHub](https://github.com/justoneye)
- [LinkedIn](https://www.linkedin.com/in/pilarcamargo)

## Instrucciones

<ol>
<li> Construir un archivo formato JSON basado en un archivo en Excel. </li>
<li> Una vez convertido el Excel en JSON, se debe construir con este una interfaz web tipo reporte que permita listar todos los empleados de la compañía. Esta interfaz debe permitir filtrar por: </li>
<ul>
<li> Supervisor </li>
<li> Clases </li>
<li> Departamento </li>
<li> Subsidiaria </li>
</ul>
<li> El listado se debe mostrar agrupado por supervisor y ordenado alfabéticamente por la columna Nombre dentro de cada uno de estos grupos. </li>
<li> El resultado de esta consulta se debe poder exportar a (Excel, CSV y PDF) y almacenar en una carpeta de la solución construida. </li>
<li> Documentar en un archivo de texto (readme) la forma de ejecutar la solución. </li>
</ol>

## Checklist - Criterio de aceptación 

<ul>
<li> Construir archivo JSON a partir de archivo Excel </li>
<li> Interfaz web tipo reporte (lista de empleados) </li>
<li> Interfaz con filtros (Supervisor, Clases, Dpto, Subsidiaria) </li>
<li> Listado agrupado por Supervisor </li>
<li> Listado ordenado alfabéticamente por "Nombre" en cada grupo </li>
<li> Exportación de consulta a: </li>
<ul>
<li> Excel </li>
<li> CSV </li>
<li> PDF </li> 
</ul>
<li> Entrega de archivo README </li>
<li> Uso de: </li>
<ul>
<li> HTML </li>
<li> CSS </li>
<li> Javascript </li>
</ul>
</ul>

## Estructura del Archivo

Después de descargar y descomprimir la carpeta se desplegará los siguientes archivos así:

```
prueba-tecnica-solution-engineer/
  archivos/
  scripts/
    exportar.js
    filtros.js
  index.html
  estilos.css
  README.md
```

A continuación, dentro de la carpeta prueba-tecnica-solution-engineer abra la consola de comandos donde se encuentra la carpeta y a contuación instale [http-server](https://www.npmjs.com/package/http-server) digitando el siguiente comando: 
```
npm install --global http-server
```
Al terminar el proceso de instalación ejecute la siguiente línea:

```
http-server --proxy http://localhost:8080?
```
Y diríjase al navegador a la dirección [http://localhost:8080](http://localhost:8080), en donde ya verá desplegado la aplicación web. Recuerde descomprimir el archivo de forma que la estrctura de archivos en la carpeta se mantenga.