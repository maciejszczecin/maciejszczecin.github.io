import style from './partial_two.module.css'

function page_two() {
  return (
    <>
      <main className={style.partial_two_main}>
        <header>
          <img src="./images/logo.jpg" className={style.partial_two_logo} alt="logo.jpg"></img>
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
    </>
  )
}

export default page_two;