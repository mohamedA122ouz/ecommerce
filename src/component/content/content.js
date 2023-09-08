import { useState, forwardRef } from "react";
import ImageSlider from "../imageSlider/imageSlider";
import "./content.css";
import MyButton from "../controller/myButton";


const Content = forwardRef(({ data, handleClick }, ref) => {
    const [zoom, changeZoom] = useState(() => false);
    let price = data.price - data.price * (data.discout / 100);

    return (
        <div className="content">
            {(zoom && <div className="absoluteContainer"> <ImageSlider imgs={data.imgs} thumbnail={data.thambnail} zoom={changeZoom} /></div>)}
            <ImageSlider imgs={data.imgs} thumbnail={data.thambnail} zoom={changeZoom} />
            <div className="details">
                <div className="company" >{data.company.toUpperCase()}</div>
                <div className="title"><h1>{data.title}</h1></div>
                <div className="description">{data.description}</div>
                <div className="priceDtails">
                    {(() => {
                        if (data.discout > 0) {
                            return (
                                <div className="priceDetails">
                                    <div className="discountDetails">
                                        <span className="PayPrice">{data.currancy + (price).toFixed(2)}</span>
                                        <span className="discount">{data.discout}%</span>
                                    </div>
                                    <div className="priceBeforeDiscount">{data.currancy + data.price.toFixed(2)}</div>
                                </div>);
                        }
                        else {
                            return <>
                                <div className="priceDetails">
                                    <span className="PayPrice">{data.currancy + data.price}</span>
                                </div>
                            </>
                        }
                    })()
                    }
                </div>
                <MyButton maxAmount={data.amount} handleClick={handleClick} ref={ref} />
            </div>
        </div>
    );
});


export default Content;