import React from 'react'
import Map from './Map'
export default function Contac() {
  return (
    <div className='contact'>
      <div className="item-contact">
        <div className="title-contact">
          <h3>
            Bizga habaringizni yo'llang
          </h3>
        </div>
        <div className="main-contact-information">
          <div className="inputs-contact">
            <section>
              <input type="email" required placeholder='Emailingizni kiriting...' />
              <textarea name="" id="" cols="30" rows="10" placeholder='Savol yoki taklifingizni yuboring...'></textarea>
            </section>
            <span>
              <button>
                Yuborish
              </button>
            </span>
          </div>
          <div className="location">
            <Map />
          </div>
        </div>
      </div>
    </div>
  )
}
