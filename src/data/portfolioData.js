export const portfolioData = {
  name: 'Fabiano',
  role: 'Desenvolvedor Full Stack',
  location: 'Manaus · Remoto',
  language: 'PT-BR',
  description: 'Desenvolvedor full stack focado em transformar requisitos em produtos e sistemas seguros, trabalhando com interfaces, APIs, autenticação, pagamentos, bancos de dados e integrações.',
  socialLinks: { email: '', linkedin: '', github: '', cv: '#' },
  featuredProject: {
    name: 'SISINTERN',
    subtitle: 'Sistema interno da Canvi',
    description: 'Plataforma interna para gerenciamento de usuários, empresas, permissões, autenticação, auditoria e integrações com serviços de pagamento.',
    technologies: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'JWT', 'RBAC', 'Swagger'],
  },
  experience: [
    { title: 'Desenvolvedor Full Stack', company: 'Canvi', description: 'Desenvolvimento e manutenção de aplicações, APIs, autenticação, integrações com sistemas de pagamento, bancos de dados e sistemas internos. Desenvolvimento de soluções seguras, escaláveis e integração com serviços externos.', technologies: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'JWT', 'REST APIs'] },
    { title: 'Projetos pessoais e estudos', company: 'Em evolução contínua', description: 'Desenvolvimento de projetos próprios, automações e estudos contínuos em desenvolvimento full stack, arquitetura e novas tecnologias.', technologies: [] },
  ],
  education: { title: 'Formação acadêmica', description: 'Adicione aqui sua graduação e cursos relevantes.' },
  projects: [
    { title: 'Sistema de Autenticação', description: 'API de autenticação com login, JWT, 2FA/OTP, recuperação de senha e controle de sessão.', technologies: ['Node.js', 'Express', 'JWT', 'MySQL'], link: '#' },
    { title: 'Integração Pix', description: 'Implementação de integração com APIs de pagamento para geração de Pix dinâmico, QR Code e consulta de status.', technologies: ['Node.js', 'REST API', 'OAuth', 'Pix', 'Webhooks'], link: '#' },
    { title: 'Controle de acesso RBAC', description: 'Sistema de autorização baseado em perfis, módulos, componentes e funções.', technologies: ['Node.js', 'Express', 'Sequelize', 'MySQL', 'RBAC'], link: '#' },
  ],
}

export const technologies = [
  { name: 'Node.js', category: 'Full Stack', icon: 'Braces' }, { name: 'Express', category: 'Full Stack', icon: 'Route' }, { name: 'REST APIs', category: 'Full Stack', icon: 'Network' }, { name: 'Swagger / OpenAPI', category: 'Full Stack', icon: 'BookOpen' },
  { name: 'MySQL', category: 'Banco de dados', icon: 'Database' }, { name: 'Sequelize', category: 'Banco de dados', icon: 'Layers3' },
  { name: 'JWT', category: 'Segurança', icon: 'KeyRound' }, { name: 'bcrypt', category: 'Segurança', icon: 'LockKeyhole' }, { name: '2FA / OTP', category: 'Segurança', icon: 'ShieldCheck' }, { name: 'RBAC', category: 'Segurança', icon: 'UserRoundCheck' },
  { name: 'Pix', category: 'Integrações', icon: 'Landmark' }, { name: 'APIs externas', category: 'Integrações', icon: 'PlugZap' }, { name: 'OAuth', category: 'Integrações', icon: 'Handshake' }, { name: 'Webhooks', category: 'Integrações', icon: 'Webhook' },
  { name: 'Git', category: 'Ferramentas', icon: 'GitBranch' }, { name: 'GitHub', category: 'Ferramentas', icon: 'Github' }, { name: 'Docker', category: 'DevOps', icon: 'Container' }, { name: 'Postman', category: 'Ferramentas', icon: 'Send' }, { name: 'Linux', category: 'DevOps', icon: 'TerminalSquare' },
]
