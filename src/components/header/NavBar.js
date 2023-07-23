import Brand from "./brand";
import Itemlistcontainer from "./Itemlistcontainer";
import CartWidget from "./Cartwidget";

const NavBar = () => {

    return (
        <ContextCart>
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

                <ContainerCart />
            </header>
        </ContextCart>
    )
}

export default NavBar;