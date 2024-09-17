import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const TankYou = () => {
    const { orderId } = useParams();    
  return (
    <div className='container'>
        <div className='row my-3'>
        <div className='col-ms-12'>

            {orderId ? <div className='alert alert-success text-center' role="alert">
                <h3>Gracias por tu compra</h3>
                <p>Se genero una orden de compra con el ID:<b>{orderId}</b></p></div> : "" }
        </div>

        </div>
        <Link to= "/" className="btn btn-primary text-center">VOLVER</Link>
      
    </div>
  )
}

export default TankYou
