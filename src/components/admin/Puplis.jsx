import React, { useState } from 'react'
import PupilsList from './PupilsList'
import { puplisData } from '../data/PuplisData'
import { Link } from 'react-router-dom'
export default function Puplis() {


    const [query, setQuery] = useState("")
    const keys = ["name", "surname", "fathername"]

    const Search = (data) => {
        return (
            data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query)))
        )
    }


    return (
        <div className='puplis absalute'>
            <div className="item-puplis">
                <div className="top-puplis">
                    <Link to='/Admin007maktabMain'>
                        <span>
                            Ortga qaytish
                        </span>
                    </Link>
                    <input type="text" placeholder='Qidirish...' onChange={(e) => setQuery(e.target.value)} />
                </div>
                <div className="main-list-puplis">
                    <PupilsList data={Search(puplisData)} />
                </div>
            </div>
        </div>
    )
}
