import { useEffect, useState } from "react";

const useItemDetails = inventoryId =>{
    const [item, setItem] = useState({});
    useEffect(() => {
        const url =  `http://localhost:5000/product/${inventoryId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [inventoryId]);
    return  [item]
}

export default useItemDetails;