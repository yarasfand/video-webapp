"use client"
import { useState } from "react";
import MegaScroll from "react-mega-scroll";
import { Background } from "./components/background";
import StoreProvider from "./StoreProvider";
import ScrollingPage from "./components/scrollingPage";

export default function Home() {
  return (
    <main className="w-[100vw] relative` bg-zinc-400 h-[100vh]">
      <StoreProvider>
        <Background/>
        <ScrollingPage/>
      </StoreProvider>
    </main>
  );
}
