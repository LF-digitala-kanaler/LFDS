import * as style from './index.module.css'

import { createBreakpoint } from 'react-use'
import React from 'react'

export const Logotype = () => {
  const useBreakpoint = createBreakpoint({ M: 1024, S: 768 })
  const breakpoint = useBreakpoint()

  return (
    <>
      {breakpoint === 'M' ? (
        <svg
          className={style.Logotype}
          width="51"
          height="35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g strokeWidth="2" fill="none" fillRule="evenodd">
            <path
              d="M6.167 16.745c-.161.902-.423 3.782 1.85 7.297"
              stroke="#005AA0"
            />
            <path d="M9.868 14.453s-.969 3.33 1.786 7.59" stroke="#E30613" />
            <path
              d="M28.827 19.604c3.286-1.148 5.258-4.06 4.404-6.505-.853-2.445-4.209-3.497-7.495-2.35-3.286 1.148-5.258 4.06-4.404 6.505M28.827 19.604c-1.354.462-5.24 1.318-12.068-.434l-6.2 15.271"
              stroke="#005AA0"
            />
            <path
              d="M21.332 17.254c-1.486-3.635-6.65-4.963-11.536-2.967-6.672 2.726-7.96 10.934-7.96 10.934s6.668 4.956 13.34 2.23c4.885-1.997 7.641-6.562 6.156-10.197zM25.599 33.144l1.215-10.785M41.831 30.023l-7.907-10.88M31.145 6.765c-1.036 2.47.814 5.6 4.132 6.993 4.53 1.902 9.109-1.434 9.109-1.434S43.56 6.72 39.03 4.818c-3.318-1.393-6.848-.521-7.885 1.947z"
              stroke="#005AA0"
            />
            <path
              stroke="#005AA0"
              d="M42.201 8.313l2.985-3.064L50 5.958M39.902 5.92L44.023 2l4.814.708"
            />
          </g>
        </svg>
      ) : (
        <svg
          className={style.Logotype}
          width="42"
          height="29"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g strokeWidth="2" fill="none" fillRule="evenodd">
            <path
              d="M5.218 14.037c-.131.736-.345 3.087 1.51 5.957"
              stroke="#005AA0"
            />
            <path d="M8.24 12.166s-.792 2.718 1.457 6.196" stroke="#E30613" />
            <path
              d="M23.716 16.37c2.683-.936 4.292-3.314 3.595-5.31-.696-1.995-3.436-2.854-6.118-1.917-2.683.936-4.292 3.314-3.595 5.31M23.716 16.37c-1.106.378-4.278 1.077-9.852-.353l-5.06 12.466"
              stroke="#005AA0"
            />
            <path
              d="M17.597 14.452c-1.212-2.967-5.428-4.052-9.416-2.422-5.447 2.226-6.498 8.926-6.498 8.926s5.442 4.046 10.89 1.82c3.987-1.63 6.237-5.356 5.024-8.324zM21.081 27.423l.992-8.804M34.331 24.876l-6.454-8.881M25.608 5.89c-.845 2.016.664 4.57 3.373 5.708 3.699 1.553 7.436-1.17 7.436-1.17s-.673-4.575-4.372-6.128c-2.709-1.137-5.59-.425-6.437 1.59z"
              stroke="#005AA0"
            />
            <path
              stroke="#005AA0"
              d="M34.633 7.153l2.437-2.501 3.93.579M32.757 5.2L36.121 2l3.93.578"
            />
          </g>
        </svg>
      )}
    </>
  )
}

export default Logotype
