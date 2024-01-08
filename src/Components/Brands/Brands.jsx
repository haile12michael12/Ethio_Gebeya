import { Container } from "react-bootstrap";

const Brands = () => {
  const photos = [
    { image: "../fa-brands-2.svg", name: "brand1", id: "1" },
    { image: "../fa-brands-3.svg", name: "brand1", id: "2" },
    { image: "../fa-brands-4.svg", name: "brand1", id: "3" },
    { image: "../col-md-2.svg", name: "brand1", id: "4" },
  ];

  return (
    <div>
      <Container>
        <div className="row p-5 justify-content-center align-items-center">
          {photos.map((photo) => (
            <div
              className="col-lg-3 p-3 d-flex justify-content-center align-items-center "
              key={photo.id}
            >
              <div>
                <img src={photo.image} alt={photo.name} className=" h-100" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Brands;
