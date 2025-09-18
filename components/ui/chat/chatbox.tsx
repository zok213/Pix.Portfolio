'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

const predefinedResponses = {
  greeting: "Hello! I'm PiXity, your AI assistant. How can I help you today?",
  services: "We offer two main categories: Technology & Digital Solutions (Pix.teq) and Creative & Marketing Solutions (Pix.studio). Which would you like to know more about?",
  contact: "You can reach us through our contact form, email at contact@pixerve.com, or connect with us on social media. Would you like me to help you get in touch?",
  danang: "Da Nang is an amazing city! I can help you find local restaurants, entertainment spots, and hidden gems. What are you looking for?",
  default: "That's a great question! Let me connect you with our team for detailed information. You can use our contact form or reach out directly."
}

export function ChatBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: predefinedResponses.greeting,
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return predefinedResponses.greeting
    }
    if (message.includes('service') || message.includes('what do you do')) {
      return predefinedResponses.services
    }
    if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
      return predefinedResponses.contact
    }
    if (message.includes('danang') || message.includes('da nang') || message.includes('restaurant') || message.includes('food')) {
      return predefinedResponses.danang
    }
    
    return predefinedResponses.default
  }

  const sendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, response])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 ${
          isOpen ? 'bg-red-600 hover:bg-red-700' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">PiXity AI</h3>
                  <p className="text-xs opacity-90">Your friendly assistant</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 h-64 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.isUser ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}