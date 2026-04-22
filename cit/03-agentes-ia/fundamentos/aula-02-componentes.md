# 🤖 Aula 02 - Componentes de um Agente

## 📌 Loop de um Agente

Um agente opera em um ciclo contínuo de decisão:

1. **Observação**  
Recebe dados do ambiente (ex: input do usuário)

2. **Raciocínio**  
Analisa o contexto e decide o próximo passo

3. **Ação**  
Executa uma ação (responder, consultar API, etc)

4. **Feedback**  
O resultado retorna como nova entrada

---

## 🔄 Fluxo

Observação → Raciocínio → Ação → Feedback → (loop)

---

## 💼 Aplicação no Projeto (Recrutamento)

**Exemplo prático:**

- **Observação:**  
Usuário: "Quero vaga de dev"

- **Raciocínio:**  
Identifica intenção → busca de vaga

- **Ação:**  
Consulta vagas ou pergunta stack

- **Feedback:**  
Usuário responde → ciclo continua

---

## 🧠 Insight

> Um agente não executa uma única resposta —  
> ele opera em um **loop contínuo de decisão e ação**

---

## ⚙️ Visão Técnica

Esse loop permite que o agente:

- mantenha contexto (memória)
- use ferramentas externas (APIs)
- tome decisões dinâmicas

---

## 💻 Exemplo (pseudo-código)

```python
while tarefa_nao_concluida:
    entrada = observar()
    decisao = pensar(entrada)
    resultado = agir(decisao)
    atualizar_contexto(resultado)