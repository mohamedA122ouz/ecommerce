import { useRef, useState } from 'react';
import './App.css';
import Header from './component/header/header';
import Content from './component/content/content';
import img1 from "./component/images/image-product-1.jpg"
import img2 from "./component/images/image-product-2.jpg"
import img3 from "./component/images/image-product-3.jpg"
import img4 from "./component/images/image-product-4.jpg"
import th1 from "./component/images/image-product-1-thumbnail.jpg"
import th2 from "./component/images/image-product-2-thumbnail.jpg"
import th3 from "./component/images/image-product-3-thumbnail.jpg"
import th4 from "./component/images/image-product-4-thumbnail.jpg"
import Cart from './component/cart/cart';
let data = {//test obj
    id: 215,
    amount: 150,
    imgs: [img1, img2, img3, img4],
    thambnail: [th1, th2, th3, th4],
    company: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
    durable rubber outer sole, they’ll withstand everything the weather can offer.`,
    price: 250,
    currancy: "$",
    discout: 50
}
function App() {
    const [cart, changeCart] = useState(() => []);
    const [cartCard, showCart] = useState(() => false);
    const hide = useRef(null);
    const amount = useRef(1);
    data.discout = data.discout < 100 ? data.discout : 100;
    let price = data.price - data.price * (data.discout / 100);
    console.log(amount.current);
    function handleCart() {
        console.log("worked onClick");
        showCart((e) => {
            return !e;
        });
    }
    function AddtoCart(e) {
        changeCart((priv) => {
            console.log(priv);
            let back = priv.filter((el) => {
                return el.id !== data.id;
            });
            back.push({
                amount: amount.current,
                paymentPrice: (price * (amount.current)),
                id: data.id,
                title: data.title,
                price: price,
                img: data.thambnail[0],
                currancy: data.currancy
            });
            return back;
        });
    }
    function removeCart(id) {
        changeCart((priv) => {
            console.log(priv);
            let back = priv.filter((el) => {
                return el.id !== id;
            });
            return back;
        });
    }
    function itemsCount() {
        let count = amount.current * cart.length;
        return count;
    }
    function showContent() {
        hide.current.className = "absoluteContainer hideContent showContent";
        console.log("showContent work");
    }
    function hideContent() {
        hide.current.className = "absoluteContainer hideContent hideContent";
        console.log("hideContent work");
    }
    return (
        <>
            <div className='website'>
                <div className='absoluteContainer hideContentDiv showContent' ref={hide}></div>
                <Header count={itemsCount()} ui={handleCart} hideContent={hideContent} showContent={showContent} />
                <hr className="appHr" />
                {cartCard && <Cart cart={cart} remove={removeCart} />}
                <Content data={data} ref={amount} handleClick={AddtoCart} ui={handleCart} />
            </div>
        </>
    );

}

export default App;
