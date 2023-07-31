const AddCantCart = (props) => {
    return(
        <div className="addCantCart">
            <span>Quiero:</span>
            <div>
                <button className="quitar">-</button>
                <span className="cantTxt"> {props.cant} unidades</span>
                <button className="aumentar">+</button>
            </div>
        </div>
    )   
}

export default AddCantCart; 