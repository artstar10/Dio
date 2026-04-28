# 🛠️ Aula 02 - Frameworks Populares para Agentes de IA

---

## ⚔️ A Guerra dos Frameworks: Os "Big 5"

Atualmente, o mercado de orquestração é liderado por cinco principais frameworks, cada um com uma proposta de valor e especialidade única:

### 1. LangChain ("O Canivete Suíço")
- **Perfil:** Flexível, massivo e o atual padrão de mercado.
- **Destaque:** Oferece abstrações para conectar quase tudo (LLMs, bancos de dados, memórias, APIs).

### 2. AutoGen ("O Conversador")
- **Perfil:** Foco em múltiplos agentes (Multi-Agent).
- **Destaque:** Agentes que debatem e conversam entre si para resolver problemas complexos e escrever código de forma autônoma.

### 3. CrewAI ("O Role-Player")
- **Perfil:** Equipes estruturadas com processos claros.
- **Destaque:** Permite definir papéis estritos (ex: "Pesquisador Sênior", "Revisor"). Eles trabalham em etapas bem definidas e passam tarefas uns para os outros.

### 4. Semantic Kernel ("O Corporativo")
- **Perfil:** Desenvolvido pela Microsoft, focado no mundo Enterprise.
- **Destaque:** Excelente integração nativa com ecossistemas corporativos, especialmente .NET/C# e Microsoft Azure.

### 5. LlamaIndex ("O Bibliotecário")
- **Perfil:** O mestre dos dados.
- **Destaque:** É a referência absoluta para RAG (Retrieval-Augmented Generation), focado em ingestão pesada de dados, indexação e conexão do LLM com bases de conhecimento externas.

---

## 🧠 Insight

> O maior erro na construção de agentes é tentar usar um martelo para apertar um parafuso. Avalie a natureza do seu problema antes de escolher o framework: é um fluxo de dados pesado (LlamaIndex), uma equipe com processos rígidos (CrewAI) ou um debate aberto (AutoGen)?

---

## 💻 Exemplo Prático (Instanciando um Agente)

Uma amostra de código demonstrando como a orquestração simplifica a criação do agente e a atribuição de ferramentas (Tools):

```python
from google.sdk.agents.llm_agent import Agent
from google.sdk.tools import google_search

# Instanciando o agente e passando seu contexto e ferramentas
root_agent = Agent(
    model='gemini-2.5-flash',
    name='root_agent',
    description='A helpful assistant for user questions.',
    instruction='Answer user questions to the best of your knowledge',
    tools=[google_search] # O agente recebe a capacidade de buscar no Google
)