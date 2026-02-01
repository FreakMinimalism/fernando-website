# 🚀 Guia de Deploy com Domínio Personalizado

## Opções de Hospedagem Gratuitas

### 1. Vercel (Recomendado)
- **Plano**: Gratuito
- **Domínio personalizado**: ✅ Suportado
- **HTTPS**: ✅ Automático
- **Deploy**: Automático via Git

#### Passos:
1. Crie conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub/GitLab
3. Importe o projeto
4. Configure domínio personalizado em Settings → Domains
5. Adicione registro DNS: `CNAME` apontando para `cname.vercel-dns.com`

### 2. Netlify
- **Plano**: Gratuito
- **Domínio personalizado**: ✅ Suportado
- **HTTPS**: ✅ Automático

#### Passos:
1. Crie conta em [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto para fazer upload
3. Configure domínio em Site settings → Domain management
4. Adicione registro DNS: `CNAME` apontando para `seu-site.netlify.app`

### 3. GitHub Pages
- **Plano**: Gratuito
- **Domínio personalizado**: ✅ Suportado
- **HTTPS**: ✅ Automático

#### Passos:
1. Crie repositório GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages em Settings → Pages
4. Configure domínio personalizado
5. Adicione registro DNS: `CNAME` apontando para `seu-username.github.io`

## ⚙️ Configuração de DNS

### Para domínio raiz (@):
```
Tipo: A
Nome: @
Valor: 76.76.19.61 (Vercel)
```

### Para subdomínio www:
```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

## 📝 Antes do Deploy

1. **Atualize as URLs** nos arquivos:
   - `index.html`: Substitua `seu-dominio-aqui.com` pelo seu domínio real
   - `sitemap.xml`: Substitua `seu-dominio-aqui.com` pelo seu domínio real
   - `robots.txt`: Substitua `seu-dominio-aqui.com` pelo seu domínio real

2. **Teste localmente**:
   ```bash
   npm run dev
   ```

3. **Verifique todos os links** e funcionalidades

## 🔧 Pós-Deploy

1. **Configure Google Analytics** (opcional)
2. **Teste o domínio** em diferentes navegadores
3. **Verifique o HTTPS**
4. **Teste formulários** e funcionalidades interativas

## 📊 Monitoramento

- Use [Google Search Console](https://search.google.com/search-console) para monitorar SEO
- Configure analytics para tráfego
- Teste performance com [PageSpeed Insights](https://pagespeed.web.dev)

## 🆘 Suporte

Para problemas com domínio:
- Verifique configurações DNS (pode levar até 48h para propagar)
- Confirme registros CNAME/A corretos
- Teste com ferramentas online como `dnschecker.org`

---

**Seu site estará online com domínio personalizado em minutos!** 🎉
