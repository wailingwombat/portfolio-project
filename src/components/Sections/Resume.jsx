'use client';

import { useTheme } from '../../contexts/ThemeContext';
import resumeContent from '../../data/resumeContent.json';
import { FaFigma, FaSketch, FaCode, FaPython, FaUniversalAccess } from 'react-icons/fa';
import { BsPencilSquare, BsPeople, BsSearch, BsFileText } from 'react-icons/bs';
import { DiCss3, DiHtml5 } from 'react-icons/di';
import Button from '../ui/Button';

// Reusable highlighted text component
const HighlightedText = ({ text, highlights }) => {
  const { darkMode } = useTheme();
  
  const segments = text.split(new RegExp(`(${highlights.join('|')})`, 'g'));
  
  return segments.map((segment, index) => (
    highlights.includes(segment) ? (
      <span key={index} className={`font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
        {segment}
      </span>
    ) : (
      <span key={index} className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
        {segment}
      </span>
    )
  ));
};

// Experience Item component
function ExperienceItem({ title, company, location, period, achievements }) {
  const { darkMode } = useTheme();
  return (
    <div className={`${darkMode ? "bg-[#3A3F42]" : "bg-white"} p-6 rounded-lg shadow-sm mb-6`}>
      <h3 className="text-base md:text-lg text-[#279A7D] font-bold mb-1">{title}</h3>
      <div className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
        {company} • {period} {location && `| ${location}`}
      </div>
      <ul className="space-y-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start">
            <span className={`${darkMode ? "text-gray-300" : "text-gray-600"} mr-2`}>•</span>
            <div className={darkMode ? "text-gray-300" : "text-gray-600"}>
              <span className={`${darkMode ? "text-white" : "text-gray-700"} font-bold`}>{achievement.title}</span>
              <span className="mx-2">»</span>
              <span className="block ml-0 mt-1">
                <HighlightedText 
                  text={achievement.content}
                  highlights={achievement.highlights || []}
                />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Skills section component
function Skills({ skills }) {
  const { darkMode } = useTheme();
  const skillsWithIcons = [
    { icon: <BsPencilSquare className="w-4 h-4" />, skill: "Wireframing" },
    { icon: <FaFigma className="w-4 h-4" />, skill: "Prototyping in Figma" },
    { icon: <FaSketch className="w-4 h-4" />, skill: "Sketch" },
    { icon: <FaCode className="w-4 h-4" />, skill: "Adobe Creative Suite" },
    { icon: <BsPeople className="w-4 h-4" />, skill: "User interviews" },
    { icon: <BsSearch className="w-4 h-4" />, skill: "Usability testing" },
    { icon: <BsFileText className="w-4 h-4" />, skill: "Survey writing" },
    { icon: <FaPython className="w-4 h-4" />, skill: "Basic Python" },
    { icon: <DiHtml5 className="w-4 h-4" />, skill: "HTML" },
    { icon: <DiCss3 className="w-4 h-4" />, skill: "CSS" },
    { icon: <FaUniversalAccess className="w-4 h-4" />, skill: "Accessibility troubleshooting" },
  ];

  return (
    <div className={`${darkMode ? "bg-[#3A3F42]" : "bg-white"} p-6 rounded-lg shadow-sm mb-6`}>
      <div className="flex flex-wrap gap-3">
        {skillsWithIcons.map((item, index) => (
          <span
            key={index}
            className={`${
              darkMode ? "bg-[#282828] text-gray-300" : "bg-gray-50 text-gray-600"
            } px-6 py-3 rounded-full flex items-center gap-2`}
          >
            {item.icon}
            <span>{item.skill}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// Education section component
function Education({ education }) {
  const { darkMode } = useTheme();
  return (
    <div className={`${darkMode ? "bg-[#3A3F42]" : "bg-white"} p-6 rounded-lg shadow-sm mb-6`}>
      {education.map((item, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl text-[#279A7D] font-bold mb-1">{item.degree}</h3>
          <div className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            {item.school} • {item.period}
          </div>
          <div className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>{item.major}</div>
          {item.minor && <div className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>{item.minor}</div>}
        </div>
      ))}
    </div>
  );
}

// Main Resume component
export default function Resume() {
  const { darkMode } = useTheme();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-end mt-4 mb-4">
        <a href="/resume.pdf" download="hanh_nguyen_resume_may_2025.pdf">
          <Button
            text="Download PDF"
            icon={<i className="fas fa-download"></i>}
          />
        </a>
      </div>

      <div className="mb-8">
        <h1 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-4 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}>
          Career Summary
        </h1>
        <div className={`${darkMode ? "bg-[#3A3F42]" : "bg-white"} p-6 rounded-lg shadow-sm`}>
          <div className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            <HighlightedText 
              text={resumeContent.careerSummary.content}
              highlights={resumeContent.careerSummary.highlights}
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className={`text-3xl font-bold mb-4 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}>
          Skills
        </h2>
        <Skills skills={resumeContent.skills} />
      </div>

      <div className="mb-8">
        <h2 className={`text-lg md:text-xl lg:text-2xl font-bold mb-4 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}>
          Experience
        </h2>
        {resumeContent.experience.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>

      <div className="mb-8">
        <h2 className={`text-3xl font-bold mb-4 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}>
          Education
        </h2>
        <Education education={resumeContent.education} />
      </div>
    </div>
  );
}