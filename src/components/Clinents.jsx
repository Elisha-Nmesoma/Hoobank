import React from "react";
import styles, { layout } from "../style";
import { airbnb, binance, coinbase, dropbox } from "../assets"

function Clients() {
    return (
        <section id="clients" className={`flex items-center justify-around flex-wrap w-[100%] gap-3.5 `}>
            <div className={styles.imgContainer}>
                <img src={airbnb} alt="airbnb"  />
            </div>

            <div  className={styles.imgContainer}>
                <img src={binance} alt="binance"  />
            </div>

            <div  className={styles.imgContainer}>
                <img src={coinbase} alt="coinbase"  />
            </div>

            <div  className={styles.imgContainer}>
                <img src={dropbox} alt="dropbox"  />
            </div>


        </section>
    )
}
export default Clients