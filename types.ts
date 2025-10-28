import type React from 'react';

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export interface Sector {
  id: 'healthcare' | 'bpo' | 'kpo' | 'bfsi';
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  heroImage: string;
  pageDescription: string;
  chatDemo: ChatMessage[];
  features: string[];
}
