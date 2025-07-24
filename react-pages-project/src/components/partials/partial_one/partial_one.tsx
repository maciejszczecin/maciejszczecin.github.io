import style from './partial_one.module.css'

function page_one() {
  return (
    <>
        <main className={style.partial_one_main}>
          <h1 className={style.partial_one_h1}>
              Hello World
          </h1>
        </main>
    </>
  )
}

export default page_one;