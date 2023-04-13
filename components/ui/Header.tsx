import { BeakerIcon, PencilIcon } from "@heroicons/react/24/solid";

interface HeaderProps {
  title: string;
}

/**
 *
 * @todo
 * Logo
 * Editable Title
 * Project Actions: Save, Share
 * User Actions: Avatar, Dropdown, Logout, User Profile
 */

const Header = ({ title = "Some Movie" }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-sa-black px-4 py2 border-b border-sa-gray">
      {/* LOGO HERE */}
      <nav className="w-full flex items-center justify-between h-20">
        <h1 className="flex ml-2 text-white text-lg leading-6">
          {title}
          <PencilIcon className="h-6 w-6 border border-sa-gray p-1 rounded-sm ml-2" />
        </h1>
        <div>
          <button className="bg-sa-transparent border border-sa-gray rounded py-1 px-4 text-sa-gray font-bold">
            Save Draft
          </button>
          <button className="bg-sa-green border-none rounded py-1 px-4 text-sa-black font-bold">
            Share Draft
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
