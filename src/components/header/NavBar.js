import Brand from "./Brand";
import ItemListContainer from "./Itemlistcontainer";
import CartWidget from "./Cartwidget";
import ContainerCart from "./ContainerCart";
import ContextCart from "./ContextCart";

const NavBar = () => {

    return (
        <ContextCart>
            <header>
                <div className="containerBrand">
                    <Brand />
                </div>

                <nav className="containerItemList">
                    <ItemListContainer 
                        itemUno = "Procesadores"
                        itemDos = "Motherboards"
                        itemTres = "Fuentes"
                        itemCuatro = "Placas de video"
                    />
                </nav>

                <div className="containerCart">
                    <CartWidget />
                </div>

                <ContainerCart />
            </header>
        </ContextCart>
    )
}

export default NavBar;