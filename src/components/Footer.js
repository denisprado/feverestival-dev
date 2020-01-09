import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Siga-me <a href="https://instagram.com/denisforigo/">@denisforigo</a>
    </h2>
    <br />

    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyleft {new Date().getFullYear()}. Produzido por{' '}
          <a href="https://denisforigo.com/">Denis Forigo</a>.
        </span>
      </div>
    </footer>
  </div>
)
