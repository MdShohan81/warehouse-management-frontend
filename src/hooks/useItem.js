import { useEffect, useState } from "react"

const useItem = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('item.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, []);
    return [items, setItems];
}
export default useItem;