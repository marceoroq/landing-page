import Image from "next/image";

export const SocialProof = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-semibold text-gray-900 mb-12">
          More than 25,000 teams use Collabs
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          <Image
            src="/unsplash.svg"
            className="h-9"
            width={200}
            height={36}
            alt="unsplash logo"
          />
          <Image
            src="/notion.svg"
            className="h-9"
            width={200}
            height={36}
            alt="notion logo"
          />
          <Image
            src="/intercom.svg"
            className="h-9"
            width={200}
            height={36}
            alt="intercom logo"
          />
          <Image
            src="/descript.svg"
            className="h-9"
            width={200}
            height={36}
            alt="descript logo"
          />
          <Image
            src="/grammarly.svg"
            className="h-9"
            width={200}
            height={36}
            alt="grammarly logo"
          />
        </div>
      </div>
    </section>
  );
};
