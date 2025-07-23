import React from 'react';
import { motion, useAnimation, useInView, type Variants } from 'framer-motion';
import { useRef, useEffect } from 'react';

const experienceData = [
 {
  id: 1,
  role: 'Digital and AI Intern',
  company: 'Devonshire Wessex',
  duration: 'June 2025 - Present',
  description: 'Focused on building, integrating, and training intelligent AI chatbots tailored to website content and user behavior, enhancing digital interaction and delivering contextual, human-like responses.',
}

  
];

const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Pamantasan ng Lungsod ng Valenzuela',
    duration: '2023- Present',
  },
  {
    id: 2,
    degree: 'Senior High School (STEM Strand)',
    institution: 'Malinta National High School Senior High',
    duration: '2021 - 2023',
    },
  {
    id: 3,
    degree: 'Junior High School',
    institution: 'Malinta National High School',
    duration: '2017 - 2021',
  },
];

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.8, ease: 'easeOut' } 
  }
};

interface GlassCardProps {
  children: React.ReactNode;
  i: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, i }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={cardVariant}
      initial="hidden"
      animate={controls}
      custom={i}
      className="glass-card hover:scale-[1.03] active:scale-[0.98] transition-transform duration-300"
    >
      {children}
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section className="min-h-screen px-4 py-20 flex flex-col items-center bg-transparent relative">
      {/* Decorative blur orbs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/20 blur-[180px] rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-400/30 blur-[160px] rounded-full z-0 animate-pulse" />

      <h1 className="text-4xl font-bold mb-16 text-center text-white relative z-10 animate-fade-in">
        Experience & Education
      </h1>

      <div className="max-w-5xl w-full space-y-16 relative z-10">
        {/* Experience */}
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-white border-b border-white/20 w-fit">
            Experience
          </h2>
          <div className="space-y-8">
            {experienceData.map((exp, i) => (
              <GlassCard key={exp.id} i={i}>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white/90">{exp.role}</h3>
                  <p className="text-indigo-300 font-medium">{exp.company}</p>
                  <p className="text-sm text-white/70 mb-4">{exp.duration}</p>
                  <p className="text-white/80">{exp.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-white border-b border-white/20 w-fit">
            Education
          </h2>
          <div className="space-y-8">
            {educationData.map((edu, i) => (
              <GlassCard key={edu.id} i={i}>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white/90">{edu.degree}</h3>
                  <p className="text-indigo-300 font-medium">{edu.institution}</p>
                  <p className="text-sm text-white/70">{edu.duration}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      <style >{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1rem;
          box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Experience;