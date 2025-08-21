import { Link, useLocation } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { AuthButton } from '@/components/auth/AuthButton';

export const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mt-4 h-14 rounded-xl glass-nav flex items-center justify-between px-3 sm:px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-white">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-glass-primary border border-glass-border text-white tracking-tight font-semibold">
              L
            </span>
            <span className="hidden sm:block text-sm tracking-tight font-semibold">Luup</span>
          </Link>
          
          <nav className="flex items-center gap-1 sm:gap-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm transition ${
                isActive('/') 
                  ? 'text-white bg-glass-secondary' 
                  : 'text-secondary hover:text-white hover:bg-glass-primary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/feed"
              className={`px-3 py-2 rounded-lg text-sm transition ${
                isActive('/feed') 
                  ? 'text-white bg-glass-secondary' 
                  : 'text-secondary hover:text-white hover:bg-glass-primary'
              }`}
            >
              Feed
            </Link>
            <Link
              to="/explore"
              className={`px-3 py-2 rounded-lg text-sm transition ${
                isActive('/explore') 
                  ? 'text-white bg-glass-secondary' 
                  : 'text-secondary hover:text-white hover:bg-glass-primary'
              }`}
            >
              Explore
            </Link>
            <Link
              to="/profile"
              className={`px-3 py-2 rounded-lg text-sm transition ${
                isActive('/profile') 
                  ? 'text-white bg-glass-secondary' 
                  : 'text-secondary hover:text-white hover:bg-glass-primary'
              }`}
            >
              Profile
            </Link>
          </nav>
          
          <div className="flex items-center gap-2">
            <Link
              to="/upload"
              className="cta-button inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm text-white"
            >
              <Plus size={16} />
              <span>Upload</span>
            </Link>
            <AuthButton />
          </div>
        </div>
      </div>
    </header>
  );
};