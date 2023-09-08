import "./header.css";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import cart from "../images/icon-cart.svg";
import { useState, useEffect, useRef } from 'react';
function Header({ count, ui, hideContent ,showContent}) {
    const [width, changeWidth] = useState(() => window.innerWidth);
    const sideBar = useRef(null);
    const items = ["Collections", "Men", "Women", "Content"];
    useEffect(() => {
        window.addEventListener("resize", () => {
            changeWidth(window.innerWidth);
        });
        return window.removeEventListener("resize", () => {
            changeWidth(window.innerWidth);
        });
    }, []);
    return (
        <div className="headerContainer">
            <ul className="ulHeader">

                {(width <= 800) && (
                    <>
                        <li style={{ height: `100vh`, zIndex: 30 }} className="sideBar" ref={sideBar}>
                            <ul>
                                <li className="closeSideBar" onClick={() => { sideBar.current.style.width = "0px"; showContent() }}>
                                    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd" />
                                    </svg>
                                </li>
                                {items.map((el, i) => <li className="items" key={"item" + i}>{el}</li>)}
                            </ul>
                        </li>
                        <li className="tripleLines" onClick={() => { sideBar.current.style.width = "250px"; hideContent() }}>
                            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd" />
                            </svg>
                        </li>
                    </>)}
                <li><img src={logo} alt="logo" /></li>
                {(width >= 800) && items.map((el, i) => <li className="items" key={"item" + i}>{el}</li>)}
                <li className="align" key={"iteme"}></li>
                <li onClick={ui} className="cartIcon" key={"itemee"}><img src={cart} alt="cart" />{count ? (<span className="num">{count}</span>) : ""}</li>
                <li className="avatar" key={"itemeee"}><img src={avatar} alt="avatar" /></li>
            </ul>
        </div>
    );
}


export default Header;