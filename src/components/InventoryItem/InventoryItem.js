import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryItem = () => {
    const { inventoryId } = useParams();
    

    return (
        <div>
            <h1>This is inventory: {inventoryId}</h1>
            
        </div>
    );
};

export default InventoryItem;