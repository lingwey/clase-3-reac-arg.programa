//import data from "./data/data.js";
import productos from "./data/lista_Productos";
import './app.css'
import Article from "./componentes/Article";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

function App() {
  //console.log(productos);
 
  return (
    <>
     <Header></Header>
      <main className="contenedor">
        {productos.map(producto => (
          
       <Article {...producto} key={producto.id}></Article>

        )
        )}
      </main>
      <Footer></Footer>
    </>  
  )
}

export default App
