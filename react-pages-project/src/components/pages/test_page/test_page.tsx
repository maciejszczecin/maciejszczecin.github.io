import { Link } from "react-router-dom";
import style from './test_page.module.css'

const test_page = () => {
  return (
    <>
      <header className={style.header}>
        <h1>
          Test
        </h1>

        <Link to="/">
        <h2>
            Home
        </h2>
        </Link>
      </header>

      <main className={style.main}>
        <article>
          <h3>Test</h3>

          <p>Test</p>
        </article>
      </main>
    </>
  )
};

export default test_page;