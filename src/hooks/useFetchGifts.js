import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifts = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(category)
        .then(img => {
            setState({
                data:img,
                loading:false
            })
        })

    }, [category]); 

    return state;
}
