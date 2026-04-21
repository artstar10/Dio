# 🤖 Aula 01 - Introdução aos Agentes Autônomos

---

## 📌 O que são Agentes?

Agentes são sistemas capazes de:
- perceber o ambiente
- tomar decisões
- executar ações de forma autônoma

Diferente de um chatbot comum, um agente não apenas responde — ele **age**.

---

## ⚡ Evolução dos Modelos

### 🧠 LLM Tradicional
- Pergunta → Resposta
- Interação única (single-turn)
- Conhecimento estático

### 🤖 Agente Autônomo
- Multi-turn (loop de decisões)
- Usa ferramentas externas
- Mantém contexto (memória)
- Executa ações no mundo real

---

## 🔍 Exemplo Prático

### ❌ Chatbot comum:
Pergunta:
"Quanto é 2847 x 8923?"

Resposta:
"Aproximadamente 25 milhões" (pode errar)

---

### ✅ Agente Autônomo:

1. Identifica que precisa calcular  
2. Usa uma ferramenta (calculator tool)  
3. Executa a operação  
4. Retorna resultado preciso  

---

## 🧠 Insight Principal

> Um agente não é só um modelo de linguagem —  
> ele é um **sistema que pensa, decide e age**.

---

## 🧩 Componentes de um Agente

- 🧠 LLM (cérebro)
- 🛠️ Tools (ferramentas)
- 🧾 Memória (contexto)
- 🔁 Loop de decisão

---

## 💻 Exemplo (pseudo-código)

```python
while tarefa_nao_concluida:
    pensamento = analisar_contexto()
    acao = escolher_acao(pensamento)
    resultado = executar(acao)