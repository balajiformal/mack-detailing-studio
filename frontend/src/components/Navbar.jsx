
function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white">
      <h1 className="text-3xl font-bold text-orange-500">
        MACK DETAILING STUDIOS
      </h1>

      <ul className="flex items-center gap-9">
        <li>
          <a href="/Home" className="transition-colors duration-300 hover:text-orange-500 hover:border-b-4 border-orange-500">
            Home
          </a>
        </li>

        <li>
          <a href="/About" className="transition-colors duration-300 hover:text-orange-500 hover:border-b-4 border-orange-500">
            About
          </a>
        </li>

        <li>
          <a href="/Services" className="transition-colors duration-300 hover:text-orange-500 hover:border-b-4 border-orange-500">
            Services
          </a>
        </li>

        <li>
          <a href="/Gallery" className="transition-colors duration-300 hover:text-orange-500 hover:border-b-4 border-orange-500">
            Gallery
          </a>
        </li>

        <li>
          <a href="/Reviews" className="transition-colors duration-300 hover:text-orange-500 hover:border-b-4 border-orange-500">
            Reviews
          </a>
        </li>

        <li>
          <a href="/Contact" className="transition-colors duration-300 hover:text-orange-500 hover:border-b-4 border-orange-500">
            Contact
          </a>
        </li>

        <li>
          <a href="/Contact" className="transition-colors duration-300 hover:text-orange-500 hover:backdrop-invert-100 rounded-b-xl">
            Book Now
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
