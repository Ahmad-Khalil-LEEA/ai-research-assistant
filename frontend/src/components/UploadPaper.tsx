import React, { useRef } from "react";
import axios from "axios";

type Props = {
  onUploaded: (docId: string) => void;
};

const UploadPaper: React.FC<Props> = ({ onUploaded }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current?.files?.[0]) {
      const formData = new FormData();
      formData.append("file", inputRef.current.files[0]);
      const res = await axios.post("http://localhost:8000/upload/", formData);
      onUploaded(res.data.doc_id);
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" accept="application/pdf" ref={inputRef} required />
      <button type="submit">Upload Paper</button>
    </form>
  );
};

export default UploadPaper;
