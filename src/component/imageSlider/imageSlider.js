import { useState } from "react";
import "./imageSlider.css";
import "../images/icon-close.svg";

function ImageSlider({ imgs, thumbnail, zoom, existzoom }) {
    const [currentImage, UpdateImage] = useState(() => 0);
    function handleClickTh(e) {
        let imgAlt = e.target.alt;
        console.log(imgAlt[imgAlt.length - 1]);
        UpdateImage(parseInt(imgAlt[imgAlt.length - 1]));
    }
    function handleClickIm() {
        zoom(true);
    }
    function moveForward() {
        console.log("working");
        UpdateImage(e => (++e) % imgs.length);
    }
    function moveBackward() {
        UpdateImage(e => {
            let i = (--e) % imgs.length
            return i == -1 ? imgs.length - 1 : i;
        });
    }
    function handleExist() {
        zoom(false);
    }
    return (
        <div className={"sliderContainer"}>
            <div className="close" onClick={handleExist}><svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd" /></svg></div>
            <div className="backward" onClick={moveBackward}><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg></div>
            <div className="showBar" ><img src={imgs[currentImage]} alt={"image shown"} className="showImg" onClick={handleClickIm} /></div>
            <div className="slideBar" >
                {thumbnail.map((el, i) => {
                    return <div key={"div"+i} className={(i === currentImage ? "imgContainer active" : "imgContainer")}><img key={i} src={el} alt={"image number" + i} onClick={handleClickTh} className={"slideImgs" + (i == currentImage ? " activeI" : "")} /></div>
                })}
            </div>
            <div className="forward" onClick={moveForward}><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg></div>
        </div>);

}
export default ImageSlider;