import { IoStarSharp } from "react-icons/io5";
import { PiPulseBold } from "react-icons/pi";
import { FiPieChart, FiCommand } from "react-icons/fi";

const features = [
  {
    Icon: PiPulseBold,
    title: "Publishing",
    description:
      "Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand.",
  },
  {
    Icon: FiPieChart,
    title: "Analytics",
    description: "Analyze your performance and create gorgeous reports.",
  },
  {
    Icon: FiCommand,
    title: "Engagement",
    description: "Quickly navigate and engage with your audience.",
  },
];

export const SupportSection = () => {
  return (
    <section className="bg-[#F9F8FE]">
      <section className="max-w-7xl mx-auto py-[60px] bg-[#F9F8FE] px-4">
        <div className="grid lg:grid-cols-9 gap-7">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div className="flex flex-col gap-7">
              <h2 className="text-5xl leading-[58px] font-semibold text-gray-900">
                How we support our <br /> pratner all over the world
              </h2>
              <p className="text-gray-400 leading-7 pr-2">
                SaaS become a common delivery model for many business
                application, including office software, messaging software,
                payroll processing software, DBMS software, management software
              </p>
            </div>

            <div className="flex gap-12">
              <div className="flex flex-col items-start gap-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <IoStarSharp
                      key={star}
                      className="w-7 h-7 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div>
                  <span className="font-bold">4.9</span> / 5 rating
                </div>
                <div className="font-semibold text-lg text-gray-400">
                  databricks
                </div>
              </div>

              <div className="flex flex-col items-start gap-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <IoStarSharp
                      key={star}
                      className="w-7 h-7 fill-yellow-400 text-yellow-400 last:fill-gray-400"
                    />
                  ))}
                </div>
                <div>
                  <span className="font-bold">4.8</span> / 5 rating
                </div>
                <div className="font-semibold text-lg text-gray-400">
                  Chainalysis
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7 lg:col-span-4">
            {features.map(({ Icon, title, description }) => (
              <div key={title} className="flex items-start gap-6">
                <div className="w-[60px] h-[60px] flex justify-center items-center bg-white aspect-square shadow-2xl">
                  <Icon className="w-7 h-7 text-emerald-500 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-[28px]">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-lg">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};
