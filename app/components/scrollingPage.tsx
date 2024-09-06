"use client"
import { act, useEffect, useState } from "react";
import MegaScroll from "react-mega-scroll";
import { useAppDispatch } from "../state/hooks";
import { scrolledTo } from "../state/scroll.slice";

export default function ScrollingPage() {
    const [active, setActive] = useState(0);
    const dispatch = useAppDispatch();
    useEffect(() => {
        // console.log("Scrolled to ", active)
        dispatch(scrolledTo(active));
    }, [active])

    
    return <>
        <MegaScroll onChange={setActive} threshold={0.01}>
            <section className="relative z-10 w-1/2 h-1/2 flex flex-col justify-center text-center items-center bg-amber-500 m-auto">
                1
            </section>
            <section className="relative z-10 w-1/2 h-1/2 flex flex-col justify-center text-center items-center bg-green-500 m-auto">
                    2
                
            </section>
            <section className="relative z-10 w-1/2 h-1/2 flex flex-col justify-center text-center items-center bg-sky-500 m-auto">
                    3               
            </section>
        </MegaScroll>
    </>
}