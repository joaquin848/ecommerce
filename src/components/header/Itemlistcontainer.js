import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul >
            <li style={{ color: "white"}}>
                <Link to="category/Procesadores"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/Placas Madres">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/Fuentes">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to="category/Placas de video">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;
