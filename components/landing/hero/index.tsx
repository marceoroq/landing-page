import Image from "next/image";
import {
  Check,
  Database,
  MessageSquareIcon,
  PlayCircleIcon,
} from "lucide-react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { HiOutlinePlayCircle } from "react-icons/hi2";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto from-emerald-50 to-blue-50 py-24">
      <div className="mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl lg:text-[80px] tracking-normal font-bold text-gray-900 leading-[1.1] mb-6">
                We're here to
                <br />
                Increase your
                <br />
                Productivity
              </h1>
              <Image width={480} height={26} alt="" src="/vector-32.svg" />
            </div>
            <p className="text-black text-lg max-w-md">
              Let's make your work more organize and easily using the Taskio
              Dashboard with many of the latest features in managing work every
              day.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <Button className="bg-primary text-lg font-normal hover:bg-emerald-600 text-white px-8 py-8 rounded-full">
                Try free trial
              </Button>
              <Button
                variant="ghost"
                className="flex text-lg items-center gap-3 px-8 py-8 bg-transparent rounded-full"
              >
                <Image width={38} height={38} alt="" src="/Play.svg" />
                View Demo
              </Button>
            </div>
          </div>
          <div className="relative -top-10 w-fit justify-self-end">
            <div className="w-[410px] h-[526px] rounded-2xl relative">
              <Image width={410} height={526} alt="" src="/hero-image.svg" />
              <div className="bg-amber-300 h-12 w-12 rounded-lg z-10 flex items-center justify-center absolute top-8 -right-8 rotate-12">
                <Database className="text-white size-5" />
              </div>
              <div className="bg-indigo-700 h-10 w-10 rounded-lg z-10 flex items-center justify-center absolute top-44 -left-14 -rotate-[14deg]">
                <Check className="text-white size-5" />
              </div>
              <div className="bg-[#FFAA94] h-10 w-10 rounded-lg z-10 flex items-center justify-center absolute -bottom-8 right-14 rotate-[14deg]">
                <MessageSquareIcon className="text-white size-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
