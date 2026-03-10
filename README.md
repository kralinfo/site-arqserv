# ArqServ - Site Oficial

Bem-vindo ao repositório do site **ArqServ**. Este projeto foi desenvolvido utilizando **React 19** e **Vite**, com foco em uma experiência de usuário moderna, responsiva e com alta performance.

## 🚀 Tecnologias Utilizadas

- **React 19**
- **Vite** (Build Tool)
- **Framer Motion** (Animações)
- **Lucide React** (Ícones)
- **Vanilla CSS** (Estilização customizada)

---

## 🛠️ Como rodar o projeto localmente

Siga os passos abaixo para preparar o ambiente e rodar o site em seu computador:

### 1. Pré-requisitos
Certifique-se de ter o **Node.js** instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

### 2. Instalar dependências
Abra o terminal na pasta raiz do projeto e execute o comando:
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
Para rodar o projeto em modo de desenvolvimento, use:
```bash
npm run dev
```
Após executar, o terminal mostrará um link (geralmente `http://localhost:5173`). Abra-o no seu navegador para ver o site.

---

## 🌐 Como colocar o site no ar (Deploy)

Para publicar o site na internet, você tem algumas opções principais:

### Opção A: Vercel (Recomendado)
A Vercel é a plataforma mais simples para projetos React/Vite.
1. Crie uma conta em [vercel.com](https://vercel.com/).
2. Conecte seu repositório do GitHub.
3. A Vercel detectará automaticamente as configurações do Vite. Basta clicar em **Deploy**.

### Opção B: Netlify
1. Crie uma conta em [netlify.com](https://netlify.com/).
2. Arraste a pasta `dist` (gerada após o comando de build) para o painel do Netlify ou conecte seu GitHub.

### Gerando os arquivos de produção manualmente
Se você for hospedar em um servidor tradicional (via FTP ou similar), precisará gerar os arquivos otimizados:
1. Execute o comando:
   ```bash
   npm run build
   ```
2. Isso criará uma pasta chamada `dist/` na raiz do projeto.
3. O conteúdo dessa pasta `dist/` é o que deve ser enviado para o seu servidor.

---

## 📂 Estrutura de Pastas

- `/src`: Contém todo o código fonte (componentes, estilos e lógica).
- `/public`: Arquivos estáticos como ícones e imagens que não passam pelo processamento do Vite.
- `index.html`: O ponto de entrada da aplicação.
- `package.json`: Configurações do projeto e dependências.

---

## ✍️ Contribuição

Sinta-se à vontade para sugerir melhorias ou abrir issues no repositório!
