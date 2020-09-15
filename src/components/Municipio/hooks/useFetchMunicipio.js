import { useState, useEffect } from "react";
import DataMunicipios from "./DataMunicipios";

export const useFetchMunicipio = ( ) => {

    const [datas, setData] = useState([]);
    const [loading, setLoading] = useState(false);

   function fetchUrl() {
       setLoading(true);
       setData(DataMunicipios);
       setLoading(false);
    }

    useEffect(() => {
      fetchUrl();

    }, [ ]);



    return [datas,loading];
}


