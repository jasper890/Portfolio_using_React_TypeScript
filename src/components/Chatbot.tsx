import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Bot, User, Send,  Smile} from 'lucide-react';
import {EmojiPicker} from './EmojiPicker';
interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  apiKey?: string;
  position?: 'bottom-right' | 'bottom-left';
  primaryColor?: string;
}

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  disabled?: boolean;
}

// Enhanced training data - Add more about yourself here
const TRAINING_DATA = {
  // Basic info about you
  identity: {
    name: "Jasper Ryan Ngo",
    role: "Full-stack Developer & AI Enthusiast",
    personality: "Friendly, passionate about technology, always eager to learn and help others",
    interests: ["Web Development", "AI/ML", "React", "Node.js", "Gaming"],
    relationship_status: "In a relationship with Trisha Mae Cepe"
  },
  
  // Predefined responses for common questions
  responses: {
    'who are you': "I'm Jasper Ryan Ngo, a full-stack developer passionate about creating innovative web applications and AI solutions. I love working with React, Node.js, and exploring the latest in AI technology.",
    
    'tell me about yourself': "I'm a developer who's really passionate about technology! I work primarily with React and Node.js for web development, and I'm always exploring new AI technologies. When I'm not coding, I enjoy gaming and spending time with my girlfriend Trisha. I believe in continuous learning and love helping others with their tech challenges.",
    
    'what do you do': "I'm a full-stack developer specializing in modern web technologies. I build responsive web applications using React, TypeScript, and Node.js. I also have experience with AI integration, database design, and creating user-friendly interfaces. I'm always working on personal projects to improve my skills!",
    
    'your girlfriend': "My girlfriend is Trisha Mae Cepe, and she means the world to me! She's incredibly supportive of my coding journey and always encourages me to pursue my goals. I'm really lucky to have her in my life.",
    
    'contact': `Want to get in touch? Here's how you can reach me:
📧 Email: ngojasperryan@gmail.com
📱 Phone: +63 961 200 0696
💻 GitHub: github.com/jasper890

I'm always open to discussing new projects, collaborations, or just chatting about tech!`,

    'skills': "My main skills include React, TypeScript, JavaScript, Node.js, MySQL, PHP, and Git. I'm also diving deep into AI/ML technologies and always learning new frameworks. I love clean code and creating smooth user experiences!",

    'projects': "I've worked on various projects including web applications, chatbots, and AI integrations. I particularly enjoy building full-stack applications that solve real-world problems. Each project teaches me something new and helps me grow as a developer.",
    
    'hobbies': "When I'm not coding, I love gaming, exploring new technologies, and spending quality time with Trisha. I also enjoy learning about the latest tech trends and occasionally streaming my coding sessions.",
    
    'goals': "My goal is to become an expert full-stack developer and contribute to meaningful AI projects. I want to build applications that make people's lives easier and eventually start my own tech company. Continuous learning is key!",
    
    'experience': "I've been developing for a months now, starting with basic HTML/CSS and gradually mastering modern frameworks like React. I've worked on both personal and client projects, always focusing on clean, maintainable code.",
    
    'why programming': "I fell in love with programming because it lets me create solutions to real problems. There's something magical about writing code that actually helps people or makes their lives easier. Plus, the constant learning keeps me excited!",
    
    'advice': "My advice for new developers: start with the basics, build lots of projects, don't be afraid to fail, and always keep learning. The tech world moves fast, but that's what makes it exciting! Also, find a supportive community - it makes all the difference."
  },
  
  // Conversation starters and context
  conversationContext: [
    {
      user: "What's your favorite programming language?",
      jasper: "I really love JavaScript and TypeScript! They're so versatile - I can use them for frontend with React, backend with Node.js, and even mobile development."
    },
    {
      user: "How did you get into programming?",
      jasper: "I started getting curious about how websites work, so I began learning HTML and CSS. Then I discovered JavaScript and was amazed by what I could build! One thing led to another, and here I am building full-stack applications and exploring AI. It's been an incredible journey!"
    },
    {
      user: "What's the hardest part about being a developer?",
      jasper: "Honestly, keeping up with all the new technologies can be overwhelming sometimes! But I've learned to focus on fundamentals and gradually adopt new tools. Debugging can also be frustrating, but that 'aha!' moment when you solve a tough problem makes it all worth it."
    }
  ]
};

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading, disabled }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    if (message.trim() && !isLoading && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 100)}px`;
    }
  }, [message]);

  const quickSuggestions = [
    { text: 'Hello!', emoji: '👋' },
    { text: 'Tell me about yourself', emoji: '🧑‍💻' },
    { text: 'What are your skills?', emoji: '💡' },
    { text: 'Contact info', emoji: '📞' },
    { text: 'Projects', emoji: '🚀' },
    { text: 'Hobbies', emoji: '🎮' },
    { text: 'Goals', emoji: '🎯' },
    { text: 'Why programming?', emoji: '💻' },
    { text: 'Experience', emoji: '💼' },
   
  ];
  const [showPicker, setShowPicker] = useState(false);

  // Remove the extra [text, setText] state, use [message, setMessage] instead

  function addEmoji(emoji: string) {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const before = message.substring(0, start);
    const after = message.substring(end);

    const newText = before + emoji + after;
    setMessage(newText);

    setTimeout(() => {
      const pos = start + emoji.length;
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = pos;
    }, 0);
  }

  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex items-end gap-3">
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={disabled ? "Setup required..." : "Ask Jasper anything..."}
            disabled={disabled || isLoading}
            className="w-full resize-none rounded-xl border-2 border-gray-200 px-4 py-3 pr-12 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:bg-gray-50 disabled:text-gray-500 max-h-24 transition-all duration-200"
            rows={1}
          />

          {/* Input accessories */}
          <div className="absolute right-3 bottom-3 flex items-center gap-1">
            <button
              type="button"
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors mt-2"
              title="Add emoji"
              onClick={() => setShowPicker((v) => !v)}
            >
              <Smile size={20} />
            </button>

            {showPicker && (
              <EmojiPicker
                onSelect={addEmoji}
                onClose={() => setShowPicker(false)}
              />
            )}
          
          </div>
        </div>
        
        <button
          onClick={handleSubmit}
          disabled={!message.trim() || isLoading || disabled}
          className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
        >
          <Send size={18} />
        </button>
      </div>
      
      {/* Quick suggestions */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
        {quickSuggestions.map((suggestion) => (
          <button
            key={suggestion.text}
            onClick={() => setMessage(suggestion.text)}
            className="flex-shrink-0 px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-200 whitespace-nowrap"
            disabled={isLoading}
          >
            {suggestion.emoji} {suggestion.text}
          </button>
        ))}
      </div>
    </div>
  );
};

const Chatbot: React.FC<ChatbotProps> = ({
  apiKey = import.meta.env.VITE_GEMINI_API_KEY,
  position = 'bottom-right',
  primaryColor = 'bg-blue-600'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hey there! I'm Jasper, and I'm excited to chat with you! 😊 I'm a full-stack developer who loves building cool stuff with React and Node.js. Ask me anything about my projects, skills, or just say hi!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced function to find relevant responses
  const findRelevantResponse = (message: string): string | null => {
    const lowerMessage = message.toLowerCase();
    
    // Check for exact matches first
    for (const [key, response] of Object.entries(TRAINING_DATA.responses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    // Check for keyword matches
    const keywordMap: { [key: string]: string } = {
      'girlfriend': TRAINING_DATA.responses['your girlfriend'],
      'trisha': TRAINING_DATA.responses['your girlfriend'],
      'contact': TRAINING_DATA.responses['contact'],
      'email': TRAINING_DATA.responses['contact'],
      'phone': TRAINING_DATA.responses['contact'],
      'skills': TRAINING_DATA.responses['skills'],
      'technologies': TRAINING_DATA.responses['skills'],
      'tech stack': TRAINING_DATA.responses['skills'],
      'projects': TRAINING_DATA.responses['projects'],
      'portfolio': TRAINING_DATA.responses['projects'],
      'work': TRAINING_DATA.responses['projects'],
      'hobbies': TRAINING_DATA.responses['hobbies'],
      'interests': TRAINING_DATA.responses['hobbies'],
      'gaming': TRAINING_DATA.responses['hobbies'],
      'goals': TRAINING_DATA.responses['goals'],
      'future': TRAINING_DATA.responses['goals'],
      'plans': TRAINING_DATA.responses['goals'],
      'experience': TRAINING_DATA.responses['experience'],
      'background': TRAINING_DATA.responses['experience'],
      'programming': TRAINING_DATA.responses['why programming'],
      'coding': TRAINING_DATA.responses['why programming'],
      'developer': TRAINING_DATA.responses['why programming'],
      'advice': TRAINING_DATA.responses['advice'],
      'tips': TRAINING_DATA.responses['advice'],
      'beginner': TRAINING_DATA.responses['advice']
    };
    
    for (const [keyword, response] of Object.entries(keywordMap)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }
    
    return null;
  };

  const createPersonalizedPrompt = (userMessage: string): string => {
    return `You are Jasper Ryan Ngo, a friendly and passionate full-stack developer. Here's information about you:

IDENTITY:
- Name: ${TRAINING_DATA.identity.name}
- Role: ${TRAINING_DATA.identity.role}
- Personality: ${TRAINING_DATA.identity.personality}
- Interests: ${TRAINING_DATA.identity.interests.join(', ')}
- Relationship: ${TRAINING_DATA.identity.relationship_status}

CONTEXT FROM PREVIOUS CONVERSATIONS:
${TRAINING_DATA.conversationContext.map(conv => 
  `User: "${conv.user}"\nJasper: "${conv.jasper}"`
).join('\n\n')}

INSTRUCTIONS:
- Respond as Jasper would, using first person
- Be friendly, enthusiastic about technology
- Show your passion for coding and learning
- Mention specific technologies you work with when relevant
- Keep responses conversational and personal
- If asked about technical topics, share your experience and perspective
- Always sound like you're genuinely excited to help and chat

User's message: "${userMessage}"

Respond as Jasper:`;
  };

  const sendMessageToGemini = async (message: string): Promise<string> => {
    if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
      return "Please configure your Gemini API key to enable AI responses.";
    }

    try {
      const personalizedPrompt = createPersonalizedPrompt(message);
      
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: personalizedPrompt }]
          }],
          generationConfig: {
            temperature: 0.8, // Slightly higher for more personality
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        
        if (response.status === 400) {
          return "Invalid request. Please check your API configuration.";
        } else if (response.status === 403) {
          return "API key is invalid or doesn't have permission to access Gemini.";
        } else if (response.status === 429) {
          return "Rate limit exceeded. Please try again later.";
        } else {
          return `API Error: ${response.status}`;
        }
      }

      const data = await response.json();
      const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (!generatedText) {
        console.error('No text in response:', data);
        return "Sorry, I couldn't generate a proper response.";
      }
      
      return generatedText;
    } catch (error) {
      console.error('Network/Fetch error:', error);
      return "Sorry, I'm having trouble connecting right now. But feel free to ask me about my projects, skills, or anything tech-related!";
    }
  };

  const handleSendMessage = async (inputValue: string) => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // First check for predefined responses
      let aiResponse = findRelevantResponse(inputValue);
      
      // If no predefined response found, use Gemini with personalized prompt
      if (!aiResponse) {
        aiResponse = await sendMessageToGemini(inputValue);
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Oops! Something went wrong on my end. But I'm still here to chat! Try asking me about my coding journey or projects! 😊",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const positionClasses = position === 'bottom-right'
    ? 'bottom-6 right-6'
    : 'bottom-6 left-6';

  return (
    <div className={`fixed ${positionClasses} z-50`}>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-145 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden z-50">
          {/* Header - Fixed */}
          <div className={`${primaryColor} text-white p-4 flex items-center justify-between flex-shrink-0`}>
            <div className="flex items-center space-x-2">
              <Bot size={20} />
              <h3 className="font-semibold">Jasper AI</h3>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Online</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1 transition-colors flex-shrink-0"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages - Scrollable */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-2 max-w-xs ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.isUser ? 'bg-gray-600' : 'bg-blue-100'}`}>
                    {message.isUser ? <User size={16} className="text-white" /> : <Bot size={16} className="text-blue-600" />}
                  </div>
                  <div className={`rounded-lg p-3 ${message.isUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-xs">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-blue-600" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input - Fixed */}
          <div className="flex-shrink-0">
            <ChatInput 
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
              disabled={false}
            />
          </div>
        </div>
      )}

      {/* Chat Toggle Button - Fixed */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${primaryColor} text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex-shrink-0`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default Chatbot;