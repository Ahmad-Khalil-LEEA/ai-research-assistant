import React, { useState } from "react";
import UploadPaper from "./components/UploadPaper";
import ChatBox from "./components/ChatBox";
import PaperViewer from "./components/PaperViewer";

const App: React.FC = () => {
  const [docId, setDocId] = useState<string | null>(null);

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 32 }}>
      <h1>AI Research Assistant for Papers</h1>
      <UploadPaper onUploaded={setDocId} />
      {docId && (
        <>
          <PaperViewer docId={docId} />
          <ChatBox docId={docId} />
        </>
      )}
    </div>
  );
};

export default App;
