

// Styles
import ItemList from './itemList/ItemList';
import './ItemListContainer.css';

// Components

// Components Bootstrap


const ItemListContainer = (props) => {
    return (
        <main>
            <div className="greeting">
                <p>{props.greeting}</p>
            </div>
            <ItemList />
        </main>
    )
}


export default ItemListContainer;