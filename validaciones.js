

let registros = [];

function agregarRegistro() {

  /* function Persona(usuario, contrasena, confirmar_contrasena) {
     this.usuario = usuario;
     this.contrasena = contrasena;
     this.confirmar_contrasena = confirmar_contrasena;
   }
   */
  let agregarUsuario = document.getElementById("in_nombre_usuario").value;
  let agregarContrasena = document.getElementById("in_contrasena").value;
  let agregarConfirmacion = document.getElementById("in_confirmar_contrasena").value;

  const Persona = {
    usuario: agregarUsuario,
    contrasena: agregarContrasena,
    confirmar_contrasena: agregarConfirmacion

    /*registros =[
        {
          usuario: "",
          contrasena: "",
          confirmar_contrasena: ""
        }
  
      ]*/
  }


  // nuevaPersona = new Persona(agregarUsuario, //agregarContrasena, agregarConfirmacion);
  //console.log(Persona);

  registros.push(Persona);
  //OrdengarArreglo(registros);
  //console.log(registros);
}

//Juan, Carlos, Alejo
/*const arreglo = [
  { usuario: "Juan", contrasena: "1", confirmar_contrasena: "1" },
  { usuario: "Carlos", contrasena: "1", confirmar_contrasena: "1" },
  { usuario: "Alejo", contrasena: "1", confirmar_contrasena: "1" }] */

function OrdenarArreglo(arreglo) {
  arreglo.sort((a, b) => {
    const usuarioA = a.usuario.toLowerCase();
    const usuarioB = b.usuario.toLowerCase();
    if (usuarioA < usuarioB) {
      return -1;
    }

    if (usuarioA > usuarioB) {
      return 1;
    }

    return 0;
  });
  //console.log(arreglo);
  return arreglo;

}


module.exports.registros = registros;
module.exports.OrdenarArreglo = OrdenarArreglo;
module.exports.agregarRegistro = agregarRegistro;