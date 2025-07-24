import { Link } from 'react-router-dom';
import style from './partial_home.module.css'

function page_one() {
  return (
    <>
      <main className={style.partial_home_main}>
        <header>
          <h2>Home Page | Welcome</h2>
        </header>

        <h3>
          Pages Available:
        </h3>

        <nav className={style.partial_home_nav}>
          <Link className={style.partial_home_link} to="/">Home</Link>
          <Link className={style.partial_home_link} to="/one">One</Link>
          <Link className={style.partial_home_link} to="/two">Two</Link>
        </nav>
      </main>
    </>
  )
}

export default page_one;