//Modules
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Styles
import './ItemList.css';

// Components
import Item from '../item/Item.js';

const ItemList = (props) => {

    const [productos, setProductos] = useState([]);
    const {productoId} = useParams();
    const {categoryId} = useParams();

    useEffect(()=>{
        if(categoryId !== undefined){
            fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
            .then(res => res.json())
            .then(json => setProductos(json.map( producto => <Item key={producto.id} id={"producto" + producto.id} data={producto} />)));
        }else {
            fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => setProductos(json.map( producto => <Item key={producto.id} id={"producto" + producto.id} data={producto} />)));
        }

    },[productoId, categoryId]);

        return (
            <div className="itemListDiv">
                {productos}
            </div>
        );
}


export default ItemList;