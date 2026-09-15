# Portfólio do Fabiano

Portfólio profissional para um desenvolvedor full stack, criado com React, Vite e JavaScript. A interface apresenta projetos, experiência, formação, tecnologias e meios de contato em uma identidade escura com detalhes em verde esmeralda.

## Screenshot

> Adicione aqui uma captura da página inicial depois de publicar o projeto.

## Tecnologias

- React
- Vite
- JavaScript
- CSS moderno e responsivo
- Lucide React

## Como instalar e executar

\`\`\`bash
npm install
npm run dev
\`\`\`

Para gerar a versão de produção:

\`\`\`bash
npm run build
\`\`\`

## Publicação na Vercel

1. Crie um repositório no GitHub e envie estes arquivos.
2. Na Vercel, importe o repositório.
3. A Vercel identifica o Vite automaticamente. Use \`npm run build\` como comando de build e \`dist\` como diretório de saída, caso esses campos sejam solicitados.
4. Publique o projeto.

## Como editar os dados

Todos os dados de perfil, experiências, formação, projetos, tecnologias e links ficam em [src/data/portfolioData.js](src/data/portfolioData.js). Preencha \`email\`, \`linkedin\`, \`github\` e \`cv\` antes de publicar.

## Estrutura

\`\`\`text
src/
├── components/     # Componentes reutilizáveis
├── data/           # Conteúdo fácil de editar
├── sections/       # Seções da página
├── styles/         # Estilos globais
├── App.jsx
└── main.jsx
\`\`\`
