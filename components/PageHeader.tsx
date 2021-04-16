import * as React from 'react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import * as config from 'lib/config'
import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const PageHeader: React.FC<{
  isDarkMode: boolean
  toggleDarkMode: () => void
  isScrollUp: boolean
}> = ({ isDarkMode, toggleDarkMode, isScrollUp }) => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const toggleDarkModeCb = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <header className={styles.footer}>
      {hasMounted ? (
        <>
          {/* {isScrollUp ? (
            <ul>
              <style jsx>
                {`
                  ul {
                    display: flex;
                    list-style: none;
                    height: 26px;
                    margin-top: 1px;
                  }
                  li {
                    margin-right: 3px;
                  }
                  li:hover {
                    color: var(--vg-color);
                  }
                  li:not(:last-of-type) {
                    margin-right: 10px;
                  }

                  svg {
                    width: 30px;
                    height: 30px;
                  }
                `}
              </style>
              <li>menu1</li>
              <li>menu2</li>
            </ul>
          ) : null} */}
          <div className={styles.settings}>
            <a
              className={styles.toggleDarkMode}
              onClick={toggleDarkModeCb}
              title='Tottle dark mode'
            >
              {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
            </a>
          </div>
          <div className={styles.social}>
            <a
              className={styles.github}
              href={`https://github.com/${config.github}`}
              title={`GitHub @${config.github}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
            </a>
          </div>
        </>
      ) : null}
    </header>
  )
}
