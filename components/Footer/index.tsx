import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { NavLink } from '../NavLink'
import Link from 'next/link'

const FooterContainer = styled.footer`
  padding-top: 4rem;
  padding-bottom: 3rem;
  background-color: #f1f0f0;

  /* background-color: #2a2929; */
  .footer-sub__container {
    width: 300px;
    margin: 0 auto;
  }
  .footer-logo {
    position: relative;
    width: 57px;
    height: 33px;
  }
  .footer-links__container {
    display: flex;
    justify-content: space-between;
    max-width: 300px;
    margin-top: 2.5rem;
  }
  .footer-link {
    margin-bottom: 0.5rem;
  }
  .footer-socials__links {
    margin-top: 2rem;
    max-width: 300px;
    display: flex;
    gap: 1rem;
    align-self: center;
    justify-content: center;
    color: #2c2b2b;
  }
  .footer-socials {
    object-fit: contain;
  }
  .copyright {
    max-width: 300px;
    text-align: center;
    /* color: var(--secondary);
    color: var(--primary); */
    font-weight: 500;
  }
  .footer-link:hover {
    opacity: 0.6;
  }
  .footer-socials__links a:hover {
    opacity: 0.6;
  }
  .--mylink-container {
    font-size: 1.3rem;
    text-align: center;
  }
  .--mylink:hover {
    color: var(--secondary);
  }
  @media screen and (min-width: 600px) {
    .footer-sub__container {
      width: auto;
      margin: 0 auto;
    }
    .footer-head__container {
      display: flex;
      width: 570px;
      margin: 1rem auto;
      align-items: center;
    }
    .footer-links {
      display: flex;
      gap: 5rem;
      margin-left: 5rem;
    }
    .footer-links__container {
    }

    .footer-socials__links,
    .copyright {
      width: 570px;
      margin: 0 auto;
      text-align: center;
    }
    .footer-socials__links {
      margin-top: 2rem;
    }
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-sub__container">
        <div className="footer-head__container">
          <div className="footer-logo">
            <Link href="/">
              <Image src="/assets/logo.png" className="img" fill alt="logo" />
            </Link>
          </div>
          <div className="footer-links__container">
            <div className="footer-links">
              <NavLink href="/" className="footer-link">
                Home
              </NavLink>
              <NavLink href="/collection" className="footer-link">
                Collection
              </NavLink>
            </div>
            <div className="footer-links">
              <NavLink href="/about" className="footer-link">
                About
              </NavLink>
              <NavLink href="/contact" className="footer-link">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
        <div className="footer-socials__links">
          <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            <Image
              className="footer-socials"
              src="/assets/facebook.svg"
              width={15}
              height={15}
              alt="facebook"
            />
          </a>
          <a
            href="https://instagram.com/ankaraworld__"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="footer-socials"
              src="/assets/instagram.svg"
              width={15}
              height={15}
              alt="instagram"
            />
          </a>
          <a
            href="https://twitter.com/world_ankara"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="footer-socials"
              src="/assets/twitter.svg"
              width={15}
              height={15}
              alt="twitter"
            />
          </a>
        </div>
        <div className="copyright">&copy; Ankara World Empire</div>
        <div className="--mylink-container">
          <a className="--mylink" href="https://denidev.netlify.app">
            @deni
          </a>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
