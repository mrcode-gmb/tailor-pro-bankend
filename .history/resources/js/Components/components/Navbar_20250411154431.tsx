
import React, { useState, useEffect } from 'react';

import { 
  Users, 
  Ruler, 
  Home, 
  Settings, 
  Search, 
  Menu, 
  X, 
  PlusCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavbarProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPath }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { label: 'Dashboard', icon: <Home className="w-5 h-5" />, path: 'dashboard' },
    { label: 'Clients', icon: <Users className="w-5 h-5" />, path: 'clients' },
    { label: 'Measurements', icon: <Ruler className="w-5 h-5" />, path: 'measurements' },
    { label: 'Settings', icon: <Settings className="w-5 h-5" />, path: 'settings' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6',
          scrolled ? 'glass-morphism shadow-sm backdrop-blur-lg' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="mr-2"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            )}
            <span className="text-xl font-display font-medium bg-clip-text text-transparent bg-gradient-to-r from-tailor-800 to-tailor-600 dark:from-tailor-200 dark:to-tailor-400">
              TailorMetrics
            </span>
          </div>

          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  variant={currentPath === item.path ? "default" : "ghost"}
                  className={(
                    "transition-all duration-300",
                    currentPath === item.path 
                      ? "bg-primary/10 text-primary hover:bg-primary/20" 
                      : "hover:bg-muted"
                  )}
                  onClick={() => onNavigate(item.path)}
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Button>
              ))}
            </nav>
          )}

          <div className="flex items-center space-x-3">
            <div className="relative w-full max-w-[200px]">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 bg-secondary/50 border-0 focus-visible:ring-1"
              />
            </div>
            
            <Button className="hidden md:flex items-center space-x-2">
              <PlusCircle className="w-4 h-4 mr-1" />
              <span>New Client</span>
            </Button>
            
            <div className="w-8 h-8 rounded-full bg-tailor-accent/30 flex items-center justify-center text-tailor-accent-foreground">
              <span className="text-xs font-semibold">TM</span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobile && (
        <div 
          className={(
            "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-300",
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div 
            className={(
              "fixed inset-y-0 left-0 z-50 w-3/4 max-w-xs bg-card shadow-xl transition-transform duration-300 ease-in-out",
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="p-4 border-b">
              <div className="text-xl font-display font-medium bg-clip-text text-transparent bg-gradient-to-r from-tailor-800 to-tailor-600 dark:from-tailor-200 dark:to-tailor-400">
                TailorMetrics
              </div>
            </div>
            
            <nav className="p-4 space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  variant={currentPath === item.path ? "default" : "ghost"}
                  className={(
                    "w-full justify-start transition-all duration-300",
                    currentPath === item.path 
                      ? "bg-primary/10 text-primary hover:bg-primary/20" 
                      : "hover:bg-muted"
                  )}
                  onClick={() => {
                    onNavigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Button>
              ))}
              
              <Button className="w-full justify-start mt-4">
                <PlusCircle className="w-4 h-4 mr-1" />
                <span>New Client</span>
              </Button>
            </nav>
          </div>
        </div>
      )}
      
      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
