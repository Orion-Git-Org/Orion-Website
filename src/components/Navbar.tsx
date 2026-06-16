import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const logoSrc = `${import.meta.env.BASE_URL}Orion_Logo_Alternate.svg`;

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `font-['Inter'] font-medium text-sm tracking-tight transition-colors duration-200 ${
      isActive
        ? 'text-[#4EDEA3] border-b-2 border-[#10B981] pb-1'
        : 'text-[#B9C8DE] hover:text-[#4EDEA3]'
    }`;
  };

  return (
    <nav className="w-full top-0 sticky z-50 bg-[#131313] shadow-none border-b border-[#353534]/15">
      <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
        <Link to="/" className="flex items-center gap-3 text-xl font-bold tracking-tighter text-[#E5E2E1]">
          <img
            src={logoSrc}
            alt=""
            aria-hidden="true"
            className="h-9 w-9 shrink-0 object-contain"
          />
          <span>Orion</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={getLinkClass('/')}>
            Features
          </Link>
          <Link to="/team" className={getLinkClass('/team')}>
            Team
          </Link>
          <Link to="/docs" className={getLinkClass('/docs')}>
            Documentation
          </Link>
        </div>
        <Link to="/contact" className="bg-[#10B981] text-[#003824] px-5 py-2 rounded-lg font-['Inter'] font-semibold text-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-200">
          Contact
        </Link>
      </div>
    </nav>
  );
}
