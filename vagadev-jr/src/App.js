//components
import Navbar from "./components/Navbar";
import CardApresentation from "./components/CardApresentation";
import CardGroup from "./components/CardGroup";
import Footer from "./components/Footer";

import imageBanner1 from "./assets/img/principal_banner_desktop.jpg";
import imageZelda from "./assets/img/zelda_banner.jpg";
import imageSekiro from "./assets/img/sekiro_banner.jpg";
import pointGroup from "./assets/svgs/pointGroup.svg";
import product1 from "./assets/img/product-outriders.png";
import product2 from "./assets/img/product-cyberpunk2077.png";
import product3 from "./assets/img/product-donkey-kong-country.png";

import "./styles/index.css";

function App() {
  const dataItensApresentation = [
    { image: imageZelda, legend: "The legend of Zelda - Breath of the wild" },
    { image: imageSekiro, legend: "SEKIRO - Shadows die twice" },
  ];

  const dataProducts = [
    {
      image: product1,
      title: "Outriders",
      price: 200,
    },
    {
      image: product2,
      title: "CYBERPUYNK 2077",
      price: 200,
    },
    {
      image: product3,
      title: "Donkey Kong Country Tropical Freeze",
      price: 200,
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="header">
        <div className="banner">
          <img src={imageBanner1} alt="Imagem banner"/>
          <div className="container-text">
            <h2 className="title-banner">MORTAL KOMBAT</h2>
            <h1 className="price-banner">
              R$ 299<p>,99</p>
            </h1>
            <h3 className="description-banner">
              Mortal Kombat X combina uma apresentação cinemática única com uma
              jogabilidade totalmente nova. Os jogadores podem escolher pela
              primeira vez diversas variantes de cada personagem, afetando tanto
              a estratégia como o estilo de luta.
            </h3>
          </div>
        </div>
      </div>

      <main>
        <div className="container-main">
          <div className="itens-apresentation">
            <div className="container-itens">
              {dataItensApresentation.map((item, index) => {
                return (
                  <CardApresentation
                    legend={item.legend}
                    image={item.image}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
          <div className="products">
            <div className="products-header">
              <img src={pointGroup} alt="Marcador" />{" "}
              <span> Produtos em destaque</span>
            </div>
            <div className="list-products">
              {/* <CardProduct
                image={product1}
                title={"CYBERPUNK 2077"}
                price={200}
              /> */}
              <CardGroup data={dataProducts} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
