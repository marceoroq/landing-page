import Image from "next/image";
import { MessageSquareIcon } from "lucide-react";
import { FaCheck } from "react-icons/fa";
import { GoImage } from "react-icons/go";

const featuresList = [
  "Free Consulting With Expert Saving Money",
  "Online Banking",
  "Investment Report Every Month",
  "Saving Money For The Future",
  "Online Transaction",
];

export const BenefitsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-32">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-10">
            <h2 className="text-5xl font-bold text-gray-900 leading-[60px]">
              What Benefit Will
              <br />
              You Get
            </h2>

            <div className="flex flex-col gap-7">
              {featuresList.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-5 tracking-tight"
                >
                  <div className="flex w-8 h-8 bg-primary justify-center items-center rounded-full">
                    <FaCheck className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-black text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src="/computer.png"
              alt="Laptop with dashboard"
              width={450}
              height={529}
              className="rounded-lg justify-self-end"
            />
            <div className="bg-[#74C9A9] h-10 w-10 rounded-lg z-10 flex items-center justify-center absolute top-64 right-[472px] -rotate-[14deg]">
              <GoImage className="text-white size-5" />
            </div>
            <Image
              className="absolute top-32 right-0 translate-x-1/2"
              width={138}
              height={70}
              src="/total-income.png"
              alt=""
            />
            <Image
              className="absolute -bottom-8 left-0"
              width={302}
              height={68}
              src="/money-card.png"
              alt=""
            />
            <Image
              className="absolute top-8 -left-4"
              width={304}
              height={82}
              src="/amanda-card.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
