import { Link } from 'react-router-dom';

export default function Footer() {
  const logoSrc = `${import.meta.env.BASE_URL}Orion_Logo_Alternate.svg`;

  return (
    <footer className="w-full mt-auto bg-[#0E0E0E] border-t border-[#353534]/15">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-lg font-black text-[#E5E2E1] mb-8 md:mb-0">
          <img
            src={logoSrc}
            alt=""
            aria-hidden="true"
            className="h-10 w-10 shrink-0 object-contain"
          />
          <span>Orion</span>
        </div>
        <div className="flex gap-10 mb-8 md:mb-0">
          <Link to="/" className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#B9C8DE] hover:text-[#10B981] transition-opacity duration-200">
            Features
          </Link>
          <Link to="/team" className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#B9C8DE] hover:text-[#10B981] transition-opacity duration-200">
            Team
          </Link>
          <Link to="/docs" className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#B9C8DE] hover:text-[#10B981] transition-opacity duration-200">
            Documentation
          </Link>
        </div>
      </div>
    </footer>
  );
}
