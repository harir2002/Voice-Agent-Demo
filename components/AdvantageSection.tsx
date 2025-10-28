
import React from 'react';

// Icons for the section
const AccuracyIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const IntegrationIcon = () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" /></svg>
);
const DeploymentIcon = () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
const VoiceIcon = () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
);
const ScalabilityIcon = () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-9-5.197m0-3.303A4.002 4.002 0 0112 5.5a4 4 0 011.5 7.653" /></svg>
);
const InsightsIcon = () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" /></svg>
);

const advantageData = [
    {
        icon: <AccuracyIcon />,
        title: "Unmatched Accuracy",
        description: "Our AI voice agents leverage state-of-the-art natural language processing to achieve over 95% intent recognition, ensuring your customers are understood correctly every time."
    },
    {
        icon: <VoiceIcon />,
        title: "Hyper-Realistic Voice",
        description: "Engage customers with voices so natural, they won't believe it's AI. Our agents handle conversations with human-like empathy, intonation, and interruption handling."
    },
    {
        icon: <IntegrationIcon />,
        title: "Seamless Integration",
        description: "Effortlessly connect our AI solutions with your existing CRM, EMR, and other business systems. Our flexible API ensures a smooth and painless integration process."
    },
    {
        icon: <DeploymentIcon />,
        title: "Rapid Deployment",
        description: "Go live in weeks, not months. Our streamlined onboarding process and pre-built industry models allow you to start seeing a return on your investment faster than ever."
    },
    {
        icon: <ScalabilityIcon />,
        title: "Scalability on Demand",
        description: "Instantly scale your operations to handle any call volume, from a handful to millions, without hiring or training new staff. Never miss a customer call again."
    },
    {
        icon: <InsightsIcon />,
        title: "Actionable Insights",
        description: "Unlock a goldmine of data from your customer conversations. Get real-time analytics on call sentiment, trends, and performance to make smarter business decisions."
    }
];

const AdvantageSection: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          The Unbeatable <span className="text-brand-red">SBA Info Solutions</span> Advantage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantageData.map((item, index) => (
            <div key={index} className="bg-brand-gray p-8 rounded-xl border border-gray-700/50 flex flex-col items-center text-center">
              <div className="text-brand-red mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 flex-grow">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
