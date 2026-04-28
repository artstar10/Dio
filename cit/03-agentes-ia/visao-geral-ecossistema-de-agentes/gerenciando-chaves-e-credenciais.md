# 🔑 Aula 05 - Gerenciando Chaves e Credenciais na Prática

---

## 🛡️ Da Teoria à Prática: Protegendo suas APIs

Após entendermos os riscos críticos do vazamento de credenciais na aula anterior, este módulo foca na implementação prática de segurança no código do seu agente.

---

## 💻 1. Ambiente Local: O Padrão `.env`

Para o desenvolvimento local, a prática padrão e obrigatória é utilizar arquivos `.env` para armazenar segredos, em conjunto com bibliotecas que injetam esses dados no ambiente virtual da sua aplicação.

**Exemplo Prático (Python com `python-dotenv`):**

```python
import os
from google.adk.agents.llm_agent import Agent
from google.adk.tools import google_search
from dotenv import load_dotenv

# Carrega as variáveis de ambiente definidas no arquivo .env oculto
load_dotenv()

# Resgata os valores de forma segura via S.O.
valor1 = os.getenv('chave1')
valor2 = os.getenv('chave2')

print(f'Valor 1: {valor1}')
print(f'Valor 2: {valor2}')