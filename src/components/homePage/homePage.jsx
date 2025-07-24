
const Navbar = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between rounded-b-lg">
      <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
        <div className="flex items-center mb-2">
          {/* Your actual logo */}
          <img
            src="http://googleusercontent.com/file_content/1" // URL of your logo
            alt="Find Your Services Logo"
            className="h-10 w-auto mr-3 rounded-md" // Adjust height and margin as needed
          />
          <h1 className="text-3xl font-extrabold text-gray-900">Find Your Services</h1>
        </div>
        <p className="text-lg font-medium text-gray-600 italic">"Let us find 4U"</p>
      </div>

      {/* Navigation Bar */}
      <nav className="mt-4 sm:mt-0">
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition duration-200">Home</a>
          </li>
          <li>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition duration-200">Services</a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition duration-200">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;