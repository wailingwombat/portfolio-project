import { useTheme } from '@/contexts/ThemeContext';
import profilePhoto from '@/assets/images/about/profile_photo.png';
import { sortByLastName } from '@/utils/sortByLastName';

function FriendLink({ name, role, company, url, platform }) {
  const { darkMode } = useTheme();
  
  return (
    <div className="mb-12">
      <h3 className={`text-xl font-medium mb-1 ${darkMode ? "text-white" : "text-[#333]"}`}>
        {name}
      </h3>
      <p className={`text-base mb-2 ${darkMode ? "text-gray-300" : "text-[#666]"}`}>
        {role} @ {company}
      </p>
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-base inline-flex items-center ${
          darkMode ? "text-white hover:text-gray-300" : "text-[#333] hover:text-[#666]"
        }`}
      >
        {platform.toLowerCase()} 
        <i className="fas fa-arrow-up-right-from-square ml-1 text-sm"></i>
      </a>
    </div>
  );
}

export default function About() {
  const { darkMode } = useTheme();

  const friends = [
    {
      name: "Gabby Hoefer",
      role: "UX Researcher",
      company: "IBM",
      url: "https://gabbyhoefer.com/",
      platform: "gabbyhoefer.com"
    },
    {
      name: "Kellie Chan",
      role: "Senior Product Manager",
      company: "IBM",
      url: "https://www.linkedin.com/in/kelliesmith2/",
      platform: "linkedin"
    },
    {
      name: "Lucy Chen",
      role: "Senior Product Designer",
      company: "IBM",
      url: "https://www.lucychen.design/",
      platform: "lucychen.design"
    },
    {
      name: "Eugene To",
      role: "Senior Product Designer",
      company: "IBM",
      url: "https://www.eugeneto.com/",
      platform: "eugeneto.com"
    },
    {
      name: "Colm Eccles",
      role: "Product Designer",
      company: "Meta",
      url: "https://www.linkedin.com/in/colmeccles/",
      platform: "linkedin"
    },
    {
      name: "Colleen Corkery",
      role: "Staff UX Researcher",
      company: "Tik Tok",
      url: "http://colleencorkery.com",
      platform: "colleencorkery.com"
    },
    {
      name: "Jenny Dinh",
      role: "Front-end Developer",
      company: "PocketHealth",
      url: "https://www.linkedin.com/in/thatjenster-jennydinh/",
      platform: "linkedin"
    },
    {
      name: "Sonal Starr",
      role: "Senior UX Researcher",
      company: "IBM",
      url: "https://www.linkedin.com/in/sonalstarr/",
      platform: "linkedin"
    },
    {
      name: "Cate Wilcox",
      role: "Advisory UX Designer",
      company: "IBM",
      url: "https://www.linkedin.com/in/cate-wilcox-79402971/",
      platform: "linkedin"
    },
    {
      name: "Dani Kennedy",
      role: "Director of UX and Product",
      company: "Everday Health",
      url: "https://www.linkedin.com/in/danikennedy/",
      platform: "linkedin"
    },
    {
      name: "Varsha Radhakrishnan",
      role: "Senior Product Manager",
      company: "Gusto",
      url: "https://www.linkedin.com/in/varsha-radhakrishnan-5277b828/",
      platform: "linkedin"
    },
    {
      name: "Maddie Bar",
      role: "Designer",
      company: "IBM",
      url: "https://www.linkedin.com/in/barr-madison/",
      platform: "linkedin"
    },
    {
      name: "Annette Tassone",
      role: "Design Principal",
      company: "IBM",
      url: "https://www.linkedin.com/in/annette-tassone-uxleader/",
      platform: "linkedin"
    },
    {
      name: "Siddiq⁯⁯⁯⁯ Nasar",
      role: "Design & Media Lead",
      company: "IBM",
      url: "https://www.kidsidna.com/",
      platform: "snasar.com"
    },
    {
      name: "Cynthia Vincent",
      role: "Senior UX Designer & Researcher",
      company: "IBM",
      url: "https://www.linkedin.com/in/cynthiavincent/",
      platform: "linkedin"
    },
    {
      name: "Miranda Kiang",
      role: "Senior Product Designer",
      company: "Procore Technologies",
      url: "https://www.linkedin.com/in/miranda-kiang-680b3524/",
      platform: "linkedin"
    },
    {
      name: "Elie Ohana",
      role: "Statistical Analyst",
      company: "RAND Corporation",
      url: "https://www.linkedin.com/in/elie-ohana-0b05914b/",
      platform: "linkedin"
    },
    {
      name: "David Yen",
      role: "Co-Founder",
      company: "Kaleidoscope",
      url: "https://www.linkedin.com/in/david-y-e-n/",
      platform: "linkedin"
    },
    {
      name: "Arin Clement",
      role: "User Experience Designer",
      company: "IBM",
      url: "https://www.linkedin.com/in/arinclement/",
      platform: "linkedin"
    },
    {
      name: "Nimsi G",
      role: "UX Researcher",
      company: "IBM",
      url: "https://www.linkedin.com/in/nimsig/",
      platform: "linkedin"
    },
    {
      name: "Chi Lee",
      role: "Creative Director",
      company: "Zacht Studios",
      url: "https://www.linkedin.com/in/chilee22/",
      platform: "linkedin"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-24 px-4">
      <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
        <div className="w-full md:w-1/2">
          <img
            src={profilePhoto.src || profilePhoto}
            alt="Professional headshot in outdoor setting"
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className={`${darkMode ? "bg-[#3A3F42]" : "bg-white"} rounded-lg p-8 shadow-sm`}>
            <p className={`text-base md:text-lg ${darkMode ? "text-white" : "text-[#333]"} leading-relaxed mb-6`}>
              As a designer I believe in making intuitive and accessible designs. 
              I'm a storyteller first weaving in the needs of the user and business.
            </p>
            <p className={`text-base md:text-lg ${darkMode ? "text-white" : "text-[#333]"} leading-relaxed mb-6`}>
              I bring a research-driven perspective into my projects and can easily 
              communicate and collaborate with developers and stakeholders across teams. 
              I find it exciting to design functional, accessible solutions that are 
              scaled for a large number of people.
            </p>
            <p className={`text-base md:text-lg ${darkMode ? "text-white" : "text-[#333]"} leading-relaxed`}>
              When I am not designing you may find me taking street photos, making 
              crooked pots, or finding the next plant to add to my home
            </p>
          </div>
          <div className="mt-8 flex justify-start space-x-4">
            <SocialLink href="https://www.linkedin.com/in/annanguyen42/" icon="linkedin" />
            <SocialLink href="https://github.com/wailingwombat" icon="github" />
            <SocialLink href="https://dribbble.com/anna_nguyen" icon="dribbble" />
            <SocialLink href="https://www.are.na/anna-nguyen-0rkqu6uzk-q/channels" icon="arena" />
          </div>
        </div>
      </div>

      {/* Friends Section */}
      <div className="mt-24">
        <p className={`text-base md:text-lg mb-12 ${darkMode ? "text-gray-300" : "text-[#666]"}`}>
          People who shaped me as a designer and researcher. (This list has no order and it's not exhaustive!)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {sortByLastName(friends).map((friend, index) => (
            <div key={index} className="mb-6">
              <h3 className={`text-lg font-medium mb-1 ${darkMode ? "text-white" : "text-[#333]"}`}>
                {friend.name}
              </h3>
              <p className={`text-base mb-1 ${darkMode ? "text-gray-300" : "text-[#666]"}`}>
                {friend.role} @ {friend.company}
              </p>
              <a 
                href={friend.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-base inline-flex items-center transition-colors ${
                  darkMode ? "text-gray-300 hover:text-white" : "text-[#666] hover:text-[#333]"
                }`}
              >
                {friend.platform}
                <i className="fas fa-arrow-up-right-from-square ml-1 text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon }) {
  const { darkMode } = useTheme();
  
  // Convert icon name to display text
  const getDisplayText = (iconName) => {
    switch(iconName) {
      case 'linkedin': return 'LinkedIn';
      case 'github': return 'GitHub';
      case 'dribbble': return 'Dribbble';
      case 'arena': return 'Are.na';
      default: return iconName;
    }
  };
  
  return (
    <div className="relative group">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-2xl ${
          darkMode
            ? "text-white hover:text-gray-300"
            : "text-[#333] hover:text-[#666]"
        }`}
      >
        {icon === "arena" ? (
          <span className="flex items-center text-xs">
            <i className="fas fa-asterisk"></i>
            <i className="fas fa-asterisk ml-1"></i>
          </span>
        ) : (
          <i className={`fab fa-${icon}`}></i>
        )}
      </a>
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className={`px-2 py-1 text-xs rounded ${
          darkMode 
            ? "bg-white text-[#333]" 
            : "bg-[#333] text-white"
        } whitespace-nowrap`}>
          {getDisplayText(icon)}
        </div>
        {/* Triangle */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent ${
          darkMode
            ? "border-t-4 border-t-white"
            : "border-t-4 border-t-[#333]"
        }`}></div>
      </div>
    </div>
  );
}