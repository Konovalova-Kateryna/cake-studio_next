import Link from "next/link"
import Image from "next/image";
import NoFoto from "../../../public/NoPhoto.png";
import './assortment-card.css'
import Icon from "../icon";

interface AssortmentCardProps {
    dessert: {
        _id: string
        titleUa: string
        desctiption: string
        price: number
        imageURL: string
    },
    className:string
}


export const AssortmentCard = ({ dessert, className }:AssortmentCardProps) => {
    return (
        <div className={`${className}`}>
            <Link href='' className="assortment__product-item w-full max-w-[360px] px-7 py-5 grid gap-8 items-center text-black">
               {dessert.imageURL? (<Image className=' assortment__product-img  mx-auto' src={dessert.imageURL} width="320" height="320" alt={dessert.titleUa}/>):( <Image className='' src={NoFoto} width="320" height="320" alt={dessert.titleUa}/>)} 
               
                <h3 className="product-title text-md lg:text-[25px]">{dessert.titleUa }</h3>
                <p className="product-desctiption hidden">{dessert.desctiption}</p>
                <p className="product-price text-md font-segoe font-bold leading-2 lg:mb-0 text=[25px]">{dessert.price} грн</p>
                <button className=" self-end items-self-end products-like"><Icon className="fill-none w-12 h-12 stroke-black" name='icon-heart' /></button>
                <button className=" justify-self-end items-self-end products-bag"><Icon className="fill-none  w-12 h-12 stroke-black" name='icon-bag'/></button>
            </Link>

        </div>
        
    )
}