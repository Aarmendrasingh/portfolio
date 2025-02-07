import React from 'react';
import { Code, Palette, Terminal, Cpu, Globe, Layers } from 'lucide-react';

export function About() {
  const skills = [
    { icon: Code, label: 'Frontend Development', color: 'text-teal-400' },
    { icon: Terminal, label: 'Backend Development', color: 'text-blue-400' },
    { icon: Palette, label: 'UI/UX Design', color: 'text-indigo-400' },
    { icon: Cpu, label: 'System Architecture', color: 'text-purple-400' },
    { icon: Globe, label: 'Cloud Services', color: 'text-pink-400' },
    { icon: Layers, label: 'Database Design', color: 'text-orange-400' }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 gradient-text reveal">
          About Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 reveal">
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with a keen eye for design and a love for creating
              seamless digital experiences. With 5 years of experience in the industry, I've had the
              privilege of working on diverse projects that have shaped my expertise in both frontend
              and backend development.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((Skill, index) => (
                <div
                  key={index}
                  className="skill-card p-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Skill.icon className={`w-6 h-6 ${Skill.color} animate-float`} />
                  <span className="text-gray-300 mt-2 block">{Skill.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group reveal">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl blur opacity-50 
              group-hover:opacity-75 transition duration-1000 animate-pulse"></div>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="./jk4.jpg"
                alt="Working on laptop"
                className="w-full transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
