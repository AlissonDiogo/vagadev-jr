//components
import Navbar from "./components/Navbar";
import CardApresentation from "./components/CardApresentation";

import imageBanner1 from "./assets/img/principal_banner_desktop.jpg";
import imageZelda from "./assets/img/zelda_banner.jpg";
import imageSekiro from "./assets/img/sekiro_banner.jpg";

import "./styles/index.css";

function App() {
  const dataItensApresentation = [
    { image: imageZelda, legend: "The legend of Zelda - Breath of the wild" },
    { image: imageSekiro, legend: "SEKIRO - Shadows die twice" },
  ];
  return (
    <div>
      <Navbar />
      <div className="header">
        <div className="banner">
          <img src={imageBanner1} />
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
        <div className="itens-apresentation">
          <div className="container-itens">
            {dataItensApresentation.map((item, index) => {
              console.log(item);
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
      </div>
    </div>
  );
}

export default App;
