import ChatBubble from "./chatbubble";
import { Button } from "./button";
import { Input } from "./input";
import { Message } from "ai/react";

const Chat = () => {
  const messages: Message[] = [
    { role: "assistant", content: "Hello, I am your AI assistant", id: "1" },
    { role: "user", content: "Hello, I am the user", id: "2" },
  ];

  const sources = ["I am source one", "I am source two"];

  return (
    <div className="rounded-2xl border h-[75vh] flex flex-col justify-between">
      <div className="p-6 overflow-auto">
        {messages.map(({ id, role, content }: Message, index) => (
          <ChatBubble
            key={id}
            role={role}
            content={content}
            sources={role !== "assistant" ? [] : sources}
          />
        ))}
      </div>

      <form className="p-4 flex clear-both">
        <Input placeholder={"Type to chat with AI..."} className="mr-2" />
        <Button type="submit" className="w-24">
          Ask
        </Button>
      </form>
    </div>
  );
};

export default Chat;
