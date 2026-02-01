# Website Pessoal - Fernando

Um site moderno e profissional para o escritor Fernando compartilhar seus pensamentos diários e vender seu livro.

## 🚀 Funcionalidades

### 📝 Pensamentos Diários
- Sistema de blog com posts organizados por data
- Categorias para organizar os pensamentos (reflexão, vida, escrita, autoconhecimento, filosofia)
- Tempo estimado de leitura para cada post
- Modal de leitura expandida para melhor experiência
- Sistema de carregamento dinâmico (load more)

### 📚 Venda de Livros
- Página de vendas atrativa com design profissional
- Sistema de compra simulado com formulário
- Preços promocionais e badges de desconto
- Modal de checkout integrado

### 🎨 Design Responsivo
- Interface moderna usando TailwindCSS
- Totalmente responsivo para desktop, tablet e mobile
- Animações suaves e transições elegantes
- Gradientes e sombras modernas

### 📞 Contato
- Formulário de contato funcional
- Integração com redes sociais
- Sistema de notificações elegante

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica moderna
- **TailwindCSS**: Framework CSS para design responsivo
- **JavaScript Vanilla**: Funcionalidades interativas
- **Font Awesome**: Ícones profissionais
- **Google Fonts**: Tipografia elegante (Merriweather + Inter)

## 📁 Estrutura do Projeto

```
personal-website-3/
├── index.html          # Página principal
├── script.js           # Funcionalidades JavaScript
├── README.md          # Documentação do projeto
└── assets/            # Pasta para imagens e recursos (criar quando necessário)
```

## 🚀 Como Usar

1. **Abrir o site**: Simplesmente abra o arquivo `index.html` em seu navegador preferido

2. **Publicar com Domínio Personalizado**:
   - Siga as instruções no arquivo `DEPLOY.md`
   - Configure o domínio em Vercel, Netlify ou GitHub Pages
   - Atualize as URLs nos arquivos antes do deploy

3. **Personalizar o conteúdo**:
   - Edite os pensamentos no arquivo `script.js` (array `thoughtsData`)
   - Modifique informações sobre o livro na seção correspondente do `index.html`
   - Atualize dados pessoais na seção "Sobre Mim"

4. **Adicionar novos pensamentos**:
   ```javascript
   {
       id: 7,
       date: '2024-01-08',
       title: 'Seu Novo Pensamento',
       content: 'Conteúdo do seu pensamento...',
       category: 'reflexão',
       readTime: '3 min'
   }
   ```

## 🎨 Personalização

### Cores e Estilos
- Cores principais: Roxo (#764ba2) e Rosa (#667eea)
- Fontes: Inter (corpo) e Merriweather (títulos e citações)
- Altere as variáveis CSS no `<head>` do HTML para customizar

### Categorias de Pensamentos
- reflexão (roxo)
- vida (verde)  
- escrita (azul)
- autoconhecimento (amarelo)
- filosofia (vermelho)

## 📱 Funcionalidades Interativas

- ✅ Navegação suave entre seções
- ✅ Animações ao rolar a página
- ✅ Modais para leitura expandida
- ✅ Sistema de notificações
- ✅ Formulários validados
- ✅ Efeitos hover nos cards
- ✅ Loading dinâmico de conteúdo

## 🔧 Próximos Passos

1. **Integração Real**: Conectar com sistema de pagamento real (Mercado Pago, PagSeguro)
2. **Backend**: Implementar CMS para gerenciar posts dinamicamente
3. **SEO**: Otimizar para motores de busca
4. **Performance**: Otimizar carregamento de imagens e assets
5. **Deploy**: Publicar em serviço de hospedagem

## 📞 Contato para Suporte

Para dúvidas ou personalizações adicionais, entre em contato através do formulário no site.

---

**Desenvolvido com ❤️ para Fernando - Escritor**
