import React from "react";
import styles, { layout } from "../style"
import Button from "./Button";
import { card } from "../assets"
function CardDeal() {
    return (
        <section className={`${layout.section}`}>
            <div className={`${layout.sectionInfo} flex-1`}>
                <h2 className={`${styles.heading2} text-left`}>
                    Find a better card deal <br className="hidden sm:block" />
                    in few easy steps
                </h2>
                <p className={`${styles.paragraph}`}>
                    We've been researching and comparing credit <br />
                    cards for over 15 years. You can easily compare <br />
                    more than 270 Australian credit cards using our free <br />
                    tools. When you find one that suits, we'll take you <br />
                    securely to the bank's website.
                </p>
                <Button />
            </div>

            <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 flex-1`}>
                <img src={card} alt="card" className="w-[100%] h-[100%] relative z-[5]" />
            </div>
        </section>
    )
}
export default CardDeal