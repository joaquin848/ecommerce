import brand from "../../img/brand.svg";
import { Link } from "react-router-dom";

const Brand = ( ) => {
    return(
        <Link to="/">
             <img src={brand} alt="tienda ecommerce" title="Tienda Ecommerce"></img>
        </Link>
    )
}

export default Brand;