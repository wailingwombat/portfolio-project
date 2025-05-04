import { useTheme } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Wombat from '@/components/ui/Wombat';

export default function Footer() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <footer className="bg-[#000000] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <p className="text-base max-w-md">
            If you want to talk more about my work, get in touch (especially if you also like wombats)! 
            You can also find me on these social platform.
          </p>
          
          <div className="flex flex-col space-y-2">
            <a href="https://www.linkedin.com/in/annanguyen42/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:text-gray-300 flex items-center gap-3 text-base">
              <i className="fab fa-linkedin text-xl w-6"></i>
              <span>annanguyen42</span>
            </a>
            <a href="https://github.com/wailingwombat" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:text-gray-300 flex items-center gap-3 text-base">
              <i className="fab fa-github text-xl w-6"></i>
              <span>wailingwombat</span>
            </a>
            <a href="https://dribbble.com/anna_nguyen" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:text-gray-300 flex items-center gap-3 text-base">
              <i className="fab fa-dribbble text-xl w-6"></i>
              <span>anna_nguyen</span>
            </a>
            <a href="https://www.are.na/anna-nguyen-0rkqu6uzk-q/channels" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:text-gray-300 flex items-center gap-3 text-base">
              <span className="flex items-center text-xs w-6">
                <i className="fas fa-asterisk"></i>
                <i className="fas fa-asterisk ml-1"></i>
              </span>
              <span>are.na</span>
            </a>
          </div>

          <Wombat />
          <div className="flex flex-col items-center gap 4"><ThemeToggle /></div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} Designed & Developed by Anna Nguyen
        </div>
      </div>
    </footer>
  );
}