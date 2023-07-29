import Brand from "./brand";
import Itemlistcontainer from "./Itemlistcontainer";
import CartWidget from "./Cartwidget";

const NavBar = () => {

    return (
            <header>
                <div className="containerBrand">
                    <Brand />
                </div>

                <nav className="containerItemList">
                    <Itemlistcontainer 
                        itemUno = "Procesadores"
                        itemDos = "Motherboards"
                        itemTres = "Fuentes"
                        itemCuatro = "Placas de video"
                    />
                </nav>

                <div className="containerCart">
                    <CartWidget />
                </div>
            </header>
    )
}

export default NavBar;