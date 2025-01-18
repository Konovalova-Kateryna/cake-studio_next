import NextLink from "next/link";
import Image from "next/image";
import "./hero.css"
import heroImg from "../../../public/macaroons.jpg"


export const Hero = () => {
    return (
        <section className="w-full pt-11 pb-20 lg:pt-[63px] lg:pb-[268px] px-5 lg:px-0 text-center lg:h-[866px] lg:text-center border-b-2 border-black">
            <div className=" lg:inline-block lg:text-start lg:w-[994px] lg:h-[535px] relative">
                <div className="w-full flex justify-center mb-[38px] lg:mb-0 lg:relative">
                    <Image src={heroImg} alt="macaroons" width={320} height={530} className="bg-image" /></div>
                <h1 className=" text-shadow lg:relative lg:pt-[160px] px-1 z-20 font-black text-[60px] lg:text-[200px] lg:flex uppercase tracking-[5px] mb-6 lg:mb-11">Десер<span className="hero-title-end">ти</span></h1>
                <p className=" font-roboto font-normal text-md lowercase leading-2  lg:text-[35px] mb-[30px] lg:mb-11 ">твоя насолода на свята і будні</p>
                <NextLink className="inline-block py-5 lg:py-[14px] text-center w-full lg:w-[190px] border-solid border-2 border-black font-segoe uppercase font-normal text-md tracking-widest max-w-[320px]" href="">обирай</NextLink>
            </div>

        </section>
    )
}