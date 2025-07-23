import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="flex justify-center border-b border-gray-100">
      <div className="max-w-6xl px-4 py-4 flex flex-1 items-center justify-between">
        <div className="text-2xl font-bold text-emerald-500">Biccas</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-900 font-medium">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Product
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            FAQ
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Blog
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            About Us
          </a>
        </nav>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6">
          Get Started
        </Button>
      </div>
    </header>
  );
};
