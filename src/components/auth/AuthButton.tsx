import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { AuthModal } from './AuthModal';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AuthButton = () => {
  const { user, loading, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (loading) {
    return (
      <div className="h-9 w-20 rounded-lg bg-glass-primary animate-pulse" />
    );
  }

  if (!user) {
    return (
      <>
        <Button
          onClick={() => setShowAuthModal(true)}
          className="cta-button h-9 px-4 text-sm"
        >
          Sign In
        </Button>
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)} 
        />
      </>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 h-9 px-3 rounded-lg bg-glass-primary border border-glass-border hover:bg-glass-secondary transition-all">
          <img
            src={user.user_metadata?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`}
            alt="Avatar"
            className="h-6 w-6 rounded-full"
          />
          <span className="text-sm text-white hidden sm:block">
            {user.user_metadata?.full_name?.split(' ')[0] || 'User'}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-56 glass-card border-glass-border"
      >
        <div className="px-3 py-2">
          <p className="text-sm text-white font-medium">
            {user.user_metadata?.full_name || 'User'}
          </p>
          <p className="text-xs text-tertiary">
            {user.email}
          </p>
        </div>
        <DropdownMenuSeparator className="bg-glass-border" />
        <DropdownMenuItem asChild>
          <Link 
            to="/profile" 
            className="flex items-center gap-2 text-secondary hover:text-white cursor-pointer"
          >
            <User size={16} />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2 text-secondary hover:text-white cursor-pointer">
          <Settings size={16} />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-glass-border" />
        <DropdownMenuItem 
          onClick={signOut}
          className="flex items-center gap-2 text-secondary hover:text-white cursor-pointer"
        >
          <LogOut size={16} />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};