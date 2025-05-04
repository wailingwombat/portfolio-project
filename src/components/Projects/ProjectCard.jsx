import { useTheme } from '@/contexts/ThemeContext';
import Link from 'next/link';
import { projectRoutes } from '@/constants/navigation';
import { useRouter } from 'next/navigation';

export default function ProjectCard({ project, onClick }) {
  const { darkMode } = useTheme();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    const route = projectRoutes[project.id];
    if (route) {
      onClick(); // Update the active tab
      router.push(route); // Navigate to the project
    }
  };

  return (
    <Link
      href={projectRoutes[project.id]}
      onClick={handleClick}
      className={`block rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] ${
        darkMode ? "bg-[#3A3F42]" : "bg-white"
      }`}
    >
      <div className="relative">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-[300px] object-cover"
        />
        <div className="p-6 flex flex-col h-full justify-between">
          <div className="flex items-baseline gap-2 mb-2">
            <span 
              className="text-sm font-semibold"
              style={{ color: project.companyColor }}
            >
              {project.company}
            </span>
            <span className={`text-sm font-semibold ${
              darkMode ? "text-white" : "text-[#333]"
            }`}>
              {project.title}
            </span>
          </div>
          <p className={`text-lg md:text-xl font-semibold ${
            darkMode ? "text-gray-300" : "text-[#666]"
          } mt-2`}>
            {project.description}
          </p>
          <div className="mt-6 flex items-center gap-2">
            <span className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              {project.timeline}
            </span>
            <span className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              •
            </span>
            <span className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              {project.role}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}