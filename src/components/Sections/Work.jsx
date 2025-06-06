import { useTheme } from '@/contexts/ThemeContext';
import ProjectCard from '@/components/Projects/ProjectCard';
import { projects } from '@/constants/projects';
import { projectRoutes } from '@/constants/navigation';
import { scrollToProjects } from '@/utils/scroll';
import heroPhoto from '@/assets/images/header/abstract_hero_purple.webp';
import heroPhotoFallback from '@/assets/images/header/abstract_hero_purple.jpg';
import heroPhotoDark from '@/assets/images/header/abstract_hero_purple_dark.webp';
import heroPhotoDarkFallback from '@/assets/images/header/abstract_hero_purple_dark.jpg';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Work({ setActiveTab }) {
  const { darkMode } = useTheme();
  const router = useRouter();
  const handleProjectClick = (projectId) => {
    if (typeof setActiveTab === 'function') {
      setActiveTab(projectId);
      const route = projectRoutes[projectId];
      if (route) {
        router.push(route);
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[55vh]">
        <Image
          src={darkMode ? heroPhotoDark.src : heroPhoto.src}
          alt="Abstract header with lines and matte noise"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          onError={(e) => {
            if (darkMode) {
              e.target.src = heroPhotoDarkFallback.src;
            } else {
              e.target.src = heroPhotoFallback.src;
            }
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className={`text-2xl md:text-2xl mb-4 ${
            darkMode ? "text-white" : "text-black"
          }`}>
            I'm Hanh (Anna) product designer based in NYC.
          </h1>
          <p className={`text-xl md:text-2xl max-w-2xl ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            I specialize in connecting teams and turning complex systems into intuitive user experiences.
          </p>
          <div className="mt-8">
            <button onClick={scrollToProjects}>
              <i className={`fas fa-arrow-down text-2xl animate-bounce cursor-pointer ${
                darkMode ? "text-white" : "text-black"
              }`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div id="projects" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-8 py-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleProjectClick(project.id)}
          />
        ))}
      </div>
    </div>
  );
}