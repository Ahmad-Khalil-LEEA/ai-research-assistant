import React, { useState } from "react";
import axios from "axios";

type Props = {
  docId: string;
};

const ChatBox: React.FC<Props> = ({ docId }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("doc_id", docId);
    formData.append("question", question);
    const res = await axios.post("http://localhost:8000/ask/", formData);
    setAnswer(res.data.answer);
  };

  return (
    <div>
      <form onSubmit={handleAsk}>
        <input
          type="text"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Ask a question about the paper..."
          style={{ width: 400 }}
          required
        />
        <button type="submit">Ask</button>
      </form>
      {answer && (
        <div style={{ marginTop: 16, background: "#f1f1f1", padding: 16 }}>
          <b>Answer:</b>
          <div>{answer}</div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
