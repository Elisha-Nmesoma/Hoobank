import React from "react";
import styles from "../style"
import { discount, robot } from "../assets"
import GetStarted from "./GetStarted"

function Hero() {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
            <div className={`flex-1 flex justify-start items-start flex-col `}>
                <div className="flex flew-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                    <p className={`${styles.paragraph} ml-2 text-white`}>
                        <span>20% </span>
                        <span className={`${styles.paragraph}`}>Discount For</span> {" "}
                        <span>1 Month</span> {" "}
                        <span className={`${styles.paragraph}`}>Account</span>
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-[100%]">
                    <h1 className={`flex-1 font-poppins font-semibold ss:text-[76px] text-[52px] text-white ss:leading-[100px] leading-[75px] ${styles.start} flex-col `}>
                        The Next
                        <br className="sm:block hidden" /> {" "}
                        <span className="text-gradient">
                            Generation
                        </span>
                    </h1>
                    <div className="ss:flex hidden md:mr-4 mr-0">
                        <GetStarted />
                    </div>
                </div>
                <h1 className=
                    {` font-poppins font-semibold text-left' ss:text-[65px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full ${styles.start}`}>
                    Payment Method.
                </h1>
                <p className={`${styles.paragraph} max-width-[470px] mt-5`}>
                    Our team of experts uses a methodology to identify
                    <br />
                    the credit cards most likely to fit your needs. We
                    <br /> examine annual percentage rates, annual fees.
                </p>
            </div>
            <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative `}>
                <img src={robot} alt="robot" className="w-[100%] h-[100%] relative z-[5]" />
                <div className="absolute z=[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
                <div className="absolute z=[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full"></div>
                <div className="absolute z=[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
            </div>
            <div className={`${styles.flexCenter} ss:hidden`}>
                <GetStarted />
            </div>
        </section>
    )
}
export default Hero