from fastapi import APIRouter, UploadFile, File, Form
from fastapi.responses import JSONResponse
from app.services.pdf_processing import extract_text_from_pdf
from app.services.llm_query import answer_question
from app.services.vector_search import PaperVectorStore

router = APIRouter()

vector_store = PaperVectorStore()

@router.post("/upload/")
async def upload_paper(file: UploadFile = File(...)):
    text = await extract_text_from_pdf(file)
    doc_id = vector_store.index_paper(text)
    return {"doc_id": doc_id, "message": "Paper indexed successfully."}

@router.post("/ask/")
async def ask_question(doc_id: str = Form(...), question: str = Form(...)):
    chunks = vector_store.retrieve_relevant_chunks(doc_id, question)
    answer = answer_question(question, chunks)
    return JSONResponse({"answer": answer})
