import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset'
import React from 'react'

export const textEllipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
export const hideScrollBar = css`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`

export const GlobalStyles = (
  <Global
    styles={css`
      ${emotionReset}
      *, *::after, *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        /* font-smoothing: antialiased; */
      }

      html {
        font-family: 'Roboto', 'Noto Sans KR', sans-serif;
        font-size: 16px;
        /* Prevent font scaling in landscape */
        -webkit-text-size-adjust: none; /*Chrome, Safari, newer versions of Opera*/
        -moz-text-size-adjust: none; /*Firefox*/
        -ms-text-size-adjust: none; /*Ie*/
        -o-text-size-adjust: none; /*old versions of Opera*/
      }
      body {
        letter-spacing: -0.025em;
        overflow-x: hidden;
      }
      html,
      body,
      a {
        color: inherit;
        text-decoration: none;
      }
      input,
      button {
        font: inherit;
        box-shadow: none;
        &:focus,
        &:active {
          outline: none;
        }
      }
      button {
        border: none;
        cursor: pointer;
        background: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        border-radius: 0;
      }
      li {
        list-style: none;
      }
    `}
  />
)

//다크모드 & 라이트모드
// export const lightTheme = {
//   bgColor: '#f8f7f4',
//   textColor: '#31302E',
// }

// export const darkTheme = {
//   bgColor: '#1e1e22',
//   textColor: '#ccc',
// }

// export const theme = {
//   lightTheme,
//   darkTheme,
// }

