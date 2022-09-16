import React from 'react'
import balance from '../../pdf/balance_PDF.pdf';
export default function HeaderPage() {
  return (
    <div>
         <div className='div-main-container'>
         <a href="http://localhost:3000/pdf/balance_PDF.pdf" target="_blank">
            <button  type="button" className="btn btn-primary div-main">Download PDF</button>
        </a>
        </div>
    </div>
  )
}
