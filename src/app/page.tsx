import Image from "next/image";
import { Button } from "@/components/ui/button";
import TypewriterTitle from "@/components/TypewriterTitle";
import { ArrowRight } from "lucide-react";
import Link from "next/link";




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
  
  <div className="mt-4"></div>

  <div className="flex justify-center">
  <Link href="/dashboard">
  <Button className="bg-green-800 hover:bg-green-700 text-white">Get Started
    <ArrowRight className="ml-2 w-6 h-6" strokeWidth={3}/>
  </Button>
  </Link>
 </div>
   </div>
   </div>
  );
}
