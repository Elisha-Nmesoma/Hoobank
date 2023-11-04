import React from "react";
import styles , {layout} from "../style"
import {bill, google, apple} from "../assets"

function Billing() {
    return (
        <section id="product" className={`${layout.section} ${layout.sectionReverse}`}>
            <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10`}>
                <img src={bill} alt="bill" className="w-[100%] h-[100%] relative z-[5]" />
            </div>

            <div className={`${layout.sectionInfo} flex-1`}>
                <h2 className={`${styles.heading2} text-left`}>
                    Easily control your <br className="hidden sm:block" />
                    billing & invoicing.
                </h2>
                <p className={`${styles.paragraph} `}>
                    We consider the payment methods you'll offer your <br className="hidden ss:block" />
                    customers when you start your business. This is an <br className="hidden ss:block" />
                    important part of managing your business cash <br className="hidden ss:block" />
                    flow and meeting your customer's needs.
                </p>
                <div className={`${styles.flexCenter} gap-10  sm:pt-10 pt-4 `}>
                <img src={google} />
                <img src={apple} />
                </div>
            </div>
        </section>
    )
}
export default Billing