export const portfolioData = {
  name: 'Fabiano',
  role: 'Desenvolvedor Full Stack',
  location: 'Manaus · Remoto',
  language: 'PT-BR',
  description: 'Desenvolvedor full stack focado em transformar requisitos em produtos e sistemas seguros, trabalhando com interfaces, APIs, autenticação, pagamentos, bancos de dados e integrações.',
  socialLinks: { email: '', linkedin: '', github: '', cv: '#' },
  featuredProject: {
    name: 'Soluções corporativas',
    subtitle: 'Projetos apresentados de forma conceitual',
    description: 'Atuação em aplicações internas, autenticação, controle de acesso e integrações. Interfaces, dados e detalhes específicos foram preservados por confidencialidade.',
    technologies: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'JWT', 'RBAC', 'Swagger'],
  },
  experience: [
    { title: 'Desenvolvedor Full Stack', company: 'Canvi', period: 'dez/2024 – fev/2026', description: 'Desenvolvimento e manutenção de aplicações, APIs, autenticação, integrações com sistemas de pagamento, bancos de dados e sistemas internos. Desenvolvimento de soluções seguras, escaláveis e integração com serviços externos.', technologies: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'JWT', 'REST APIs'] },
    { title: 'Estágio voluntário em desenvolvimento', company: 'Residuum', period: 'fev/2023 – nov/2024', description: 'Participação no desenvolvimento da plataforma da empresa, criando interfaces com Angular, JavaScript e Bootstrap e integrando funcionalidades com Node.js, Express e APIs REST. Colaboração com a equipe em ambiente ágil.', technologies: ['Angular', 'JavaScript', 'Bootstrap', 'Node.js', 'Express', 'REST APIs', 'Sequelize', 'MySQL', 'Google Cloud', 'Scrum'] },
    { title: 'Projetos pessoais e estudos', company: 'Em evolução contínua', description: 'Desenvolvimento de projetos próprios, automações e estudos contínuos em desenvolvimento full stack, arquitetura e novas tecnologias.', technologies: [] },
  ],
  education: { title: 'Engenharia da Computação', description: 'Fametro · janeiro de 2019 a dezembro de 2023.' },
  projects: [
    { title: 'Autenticação e acesso', description: 'Desenvolvimento de fluxos de login, proteção de rotas e gerenciamento de sessões para aplicações corporativas.', technologies: ['Node.js', 'Express', 'JWT', 'MySQL'], visual: 'auth' },
    { title: 'Integrações de pagamento', description: 'Integração entre serviços e APIs para acompanhar operações e processar respostas de pagamento.', technologies: ['Node.js', 'REST API', 'Webhooks', 'Pix'], visual: 'payments' },
    { title: 'Gestão de permissões', description: 'Organização de perfis de acesso e regras de autorização em sistemas internos.', technologies: ['Node.js', 'Express', 'MySQL', 'RBAC'], visual: 'access' },
  ],
}

export const technologies = [
  { name: 'Node.js', category: 'Full Stack', icon: 'Braces' }, { name: 'Express', category: 'Full Stack', icon: 'Route' }, { name: 'REST APIs', category: 'Full Stack', icon: 'Network' }, { name: 'Swagger / OpenAPI', category: 'Full Stack', icon: 'BookOpen' },
  { name: 'MySQL', category: 'Banco de dados', icon: 'Database' }, { name: 'Sequelize', category: 'Banco de dados', icon: 'Layers3' },
  { name: 'JWT', category: 'Segurança', icon: 'KeyRound' }, { name: 'bcrypt', category: 'Segurança', icon: 'LockKeyhole' }, { name: '2FA / OTP', category: 'Segurança', icon: 'ShieldCheck' }, { name: 'RBAC', category: 'Segurança', icon: 'UserRoundCheck' },
  { name: 'Pix', category: 'Integrações', icon: 'Landmark' }, { name: 'APIs externas', category: 'Integrações', icon: 'PlugZap' }, { name: 'OAuth', category: 'Integrações', icon: 'Handshake' }, { name: 'Webhooks', category: 'Integrações', icon: 'Webhook' },
  { name: 'Git', category: 'Ferramentas', icon: 'GitBranch' }, { name: 'GitHub', category: 'Ferramentas', icon: 'Github' }, { name: 'Docker', category: 'DevOps', icon: 'Container' }, { name: 'Postman', category: 'Ferramentas', icon: 'Send' }, { name: 'Linux', category: 'DevOps', icon: 'TerminalSquare' },
]
