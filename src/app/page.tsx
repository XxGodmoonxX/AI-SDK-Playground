'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="space-y-4 mb-4">
        {messages.map((m) => (
          <div 
            key={m.id} 
            className={`p-2 rounded ${
              m.role === 'user' ? 'text-right' : 'bg-gray-100'
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="メッセージを入力..."
          className="flex-grow p-2 border rounded-l"
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded-r"
        >
          送信
        </button>
      </form>
    </div>
  );
}
