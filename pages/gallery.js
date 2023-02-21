import Layout from "../components/layout";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import kmet from "../public/images/IMG-kmet.jpg";

export default function Gallery() {
  let imageCount = 22,
    imageArr = [];
  for (let i = imageCount; i >= 0; i--) {
    imageArr.push(`/gallery/gallery${i}.jpg`);
  }

  return (
    <Layout
      title="Галерия | ДГ Пролет №4"
      description="Страница със снимки на Детска градина Пролет №4"
    >
      <section className="gallery-section">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="mw-600 text-center mx-auto mb-50">
                <h1>Добре Дошли в нашата детска градина!</h1>
                <div>
                  Тук може да разгледате снимки от любими мероприятия и различни
                  кътчета от детската градина.
                </div>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <h2 className="text-center w-75 mx-auto">24 май с кмета на Община Димитровград г-н Иво Димов!</h2>
              <div className="w-100 image-height position-relative mb-30 rounded-3 overflow-hidden">
                <Image
                  src={kmet}
                  layout="fill"
                  objectFit="cover"
                  alt="Снимка от албума на детската градина"
                />
              </div>
            </Col>
            {imageArr.map((image, index) => (
              <Col sm={12} md={6} key={index}>
                <div className="w-100 image-height position-relative mb-30 rounded-3 overflow-hidden">
                  <Image
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    alt="Снимка от албума на детската градина"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
