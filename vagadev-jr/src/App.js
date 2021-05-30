import { useState } from "react";
//components
import Navbar from "./components/Navbar";
import CardApresentation from "./components/CardApresentation";
import CardGroup from "./components/CardGroup";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
// import Slider from "react-slick";
import Carousel from "@brainhubeu/react-carousel";
import CarouselControl from "./components/CarouselControl";

import imageBanner1 from "./assets/img/principal_banner_desktop.jpg";
import imageBanner2 from "./assets/img/principal_banner_desktop_02.jpg";
import imageBannerMobile1 from "./assets/img/principal_banner_mobile.jpg";
import imageBannerMobile2 from "./assets/img/principal_banner_mobile_02.jpg";
import imageZelda from "./assets/img/zelda_banner.jpg";
import imageSekiro from "./assets/img/sekiro_banner.jpg";
import pointGroup from "./assets/svgs/pointGroup.svg";
import product1 from "./assets/img/product-outriders.png";
import product2 from "./assets/img/product-cyberpunk2077.png";
import product3 from "./assets/img/product-donkey-kong-country.png";
import marioImage from "./assets/img/marioImage.png";

import "./styles/index.css";
import "@brainhubeu/react-carousel/lib/style.css";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const dataProductsOriginal = [
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

function App() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [dataProducts, setDataProducts] = useState(dataProductsOriginal);
  const [valueCarousel, setValueCarousel] = useState(0);

  const dataItensApresentation = [
    { image: imageZelda, legend: "The legend of Zelda - Breath of the wild" },
    { image: imageSekiro, legend: "SEKIRO - Shadows die twice" },
  ];

  const onSearch = (value) => {
    if (value.length > 0) {
      let newData = dataProductsOriginal.filter((item) =>
        item.title.toUpperCase().includes(value.toUpperCase())
      );
      console.log(value);
      setDataProducts(newData);
    } else {
      setDataProducts(dataProductsOriginal);
    }
  };

  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Navbar onSearch={onSearch} />
      <div className="header">
        <div className="banner">
          <div className="container-images-carousel">
            <Carousel
              value={valueCarousel}
              onChange={setValueCarousel}
              plugins={["infinite"]}
            >
              <div>
                <img src={imageBanner1} alt="Imagem banner" />
              </div>
              <div>
                <img src={imageBanner2} alt="Imagem banner" />
              </div>
            </Carousel>
            <CarouselControl
              mode="vertical"
              value={valueCarousel + 1}
              onChangeRight={() =>
                setValueCarousel(valueCarousel === 1 ? 0 : 1)
              }
              onChangeLeft={() => setValueCarousel(valueCarousel === 1 ? 0 : 1)}
            />
          </div>

          <div className="container-images-carousel-mobile">
            <Carousel
              value={valueCarousel}
              onChange={setValueCarousel}
              plugins={["infinite"]}
            >
              <div>
                <img src={imageBannerMobile1} alt="Imagem banner" />
              </div>
              <div>
                <img src={imageBannerMobile2} alt="Imagem banner" />
              </div>
            </Carousel>
            <CarouselControl
              mode="vertical"
              value={valueCarousel + 1}
              onChangeRight={() =>
                setValueCarousel(valueCarousel === 1 ? 0 : 1)
              }
              onChangeLeft={() => setValueCarousel(valueCarousel === 1 ? 0 : 1)}
            />
          </div>
          {/* <div>
            <img src={imageBanner1} alt="Imagem banner" />
          </div>
          <div>
            <img src={imageBanner2} alt="Imagem banner" />
          </div> */}

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
              <CardGroup
                data={dataProducts}
                purchased={visibleModal}
                onClickBuy={() => setVisibleModal(true)}
              />
            </div>
          </div>
        </div>
      </main>
      <Modal visible={visibleModal} onClose={() => setVisibleModal(false)}>
        <div className="finished-order">
          <fieldset className="text-divisor ">
            <legend>Pedido realizado com sucesso!</legend>
          </fieldset>
          <div style={{ textAlign: "center" }}>
            <img src={marioImage} alt="Imagem mário" />
          </div>
        </div>
      </Modal>
      <Footer />
    </div>
  );
}

export default App;
