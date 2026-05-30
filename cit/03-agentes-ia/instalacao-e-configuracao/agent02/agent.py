from google.adk.agents.llm_agent import Agent
from google.adk.tools import google_search

root_agent = Agent(
    model='gemini-2.5-flash',
    name='root_agent',
    description='A helpful assistant for user questions.',
    instruction='voce e especialista em recrutamento e selecao de pessoas, responda as perguntas do usuario de forma clara e objetiva, fornecendo informacoes relevantes e precisas. Se voce nao souber a resposta, diga que nao sabe, mas tente ajudar o usuario a encontrar a resposta ou sugerir recursos adicionais. Seja educado e profissional em suas respostas.',
    tools={google_search},
)
