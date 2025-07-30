# AI Research Assistant for Papers & PDFs

A web application that allows users to upload academic papers (PDFs) and ask deep or natural language questions, such as:

- “What’s the main contribution?”
- “Summarize section 3.1.”
- “List the datasets used in the experiments.”
- “What are the limitations discussed?”

Powered by state-of-the-art Large Language Models (LLMs) and semantic search, this tool accelerates literature review and research understanding.

---

## Features

- **PDF Upload:** Quickly upload research papers in PDF format.
- **Natural Language Q&A:** Ask complex, context-aware questions about the uploaded paper.
- **Section Summarization:** Request detailed summaries for specific sections, tables, or figures.
- **Key Insights Extraction:** Extract main contributions, methods, datasets, results, and limitations.
- **Semantic Search:** Uses vector search (FAISS) for context-aware chunk retrieval.
- **Privacy:** Papers are processed in-memory and not permanently stored.
- **Dockerized:** Easy deployment and reproducibility with Docker and Docker Compose.

---

## Tech Stack

- **Backend**
  - [FastAPI](https://fastapi.tiangolo.com/): High-performance Python web API.
  - [PyPDF2](https://pypdf2.readthedocs.io/) & [pdfplumber](https://github.com/jsvine/pdfplumber): PDF parsing.
  - [OpenAI API](https://platform.openai.com/) or [Hugging Face Transformers](https://huggingface.co/transformers/): LLM-powered answers.
  - [FAISS](https://github.com/facebookresearch/faiss): Efficient vector similarity search for semantic chunk retrieval.
  - [Pydantic](https://docs.pydantic.dev/): Data validation.
- **Frontend**
  - [React](https://react.dev/) + TypeScript: Modern, interactive UI.
  - [Axios](https://axios-http.com/): HTTP requests.
- **Containerization**
  - [Docker](https://www.docker.com/): Containerized backend and frontend.
  - [Docker Compose](https://docs.docker.com/compose/): Orchestrate multi-container setup.

---

## Folder Hierarchy

See [`FOLDER_STRUCTURE.md`](./FOLDER_STRUCTURE.md) for a detailed breakdown.

---

## Setup & Usage

### 1. Clone the Repository

```sh
git clone https://github.com/Ahmad-Khalil-LEEA/ai-research-assistant.git
cd ai-research-assistant
```

### 2. Backend Configuration

- Copy the environment variable template and fill in your OpenAI/Hugging Face API key:

```sh
cp backend/.env.example backend/.env
# Edit backend/.env with your API key
```

### 3. Build & Start with Docker Compose

```sh
docker-compose up --build
```

- The backend (FastAPI) will be available at: [http://localhost:8000](http://localhost:8000)
- The frontend (React) will run at: [http://localhost:3000](http://localhost:3000)

### 4. Usage

- Visit [http://localhost:3000](http://localhost:3000)
- Upload a PDF research paper.
- Ask questions about the paper in natural language.
- Get instant, context-aware answers and summaries.

---

## Development

### Backend

- Located in `backend/`
- Main entrypoint: `app/main.py`
- To run locally (requires Python 3.11+):

```sh
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend

- Located in `frontend/`
- Main entrypoint: `src/App.tsx`
- To run locally (requires Node.js 20+):

```sh
cd frontend
npm install
npm start
```

---

## Environment Variables

- `OPENAI_API_KEY` (or other LLM provider keys as needed)

---

## Roadmap

- [ ] Support for extracting tables and figures
- [ ] User authentication for personal libraries
- [ ] Multi-paper (cross-document) Q&A
- [ ] Improved PDF parsing for scientific layouts
- [ ] GPU support for local LLMs

---

## License

MIT License. See [LICENSE](./LICENSE) for details.

---

## Acknowledgements

- OpenAI, Hugging Face, Facebook Research (FAISS), FastAPI, React, and the open-source community.

---
