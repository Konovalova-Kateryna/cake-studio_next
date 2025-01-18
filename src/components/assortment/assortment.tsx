import Link from "next/link";
import Image from "next/image";
import Icon from "../icon";
import './assortment.css';
import { AssortmentCard } from "./assortment-card";
import { getDeserts } from "@/servises/api-service";

export const Assortment = async() => {
const desserts= await getDeserts()

    return (
        <section className="px-5 w-full text-center">
            <h2 className=" bg-black text-white px-5 lg:px-[60px] py-[10px] lg:py-5 font-black text-xl lg:text-[48px] leading-2 tracking-[3px] uppercase text-center inline-block mb-[60px] lg:mb-[100px]">Дивись наш асортимент</h2>
<ul className="flex justify-between mb-[80px] lg:flex-col lg:items-baseline lg:w-[230px]">
                <li className="assortment__btn"><Link href=''>
                    <Icon name='icon-makaroon' className="assortment__btn-icon"/>
                    <h3 className="assortment__btn-title">макарунси</h3>
                </Link></li>
                
                <li className="assortment__btn"><Link href=''>
                    <Icon name='icon-donut' className="assortment__btn-icon" />
                    <h3 className="assortment__btn-title">пончики</h3>
                </Link></li>
                <li className="assortment__btn"><Link href=''>
                    <Icon name='icon-cupcake' className="assortment__btn-icon" />
                    <h3 className="assortment__btn-title">капкейки</h3></Link></li>
            </ul>
            
            <ul>
                {desserts.map((dessert:any, index:number)=>{
                    return <li key={dessert._id}>
                    <AssortmentCard className={`${index%3===0?'bg-blue-bg':index%3===1?'bg-pink-bg':'bg-secondary-bg'}`} dessert={dessert}/>
                    </li>
                })}
            </ul>

        </section>
    )
}