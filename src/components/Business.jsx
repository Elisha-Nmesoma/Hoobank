import React from "react";
import styles, { layout } from "../style"
import { features } from "../constants"
import Button from "./Button"

function Business() {
    return (
        <section id="features" className={`${layout.section} `}>
            <div className={`${layout.sectionInfo} flex-1`}>
                <h2 className={`${styles.heading2} text-left`}>
                    You do the business, <br className="hidden sm:block" />
                    we'll handle the money.
                </h2>
                <p className={`${styles.paragraph}`}>
                    With the right credit card, you can improve your <br className="hidden ss:block" />
                    financial life by building credit, earning rewards and <br className="hidden ss:block" />
                    saving money. But with hundreds of credit cards on <br className="hidden ss:block" />
                    the market.
                </p>
                <Button />
            </div>
            <div className="mt-10 flex-1">
                {features.map((feature) => (
                    <div key={feature.id} className=" flex flex-1 items-center justify-start p-6 mb-6 rounded-3xl feature-card">

                        <div className={`relative w-[60px] h-[60px] bg-business rounded-full flex ${styles.flexCenter} `}>
                            <img src={feature.icon} className=" z-20" />
                        </div>

                        <div className="flex flex-1 flex-col items-start ml-3">
                            <h3 className={`font-poppins font-semibold mb-1 text-[18px]`}>{feature.title}</h3>
                            <p className=
                               {`font-poppins font-normal text-dimWhite text-[16px] leading-[26px] text-left flex-wrap pr-4`}>
                                {feature.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Business