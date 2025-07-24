import { Outlet, Link } from "react-router-dom";
import style from './pages_layout.module.css'

const pages_layout = () => {
  return (
    <>
      <h1 className={style.pages_layout_h1}><Link to="/" className={style.pages_layout_h1}>React Pages Project</Link></h1>

      <Outlet />
    </>
  )
};

export default pages_layout;
