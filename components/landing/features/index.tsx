import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Cloud, Users } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Collaboration Teams",
    description: "Here you can handle projects together with team virtually.",
    image: "/collaboration-card.svg",
  },
  {
    title: "Cloud Storage",
    description:
      "No need to worry about storage because we provide storage up to 2 TB.",
    image: "/cloud-card.svg",
  },
  {
    title: "Daily Analytics",
    description: "Analyze all the data you need in one dashboard.",
    image: "/analytics-card.svg",
  },
];

export const FeatureSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-32">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-[74px]">
          <h2 className="text-5xl font-semibold leading-[58px] text-gray-900">
            Our Features
            <br />
            you cab get
          </h2>
          <p className="text-gray-400 max-w-md">
            We offer a variety of interesting features that you can help
            increase yor productivity at work and manage your project easily
          </p>
          <Button className="bg-primary text-lg font-normal hover:bg-emerald-600 text-white px-8 py-8 rounded-full">
            Get Started
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ title, description, image }) => (
            <div key={title} className="border-0">
              <div className="flex flex-col gap-[30px]">
                <Image
                  alt={`${title} image`}
                  src={image}
                  width={364}
                  height={430}
                />
                <div className="flex flex-col gap-5">
                  <h3 className="text-3xl font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-lg">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
