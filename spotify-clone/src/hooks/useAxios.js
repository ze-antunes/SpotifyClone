import axios from "axios";
import { useState } from "react";

const useAxios = (url, METHOD) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const abortCont = new AbortController();
    const [options, setOptions] = useState({
        signal: "",
        method: "",
        headers: {
            "Content-Type": ""
        },
        body: null,
    });

    switch (METHOD) {
        case "GET":
            setOptions(prevState => ({
                signal: abortCont.signal,
                headers: {
                    "Content-Type": "application/json"
                }
            }))

            axios
                .get(url, options)
                .then((res) => {
                    if (!res.ok) { // error coming back from server
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setData(data);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        // auto catches network / connection error
                        setIsPending(false);
                        setError(err.message);
                    }
                })
            break;

        case "DELETE":
            axios.delete(url);
            break;
        
        default:
    }

    return { data, isPending, error };
}

export default useAxios;