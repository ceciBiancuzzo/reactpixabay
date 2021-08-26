import React, { Component } from 'react'; //imrc + enter

class Buscador extends Component{
    busquedaRef = React.createRef();
    obtenerDatos= (e)=>{
e.preventDefault();

console.log(this.busquedaRef.current.value);
    }



    render(){

    return(

<form onSumit={this.obtenerDatos}>
<div className="row">
    <div className= "form-group col-md-8">
<input ref={this.busquedaRef}type="text" className= "form-control form-control-lg" 
placeholder = "Busca tu imagen.Ejemplo:Futbol"/>
</div>
</div>

<div className="row">
    <div className= "form-group col-md-4">
<input type="submit" className= "btn btn-lg btn-danger btn-block " 
value="Buscar..." />
placeholder = "Busca tu imagen. Ejemplo:Futbol"/>
</div>
</div>

</form>

    );
}


}
export default Buscador;

