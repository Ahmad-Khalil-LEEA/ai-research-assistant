import faiss
import numpy as np
from typing import List
from openai import OpenAIEmbeddings

class PaperVectorStore:
    def __init__(self):
        self.docs = {}
        self.index = faiss.IndexFlatL2(1536)
        self.embeddings = OpenAIEmbeddings()
        self.doc_chunks = {}

    def index_paper(self, text: str) -> str:
        # Split into chunks
        chunks = [text[i:i+1000] for i in range(0, len(text), 1000)]
        vectors = np.array([self.embeddings.embed(chunk) for chunk in chunks]).astype('float32')
        doc_id = f"doc_{len(self.docs)}"
        self.docs[doc_id] = vectors
        self.doc_chunks[doc_id] = chunks
        self.index.add(vectors)
        return doc_id

    def retrieve_relevant_chunks(self, doc_id: str, question: str, top_k=3) -> List[str]:
        q_vec = np.array([self.embeddings.embed(question)]).astype('float32')
        D, I = self.index.search(q_vec, top_k)
        return [self.doc_chunks[doc_id][i] for i in I[0]]
