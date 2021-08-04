import React, { useState } from 'react'

import style from './Card.module.css'



function Card() {
    const [countFollowers, setCountFollowers] = useState(100500);
    const [btnFollowers, setBtnFollowers] = useState(false);
    const [btnColor, setBtnColor] = useState('colorBtnBlue');
    const addFollowers = () => {
        setCountFollowers(prevState => (btnFollowers ? prevState - 1 : prevState + 1));
        setBtnFollowers(prevState => (!prevState));
        setBtnColor(prevState => (prevState === 'colorBtnBlue' ? 'colorBtnGreen' : 'colorBtnBlue'))
    }

    return (
        <div className={style.card}>
            <div className={style.backgroundImg}></div>
            <img className={style.ava} src='https://randomuser.me/api/portraits/lego/1.jpg' />

            <div className={style.body}>
                <div className={style.tweets}>
                    <div>
                        <span>777</span>
                    </div>
                    <div>
                        <span>TWEETS </span>
                    </div>
                </div>
                <div className={style.followers}>
                    <div>
                        <span>{countFollowers.toLocaleString("en-US")}</span>
                    </div>
                    <div>
                        <span>FOLLOWERS </span>
                    </div>
                </div>
            </div>

            <div className={style.button}>
                <button className={btnColor} onClick={addFollowers}>{btnFollowers ? 'FOLLOWING' : 'FOLLOW'}</button>
            </div>
        </div>
    );
}

export default Card;
