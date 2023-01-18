//Modules
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Styles
import './ItemDetailContainer.css';

// Components
import ItemDetail from './itemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const {productoId} = useParams();

    const [producto, setProducto] = useState([]);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productoId}`)
            .then(res=>res.json())
            .then(producto => setProducto(<ItemDetail key={producto.id} id={"producto" + producto.id} data={producto} />));
    },[productoId]);

        return (
            <div className="itemDetailContainerDiv">
                {producto}
            </div>
        );
}


export default ItemDetailContainer;