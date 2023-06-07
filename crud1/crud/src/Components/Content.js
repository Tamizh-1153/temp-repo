import React from 'react'
import Navbar from './Navbar'
import PageContent from './PageContent'
import Footer from './Footer'


const Content = () => {
  return (
    
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />
          <PageContent />
          <Footer />
          
        </div>
      </div>
    
  )
}

export default Content