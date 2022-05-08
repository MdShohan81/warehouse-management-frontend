import { useEffect, useState } from "react";

const useItemDetails = inventoryId =>{
    const [item, setItem] = useState({});
    useEffect(() => {
        const url =  `https://damp-scrubland-08522.herokuapp.com/product/${inventoryId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [inventoryId]);
    return  [item,setItem]
}

export default useItemDetails;