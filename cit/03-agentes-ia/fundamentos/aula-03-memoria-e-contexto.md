# 🤖 Aula 03 - Memória e Contexto nos Agentes

---

## 📌 O Problema da Amnésia

Modelos de linguagem não “lembram” naturalmente.

- Cada interação pode ser isolada
- Existe limite de contexto (context window)
- Ao encerrar a sessão, tudo pode ser perdido

👉 Sem memória, o agente se comporta como se fosse sempre a **primeira conversa**

---

## 🧠 O que é Memória em Agentes?

Memória é a capacidade de:

- manter contexto da conversa
- lembrar informações do usuário
- usar histórico para tomar decisões melhores

---

## ⚙️ Tipos de Memória

### 🟡 Curto Prazo (Contexto)
- Histórico da conversa atual
- Mantido dentro do prompt
- Limitado pelo tamanho do modelo

---

### 🔵 Longo Prazo
- Dados persistidos (banco, arquivos, vetor DB)
- Ex: preferências do usuário, histórico de vagas

---

## 🧩 System Prompt (Contexto Inicial)

Define o comportamento do agente antes da interação.

👉 Funciona como o **“DNA do agente”**

```python
AGENT_CONTEXT = """
Você é um assistente de recrutamento.
PERSONALIDADE: direto, analítico, objetivo.

REGRAS:
- NUNCA agende mais de 8h de trabalho focado
- SE houver conflito, ofereça alternativas
- SEMPRE pergunte prioridades
- Sempre perguntar stack do candidato
- Sugerir vagas com base no perfil
- Evitar respostas genéricas
"""
```

---

## ♾️ Memória Infinita com RAG (Retrieval Augmented Generation)

Uma limitação dos agentes é o tamanho do contexto.

👉 Para resolver isso, usamos **RAG**

---

## 📌 O que é RAG?

RAG é uma técnica que permite ao agente:

- buscar informações externas  
- recuperar dados relevantes  
- usar isso como contexto na resposta  

👉 Ou seja: o agente “lembra” mesmo sem tudo no prompt

---

## 🧠 Como funciona

Fluxo:

1. Usuário faz uma pergunta  
2. A pergunta vira um vetor (embedding)  
3. O sistema busca dados similares no banco vetorial  
4. Esses dados são recuperados (retrieval)  
5. São adicionados ao contexto (augmentation)  
6. O LLM gera uma resposta mais inteligente  

---

## 🔄 Pipeline do RAG
Query → Embedding → Vector DB → Retrieval → Augmentation → LLM → Resposta