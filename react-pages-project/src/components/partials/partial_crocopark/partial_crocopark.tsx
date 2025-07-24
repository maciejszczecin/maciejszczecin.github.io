import style from './partial_crocopark.module.css'

function partial_crocopark() {
  return (
    <>
      <title>Day Two Site</title>
      <link rel="icon" type="image/png" href="./logo_256x256.png" />

      <section className={style.main}>
        <main className={style.partial_two_main}>
          <header>
            <img src="./logo_900x900.png" className={style.partial_two_logo} alt="logo_900x900.png"></img>
            <section className={style.partial_two_header_right_section}>
              <h1 className={style.partial_two_h1}>
                <span className={style.partial_two_span_1}>CrocoPark</span>
                <span className={style.partial_two_span_2}>Agadir Marocco</span>
              </h1>
              <nav>
                <ul className={style.partial_two_ul}>
                  <li>Attractions</li>
                  <li>Spiecies</li>
                  <li>Tickets</li>
                  <li>Photos</li>
                  <li>Information about the park</li>
                </ul>
              </nav>
            </section>
          </header>

          <article>
            <h2 className={style.partial_two_h2}>
              About the park
            </h2>
            <hr></hr>
            <p>
              CrocoPark is a unique wildlife park located in Agadir, Morocco. It is home to a diverse range of animal species, including many that are native to the region. The park is dedicated to conservation and education, providing visitors with the opportunity to learn about the importance of protecting wildlife and their habitats.
            </p>
          </article>
        </main>
      </section>
    </>
  )
}

export default partial_crocopark;