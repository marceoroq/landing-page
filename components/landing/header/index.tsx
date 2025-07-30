import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="flex justify-center my-5">
      <div className="max-w-[76rem] px-4 py-4 flex flex-1 items-center justify-between">
        <div className="text-5xl font-medium tracking-wide text-primary">
          Biccas
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a href="#" className="text-gray-900 scale-110 font-medium">
            Home
          </a>
          <a href="#" className="text-neutral-400 hover:text-gray-900">
            Product
          </a>
          <a href="#" className="text-neutral-400 hover:text-gray-900">
            FAQ
          </a>
          <a href="#" className="text-neutral-400 hover:text-gray-900">
            Blog
          </a>
          <a href="#" className="text-neutral-400 hover:text-gray-900">
            About Us
          </a>
        </nav>
        <div className="flex gap-3">
          <Button
            variant="ghost"
            className="text-base text-neutral-400 font-normal px-3 rounded-xl"
          >
            Login
          </Button>
          <Button className="text-base font-normal px-3 rounded-xl">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};
