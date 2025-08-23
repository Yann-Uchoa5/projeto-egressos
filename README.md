# Portal dos Egressos IFCE

Este é o projeto do Portal dos Egressos do Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE) - Campus Boa Viagem.

## Sobre o Projeto

O projeto "A Voz do Egresso: instrumento de tomada de consciência e intervenção na realidade" tem por objetivo mapear os egressos dos cursos técnicos e superiores do IFCE/Campus Crateús, analisando sua situação profissional e os impactos das experiências acadêmicas recebidas.

## Tecnologias Utilizadas

- React 18
- Vite
- CSS3
- JavaScript (JSX)

## Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx          # Componente do cabeçalho/navbar
│   └── ImageSection.jsx    # Componente da seção de imagem/QR Code
├── pages/
│   ├── home.jsx            # Página principal
│   └── home.css            # Estilos da página home
├── App.jsx                 # Componente principal da aplicação
└── main.jsx                # Ponto de entrada da aplicação
```

## Como Executar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o projeto:
   ```bash
   npm run dev
   ```

## Personalização

### Adicionar Imagem ao Header

Para adicionar uma imagem ao header (como logo do IFCE), você pode:

1. Colocar a imagem na pasta `src/assets/`
2. Importar no componente `Header.jsx`:
   ```jsx
   import logo from '../assets/logo-ifce.png';
   ```
3. Adicionar a imagem no JSX:
   ```jsx
   <div className="header-left">
     <img src={logo} alt="Logo IFCE" className="header-logo" />
     <h1 className="ifce-title">IFCE</h1>
     <p className="campus-subtitle">Campus Boa Viagem</p>
   </div>
   ```

### Adicionar QR Code

Para adicionar o QR Code na seção de imagem:

1. Colocar a imagem do QR Code na pasta `src/assets/`
2. Importar no componente `ImageSection.jsx`:
   ```jsx
   import qrCode from '../assets/qr-code.png';
   ```
3. Substituir o placeholder pela imagem:
   ```jsx
   <div className="image-section">
     <img src={qrCode} alt="QR Code para questionário" className="qr-code-image" />
   </div>
   ```

### Cores do Projeto

As cores principais utilizadas são:
- Verde principal: `#217333`
- Verde escuro: `#1A5C29`
- Verde claro: `#E8F5E9`
- Branco: `#FFFFFF`
- Texto: `#333333`

## Funcionalidades

- **Header Responsivo**: Cabeçalho com logo, título e botão de questionário
- **Layout em Grid**: Conteúdo organizado em duas colunas (imagem + texto)
- **Design Responsivo**: Adaptável para diferentes tamanhos de tela
- **Componentes Modulares**: Estrutura organizada em componentes reutilizáveis

## Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## Licença

Este projeto é desenvolvido para o IFCE e está sob os termos da instituição.
