import { useEffect, useState } from "react"

const useItem = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://damp-scrubland-08522.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setItems(data))
    }, []);
    return [items, setItems];
}
export default useItem;