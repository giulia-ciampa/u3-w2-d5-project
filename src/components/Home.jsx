import { Form, Container, Row, Col, Card } from "react-bootstrap"
import { useState, useEffect } from "react"
import cityImages from "../cityData"

const Home = () => {
  const [city, setCity] = useState("Seleziona la tua città")
  const [weatherData, setWeatherData] = useState(null)

  {
    /*const cityImages = {
    Rome: "https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350?wid=3200&hei=1800&fit=constrain,1&fmt=webp",
    Milan:
      "https://tourismmedia.italia.it/is/image/mitur/20220119115535-piazza-del-duomo-all-alba-milano-lombardia-shutterstock-1161075943-rid?wid=2160&hei=1320&fit=constrain,1&fmt=webp",
    "Province of Turin":
      "https://www.10cose.it/wp-content/uploads/2015/09/cosa-vedere-torino-1024x683.jpg",
    Naples:
      "https://tourismmedia.italia.it/is/image/mitur/20210323110400-shutterstock-1395977414?wid=2160&hei=1320&fit=constrain,1&fmt=webp",
    Florence:
      "https://tourismmedia.italia.it/is/image/mitur/20210401173629-firenze-toscana-gettyimages-1145040590?wid=3200&hei=1800&fit=constrain,1&fmt=webp",
    "Province of Palermo":
      "https://www.10cose.it/wp-content/uploads/2015/09/cosa-vedere-palermo.jpg",
  }*/
  }

  const getWeatherData = (cityName) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName},IT&appid=2dff8583fd68292ee41310b0114dbcd5&units=metric`,
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nel caricamento")
        }
      })

      .then((data) => {
        setWeatherData(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  //esegue il codice SOLO al caricamento della pagina
  useEffect(() => {
    getWeatherData("Roma") // Carica Roma all'inizio
  }, [])

  const handleCityChange = (e) => {
    const selectedCity = e.target.value
    setCity(selectedCity)

    if (selectedCity) {
      getWeatherData(selectedCity) // Carica la città scelta
    } else {
      getWeatherData("Roma") // Se svuota la select, torna a Roma
    }
  }

  return (
    <>
      <Container fluid>
        <Row className="d-flex justify-content-evenly align-items-start background2 h-100">
          <Col xs={12} md={6} lg={4} className="my-4">
            <Form.Select
              className="form-color"
              aria-label="Default select example"
              value={city}
              onChange={handleCityChange}
            >
              <option className="transparent" value="">
                Seleziona la tua città
              </option>
              <option className="form-color" value="Torino">
                Torino
              </option>
              <option className="form-color" value="Milano">
                Milano
              </option>
              <option className="form-color" value="Firenze">
                Firenze
              </option>
              <option className="form-color" value="Roma">
                Roma
              </option>
              <option className="form-color" value="Napoli">
                Napoli
              </option>
              <option className="form-color" value="Palermo">
                Palermo
              </option>
              <option className="form-color" value="L'Aquila">
                L'Aquila
              </option>
              <option className="form-color" value="Potenza">
                Potenza
              </option>
              <option className="form-color" value="Catanzaro">
                Catanzaro
              </option>
              <option className="form-color" value="Bologna">
                Bologna
              </option>
              <option className="form-color" value="Trieste">
                Trieste
              </option>
              <option className="form-color" value="Genova">
                Genova
              </option>
              <option className="form-color" value="Ancona">
                Ancona
              </option>
              <option className="form-color" value="Campobasso">
                Campobasso
              </option>
              <option className="form-color" value="Bari">
                Bari
              </option>
              <option className="form-color" value="Cagliari">
                Cagliari
              </option>
              <option className="form-color" value="Trento">
                Trento
              </option>
              <option className="form-color" value="Perugia">
                Perugia
              </option>
              <option className="form-color" value="Aosta">
                Aosta
              </option>
              <option className="form-color" value="Venezia">
                Venezia
              </option>
            </Form.Select>
          </Col>

          <Col xs={12} md={6} lg={4} className="my-3">
            {weatherData && (
              <Card key={weatherData.id}>
                <Card.Img
                  style={{ width: "100%" }}
                  variant="top"
                  src={cityImages[weatherData.name]}
                  alt="meteo icon"
                />
                <Card.Body>
                  <Card.Img
                    style={{ width: "80px" }}
                    variant="top"
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt="meteo icon"
                  />
                  <Card.Title className="text-primary">
                    {weatherData.name}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Meteo Attuale
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Temperatura:</strong> {weatherData.main.temp}°C{" "}
                    <br />
                    <strong>Descrizione:</strong>{" "}
                    {weatherData.weather[0].description} <br />
                    <strong>Umidità:</strong> {weatherData.main.humidity}%
                  </Card.Text>
                  {/*<Button variant="primary">Go somewhere</Button>*/}
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
