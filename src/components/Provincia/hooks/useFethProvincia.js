
import { useState, useEffect } from "react";
import DataProvincias from "./DataProvincias"


export const useFethProvincia = ( ) => {

    const [datas, setData] = useState([]);
    const [loading, setLoading] = useState(false);

 function fetchUrl() {
      setLoading(true);
      setData(DataProvincias);
      setLoading(false);
    }

    useEffect(() => {
      fetchUrl();

    }, [ ]);



    return [datas,loading];
}
