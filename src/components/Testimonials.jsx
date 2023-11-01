import React from "react";
import styles, { layout } from "../style"

function Testimonials() {
    return (
        <section className={`${layout.section} text-left`}>
            <div className={`flex-1 ${styles.flexCenter}`}>
                <h4 className={`${styles.heading2}`}>
                    What people are <br />
                    saying about us
                </h4>
            </div>

            <div className={`flex items-center flex-1  mt-5`}>
                <p className={`${styles.paragraph}`}>
                    Everything you need to accept card payments <br />
                    and grow your business anywhere on the planet.
                </p>
            </div>
        </section>
    )
}
export default Testimonials