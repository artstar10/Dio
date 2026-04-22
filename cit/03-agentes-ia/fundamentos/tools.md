# 🛠️ Aula 04 - Ferramentas (Tools) e Orquestração

---

## 🧠 O Poder das Ferramentas

> “Um LLM sem ferramentas é um gênio preso numa sala sem janelas.”

Modelos de linguagem são poderosos, mas limitados ao texto.

👉 As tools permitem que o agente:
- acesse dados externos  
- execute ações  
- interaja com sistemas reais  

---

## 🔧 O que são Tools?

Tools são funções ou integrações que permitem ao agente:

- consultar APIs  
- acessar banco de dados  
- executar ações no mundo real  

👉 Funcionam como as **“mãos do agente”**

---

## 🧩 Tipos de Ferramentas (Recrutamento & Seleção)

### 📊 Dados & Informação
- `buscar_candidatos`
- `consultar_curriculo`
- `buscar_vagas`

👉 Acesso a dados de candidatos e vagas

---

### 🧮 Cálculo & Lógica
- `match_score`
- `rankear_candidatos`

👉 Avaliação de compatibilidade entre candidato e vaga

---

### 💬 Comunicação
- `enviar_email`
- `notificar_candidato`
- `mensagem_whatsapp`

👉 Comunicação com candidatos e recrutadores

---

### ⚙️ Ação & Sistemas
- `agendar_entrevista`
- `atualizar_status_candidato`
- `criar_vaga`

👉 Ações dentro do processo seletivo

---

## 🎯 Por que isso importa?

Sem tools:
- o agente só responde  
- não executa nada  
- não acessa dados reais  

Com tools:
- automatiza recrutamento  
- melhora produtividade  
- reduz trabalho manual  

---

## 🎼 Orquestração de Tools

Ter várias ferramentas não é suficiente.

👉 O agente precisa saber:
- qual usar  
- quando usar  
- em que ordem usar  

---

## 🧠 O que é Orquestração?

Orquestração é a capacidade de:

- decidir a melhor ação  
- combinar múltiplas tools  
- seguir um fluxo lógico  
- tratar erros  

👉 Isso torna o agente **realmente inteligente**

---

## 🔄 Exemplo de Orquestração (Recrutamento)

Fluxo completo:

1. Usuário: "Preciso de um desenvolvedor Python"
2. Agente busca candidatos (`buscar_candidatos`)
3. Analisa compatibilidade (`match_score`)
4. Rankeia os melhores (`rankear_candidatos`)
5. Agenda entrevista (`agendar_entrevista`)
6. Envia confirmação (`enviar_email`)

👉 Várias tools trabalhando juntas automaticamente

---

## 🧠 Como o agente decide?

A decisão pode ser baseada em:

- system prompt (regras do agente)  
- function calling  
- contexto da conversa  
- histórico do usuário  

---

## 📌 Boas práticas

- Uma tool = uma responsabilidade  
- Nome claro e objetivo  
- Validar entradas e saídas  
- Tratar erros sempre  
- Evitar chamadas desnecessárias  

---
