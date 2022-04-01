import React from 'react'

function OrderScreen() {
  const Style = {color : 'green', fontSize:'23px'}
  const style = {color : 'blue', fontSize:'18px'}

  return (
    <>
    <h1 style={Style}>Order Placed Successfully ...Thanks for your order!</h1>
    <h3 style={style}>This Website is designed and developed by Chirag Tanksali !!!</h3>
    </>
  )
}

export default OrderScreen