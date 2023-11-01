import React from "react";
import styles, { layout } from "../style"
import Button from "./Button"

function CTA() {
    return (
        <section className={` my-[64px] flex flex-col sm:flex-row  ${styles.padding}  bg-black-gradient-2 rounded-3xl w-full`}>
            <div className="flex-1 " >
                <h4 className={`${styles.heading2} text-left md:mb-[18px]`}>Come try our service now!</h4>
                <p className={`${styles.paragraph} text-left`}>Everything you need to accept card payments and <br />
                 grow your business anywhere on the planet.</p>
            </div>
            <div className="flex items-center justify-center sm:justify-end ">
            <Button />
            </div>
        </section>
    )
}
export default CTA