'use client';

import { useState } from "react";

type DesertProps = {
    name: string;
    subscrible: string;
    price: number;
    
};

type LikeState = 'unset' | 'Liked' | 'dislike';

export function Dessert({ name, subscrible, price }: DesertProps) {
    const [likeState, setLikeState] = useState<LikeState>('unset');
    const toggleLike=()=>{if (likeState==='unset') {setLikeState('Liked')} else {setLikeState('unset')}}
    
    return (
        <div>
            <h2>{name} <button type="button" onClick={toggleLike}>{likeState }</button></h2>
            <p>{subscrible}</p>
            <p>{price }</p>
        </div>
    )
}