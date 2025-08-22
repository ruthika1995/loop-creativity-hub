import { useState } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/lib/supabase';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md glass-card border-glass-border">
        <DialogHeader>
          <DialogTitle className="text-white text-center">Welcome to Luup</DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4 text-white" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        
        <div className="mt-4">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#ffffff',
                    brandAccent: 'rgba(255,255,255,0.8)',
                    brandButtonText: '#000000',
                    defaultButtonBackground: 'rgba(255,255,255,0.05)',
                    defaultButtonBackgroundHover: 'rgba(255,255,255,0.1)',
                    defaultButtonBorder: 'rgba(255,255,255,0.1)',
                    defaultButtonText: '#ffffff',
                    dividerBackground: 'rgba(255,255,255,0.1)',
                    inputBackground: 'rgba(255,255,255,0.05)',
                    inputBorder: 'rgba(255,255,255,0.1)',
                    inputBorderHover: 'rgba(255,255,255,0.2)',
                    inputBorderFocus: 'rgba(255,255,255,0.3)',
                    inputText: '#ffffff',
                    inputPlaceholder: 'rgba(255,255,255,0.4)',
                  },
                  space: {
                    spaceSmall: '4px',
                    spaceMedium: '8px',
                    spaceLarge: '16px',
                    labelBottomMargin: '8px',
                    anchorBottomMargin: '4px',
                    emailInputSpacing: '4px',
                    socialAuthSpacing: '4px',
                    buttonPadding: '10px 15px',
                    inputPadding: '10px 15px',
                  },
                  fontSizes: {
                    baseBodySize: '13px',
                    baseInputSize: '14px',
                    baseLabelSize: '14px',
                    baseButtonSize: '14px',
                  },
                  fonts: {
                    bodyFontFamily: `'Space Grotesk', ui-sans-serif, system-ui`,
                    buttonFontFamily: `'Space Grotesk', ui-sans-serif, system-ui`,
                    inputFontFamily: `'Space Grotesk', ui-sans-serif, system-ui`,
                    labelFontFamily: `'Space Grotesk', ui-sans-serif, system-ui`,
                  },
                  borderWidths: {
                    buttonBorderWidth: '1px',
                    inputBorderWidth: '1px',
                  },
                  radii: {
                    borderRadiusButton: '8px',
                    buttonBorderRadius: '8px',
                    inputBorderRadius: '8px',
                  },
                },
              },
              className: {
                container: 'auth-container',
                button: 'auth-button',
                input: 'auth-input',
              },
            }}
            providers={['google']}
            redirectTo={`${window.location.origin}/feed`}
            onlyThirdPartyProviders
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};