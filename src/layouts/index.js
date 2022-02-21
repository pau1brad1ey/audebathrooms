import React from 'react'
// import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'
import { Navbar, NavItem } from 'react-bootstrap'
import Scrollspy from 'react-scrollspy'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './theme.css'

const Header = () => (
  <Navbar collapseOnSelect fixed='top' id='navbar-main' variant='dark'>
    <div className='container'>
      <Navbar.Brand>
         Justin Harrison
       </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Scrollspy className='nav navbar-nav' items={['home', 'services', 'portfolio', 'team', 'contact']} currentClassName={'active'}>
          <NavItem href='/#home'>Home</NavItem>
          <NavItem href='/#services'> Services</NavItem>
          <NavItem href='/#portfolio'> Our work</NavItem>
          <NavItem href='/#team'> Meet the Team</NavItem>
          <NavItem href='/#contact'> Contact</NavItem>
        </Scrollspy>
      </Navbar.Collapse>
    </div>
  </Navbar>
)

const Footer = () => (
  <div id='footerwrap'>
    <div className='container'>
      <h4>Copyright {new Date().getFullYear()}</h4>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Justin Harrison'
      meta={[
        { name: 'description', content: 'Justin Harrison - Artisan. ' },
        { name: 'keywords', content: 'Aude bathrooms, Justin, Harrison, Artisan, Bathroom, Carcassonne' }
      ]}
      link={[
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic'},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,300,700'}
      ]}
    />
    <Header />
    {children}
    <Footer />
  </div>
)

export default TemplateWrapper
