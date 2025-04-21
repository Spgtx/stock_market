import { Bell, Mail, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full h-16 px-6 bg-white flex items-center justify-between shadow-sm">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="text-xl font-bold text-gray-800">GoStock</span>
      </div>

      {/* Middle: Search bar */}
      <div className="flex-1 max-w-md mx-4">
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md">
          <Search className="h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search stocks, crypto, funds..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
      </div>

      {/* Right: Icons and Profile */}
      <div className="flex items-center gap-4">
        <Mail className="h-5 w-5 text-gray-600 hover:text-black cursor-pointer" />
        <Bell className="h-5 w-5 text-gray-600 hover:text-black cursor-pointer" />

        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-800">Aristonga</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
