import React from 'react';
import { Rocket, MapPin, Target, Star, Leaf } from 'lucide-react';

const defaultSteps = [
  {
    title: 'Discover',
    description: 'Lorem ipsum dolor sit amet consectetur. Montes rhoncus at eu sed pellentesque eu egestas donec.',
    icon: <Rocket strokeWidth={1.5} className="w-8 h-8" />
  },
  {
    title: 'Explore',
    description: 'Aenean mattis porttitor elit varius euismod sed. Elementum nibh id sagittis varius.',
    icon: <MapPin strokeWidth={1.5} className="w-8 h-8" />
  },
  {
    title: 'Connect',
    description: 'Faucibus in dolor sed sagittis ipsum blandit adipiscing. Faucibus tellus adipiscing et nec suspendisse.',
    icon: <Target strokeWidth={1.5} className="w-8 h-8" />
  },
  {
    title: 'Collaborate',
    description: 'Consectetur leo egestas morbi quisque sit placerat adipiscing placerat.',
    icon: <Star strokeWidth={1.5} className="w-8 h-8" />
  },
  {
    title: 'Build',
    description: 'Lorem ipsum dolor sit amet consectetur. Montes rhoncus at eu sed pellentesque eu egestas donec.',
    icon: <Leaf strokeWidth={1.5} className="w-8 h-8" />
  }
];

const ProcessTimeline = ({ steps = defaultSteps, hideHeader = false }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-16">
      {!hideHeader && (
        <div className="text-center mb-16">
          <h4 className="text-[10px] font-headline tracking-widest text-[#e8602e] uppercase mb-2">Our Process</h4>
          <h2 className="text-4xl md:text-5xl font-display uppercase chrome-text">How We Work</h2>
        </div>
      )}

      <div className="w-full overflow-x-auto hide-scrollbar pb-4 pt-8">
        <div className="min-w-[900px] max-w-[1200px] mx-auto relative">
          
          <svg viewBox="0 0 840 320" className="w-full h-auto drop-shadow-2xl">
            <defs>
              <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1a0a05" />
                <stop offset="10%" stopColor="#e8602e" />
                <stop offset="90%" stopColor="#e8602e" />
                <stop offset="100%" stopColor="#1a0a05" />
              </linearGradient>
            </defs>

            <path 
              d="M 70 100 
                 A 70 70 0 0 0 210 100 
                 A 70 70 0 0 1 350 100 
                 A 70 70 0 0 0 490 100 
                 A 70 70 0 0 1 630 100 
                 A 70 70 0 0 0 770 100" 
              fill="none" 
              stroke="#2A2D35" 
              strokeWidth="16" 
            />

            <path 
              d="M 0 170 
                 C 30 170, 40 100, 70 100 
                 A 70 70 0 0 1 210 100 
                 A 70 70 0 0 0 350 100 
                 A 70 70 0 0 1 490 100 
                 A 70 70 0 0 0 630 100 
                 A 70 70 0 0 1 770 100 
                 C 800 100, 810 30, 840 30" 
              fill="none" 
              stroke="url(#timelineGradient)" 
              strokeWidth="16" 
              strokeLinecap="round" 
            />

            {steps.map((step, i) => {
              const cx = 140 + i * 140;
              return (
                <g key={i}>
                  <foreignObject x={cx - 24} y={100 - 24} width="48" height="48">
                    <div className="flex items-center justify-center w-full h-full text-white/90">
                      {step.icon}
                    </div>
                  </foreignObject>

                  <foreignObject x={cx - 70} y={190} width="140" height="120">
                    <div className="flex flex-col items-center text-center w-full h-full">
                      <h3 className="text-[15px] font-headline uppercase tracking-wider mb-2 text-white">
                        {step.title}
                      </h3>
                      <p className="text-[11px] text-white/50 leading-relaxed font-body px-1">
                        {step.description}
                      </p>
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default ProcessTimeline;
