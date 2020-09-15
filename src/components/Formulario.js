import React,{useState} from "react";

import {useFethProvincia} from "./Provincia/hooks/useFethProvincia";
import {useFetchMunicipio} from "./Municipio/hooks/useFetchMunicipio";


export const Formulario=()=>{

    let [idProvincia,setIdProvincia]= useState(""); // Variavel para Provincia
    let [municipio,setMunicipio]= useState(""); // Variavel para Municipio

    let [listaMunicipoFiltrados,setListaMunicipoFiltrados] = useState([]);

    let  [listProvincias,loading1] = useFethProvincia(); // Listar Todas Provincia que esta a vir da API
    let  [listMunicipio,loading2] = useFetchMunicipio();  // Listar Todos os Municipio que esta a vir da API


    const handleChangeFilterMunicipoPeloId_Provincia=(event)=>{
        setIdProvincia(event.target.value); // Guardar o id da provincia seleccionado
        let resultado = listMunicipio.filter( (filtroMunicipio)=> filtroMunicipio.id_Provincia === event.target.value) // Se o id provincia seleccionado for igual ao id da provincia que esta na lista de municipios
        setListaMunicipoFiltrados(resultado); // Guardar o resultado do filtro
    }


return(

    <div className="App" style={{marginTop:"3rem"}}>

    <fieldset style={{width:"50rem",height:"459px",margin:"0px auto"}}>

       <legend>Filtro Em DropDownList Com React Hooks</legend>

        <form>
           <label htmlFor="Provincia">Selecciona a Provincia</label>
           <select  value={idProvincia} disabled={loading1} name="idProvincia" onChange={event=>handleChangeFilterMunicipoPeloId_Provincia(event)}  style={{width:"10rem", marginRight:"1rem"}}>
              {
                 listProvincias.map( (item)=>
                    <option value={item.id_provincia}>{item.provincia}</option>
                 )
              }
           </select>

           <label htmlFor="municipio">Selecciona o Munícipio</label>
           <select  value={municipio} disabled={loading2} name="municipio" onChange={event=>setMunicipio(event.target.value)}  style={{width:"10rem"}}>
               {
                   listaMunicipoFiltrados.map( (item)=>
                     <option value={item.id_Municipio}>{item.municipio}</option>
                  )
               }
           </select>

        </form>

    </fieldset>

    </div>

)

}