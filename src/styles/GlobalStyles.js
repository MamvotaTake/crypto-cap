import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    // brand color: #0fae96

    /* Font Size
        10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 


    */
        
    :root {
        /* ---------COLORS------------ */

        /* ----Dark cyan---- */
        --color-lime-0: #e7f7f5;
        --color-lime-50: #b7e7e0;
        --color-lime-100: #9fdfd5;
        --color-lime-200: #87d7cb;
        --color-lime-300: #6fcec0;
        --color-lime-400: #57c6b6;
        --color-lime-500: #3fbeab;
        --color-lime-600: #27b6a1;
        --color-lime-900: #0fae96;

        /* ---Grey--- */
        --color-grey-0: #fff;
        --color-grey-50: #f9fafb;
        --color-grey-100: #f3f4f6;
        --color-grey-200: #e5e7eb;
        --color-grey-300: #d1d5db;
        --color-grey-400: #9ca3af;
        --color-grey-500: #6b7280;
        --color-grey-600: #4b5563;
        --color-grey-700: #374151;
        --color-grey-800: #1f2937;
        --color-grey-900: #111827;

        --color-green-100: #dcfce7;
        --color-green-700: #15803d;

        --color-red-100: #fee2e2;
        --color-red-700: #b91c1c;
        --color-red-800: #991b1b;

        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
        --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
        --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

        --border-radius-tiny: 3px;
        --border-radius-sm: 5px;
        --border-radius-md: 7px;
        --border-radius-lg: 9px;

        /* ----For dark mode---- */
        --image-grayscale: 0;
        --image-opacity: 100%;
    }

    :has(p,h1,h2,h3,h4,h5,h6 ){
        overflow-wrap: break-word;
        hyphens: auto;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;

        /* Creating animation for dark mode */
        transition: background-color 0.3s, border 0 0.3s;
    }

    body {
        font-family: "Poppins", sans-serif;
        color: #0D3E36;
    }

    ul{
        list-style-type: none !important ;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

`

export default GlobalStyles;