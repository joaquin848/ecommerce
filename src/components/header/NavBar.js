import Brand from "./brand.js";
import Itemlistcontainer from "../Itemlistcontainer.js";
import Cartwidget from "../Cartwidget.js"
const NavBar = () => {
    return(
        <header>
            <div className="containerBrand">
               <Brand />
            </div>

            <nav className="containerItemList">
                <Itemlistcontainer
                itemUno = "Remeras"
                itemDos = "Buzos"
                itemTres = "Pantalones"
                itemCuatro = "Zapatillas"
                />
            </nav>

            <div className="containerCart">
                <Cartwidget />
            </div>
        </header>
    )
}

export default NavBar;