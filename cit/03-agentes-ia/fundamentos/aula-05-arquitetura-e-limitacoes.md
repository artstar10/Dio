# 🧱 Aula 05 - Arquitetura e Limitações dos Agentes

---

## 📌 Arquitetura de um Agente

Um agente é um **sistema orquestrado**, não apenas um modelo.

Componentes principais:

- 🧠 LLM (decisão)
- 🛠️ Tools (execução)
- 🧾 Memória (contexto)
- 🔁 Loop (controle de fluxo)

---

## 🔄 Fluxo do Agente

1. Recebe input  
2. Analisa contexto  
3. Decide ação  
4. Executa tool  
5. Recebe resultado  
6. Continua até concluir  

---

## 💼 Exemplo (Recrutamento e Seleção)

1. Candidato envia currículo  
2. Agente analisa perfil  
3. Consulta vagas compatíveis  
4. Decide se aprova ou não  
5. Agenda entrevista  
6. Notifica candidato  

---

## ⚠️ Limitações dos Agentes

### 1. Alucinação
- Inventa dados ou ferramentas  
- Ex: criar função que não existe  

---

### 2. Loop Infinito
- Repete ações sem parar  
- Ex: consulta mesma vaga várias vezes  

---

### 3. Erro de Planejamento
- Ordem lógica incorreta  
- Ex: tentar agendar sem validar candidato  

---

## 🧠 Insight

> Agentes não são 100% confiáveis por padrão —  
> precisam de **controle, validação e limites**.

---

## 🛡️ Boas Práticas

- Definir tools bem estruturadas  
- Validar entradas (input)  
- Limitar número de execuções  
- Monitorar decisões do agente  
- Usar fallback para erros  

---

## 💻 Exemplo (pseudo-código)

```python
max_steps = 5

while steps < max_steps:
    acao = agente.decidir()

    if acao == "erro":
        break

    resultado = executar(acao)
    steps += 1