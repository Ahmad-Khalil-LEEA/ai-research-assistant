import pdfplumber

async def extract_text_from_pdf(file):
    text = ""
    async with file as f:
        data = await f.read()
    with pdfplumber.open(io.BytesIO(data)) as pdf:
        for page in pdf.pages:
            text += page.extract_text() or ""
    return text
