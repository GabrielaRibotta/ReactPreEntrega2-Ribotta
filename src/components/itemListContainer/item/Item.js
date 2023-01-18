// Styles
import './Item.css';

// Components
import Card from 'react-bootstrap/Card';
import ItemCount from '../../itemCount/ItemCount.js';

import { Link } from 'react-router-dom';


const Item = (props) => {
    const {id, title, price, image} = props.data

    return (
        <div>
            <section className='tarjetasProducto'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='cardTitle'>{title}</Card.Title>
                    <Card.Text className='cardText'>
                        {price}
                    </Card.Text>
                    <ItemCount stock={10} />
                    <Link to={`/producto/${id}`}><button>Ver más</button></Link>
                </Card.Body>
                </Card>
            </section>
        </div>
    )
}



export default Item;