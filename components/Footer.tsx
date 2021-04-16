import * as React from 'react'
import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const Footer: React.FC<{
  isScrollUp: boolean
}> = ({ isScrollUp }) => {
  return (
    <footer className='footer'>
      <style jsx>{`
        .footer {
          font-size: 14px;
          position: fixed;
          bottom: 10px;
          transition: opacity 0.3s;
          opacity: ${isScrollUp ? 1 : 0};
        }
        @media only screen and (max-width: 566px) {
          .footer {
            font-size: 8px;
          }
        }
      `}</style>
      <div>Jun's Blog</div>
    </footer>
  )
}
