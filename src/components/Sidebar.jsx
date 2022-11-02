import React from 'react'
import Avatar from '../img/profile.jpg'
import SocialNetworks from './SocialNetworks'
import cvFile from '../assets/cv-pedro-ricardo-frontend-developer.pdf'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt="Pedro Ricardo" />
      <p className='title'>Desenvolvedor</p>
     
      <SocialNetworks/>
      <InformationContainer/>
      <a href={cvFile} download className='btn'>Download currículo</a>
    </aside> 
  )
}

export default Sidebar