import React, { useState } from 'react'
import "../css/admin.css"
import { Link, useNavigate } from 'react-router-dom'
import { puplisData } from '../data/PuplisData'


export default function Admin() {



  const navigate = useNavigate()
  const HandlerPuplis = () => {
    navigate("/Puplis")
  }


  return (
    <>
      <section className="admin">
        <div className="admin-item">

          <div className="top">
            <Link to='/*'> <b>Asosiy bo'limga qaytish uchun bosing</b> </Link>
          </div>


          <section className="main-information-admin">


            <div className="top-information-admin">

              <div onClick={HandlerPuplis} className="first-box">
                <h1>
                  {puplisData.length * 106}
                </h1>
                <p>
                  Maktabning umumiy o'quvchilari soni
                </p>
                <span>
                  Ko'rish uchun bosing
                </span>
              </div>

              <div className="second-box">
                <h1>
                  {puplisData.length * 8.4}
                </h1>
                <p>
                  Maktabning umumiy o'qituvchilari soni
                </p>
                <span>
                  Ko'rish uchun bosing
                </span>
              </div>

              <div className="third-box">
                <h1>
                  {puplisData.length * 10.6}
                </h1>
                <p>
                  Maktabning umumiy xodimlari soni
                </p>
                <span>
                  Ko'rish uchun bosing
                </span>
              </div>


            </div>


            <div className="main-add-inputs">


              <section className="puplis-add">
                <div className="title">
                  <span>
                    O'quvchi qo'shish
                  </span>
                </div>
                <div className="inputs-box">
                  <div>
                    <label htmlFor="name">Ism</label>
                    <input type="text" id='name' required />
                  </div>
                  <div>
                    <label htmlFor="surname">Familiya</label>
                    <input type="text" id='surname' required />
                  </div>
                  <div>
                    <label htmlFor="fathername">Otasining ismi</label>
                    <input type="text" id='fathername' required />
                  </div>
                  <div>
                    <label htmlFor="sinfi">Sinfi</label>
                    <input type="text" id='sinfi' required />
                  </div>
                  <span>
                    <button>
                      Yuborish
                    </button>
                    <button>
                      Bekor qilish
                    </button>
                  </span>
                </div>
              </section>



              <section className="puplis-add">
                <div className="title">
                  <span>
                    O'qituvchi qo'shish
                  </span>
                </div>
                <div className="inputs-box">
                  <div>
                    <label htmlFor="ism">Ism</label>
                    <input type="text" id='ism' required />
                  </div>
                  <div>
                    <label htmlFor="familiya">Familiya</label>
                    <input type="text" id='familiya' required />
                  </div>
                  <div>
                    <label htmlFor="otaism">Otasining ismi</label>
                    <input type="text" id='otaism' required />
                  </div>
                  <div>
                    <label htmlFor="mutahasis">Mutahasisligi (Ingliz tili)</label>
                    <input type="text" id='mutahasis' required />
                  </div>
                  <div>
                    <label htmlFor="otaism"> Diplom raqami</label>
                    <input type="text" id='otaism' required />
                  </div>
                  <div>
                    <label htmlFor="otaism">Sertifikati bormi (IELTS)</label>
                    <input type="text" id='otaism' required />
                  </div>
                  <span>
                    <button>
                      Yuborish
                    </button>
                    <button>
                      Bekor qilish
                    </button>
                  </span>
                </div>
              </section>

              <section className="puplis-add">
                <div className="title">
                  <span>
                    Tadbir qo'shish
                  </span>
                </div>
                <div className="inputs-box">
                  <div>
                    <label htmlFor="nomi">Nomi</label>
                    <input type="text" id='nomi' required />
                  </div>
                  <div>
                    <label htmlFor="sanasi">Sanasi</label>
                    <input type="date" id='sanasi' required />
                  </div>
                  <div>
                    <label htmlFor="masulsinf"> Masul sinf(lar)</label>
                    <input type="text" id='masulsinf' required />
                  </div>
                  <div>
                    <label htmlFor="mutahasis">Masul Muallim (Sinf raxbar)</label>
                    <input type="text" id='mutahasis' required />
                  </div>
                  <span>
                    <button>
                      Yuborish
                    </button>
                    <button>
                      Bekor qilish
                    </button>
                  </span>
                </div>
              </section>

            </div>


          </section>

        </div>
      </section>
    </>
  )
}
