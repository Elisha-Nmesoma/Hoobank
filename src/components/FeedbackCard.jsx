import React from "react";
import styles, { layout } from "../style"
import {quotes} from "../assets"
import {feedback} from "../constants"
function FeedbackCard() {
    return (
        <section id="feedback" className={`${layout.section} sm:justify-start justify-center items-center sm:items-start w-full relative z-1 flex-wrap`}>
           { feedback.map((feedbacks, index) =>(
            <div className={`py-12 px-10 -mt-4 mb-4 mr-5 md:mr-10 rounded-[20px] max-w-[370px] feedback-card`}>
                <img src={quotes} /> 
                <h4 className={` text-poppins text-[18px] font-normal  leading-[32px] text-left w-[90%]`} style={index === 1 ? { marginBottom: '52px', marginTop: '52px' } : {marginBottom: '40px', marginTop:'40px'}}>{feedbacks.content}</h4>
                <div  className="flex items-center">
                    <img src={feedbacks.img} className="w-[48px] h-[48px]" />
                    <div className="ml-3">
                        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white text-left">{feedbacks.name}</h4>
                        <p className={styles.paragraph}>{feedbacks.title}</p>
                    </div>
                </div>
            </div>
           ))}
            

        </section>
    )
}
export default FeedbackCard