```
ai-research-assistant/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   ├── __init__.py
│   │   │   ├── routes.py
│   │   ├── services/
│   │   │   ├── __init__.py
│   │   │   ├── pdf_processing.py
│   │   │   ├── llm_query.py
│   │   │   ├── vector_search.py
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   ├── schemas.py
│   │   ├── main.py
│   ├── requirements.txt
│   ├── Dockerfile
│   ├── .env.example
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── UploadPaper.tsx
│   │   │   ├── ChatBox.tsx
│   │   │   ├── PaperViewer.tsx
│   │   ├── App.tsx
│   │   ├── index.tsx
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│
├── docker-compose.yml
├── README.md
└── FOLDER_STRUCTURE.md
```
