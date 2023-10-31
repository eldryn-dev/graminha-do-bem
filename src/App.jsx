function App() {
  return (
    <>
      <div>
        
        <div className="produtos" ><img className="item-produto" src="src/img/graminha-tipo.png" alt="logo-graminha-do-bem" />
        </div>

        <header>
          <nav>
            <button><a href="">Graminha do Bem</a></button>
            <button><a href="">Onde comprar</a></button>
            <button><a href="">Quem somos nós</a></button>
          </nav>
        </header>

        <body id="body-bg"> 
          
          <div id="container-produtos">
            
            <div className="produtos">
              <div className="imagem-container">
                <img className="item-produto cat" src="src/img/view-adorable-cat-eating-its-food.jpg" alt="Graminha-do-bem"/>
                <p>Seu pet saudável e feliz.</p>
              </div>
            </div>

            <hr />

            <div className="produtos">
              <img className="item-produto flyer" src="src/img/flyer-graminha.jpg" alt="Flyer-Graminha-do-bem" />
            </div>
            
          </div>
        </body>
        <footer>
          <p>@graminhadobem</p>
          <div>
            <button>Instagram</button>
            <button>Facebook</button>
            <button>Twitter</button>
            <button>WhatsApp</button>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
