
import type { Sector } from './types';

// SVG Icons as React Components
const HealthcareIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.5,13.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5s0.2-1.1,0.6-1.5c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6c0.4,0.4,0.6,0.9,0.6,1.5s-0.2,1.1-0.6,1.5C21.6,13.3,21.1,13.5,20.5,13.5z M12,13.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5s0.2-1.1,0.6-1.5c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6c0.4,0.4,0.6,0.9,0.6,1.5s-0.2,1.1-0.6,1.5C13.1,13.3,12.6,13.5,12,13.5z M3.5,13.5c-0.6,0-1.1-0.2-1.5-0.6C1.6,12.4,1.4,11.9,1.4,11.4s0.2-1.1,0.6-1.5c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6c0.4,0.4,0.6,0.9,0.6,1.5s-0.2,1.1-0.6,1.5C4.6,13.3,4.1,13.5,3.5,13.5z M12,21c-4,0-7-1.3-8.8-3.7c-0.4-0.5-0.3-1.2,0.2-1.6c0.5-0.4,1.2-0.3,1.6,0.2C6.5,18.1,9,19,12,19s5.5-0.9,7-3.1c0.4-0.5,1.1-0.6,1.6-0.2c0.5,0.4,0.6,1.1,0.2,1.6C19,19.7,16,21,12,21z M12,5c-4,0-7-1.3-8.8-3.7c-0.4,0.5-0.3,1.2,0.2,1.6c0.5,0.4,1.2-0.3,1.6-0.2C6.5,7.9,9,7,12,7s5.5,0.9,7,3.1c0.4,0.5,1.1,0.6,1.6,0.2c0.5-0.4,0.6,1.1,0.2,1.6C19,6.3,16,5,12,5z"/></svg>
);
const BPOIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8zm-1-12h2v2h-2v-2zm0 4h2v6h-2v-6z"/></svg>
);
const KPOIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16h-2v-2h2v2zm0-4h-2V8h2v6zm-4-8V3.5L13.5 9H8z"/></svg>
);
const BFSIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-2-9h4v2h-2v2h2v2h-4v-4zm0-2h4v2h-4v-2z"/></svg>
);
export const CheckIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
);


export const SECTORS_DATA: Sector[] = [
    {
        id: 'healthcare',
        name: 'Healthcare',
        description: 'Automate appointments, medication reminders, and patient follow-ups with empathetic AI voice agents.',
        icon: HealthcareIcon,
        heroImage: 'https://picsum.photos/seed/healthcare/1200/400',
        pageDescription: 'Our AI Voice Agents for Healthcare are designed to streamline patient communication and administrative tasks. By handling routine calls, they free up your staff to focus on critical patient care. Enhance patient experience with 24/7 availability and instant, accurate responses to common queries.',
        chatDemo: [
            { sender: 'user', text: "Hello, I need to book a follow-up appointment with Dr. Evans.", timestamp: "9:30 AM" },
            { sender: 'ai', text: "Of course. I can help with that. Dr. Evans has openings next Tuesday at 10 AM and Thursday at 2 PM. Which time works for you?", timestamp: "9:30 AM" },
            { sender: 'user', text: "Thursday at 2 PM sounds great.", timestamp: "9:31 AM" },
            { sender: 'ai', text: "Excellent. I have scheduled your follow-up with Dr. Evans for this Thursday at 2 PM. You will receive a confirmation text shortly. Is there anything else I can assist you with today?", timestamp: "9:31 AM" },
            { sender: 'user', text: "No, that's all. Thank you!", timestamp: "9:32 AM" },
        ],
        features: ['24/7 Appointment Scheduling', 'Automated Patient Outreach', 'Advanced Interruption Handling', 'Secure & Compliant Interactions', 'Seamless EMR Integration'],
    },
    {
        id: 'bpo',
        name: 'BPO',
        description: 'Enhance customer support and operational efficiency with intelligent voice bots that resolve queries instantly.',
        icon: BPOIcon,
        heroImage: 'https://picsum.photos/seed/bpo/1200/400',
        pageDescription: 'Transform your Business Process Outsourcing services with AI. Our voice agents manage high volumes of customer interactions, from order tracking to technical support, with remarkable consistency and efficiency. Reduce wait times, improve first-call resolution, and scale your operations without increasing headcount.',
        chatDemo: [
            { sender: 'user', text: "Hi, I'm calling to check the status of my recent order, number 8675309.", timestamp: "11:05 AM" },
            { sender: 'ai', text: "I can certainly check on that for you. One moment... It looks like order 8675309 has been shipped and is scheduled for delivery tomorrow by 5 PM.", timestamp: "11:05 AM" },
            { sender: 'user', text: "Great! Can you send me the tracking link?", timestamp: "11:06 AM" },
            { sender: 'ai', text: "Absolutely. I've just sent the tracking information to the email address on file. Can I help with anything else?", timestamp: "11:06 AM" },
        ],
        features: ['Omnichannel Customer Support', 'Intelligent Call Routing', 'Advanced Interruption Handling', 'Reduced Operational Costs', 'Real-time Analytics & Reporting'],
    },
    {
        id: 'kpo',
        name: 'KPO',
        description: 'Leverage AI for complex data analysis, research tasks, and knowledge dissemination, freeing up your experts.',
        icon: KPOIcon,
        heroImage: 'https://picsum.photos/seed/kpo/1200/400',
        pageDescription: 'In Knowledge Process Outsourcing, expertise is key. Our AI voice agents act as intelligent assistants to your analysts, handling data gathering, report generation, and information verification. This allows your team to focus on high-value strategic analysis and decision-making, driving innovation and insight.',
        chatDemo: [
            { sender: 'user', text: "I need a summary of the Q3 performance report for Acme Corp.", timestamp: "3:15 PM" },
            { sender: 'ai', text: "Right away. The Q3 report for Acme Corp. shows a 15% increase in revenue, driven by the new product line. Net profit is up 8% quarter-over-quarter. Key challenges include supply chain delays. Would you like a detailed breakdown emailed to you?", timestamp: "3:16 PM" },
            { sender: 'user', text: "Yes, please. That would be perfect.", timestamp: "3:16 PM" },
            { sender: 'ai', text: "The detailed report has been sent to your inbox. Is there any other data I can pull for you?", timestamp: "3:17 PM" },
        ],
        features: ['Automated Data Collection', 'Natural Language Querying', 'Advanced Interruption Handling', 'Secure Information Handling', 'Integration with Knowledge Bases'],
    },
    {
        id: 'bfsi',
        name: 'BFSI',
        description: 'Provide secure, 24/7 banking and financial services, from balance inquiries to fraud alerts.',
        icon: BFSIcon,
        heroImage: 'https://picsum.photos/seed/bfsi/1200/400',
        pageDescription: 'The Banking, Financial Services, and Insurance sector demands security, accuracy, and availability. Our AI voice agents provide a secure front line for customer interactions, handling tasks like account balance checks, transaction history, and fraud reporting. Improve customer trust and satisfaction with instant, reliable service.',
        chatDemo: [
            { sender: 'user', text: "I've misplaced my credit card and need to report it lost.", timestamp: "8:22 PM" },
            { sender: 'ai', text: "I understand. I will immediately lock your card ending in 1234 to prevent any unauthorized transactions. A new card will be mailed to your address on file and should arrive within 5-7 business days. Is there anything else I can help with?", timestamp: "8:22 PM" },
            { sender: 'user', text: "Can you check for any recent transactions I might not recognize?", timestamp: "8:23 PM" },
            // FIX: Corrected a typo in the sender field from `ai'` to `'ai'`.
            { sender: 'ai', text: "Checking now... I see a charge for $12.50 at 'The Coffee Spot' 15 minutes ago. Does that sound correct?", timestamp: "8:23 PM" },
            { sender: 'user', text: "No, that was not me!", timestamp: "8:24 PM" },
            { sender: 'ai', text: "Thank you for confirming. I have flagged the transaction as fraudulent. You will not be liable for this charge. Your new card is on its way.", timestamp: "8:24 PM" },
        ],
        features: ['Secure Customer Authentication', '24/7 Fraud & Account Support', 'Advanced Interruption Handling', 'Personalized Financial Guidance', 'Compliance with Industry Regulations'],
    },
];

// FIX: Add missing testimonials data used by the Testimonials component.
export const TESTIMONIALS_DATA = [
    {
        quote: "SBA Info Solutions revolutionized our patient outreach. Their AI is empathetic, efficient, and has freed up our staff to focus on critical care. Implementation was seamless.",
        author: "Dr. Alisha Chen",
        company: "Lead Physician, Medova Healthcare"
    },
    {
        quote: "Our first-call resolution rate has improved by 40% since deploying their voice agents. It's a game-changer for our customer support and has significantly cut down operational costs.",
        author: "Marcus Thorne",
        company: "Director of Operations, Fusion BPO"
    },
    {
        quote: "The ability of the AI to handle complex financial queries with high accuracy is remarkable. Our customers feel secure and supported 24/7, which has boosted our satisfaction scores.",
        author: "Priya Singh",
        company: "VP of Customer Relations, Sterling Bank"
    }
];
