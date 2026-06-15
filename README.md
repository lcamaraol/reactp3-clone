# 📌 Clone Pinterest - React Native (Expo + TypeScript)

Este projeto de clone das telas de **Login** e **Home (Feed)** do Pinterest, desenvolvido como atividade avaliativa (**Aventura 1**) para o **Serratec**. A aplicação foi construída do zero utilizando as melhores práticas de desenvolvimento mobile com React Native, garantindo uma estrutura modular, tipagem estática e fidelidade visual ao layout original.

---

## 🚀 Funcionalidades Implementadas

### 🔑 Tela de Login

- **Colagem de Imagens Estática:** Alinhamento de imagens de topo usando posicionamento absoluto (`position: 'absolute'`), replicando o design semelhante da colagem do Pinterest.
- **Validação de Acesso:** Fluxo de autenticação customizado. Apenas o e-mail `admin@gmail.com` concede acesso direto à Home.
- **Tratamento de Erros Nativo:** Validação estrita de domínio. Caso o usuário insira um formato inválido sem `@gmail.com` ou tente outro usuário, a aplicação exibe um pop-up de erro nativo utilizando `Alert.alert`.
- **Estados Visuais (Focus):** Input de texto com alteração dinâmica de cor de borda ao receber foco (`isFocused`).

### 🏠 Tela Inicial (Feed)

- **Masonry Grid Dupla:** Renderização dinâmica de um feed de imagens assimétrico em duas colunas, simulando perfeitamente a distribuição de conteúdo característica do Pinterest.
- **Scroll "Infinito" Organizado:** Integração fluida com `ScrollView` permitindo a rolagem vertical de múltiplos cards sem quebra ou corte de conteúdo.
- **Barra de Navegação Customizada:** Menu inferior construído com os assets locais nativos (`.png`), utilizando a propriedade `tintColor` para sobreposição de cor dinâmica e perfeita visibilidade no tema escuro.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi estruturado seguindo rigorosamente os requisitos técnicos exigidos:

- **React Native + Expo CLI:** Framework base para construção do app e gerenciamento do ambiente de desenvolvimento.
- **TypeScript (`.tsx` / `.ts`):** Tipagem estática em todos os componentes e arquivos de estilo para maior segurança e manutenibilidade.
- **Componentes Nativos Estritos:** Utilização prioritária de `View`, `Text`, `TextInput` e `Image`.
- **StyleSheet Separado:** Separação completa da lógica de renderização (`.tsx`) e estilização (`.ts`) para manter o código limpo e desacoplado.
- **React Navigation (Stack):** Gerenciamento nativo de rotas e transição de telas.

---

## 📂 Estrutura do Projeto

```
reactp3-clone/
├── assets/                      # Assets locais (Logos, Ícones e Referências)
│   ├── referencias/             # Imagens originais usadas para o clone (Requisito Git)
│   ├── pinterest_logo.png
│   ├── google_logo.png
│   └── ... (ícones da bottomNav)
├── src/                         # Código fonte da aplicação
│   ├── screens/
│   │   ├── Login/
│   │   │   ├── Login.tsx        # Componente da Tela de Login
│   │   │   └── LoginStyles.ts   # Estilos isolados da Tela de Login
│   │   └── Home/
│   │       ├── Home.tsx         # Componente da Tela Inicial
│   │       └── HomeStyles.ts    # Estilos isolados da Tela Inicial
├── App.tsx                      # Porta de entrada e configuração do Navigation Stack
├── app.json                     # Configurações do manifesto Expo
└── package.json                 # Dependências e scripts do projeto
```

---

## 🔧 Como Executar a Aplicação

Siga os passos abaixo para rodar o projeto localmente em sua máquina ou dispositivo móvel:

1. **Clonar o Repositório:**

```bash
git clone https://github.com/lcamaraol/reactp3-clone.git
cd reactp3-clone
```

2. **Instalar as Dependências:**
   Instale os módulos necessários respeitando a árvore de dependências do projeto:

```bash
npm install --legacy-peer-deps
```

3. **Iniciar o Servidor Expo (Limpando o Cache):**

```bash
npx expo start -c
```

4. **Visualizar no Dispositivo:**

- Baixe o aplicativo **Expo Go** na Google Play Store ou App Store.
- Escaneie o **QR Code** gerado no terminal com a câmera do seu celular ou diretamente pelo app Expo Go.

---

## 🎓 Autor

- **Nome:** Bernardo da Silva Araújo de Oliveira
- **Instituição:** SERRATEC
- **Curso:** Residência em TIC - Desenvolvimento de Software
- **Matéria:** Desenvolvimento Mobile / React Native
- **Avaliação:** Aventura 1 (Interface Prática)
