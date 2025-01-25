"use client"

import React from 'react';
import {useForm, SubmitHandler} from "react-hook-form";
import { category } from '@/commons/constants';
import {createDesert} from '@/servises/api-service'

type FormData = {
    titleUa: string;
    titleEng: string;
    price: number;
    category: string;
    description: string;
    photo: FileList;
};  


const AddDesertComponent = () => {
    const {register, handleSubmit} = useForm<FormData>();

// const onSubmit=(data:FormData)=>{
//     createDesert({
//         titleUa: data.get('titleUa'),
//         titleEng: data.get('titleEng'),
//         price: data.get('price'),
//         category: data.get('category'),
//         description: data.get('description'),
//         image: data.get('photo')
//     })
//     console.log(data)
// }

const onSubmit:SubmitHandler<FormData>=async(data)=>{
    try{
        console.log("submiting form with data", data);

        const formData=new FormData();
        Object.entries(data).forEach(([key, value])=>{
            if(key==="photo"){
            formData.append(key, value[0]);}
            else{
                formData.append(key, value as string);
            }
        });
        const response=await createDesert(formData);        
        console.log("Desert created",response);

} catch(error:any){
    console.log("Error creating desert:",error.message);
}
};

  return (
    <div>
      <h1>Add Desert</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="titleUa">
              TitleUa
              <input type="text" placeholder="TitleUa"
              {...register("titleUa",{required:true})} />
            </label>
          </div>
          <div>
            <label htmlFor="titleEng">
              TitleEng
              <input type="text" placeholder="TitleEng" {...register("titleEng",{required:true})}  />
            </label>
          </div>
          <div>
            <label htmlFor="price">
              Price
              <input type="number" placeholder="price" {...register("price",{required:true})} />
            </label>
          </div>
          <div>
            <label>
              Обрати категорію
              <select {...register("category",{required:true})} >
                {category.uaCategory.map(item => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="description">
              Description
              <input type="text" placeholder="description" {...register("description",{required:true})}  />
            </label>
          </div>
          <div>
            <label htmlFor="photo">
              Photo
              <input type="file" placeholder="photo" {...register("photo",{required:true})}  />
            </label>
          </div>
          <button type="submit">Зберегти</button>
        </div>
      </form>     
    </div>
  );
};

export default AddDesertComponent;