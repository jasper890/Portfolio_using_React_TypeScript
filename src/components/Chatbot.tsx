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
  autoFocus?: boolean;
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

    'skills': "My main skills include React, TypeScript, JavaScript, Java, C#, C++, Node.js, MySQL, PHP, and Git. I also have experience using MIT App Inventor for NFC-based mobile solutions and PowerApps for low-code application development. I'm currently diving deeper into AI and machine learning, particularly chatbot integration and model training. I enjoy working across both frontend and backend environments, writing clean, maintainable code, and focusing on performance and user experience. I’m always exploring new frameworks, tools, and best practices to grow as a developer.",

    'projects': "I've worked on various projects including web applications, chatbots, and AI integrations. I particularly enjoy building full-stack applications that solve real-world problems. Each project teaches me something new and helps me grow as a developer.",
    
    'hobbies': "When I'm not coding, I love gaming, exploring new technologies, and spending quality time with Trisha. I also enjoy learning about the latest tech trends and occasionally streaming my coding sessions.",
    
    'goals': "My goal is to become an expert full-stack developer and contribute to meaningful AI projects. I want to build applications that make people's lives easier and eventually start my own tech company. Continuous learning is key!",
    
    'experience': "I began my development journey in senior high school using MIT App Inventor to build NFC-based attendance systems. Since then, I have expanded my skills to HTML, CSS, and modern frameworks like React. My projects include developing the Renalink Nephrology Center website, integrating AI chatbots with training, and creating applications using PowerApps. Currently, I’m an intern developer at Devonshire Wessex in the UK, where I contribute to software development and AI integration while gaining professional experience.",

    'why programming': "I fell in love with programming because it lets me create solutions to real problems. There's something magical about writing code that actually helps people or makes their lives easier. Plus, the constant learning keeps me excited!",
    
    'advice': "My advice for new developers: start with the basics, build lots of projects, don't be afraid to fail, and always keep learning. The tech world moves fast, but that's what makes it exciting! Also, find a supportive community - it makes all the difference.",

    'tech_stack': "My tech stack includes HTML, CSS, JavaScript, React, PHP, MySQL, MIT App Inventor for NFC systems, PowerApps, and AI technologies for chatbot integration and training."


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
    },{
  user: "What are your experiences in software development and AI?",
  jasper: "I've worked on diverse projects ranging from NFC-based attendance systems to website development like the Renalink Nephrology Center. Beyond traditional development, I specialize in integrating artificial intelligence and chatbots into digital solutions. I’ve also trained AI models to improve chatbot responses and functionality, blending software engineering with AI to create smarter, more interactive tools. Currently, I’m an intern at Devonshire Wessex in the UK, where I continue to expand my skills in both development and AI."
},
{
  user: "What is your current job role?",
  jasper: "I’m currently an intern developer at Devonshire Wessex in the UK. My role involves software development, AI integration, and chatbot training — helping build intelligent digital solutions while collaborating with teams and learning industry best practices."
    },
{
  user: "What was your role in the NFC attendance system project?",
  jasper: "I developed the core logic to read and write NFC tags using Android Studio, ensuring seamless and secure attendance tracking. It was rewarding to combine hardware and software to build a practical solution for real-world problems."
},
{
  user: "Can you tell me about your work with the Renalink Nephrology Center website?",
  jasper: "Absolutely! I designed and developed a clean, user-friendly website using React and Tailwind CSS, focusing on a cozy and welcoming design with soft tones to match the center's brand. The site includes features like appointment booking and information about dialysis services."
},
{
  user: "What challenges did you face while working on Renalink's online scheduling system?",
  jasper: "One of the toughest parts was ensuring data security and privacy for patient information while maintaining a smooth user experience. I implemented validation and secure database queries with PHP and MySQL to protect sensitive data."
},
{
  user: "How do you approach learning new technologies for your projects?",
  jasper: "I focus on understanding the fundamentals deeply, then gradually experiment with new tools by building small projects or features. This approach helps me stay adaptable without getting overwhelmed."
},
{
  user: "What makes your approach to development unique?",
  jasper: "I’m a quiet builder who values simplicity and functionality. Instead of flashy features, I focus on creating clean, efficient, and maintainable code that solves real problems quietly but effectively."
    },
{
  user: "What technologies are you experienced with?",
  jasper: "My tech stack includes HTML, CSS, JavaScript, React, PHP, MySQL, MIT App Inventor for NFC systems, PowerApps, and AI technologies for chatbot integration and training. I enjoy working across different environments to build practical and thoughtful digital solutions."
}


  ]
};

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading, disabled, autoFocus = false }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    if (message.trim() && !isLoading && !disabled) {
      onSendMessage(message);
      setMessage('');
      // Refocus after sending message
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Auto-focus effect
  useEffect(() => {
    if (autoFocus && textareaRef.current && !disabled && !isLoading) {
      textareaRef.current.focus();
    }
  }, [autoFocus, disabled, isLoading]);

  // Maintain focus when chat opens or messages change
  useEffect(() => {
    if (autoFocus && textareaRef.current && !disabled) {
      const focusTimeout = setTimeout(() => {
        textareaRef.current?.focus();
      }, 300); // Small delay to ensure DOM is ready
      
      return () => clearTimeout(focusTimeout);
    }
  }, [autoFocus, disabled]);

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
    { text: 'Tech Stack', emoji: '🪛' },
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

  const handleSuggestionClick = (suggestionText: string) => {
    setMessage(suggestionText);
    // Focus back to textarea after clicking suggestion
    setTimeout(() => {
      textareaRef.current?.focus();
    }, 100);
  };

  return (
    <div className="p-4 border-t border-gray-300">
      <div className="flex items-end gap-3">
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={disabled ? "Setup required..." : "Ask Jasper anything..."}
            disabled={disabled || isLoading}
            className="w-full resize-none rounded-xl border-2 border-gray-300 bg-white text-black px-4 py-3 pr-12 text-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:bg-gray-100 disabled:text-gray-500 max-h-24 transition-all duration-200 placeholder-gray-500"
            rows={1}
          />

          {/* Input accessories */}
          <div className="absolute right-3 bottom-3 flex items-center gap-1">
            <button
              type="button"
              className="p-1 text-gray-600 hover:text-black transition-colors mt-2"
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
          className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-r from-black to-gray-800 text-white flex items-center justify-center hover:from-gray-900 hover:to-gray-700 disabled:from-gray-600 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110 active:scale-95 hover:rotate-12 shadow-lg hover:shadow-xl"
        >
          <Send size={18} />
        </button>
      </div>
      
      {/* Quick suggestions */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
        {quickSuggestions.map((suggestion, index) => (
          <button
            key={suggestion.text}
            onClick={() => handleSuggestionClick(suggestion.text)}
            className="flex-shrink-0 px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-black rounded-full transition-all duration-300 whitespace-nowrap hover:scale-105 hover:shadow-md animate-in slide-in-from-bottom-2 fade-in"
            style={{animationDelay: `${index * 100}ms`}}
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
  primaryColor = 'bg-black'
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

  // Global keydown listener for auto-focus when chat is open
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (isOpen && !isLoading) {
        // Check if we're not already focused on an input element
        const activeElement = document.activeElement;
        const isInputFocused = activeElement?.tagName === 'INPUT' || 
                              activeElement?.tagName === 'TEXTAREA' || 
                              activeElement?.getAttribute('contenteditable') === 'true';
        
        // If not focused on input and it's a printable character, focus the textarea
        if (!isInputFocused && e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
          const textarea = document.querySelector('textarea[placeholder*="Ask Jasper"]') as HTMLTextAreaElement;
          if (textarea) {
            textarea.focus();
            // Don't prevent default so the character gets typed
          }
        }
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isOpen, isLoading]);

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
        <div className="fixed bottom-24 right-6 w-80 h-145 bg-white rounded-2xl shadow-2xl border border-gray-300 flex flex-col overflow-hidden z-50 animate-in slide-in-from-bottom-4 slide-in-from-right-4 duration-300 fade-in zoom-in-95">
          {/* Header - Fixed */}
          <div className={`${primaryColor} text-white p-4 flex items-center justify-between flex-shrink-0 animate-in slide-in-from-top-2 duration-200 delay-100`}>
            <div className="flex items-center space-x-2">
              <Bot size={20} />
              <h3 className="font-semibold">Jasper AI</h3>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Online</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1 transition-all duration-300 hover:scale-110 hover:rotate-90 flex-shrink-0"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages - Scrollable */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 animate-in fade-in duration-300 delay-200">
            {messages.map((message, index) => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 fade-in duration-300`} style={{animationDelay: `${index * 50}ms`}}>
                <div className={`flex items-start space-x-2 max-w-xs ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''} group`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.isUser ? 'bg-black' : 'bg-gray-800'} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                    {message.isUser ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
                  </div>
                  <div className={`rounded-lg p-3 ${message.isUser ? 'bg-black text-white' : 'bg-gray-100 text-black'} transition-all duration-300 hover:shadow-md hover:scale-105 hover:-translate-y-1`}>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.isUser ? 'text-gray-300' : 'text-gray-600'}`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-in slide-in-from-left-4 fade-in duration-500">
                <div className="flex items-start space-x-2 max-w-xs">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input - Fixed */}
          <div className="flex-shrink-0 animate-in slide-in-from-bottom-2 duration-300 delay-300">
            <ChatInput 
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
              disabled={false}
              autoFocus={isOpen}
            />
          </div>
        </div>
      )}

      {/* Enhanced Chat Toggle Button with Synchronized Glowing Effects */}
      <div className="relative">
        {/* Outer glow rings - all synced to bounce */}
       
        
        {/* Main button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative ${primaryColor} text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-125 active:scale-90 flex-shrink-0 transform ${
            !isOpen 
              ? 'hover:rotate-180 animate-bounce hover:animate-none shadow-2xl shadow-blue-500/20' 
              : 'hover:rotate-180'
          } ${
            !isOpen 
              ? 'bg-gradient-to-r from-gray-900 via-black to-gray-900 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600' 
              : ''
          }`}
          style={{
            ...((!isOpen) && {
              boxShadow: '0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(147, 51, 234, 0.3), 0 0 120px rgba(236, 72, 153, 0.2)',
            })
          }}
        >
          {/* Inner glow effect that bounces */}
          {!isOpen && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 blur-sm animate-bounce" 
                 style={{animationDelay: '0.05s'}} />
          )}
          
          {/* Icon with glow */}
          <div className={`relative z-10 ${!isOpen ? 'drop-shadow-lg' : ''}`}>
            {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          </div>
          
          {/* Sparkle effects that bounce in sync */}
          {!isOpen && (
            <>
              <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full animate-bounce" 
                   style={{animationDelay: '0.4s'}} />
              <div className="absolute bottom-3 left-2 w-0.5 h-0.5 bg-blue-300 rounded-full animate-bounce" 
                   style={{animationDelay: '0.6s'}} />
              <div className="absolute top-3 left-3 w-0.5 h-0.5 bg-purple-300 rounded-full animate-bounce" 
                   style={{animationDelay: '0.8s'}} />
              <div className="absolute bottom-2 right-3 w-0.5 h-0.5 bg-pink-300 rounded-full animate-bounce" 
                   style={{animationDelay: '1s'}} />
            </>
          )}
        </button>
        
       
      </div>
    </div>
  );
};

export default Chatbot;