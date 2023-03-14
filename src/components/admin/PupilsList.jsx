import React from 'react'
export default function PupilsList({ data }) {
    return (
        <>
            <table>
                {
                    data.map((item, index) => {
                        return (
                            <>
                                <div className='pupillist' key={index}>
                                    <tr>
                                        <td>
                                            {
                                                item.id
                                            }
                                        </td>
                                        <td>
                                            {
                                                item.surname
                                            }
                                        </td>
                                        <td>
                                            {
                                                item.name
                                            }
                                        </td>
                                        <td>
                                            {
                                                item.fathername
                                            }
                                        </td>
                                        <td>
                                            {
                                                item.sinfi
                                            }{
                                                item.sinfiHarfi
                                            }
                                        </td>
                                    </tr>
                                    <td>
                                        <button>
                                            delete
                                        </button>
                                    </td>
                                </div>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}
