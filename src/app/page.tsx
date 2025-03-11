import Image from "next/image";
import { Button } from "@/components/ui/button";
import TypewriterTitle from "@/components/TypewriterTitle";
export default function Home() {
  return (
   <div className ="bg-gradient-to-r from-gray-900 to-black min-h-screen">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
 <h1 className="font-semibold text-7xl text-center">
 <span className="text-white font-bold">AI </span>
  <span className ="text-green-800 font-bold">note taking </span>
  <span className="text-white font-bold">Assistant</span>
 </h1>
 <div className="mt-4"></div>
 <h2 className="font-semibold text-3xl text-center text-slate-700">
 <span className="whitespace-nowrap">
    <TypewriterTitle />
  </span>
  
 </h2>
 </div>
   </div>
  );
}
