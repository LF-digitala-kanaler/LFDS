import { Link } from 'gatsby'
import React from 'react'
import cx from 'classnames'
import style from './index.module.css'

const Card = ({ title, url, image, description, grid, lang }) => {
  return (
    <Link
      className={cx(style.Card, grid ? '' : style.Card__list)}
      to={`${url}`}
    >
      <article className={cx(!grid ? style.Card__wrapper : '')}>
        <div
          className={cx(
            style.Card__image,
            grid ? '' : style.Card__image__spacing
          )}
        >
          {image != null ? (
            <img className={style.Card__object} src={image.publicURL} alt=" " />
          ) : (
            <svg
              className={style.Card__empty}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  strokeWidth="2"
                  stroke="#e5e5e5"
                  fill="#ffffff"
                  d="M0 0h239.625v119.927H0z"
                />
                <path
                  fill="#DCDDDE"
                  d="M18.433 41.231h202.759v3.574H18.433zM18.433 51.954h202.759v3.574H18.433zM18.433 62.677h202.759v3.574H18.433zM18.433 73.4h55.298v3.574H18.433z"
                />
                <text
                  fontFamily="Arial-BoldMT, Arial"
                  fontSize="40"
                  fontWeight="bold"
                  fill="#222"
                >
                  <tspan x="155.912" y="65.362">
                    ?
                  </tspan>
                </text>
              </g>
            </svg>
          )}
        </div>
        <div>
          <h2
            className={cx(
              style.Card__title,
              grid ? style.Card__title__small : ''
            )}
          >
            {title}
            {lang === true && !grid && (
              <svg
                className={style.Card__flag}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 22"
              >
                <defs>
                  <path id="a1" d="M0 0h29.665v22H0z" />
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M0 0h29.938v22H0z"
                    fill="#006AA7"
                    fillRule="nonzero"
                  />
                  <mask id="b1" fill="#fff">
                    <use xlinkHref="#a1" />
                  </mask>
                  <path
                    fill="#FECC00"
                    fillRule="nonzero"
                    mask="url(#b1)"
                    d="M7.416 9.167H0v3.666h7.416V22h3.708v-9.167h18.814V9.167H11.124V0H7.416z"
                  />
                </g>
              </svg>
            )}
            {lang === true && grid && (
              <svg
                className={style.Card__flag}
                width="18"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path id="a" d="M0 0h17.711v12H0z" />
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M0 0h17.711v12H0z"
                    fill="#006AA7"
                    fillRule="nonzero"
                  />
                  <mask id="b" fill="#fff">
                    <use xlinkHref="#a" />
                  </mask>
                  <path
                    fill="#FECC00"
                    fillRule="nonzero"
                    mask="url(#b)"
                    d="M4.428 5H0v2h4.428v5h2.214V7h11.069V5H6.642V0H4.428z"
                  />
                </g>
              </svg>
            )}
          </h2>
          {!grid && <p className={style.Card__description}>{description}</p>}
        </div>
      </article>
    </Link>
  )
}

export default Card
