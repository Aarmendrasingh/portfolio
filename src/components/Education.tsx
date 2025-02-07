import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Stanford University',
    location: 'Stanford, CA',
    period: '2018 - 2020',
    description: 'Specialized in Artificial Intelligence and Machine Learning'
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    school: 'MIT',
    location: 'Cambridge, MA',
    period: '2014 - 2018',
    description: 'Focus on Software Architecture and Web Technologies'
  }
];

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 gradient-text reveal">
          Education
        </h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="reveal"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="gradient-border">
                <div className="p-8 card-hover">
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 
                        flex items-center justify-center animate-float">
                        <GraduationCap className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3">{edu.degree}</h3>
                      <div className="text-gray-300 space-y-2 mb-4">
                        <p className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-teal-400" />
                          {edu.school}, {edu.location}
                        </p>
                        <p className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-teal-400" />
                          {edu.period}
                        </p>
                      </div>
                      <p className="text-gray-400">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}