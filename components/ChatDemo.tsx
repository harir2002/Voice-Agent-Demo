import React from 'react';
import type { ChatMessage } from '../types';

interface ChatDemoProps {
  messages: ChatMessage[];
}

const PlayIcon = () => (
    <svg className="w-6 h-6 mr-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
);


const ChatDemo: React.FC<ChatDemoProps> = ({ messages }) => {
  return (
    <div className="bg-black border border-gray-700/50 rounded-xl p-4 md:p-6 h-[600px] flex flex-col">
      <div className="flex-grow overflow-y-auto pr-2 space-y-4">
        {messages.map((msg, index) => {
          const isUser = msg.sender === 'user';
          return (
            <div key={index} className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-md md:max-w-lg ${isUser ? 'order-2' : 'order-1'}`}>
                <div
                  className={`px-4 py-3 rounded-2xl ${
                    isUser
                      ? 'bg-brand-red text-white rounded-br-none'
                      : 'bg-brand-gray text-gray-200 rounded-bl-none'
                  }`}
                >
                  <div className="flex items-center">
                    <PlayIcon />
                    <p className="leading-snug">{msg.text}</p>
                  </div>
                </div>
                <p className={`text-xs text-gray-500 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>{msg.timestamp}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatDemo;