export default function Cart({totalCost}){
    return(
        <footer>
            <h2 className="ok">Your Cart: </h2>
            <h3 className="ok">total cart Amount:{totalCost}</h3>
        </footer>
    );
}