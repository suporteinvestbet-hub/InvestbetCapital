# Guia de Deploy - GitHub e Netlify

Este documento contém instruções passo a passo para fazer upload do projeto no GitHub e fazer deploy no Netlify.

## 📋 Pré-requisitos

- Conta no GitHub (https://github.com)
- Conta no Netlify (https://netlify.com)
- Git instalado no seu computador
- Terminal/CMD

## 🚀 Passo 1: Preparar o Repositório Local

### 1.1 Inicializar Git (se ainda não estiver inicializado)

```bash
cd investbet-website
git init
```

### 1.2 Adicionar todos os arquivos

```bash
git add .
```

### 1.3 Fazer o primeiro commit

```bash
git commit -m "Initial commit: InvestBet website with simulator and services"
```

## 📤 Passo 2: Criar Repositório no GitHub

### 2.1 Acessar GitHub

1. Acesse https://github.com
2. Faça login ou crie uma conta
3. Clique no botão "+" no canto superior direito
4. Selecione "New repository"

### 2.2 Configurar o Repositório

- **Repository name**: `investbet-website` (ou outro nome de sua escolha)
- **Description**: "Landing page para InvestBet Capital - Apostas Esportivas e Gestão de Banca"
- **Visibility**: Public (para que o Netlify possa acessar)
- **Initialize this repository with**: Deixe desmarcado
- Clique em "Create repository"

### 2.3 Adicionar o Remote e Fazer Push

Após criar o repositório, GitHub mostrará instruções. Execute:

```bash
git remote add origin https://github.com/seu-usuario/investbet-website.git
git branch -M main
git push -u origin main
```

**Substitua `seu-usuario` pelo seu nome de usuário do GitHub.**

## 🌐 Passo 3: Deploy no Netlify

### 3.1 Conectar Netlify ao GitHub

1. Acesse https://netlify.com
2. Faça login ou crie uma conta
3. Clique em "Add new site" → "Import an existing project"
4. Selecione "GitHub" como provedor
5. Autorize o Netlify a acessar seus repositórios
6. Selecione o repositório `investbet-website`

### 3.2 Configurar Build

Na tela de configuração do Netlify:

- **Base directory**: (deixe em branco)
- **Build command**: `pnpm build`
- **Publish directory**: `dist`

### 3.3 Variáveis de Ambiente (se necessário)

Se o projeto usar variáveis de ambiente, adicione-as em:
**Site settings** → **Build & deploy** → **Environment** → **Environment variables**

### 3.4 Deploy

Clique em "Deploy site" e aguarde a conclusão do build.

## ✅ Verificação

Após o deploy:

1. Acesse a URL fornecida pelo Netlify (ex: `https://seu-site.netlify.app`)
2. Verifique se o site está funcionando corretamente
3. Teste o simulador de investimento
4. Verifique os links dos serviços
5. Teste o formulário de contato

## 🔄 Atualizações Futuras

Para fazer atualizações no site:

```bash
# Faça as alterações desejadas
# Depois execute:

git add .
git commit -m "Descrição das alterações"
git push origin main
```

O Netlify detectará automaticamente as mudanças no GitHub e fará o redeploy.

## 🔗 Links Úteis

- **GitHub**: https://github.com
- **Netlify**: https://netlify.com
- **Documentação Netlify**: https://docs.netlify.com
- **Documentação Vite**: https://vitejs.dev

## 📝 Dicas Importantes

1. **Sempre use `pnpm` em vez de `npm`** - O projeto está configurado com pnpm
2. **Mantenha o `.gitignore` atualizado** - Não faça commit de `node_modules` ou `.env`
3. **Teste localmente antes de fazer push** - Execute `pnpm dev` e `pnpm build` localmente
4. **Monitore os logs do Netlify** - Se houver erro no deploy, verifique os logs na dashboard do Netlify

## ❓ Troubleshooting

### Build falha no Netlify

1. Verifique se o `package.json` está correto
2. Verifique se todas as dependências estão listadas
3. Verifique os logs do build no Netlify
4. Tente executar `pnpm build` localmente para reproduzir o erro

### Site não carrega após deploy

1. Verifique se a pasta `dist` está sendo publicada corretamente
2. Verifique se o `vite.config.js` está configurado corretamente
3. Limpe o cache do navegador (Ctrl+Shift+Delete)
4. Verifique os erros no console do navegador (F12)

### Links não funcionam

1. Verifique se os links estão corretos no código
2. Verifique se o arquivo `.netlify.toml` está configurado para SPA
3. Teste os links localmente com `pnpm preview`

---

**Desenvolvido com ❤️ para InvestBet Capital**
