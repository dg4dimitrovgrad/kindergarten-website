import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"

export default function Documents() {
  return (
    <Layout title="Документи | ДГ Пролет №4" description="Страница с документи на Детска градина Пролет №4">
      <section className="documents-section">
        <Container>
          <Row>
            <Col sm={12}>
              <h1 className="mb-60 text-center">Документи на институцията</h1>
            </Col>
            <Col sm={12} md={4}>
              <h2>Обществен съвет</h2>
              <ul>
                <li>
                  <a href="/files/obshtestven_suvet/pravilnik_deinost.pdf" taraet="_blank">Правилник за дейността на ОС</a>
                </li>
                <li>
                  <a href="/files/obshtestven_suvet/otchet_deinost.pdf" target="_blank">Отчет за дейността на ОС</a>
                </li>
                <li>
                  <a href="/files/obshtestven_suvet/chlenove_os.pdf" target="_blank">Членове на ОС</a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={4}>
              <h2>Организация на дейността</h2>
              <ul>
                <li>
                  <a href="/files/organizaciq_deinost/pravilnik_deinost.pdf" target="_blank">Правилник за дейността на детската градина</a>
                </li>
                <li>
                  <a href="/files/organizaciq_deinost/dneven_rejim.pdf" target="_blank">Дневен режим</a>
                </li>
                <li>
                  <a href="/files/organizaciq_deinost/sedmichno_razpredelenie.pdf" target="_blank">Седмично разпределение</a>
                </li>
                <li>
                  <a href="/files/organizaciq_deinost/grafik_priemno_vreme.pdf" target="_blank">График на приемно време</a>
                </li>
                <li>
                  <a href="/files/organizaciq_deinost/strategiq.pdf" target="_blank">Стратегия</a>
                </li>
                <li>
                  <a href="/files/organizaciq_deinost/etichen_kodeks.pdf" target="_blank">Етичен кодекс</a>
                </li>
                <li>
                  <a href="/files/organizaciq_deinost/pravila_adaptirane.pdf" target="_blank">Правила за адаптиране</a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={4}>
              <h2>Учебна документация</h2>
              <ul>
                <li>
                  <a href="/files/uchebna_dokumentaciq/godishen_plan.pdf" target="_blank">Годишен план</a>
                </li>
                <li>
                  <a href="/files/uchebna_dokumentaciq/plan_kvalifikaciq.pdf" target="_blank">План за квалификация</a>
                </li>
                <li>
                  <a href="/files/uchebna_dokumentaciq/pravila_povishavane_kvalifikaciq.pdf" target="_blank">Правила за повишаване на квалификацията</a>
                </li>
                <li>
                  <a href="/files/uchebna_dokumentaciq/programna_sistema.pdf" target="_blank">Програмна система</a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={4}>
              <h2>Отчет бюджет</h2>
              <ul>
                <li>
                  <a href="/files/biudjet/kasov_otchet_03_2023.pdf" target="_blank">Касов отчет към 31.03.2023 година</a>
                </li>
                <li>
                  <a href="/files/biudjet/kasov_otchet_06_2023.pdf" target="_blank">Касов отчет към 31.06.2023 година</a>
                </li>
                <li>
                  <a href="/files/biudjet/biudjet2023.pdf" target="_blank">Бюджет 2023</a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={4}>
              <h2>Екипи</h2>
              <ul>
                <li>
                  <a href="/files/ekipi/razpredelenie_personal.pdf" target="_blank">Разпределение на персонала по групи</a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={4}>
              <h2>Административни услуги</h2>
              <ul>
                <li>
                  <a href="/files/administrativni_uslugi/pravila_dostap_info.pdf" target="_blank">Правила за достъп до обществена информация</a>
                </li>
                <li>
                  <a href="/files/administrativni_uslugi/protokol.pdf" target="_blank">Протокол</a>
                </li>
                <li>
                  <a href="/files/administrativni_uslugi/protokol_priemane.pdf" target="_blank">Протокол за приемане на устно заявление за достъп до обществена информация</a>
                </li>
                <li>
                  <a href="/files/administrativni_uslugi/zaqvlenie.pdf" target="_blank">Заявление</a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={4}>
              <h2>Проекти и национални програми</h2>
              <ul>
                <li>
                  <a href="/files/proekti/proekti.pdf" target="_blank">Проекти и национални програми</a>
                </li>
                <li>
                  <a href="#" target="_blank">Равен достъп до училищно образование в условията на кризи</a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={4}>
              <h2>Образци на документи</h2>
              <ul>
                <li>
                  <a href="/files/obrazci/zaqvlenie_priemane.pdf" target="_blank">Заявление за приемане</a>
                </li>
                <li>
                  <a href="/files/obrazci/zaqvlenie_napuskane.pdf" target="_blank">Заявление за напускане</a>
                </li>
                <li>
                  <a href="/files/obrazci/lichna_zdravno_profilaktichna_karta.pdf" target="_blank">Лична здравно-профилактична карта</a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={4}>
              <h2>Прием</h2>
              <ul>
                <li>
                  <a href="/files/priem/zaqvlenie_zapisvane_otpisvane.pdf" target="_blank">Записване, отписване, преместване на дете</a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={4}>
              <h2>Традиции</h2>
              <ul>
                <li>
                  <a href="/files/tradicii/tradicii.pdf" target="_blank">Традиции</a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={4}>
              <h2>Защита на лични данни</h2>
              <ul>
                <li>
                  <a href="/files/administrativni_uslugi/gdpr.pdf" target="_blank">Вътрешни правила за защита на лични данни</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}
