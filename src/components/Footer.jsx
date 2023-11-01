import React from "react";
import styles, { layout } from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";


function Footer() {
    return (
        <footer className="py-16">
            <div className=" flex flex-col md:flex-row md:items-start md:pt-0">
                <section className={` flex justify-start flex-col md:mt-[2%] flex-1 mr-10`}>
                    <img src={logo} alt="logo" className="w-[200px]" />
                    <p className={`${styles.paragraph} mt-5`}>
                     A new way to make payments<br />
                     easy, reliable and secure.</p>
                </section>

                <div className={`flex mb-8  md:flex-[1.5] w-full justify-between flex-row flex-wrap`}>
                    {footerLinks.map((footerLink) => (
                        <div key={footerLink.title} className={`flex flex-col flex-wrap flex-1 mt-10 text-left min-w-[150px]`}>
                            <h4 className="font-poppins text-[18px] font-medium flex flex-col justify-start">{footerLink.title}</h4>

                            {footerLink.links.map((link) => (
                                <ul>
                                    <li key={link.link} className="mt-4 list-none  ">
                                        <a href={link.link} className={` font-poppins font-normal text-dimWhite text-[16px] leading-[25px] cursor-pointer flex-1 mb-4 links`}>
                                            {link.name}
                                        </a>
                                    </li>
                                </ul>
                            ))}
                        </div>

                    ))}
                </div>
            </div>

            <div className={`border-t-[1px] border-t-[#3f3e45] pt-6 flex flex-col gap-6 md:flex-row items-center justify-center md:items-between md:justify-between`}>
                <h4 className="font-poppins text-[18px] font-medium">
                    2022 HooBank. All Rights Reserved.
                </h4>
                <div className="flex">
                    {socialMedia.map((media) => (
                        <div key={media.id} className="mr-6 md:mr-6">
                          <a href={media.link}>
                          <img src={media.icon} alt={media.id} />
                          </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}
export default Footer