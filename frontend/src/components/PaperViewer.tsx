import React from "react";

type Props = {
  docId: string;
};

const PaperViewer: React.FC<Props> = ({ docId }) => {
  // For demo, just show doc ID
  return (
    <div style={{ margin: "16px 0", padding: 8, border: "1px solid #ddd" }}>
      <b>Paper ID:</b> {docId}
    </div>
  );
};

export default PaperViewer;
