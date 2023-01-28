
/* Autor: Nestor Fabricio Campos*/


/* ------------ Módulos para gestión de íconos ------------ Inicio */

/* ----- Icono usuario ----- Inicio */
var x = document.getElementById("usuario");
x.addEventListener("mouseover", FuncionMouseOverUsuario);
x.addEventListener("mouseout", FuncionMouseOutUsuario);

function FuncionMouseOverUsuario() {
  document.getElementById("datosPostulante").innerHTML= "Desarrollador web y de software de gestión.";

  var imagen = document.getElementById("usuario");
  imagen.style.width = '70px';
  imagen.style.height = '70px';

}

function FuncionMouseOutUsuario() {
  document.getElementById("datosPostulante").innerHTML= "Nestor Fabricio Campos";

  var imagen = document.getElementById("usuario");
  imagen.style.width = '60px';
  imagen.style.height = '60px';

}

/* ----- Icono usuario ----- Fin */

/* ----- Icono teléfono ----- Inicio */
var x = document.getElementById("telefono");
x.addEventListener("mouseover", FuncionMouseOverTelefono);
x.addEventListener("mouseout", FuncionMouseOutTelefono);

function FuncionMouseOverTelefono() {
  document.getElementById("datosPostulante").innerHTML= "+54 11-2590-3186";

  var imagen = document.getElementById("telefono");
  imagen.style.width = '70px';
  imagen.style.height = '70px';
}

function FuncionMouseOutTelefono() {
  document.getElementById("datosPostulante").innerHTML= "Nestor Fabricio Campos";

  var imagen = document.getElementById("telefono");
  imagen.style.width = '60px';
  imagen.style.height = '60px';
}
/* ----- Icono teléfono ----- Fin */

/* ----- Icono email ----- Inicio */
var y = document.getElementById("mail");
y.addEventListener("mouseover", FuncionMouseOvermail);
y.addEventListener("mouseout", FuncionMouseOutmail);

function FuncionMouseOvermail() {
  document.getElementById("datosPostulante").innerHTML= "camposf2010@hotmail.com";

  var imagen = document.getElementById("mail");
  imagen.style.width = '70px';
  imagen.style.height = '70px';
}

function FuncionMouseOutmail() {
  document.getElementById("datosPostulante").innerHTML= "Nestor Fabricio Campos";

  var imagen = document.getElementById("mail");
  imagen.style.width = '60px';
  imagen.style.height = '60px';
}
/* ----- Icono email ----- Fin */

/* ----- Icono ubicación ----- Inicio */
var z = document.getElementById("ubicacion");
z.addEventListener("mouseover", FuncionMouseOverUbicacion);
z.addEventListener("mouseout", FuncionMouseOutUbicacion);

function FuncionMouseOverUbicacion() {
  document.getElementById("datosPostulante").innerHTML= "Muñiz. Provincia de Buenos Aires";

  var imagen = document.getElementById("ubicacion");
  imagen.style.width = '70px';
  imagen.style.height = '70px';
}

function FuncionMouseOutUbicacion() {
  document.getElementById("datosPostulante").innerHTML= "Nestor Fabricio Campos";

  var imagen = document.getElementById("ubicacion");
  imagen.style.width = '60px';
  imagen.style.height = '60px';
}
/* ----- Icono ubicación ----- Fin */

/* ----- Icono fechaNacimiento ----- Inicio */
var y = document.getElementById("fechaNacimiento");
y.addEventListener("mouseover", FuncionMouseOverFechaNacimiento);
y.addEventListener("mouseout", FuncionMouseOutFechaNacimiento);

function FuncionMouseOverFechaNacimiento() {
  document.getElementById("datosPostulante").innerHTML= "24/09/69";

  var imagen = document.getElementById("fechaNacimiento");
  imagen.style.width = '70px';
  imagen.style.height = '70px';
}

function FuncionMouseOutFechaNacimiento() {
  document.getElementById("datosPostulante").innerHTML= "Nestor Fabricio Campos";

  var imagen = document.getElementById("fechaNacimiento");
  imagen.style.width = '60px';
  imagen.style.height = '60px';
}
/* ----- Icono fechaNacimiento ----- Fin */

/* ------------ Módulos para gestión de íconos ------------ Fin */


/*  --------------- Módulo para ajuste de tamaños de pantalla ---------------Inicio  */

  start();
  window.onresize = start;
  function start(){
  varAncho = document.documentElement.clientWidth; 

	if (varAncho >200 && varAncho <= 576) /* teléfonos*/
	{     
    if (document.getElementById('mostrarDatosContacto').style.display=='block') {  
    document.getElementById('mostrarDatosContacto').style.display='none';  
    }else{  
    document.getElementById('mostrarDatosContacto').style.display='block';    
    }      

    document.getElementById('MostrarOcultar').style.display='none';      
  } 

	else if (varAncho >576 && varAncho <= 768) /* tablets */
	{
    document.getElementById('MostrarOcultar').style.display='flex';
  }

	else if (varAncho >768 && varAncho <= 992) /* laptops */
	{	
  document.getElementById('MostrarOcultar').style.display='flex';
  }

	else if (varAncho >992 && varAncho <= 1200) /* pantallas hasta 1200px */
	{
    document.getElementById('MostrarOcultar').style.display='flex';
	}

	else if (varAncho >1400) /* pantallas hasta 1400px y más */
	{
    document.getElementById('MostrarOcultar').style.display='flex';
	}
}

/*  --------------- Módulo para ajuste de tamaños de pantalla ---------------Fin  */


/*  ------- Módulo para mostrar y ocultar información complementaria --------Inicio  */

function eventoBotonInformacion () {
 document.getElementById('mostrarInformacionComplementaria').style.display='flex';
 document.getElementById('cerrarInformacion').style.display='flex';
 document.getElementById('btnInformacion').style.display='none';  
}

function cerrarInformacionComplementaria() {
  document.getElementById('mostrarInformacionComplementaria').style.display='none';
  document.getElementById('cerrarInformacion').style.display='none';  
  document.getElementById('btnInformacion').style.display='flex';
}
/*  ------- Módulo para mostrar y ocultar información complementaria --------Fin  */