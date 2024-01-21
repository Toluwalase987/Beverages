import React, { useContext, useEffect } from 'react'
import '../../../css/Help.css'

export default function Help() {

  return (
    <div className='help'>
      <div className="help-content">
        <h4>Help Center</h4>
        <h3>Hi, we are here to help you.</h3>
        <h5>Send your questions, requests or complaints to</h5>
        <a className="help-link" data-allow-intent href="mailto:toluwalase987@gmail.com" target="_blank">naijabeverages@gmail.com</a>
        <h5>Or Send Us A Whatsapp/Text Message On</h5>
        <p>08148589036</p>
      </div>
    </div>
  )
}
