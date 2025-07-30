import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

def answer_question(question, context_chunks):
    context = "\n".join(context_chunks)
    prompt = f"Context:\n{context}\n\nQuestion: {question}\nAnswer:"
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
          {"role": "system", "content": "You are an expert research assistant."},
          {"role": "user", "content": prompt}
        ],
        max_tokens=300
    )
    return response.choices[0].message['content'].strip()
