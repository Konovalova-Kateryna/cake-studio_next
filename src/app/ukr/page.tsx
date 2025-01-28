import styles from "../page.module.css";
import { Dessert } from "../../components/desert";
// import { getDeserts } from '../../servises/api-service'
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";
import { Assortment } from "@/components/assortment/assortment";

export default async function Home() {
  
  
 
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      {/* <Assortment/> */}
       
       <Footer/>
      
    </main>
  );
}
