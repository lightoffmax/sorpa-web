'use client';

import { Button } from "@nextui-org/react";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";


export default function Poem() {
    const {user} = useAuth();
    console.log({user})
    return (
        <div className="flex flex-col item-center justify-center mx-auto max-w-[300px]">
        <h1 className="mx-auto text-xl text-bold underline">
            Узник
        </h1>
        <p className={`pt-[20px]  ${ user ? '' : 'hidden'}`}>
            Сижу за решеткой в темнице сырой.<br/>
            Вскормленный в неволе орел молодой,<br/>
            Мой грустный товарищ, махая крылом,<br/>
            Кровавую пищу клюет под окном,<br/>
            Клюет, и бросает, и смотрит в окно,<br/>
            Как будто со мною задумал одно.<br/>
            Зовет меня взглядом и криком своим<br/>
            И вымолвить хочет: «Давай улетим!<br/>
            Мы вольные птицы; пора, брат, пора!<br/>
            Туда, где за тучей белеет гора,<br/>
            Туда, где синеют морские края,<br/>
            Туда, где гуляем лишь ветер… да я!..»

        </p>
         <Button as={Link} 
         href="/login"
         className={user ? 'hidden' : 'max-w-auto m-auto'}
          color='primary'
          >Выпустить узника</Button>
        </div>

       
        
    );
};

