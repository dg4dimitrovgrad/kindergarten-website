import React from "react";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <header>
      <div className="navbar-bg-blurred" />
      <Navbar
        fixed="top"
        bg="transparent"
        expand="lg"
        className="mx-auto mw-1200"
      >
        <Navbar.Brand>
          <Link href="/">
            <a>
              <svg
                width="120"
                height="30"
                viewBox="0 0 197 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12.1738V11.3301C0 11.1016 0.0791016 10.9082 0.237305 10.75C0.401367 10.5918 0.597656 10.5127 0.826172 10.5127H1.51172L3.14648 3.85938C3.71484 1.55078 5.61914 0.396484 8.85938 0.396484H13.6055C13.834 0.396484 14.0273 0.475586 14.1855 0.633789C14.3496 0.791992 14.4316 0.985352 14.4316 1.21387V12.1914C14.4316 12.4199 14.3496 12.6133 14.1855 12.7715C14.0273 12.9238 13.834 13 13.6055 13H0.826172C0.597656 13 0.401367 12.9209 0.237305 12.7627C0.0791016 12.5986 0 12.4023 0 12.1738ZM4.89551 10.5127H11.127V2.88379H8.49902C7.94238 2.88379 7.48242 3.03613 7.11914 3.34082C6.75586 3.64551 6.50684 4.07031 6.37207 4.61523L4.89551 10.5127ZM163.429 12.1738V1.23145C163.429 1.00293 163.508 0.806641 163.666 0.642578C163.825 0.478516 164.018 0.396484 164.246 0.396484H166.83C167.036 0.396484 167.255 0.481445 167.49 0.651367C167.724 0.821289 167.909 1.01465 168.043 1.23145L172.992 9.27344V1.21387C172.992 0.985352 173.071 0.791992 173.229 0.633789C173.393 0.475586 173.589 0.396484 173.818 0.396484H175.329C175.558 0.396484 175.751 0.475586 175.91 0.633789C176.074 0.791992 176.156 0.991211 176.156 1.23145V12.1738C176.156 12.4023 176.074 12.5986 175.91 12.7627C175.751 12.9209 175.558 13 175.329 13H172.412C172.183 13 171.949 12.9209 171.708 12.7627C171.468 12.5986 171.278 12.4023 171.137 12.1738L166.637 4.75586V12.1738C166.637 12.4023 166.555 12.5986 166.391 12.7627C166.233 12.9209 166.039 13 165.811 13H164.264C164.036 13 163.839 12.9209 163.675 12.7627C163.511 12.5986 163.429 12.4023 163.429 12.1738ZM177.711 5.26562C177.131 4.74414 176.841 4.03516 176.841 3.13867C176.841 2.23633 177.131 1.52441 177.711 1.00293C178.297 0.481445 179.027 0.220703 179.9 0.220703C180.779 0.220703 181.508 0.481445 182.088 1.00293C182.668 1.52441 182.958 2.23633 182.958 3.13867C182.958 4.03516 182.668 4.74414 182.088 5.26562C181.508 5.78711 180.779 6.04785 179.9 6.04785C179.027 6.04785 178.297 5.78711 177.711 5.26562ZM177.237 8.22754V7.18164C177.237 7.02344 177.287 6.89453 177.386 6.79492C177.492 6.69531 177.623 6.64551 177.782 6.64551H182.027C182.185 6.64551 182.314 6.69824 182.413 6.80371C182.513 6.90332 182.563 7.0293 182.563 7.18164V8.22754C182.563 8.38574 182.513 8.51758 182.413 8.62305C182.314 8.72266 182.185 8.77246 182.027 8.77246H177.782C177.623 8.77246 177.492 8.72266 177.386 8.62305C177.287 8.51758 177.237 8.38574 177.237 8.22754ZM179.162 2.19824C178.986 2.42676 178.898 2.74023 178.898 3.13867C178.898 3.53125 178.986 3.8418 179.162 4.07031C179.343 4.29883 179.589 4.41309 179.9 4.41309C180.216 4.41309 180.462 4.29883 180.638 4.07031C180.82 3.8418 180.911 3.53125 180.911 3.13867C180.911 2.74023 180.82 2.42676 180.638 2.19824C180.462 1.96973 180.216 1.85547 179.9 1.85547C179.589 1.85547 179.343 1.96973 179.162 2.19824Z"
                  fill="#FF944F"
                />
                <path
                  d="M17.2269 11.8926C16.3246 11.0371 15.8734 9.80664 15.8734 8.20117C15.8734 6.58984 16.3275 5.35352 17.2357 4.49219C18.1439 3.625 19.4037 3.19141 21.015 3.19141C22.6263 3.19141 23.8832 3.61328 24.7855 4.45703C25.6879 5.29492 26.139 6.49902 26.139 8.06934V8.57031C26.139 8.72852 26.0863 8.86035 25.9808 8.96582C25.8812 9.06543 25.7523 9.11523 25.5941 9.11523H18.9759C19.0345 9.83594 19.2396 10.3604 19.5912 10.6885C19.9486 11.0166 20.517 11.1807 21.2963 11.1807C22.0755 11.1807 22.6088 11.0049 22.8959 10.6533C23.183 10.3018 23.5375 10.123 23.9593 10.1172H25.2689C25.4271 10.1172 25.556 10.1699 25.6556 10.2754C25.7611 10.375 25.8138 10.5039 25.8138 10.6621C25.8138 12.3438 24.2113 13.1816 21.0062 13.1758C19.389 13.1758 18.1293 12.748 17.2269 11.8926ZM18.9584 7.26074H23.0453C22.9867 5.87793 22.307 5.18652 21.0062 5.18652C19.7113 5.18652 19.0287 5.87793 18.9584 7.26074Z"
                  fill="#F6BA66"
                />
                <path
                  d="M26.4909 4.95801V3.91211C26.4909 3.75391 26.5407 3.625 26.6404 3.52539C26.7458 3.41992 26.8777 3.36719 27.0359 3.36719H35.6931C35.8513 3.36719 35.9802 3.41992 36.0798 3.52539C36.1794 3.625 36.2292 3.75391 36.2292 3.91211V4.95801C36.2292 5.11035 36.1794 5.23926 36.0798 5.34473C35.9802 5.44434 35.8513 5.49414 35.6931 5.49414H32.8894V12.4639C32.8894 12.6162 32.8366 12.7451 32.7312 12.8506C32.6316 12.9502 32.5027 13 32.3445 13H30.3845C30.2263 13 30.0945 12.9502 29.989 12.8506C29.8894 12.7451 29.8396 12.6162 29.8396 12.4639V5.49414H27.0359C26.8777 5.49414 26.7458 5.44434 26.6404 5.34473C26.5407 5.23926 26.4909 5.11035 26.4909 4.95801ZM122.383 12.4639V3.91211C122.383 3.75391 122.433 3.625 122.532 3.52539C122.638 3.41992 122.767 3.36719 122.919 3.36719H124.756C124.914 3.36719 125.043 3.41992 125.143 3.52539C125.248 3.625 125.301 3.75391 125.301 3.91211V9.68652L128.394 4C128.488 3.81836 128.632 3.66895 128.825 3.55176C129.019 3.42871 129.206 3.36719 129.388 3.36719H131.849C132.007 3.36719 132.136 3.41992 132.235 3.52539C132.341 3.625 132.394 3.75391 132.394 3.91211V12.4639C132.394 12.6221 132.341 12.751 132.235 12.8506C132.136 12.9502 132.007 13 131.849 13H130.012C129.853 13 129.725 12.9502 129.625 12.8506C129.525 12.7451 129.476 12.6162 129.476 12.4639V6.69824L126.382 12.3672C126.288 12.5371 126.144 12.6865 125.951 12.8154C125.758 12.9385 125.57 13 125.389 13H122.919C122.761 13 122.632 12.9502 122.532 12.8506C122.433 12.751 122.383 12.6221 122.383 12.4639Z"
                  fill="#EABA00"
                />
                <path
                  d="M41.8018 13.1758C40.1612 13.1758 38.8839 12.7539 37.9698 11.9102C37.0557 11.0664 36.5987 9.82715 36.5987 8.19238C36.5987 6.55176 37.0528 5.30957 37.961 4.46582C38.8692 3.61621 40.1319 3.19141 41.7491 3.19141C43.3721 3.19141 44.6173 3.44922 45.4845 3.96484C46.3575 4.48047 46.794 5.24219 46.794 6.25C46.794 6.4082 46.7413 6.53711 46.6358 6.63672C46.5362 6.73633 46.4073 6.78613 46.2491 6.78613H44.9395C44.5411 6.78613 44.2042 6.57227 43.9288 6.14453C43.5831 5.59375 42.9708 5.31836 42.0919 5.31836C41.2188 5.31836 40.6065 5.54395 40.255 5.99512C39.9093 6.44043 39.7364 7.16992 39.7364 8.18359C39.7364 9.19727 39.9151 9.92969 40.2725 10.3809C40.6358 10.832 41.2628 11.0576 42.1534 11.0576C43.0499 11.0576 43.671 10.7822 44.0167 10.2314C44.2921 9.79785 44.629 9.58105 45.0274 9.58105H46.337C46.4952 9.58105 46.6241 9.63379 46.7237 9.73926C46.8292 9.83887 46.8819 9.96484 46.8819 10.1172C46.8819 11.125 46.4454 11.8867 45.5723 12.4023C44.7052 12.918 43.4483 13.1758 41.8018 13.1758Z"
                  fill="#B2342A"
                />
                <path
                  d="M57.6752 12.6133C57.6752 12.8711 57.5229 13 57.2182 13H55.5571C54.9946 13 54.5463 12.7246 54.2123 12.1738L53.0961 10.3545C52.6157 9.5752 51.9184 9.18555 51.0043 9.18555V12.4639C51.0043 12.6221 50.9516 12.751 50.8461 12.8506C50.7465 12.9502 50.6205 13 50.4682 13H48.4995C48.3413 13 48.2123 12.9502 48.1127 12.8506C48.0131 12.751 47.9633 12.6221 47.9633 12.4639V3.91211C47.9633 3.75391 48.0131 3.625 48.1127 3.52539C48.2182 3.41992 48.3471 3.36719 48.4995 3.36719H50.4682C50.6264 3.36719 50.7553 3.41992 50.8549 3.52539C50.9545 3.625 51.0043 3.75391 51.0043 3.91211V7.18164C52.0239 7.18164 52.7211 6.78613 53.0961 5.99512L53.9399 4.20215C54.0571 3.9502 54.2299 3.74805 54.4584 3.5957C54.687 3.44336 54.933 3.36719 55.1967 3.36719H56.8579C57.1508 3.36719 57.2973 3.48145 57.2973 3.70996C57.2973 3.83887 57.2504 4.00293 57.1567 4.20215L56.0229 6.59277C55.8295 6.99121 55.5659 7.33398 55.2319 7.62109C54.8979 7.9082 54.5375 8.09277 54.1508 8.1748C54.8715 8.3916 55.4955 8.91895 56.0229 9.75684L57.517 12.1738C57.6166 12.3438 57.6694 12.4902 57.6752 12.6133ZM99.3372 12.3672C98.5637 11.8281 98.177 11.0664 98.177 10.082C98.177 9.09766 98.5637 8.3418 99.3372 7.81445C100.116 7.28711 101.118 7.02344 102.343 7.02344H105.252C105.252 6.33789 105.109 5.86035 104.822 5.59082C104.534 5.32129 104.031 5.18652 103.31 5.18652C102.595 5.18652 102.091 5.36523 101.798 5.72266C101.511 6.07422 101.156 6.25 100.735 6.25H99.425C99.2668 6.25 99.135 6.2002 99.0295 6.10059C98.9299 5.99512 98.8801 5.86621 98.8801 5.71387C98.8801 4.03223 100.477 3.19141 103.67 3.19141C105.065 3.19141 106.184 3.50488 107.028 4.13184C107.871 4.75293 108.293 5.7168 108.293 7.02344V12.4639C108.293 12.6221 108.243 12.751 108.144 12.8506C108.044 12.9502 107.915 13 107.757 13H106.061C105.903 13 105.774 12.9502 105.674 12.8506C105.574 12.7451 105.525 12.6162 105.525 12.4639V12.1914C104.599 12.8535 103.53 13.1816 102.317 13.1758C101.11 13.1758 100.116 12.9062 99.3372 12.3672ZM102.554 9.01855C102.144 9.01855 101.819 9.11816 101.578 9.31738C101.344 9.5166 101.227 9.77441 101.227 10.0908C101.227 10.4072 101.35 10.668 101.596 10.873C101.842 11.0781 102.191 11.1807 102.642 11.1807C103.544 11.1807 104.414 10.917 105.252 10.3896V9.01855H102.554Z"
                  fill="#63D0C9"
                />
                <path
                  d="M59.2049 12.3672C58.4314 11.8281 58.0447 11.0664 58.0447 10.082C58.0447 9.09766 58.4314 8.3418 59.2049 7.81445C59.9842 7.28711 60.9861 7.02344 62.2107 7.02344H65.1199C65.1199 6.33789 64.9764 5.86035 64.6893 5.59082C64.4021 5.32129 63.8982 5.18652 63.1775 5.18652C62.4627 5.18652 61.9588 5.36523 61.6658 5.72266C61.3787 6.07422 61.0242 6.25 60.6023 6.25H59.2928C59.1346 6.25 59.0027 6.2002 58.8973 6.10059C58.7977 5.99512 58.7479 5.86621 58.7479 5.71387C58.7479 4.03223 60.3445 3.19141 63.5379 3.19141C64.9324 3.19141 66.0516 3.50488 66.8953 4.13184C67.7391 4.75293 68.1609 5.7168 68.1609 7.02344V12.4639C68.1609 12.6221 68.1111 12.751 68.0115 12.8506C67.9119 12.9502 67.783 13 67.6248 13H65.9285C65.7703 13 65.6414 12.9502 65.5418 12.8506C65.4422 12.7451 65.3924 12.6162 65.3924 12.4639V12.1914C64.4666 12.8535 63.3973 13.1816 62.1844 13.1758C60.9773 13.1758 59.9842 12.9062 59.2049 12.3672ZM62.4217 9.01855C62.0115 9.01855 61.6863 9.11816 61.4461 9.31738C61.2117 9.5166 61.0945 9.77441 61.0945 10.0908C61.0945 10.4072 61.2176 10.668 61.4637 10.873C61.7098 11.0781 62.0584 11.1807 62.5096 11.1807C63.4119 11.1807 64.282 10.917 65.1199 10.3896V9.01855H62.4217ZM87.1639 15.4258V3.91211C87.1639 3.75391 87.2138 3.625 87.3134 3.52539C87.4188 3.41992 87.5477 3.36719 87.7001 3.36719H89.3964C89.5487 3.36719 89.6747 3.41992 89.7743 3.52539C89.8798 3.625 89.9325 3.75391 89.9325 3.91211V4.17578C90.8583 3.51953 91.9335 3.19141 93.1581 3.19141C94.3827 3.19141 95.4052 3.625 96.2255 4.49219C97.0458 5.35352 97.4559 6.58984 97.4559 8.20117C97.4559 9.80664 97.0311 11.0371 96.1815 11.8926C95.3319 12.748 94.1864 13.1758 92.745 13.1758C92.0009 13.1758 91.1542 13.0264 90.205 12.7275V15.4258C90.205 15.584 90.1522 15.7129 90.0468 15.8125C89.9472 15.918 89.8212 15.9707 89.6688 15.9707H87.7001C87.5477 15.9707 87.4188 15.918 87.3134 15.8125C87.2138 15.7129 87.1639 15.584 87.1639 15.4258ZM90.205 10.6973C90.9608 10.9375 91.5966 11.0576 92.1122 11.0576C92.9149 11.0576 93.4833 10.8291 93.8173 10.3721C94.1571 9.91504 94.327 9.18555 94.327 8.18359C94.327 7.18164 94.1659 6.45508 93.8436 6.00391C93.5272 5.54688 93.0497 5.31836 92.411 5.31836C91.7782 5.31836 91.0429 5.58203 90.205 6.10938V10.6973Z"
                  fill="#3BB190"
                />
                <path
                  d="M76.0982 12.1914V1.23145C76.0982 0.991211 76.1773 0.791992 76.3355 0.633789C76.4937 0.475586 76.6929 0.396484 76.9331 0.396484H85.4234C85.6636 0.396484 85.8599 0.475586 86.0122 0.633789C86.1704 0.791992 86.2495 0.991211 86.2495 1.23145V2.05762C86.2495 2.29785 86.1704 2.49707 86.0122 2.65527C85.8599 2.80762 85.6636 2.88379 85.4234 2.88379H79.4116V12.1914C79.4116 12.4199 79.3296 12.6133 79.1656 12.7715C79.0073 12.9238 78.814 13 78.5855 13H76.9331C76.7046 13 76.5083 12.9238 76.3443 12.7715C76.1802 12.6133 76.0982 12.4199 76.0982 12.1914Z"
                  fill="#90BA60"
                />
                <path
                  d="M109.199 12.4639V11.418C109.199 11.2598 109.249 11.1309 109.348 11.0312C109.454 10.9258 109.586 10.873 109.744 10.873H110.429L111.633 6.03027C112.079 4.25488 113.549 3.36719 116.046 3.36719H120.036C120.194 3.36719 120.323 3.41992 120.422 3.52539C120.528 3.625 120.581 3.75391 120.581 3.91211V12.4639C120.581 12.6162 120.528 12.7451 120.422 12.8506C120.323 12.9502 120.194 13 120.036 13H109.744C109.586 13 109.454 12.9502 109.348 12.8506C109.249 12.7451 109.199 12.6162 109.199 12.4639ZM113.303 10.873H117.54V5.49414H115.949C115.099 5.49414 114.56 5.9248 114.332 6.78613L113.303 10.873Z"
                  fill="#F48F03"
                />
                <path
                  d="M134.187 12.4639V3.91211C134.187 3.75391 134.237 3.625 134.336 3.52539C134.442 3.41992 134.571 3.36719 134.723 3.36719H136.692C136.85 3.36719 136.979 3.41992 137.078 3.52539C137.178 3.625 137.228 3.75391 137.228 3.91211V7.05859H141.077V3.91211C141.077 3.75391 141.127 3.625 141.227 3.52539C141.332 3.41992 141.464 3.36719 141.622 3.36719H143.582C143.741 3.36719 143.869 3.41992 143.969 3.52539C144.069 3.625 144.118 3.75391 144.118 3.91211V12.4639C144.118 12.6221 144.069 12.751 143.969 12.8506C143.869 12.9502 143.741 13 143.582 13H141.622C141.464 13 141.332 12.9502 141.227 12.8506C141.127 12.7451 141.077 12.6162 141.077 12.4639V9.18555H137.228V12.4639C137.228 12.6221 137.175 12.751 137.07 12.8506C136.97 12.9502 136.844 13 136.692 13H134.723C134.565 13 134.436 12.9502 134.336 12.8506C134.237 12.751 134.187 12.6221 134.187 12.4639Z"
                  fill="#49C69D"
                />
                <path
                  d="M146.536 12.3672C145.762 11.8281 145.376 11.0664 145.376 10.082C145.376 9.09766 145.762 8.3418 146.536 7.81445C147.315 7.28711 148.317 7.02344 149.542 7.02344H152.451C152.451 6.33789 152.307 5.86035 152.02 5.59082C151.733 5.32129 151.229 5.18652 150.508 5.18652C149.794 5.18652 149.29 5.36523 148.997 5.72266C148.71 6.07422 148.355 6.25 147.933 6.25H146.624C146.466 6.25 146.334 6.2002 146.228 6.10059C146.129 5.99512 146.079 5.86621 146.079 5.71387C146.079 4.03223 147.675 3.19141 150.869 3.19141C152.263 3.19141 153.383 3.50488 154.226 4.13184C155.07 4.75293 155.492 5.7168 155.492 7.02344V12.4639C155.492 12.6221 155.442 12.751 155.342 12.8506C155.243 12.9502 155.114 13 154.956 13H153.259C153.101 13 152.972 12.9502 152.873 12.8506C152.773 12.7451 152.723 12.6162 152.723 12.4639V12.1914C151.798 12.8535 150.728 13.1816 149.515 13.1758C148.308 13.1758 147.315 12.9062 146.536 12.3672ZM149.753 9.01855C149.342 9.01855 149.017 9.11816 148.777 9.31738C148.543 9.5166 148.425 9.77441 148.425 10.0908C148.425 10.4072 148.549 10.668 148.795 10.873C149.041 11.0781 149.389 11.1807 149.841 11.1807C150.743 11.1807 151.613 10.917 152.451 10.3896V9.01855H149.753Z"
                  fill="#57DAD7"
                />
                <path
                  d="M183.135 9.95898V8.91309C183.135 8.39746 183.316 7.94043 183.679 7.54199L189.489 0.941406C189.811 0.583984 190.268 0.402344 190.86 0.396484H193.611C193.851 0.396484 194.053 0.478516 194.218 0.642578C194.382 0.806641 194.464 1.00293 194.464 1.23145V8.29785H195.43C195.671 8.29785 195.873 8.37988 196.037 8.54395C196.201 8.70801 196.283 8.9043 196.283 9.13281V9.95898C196.283 10.1875 196.198 10.3838 196.028 10.5479C195.858 10.7061 195.659 10.7852 195.43 10.7852H194.464V12.1738C194.464 12.4023 194.379 12.5986 194.209 12.7627C194.039 12.9209 193.84 13 193.611 13H191.976C191.748 13 191.552 12.9238 191.387 12.7715C191.229 12.6133 191.15 12.4199 191.15 12.1914V10.7852H183.987C183.759 10.7852 183.559 10.7061 183.389 10.5479C183.219 10.3838 183.135 10.1875 183.135 9.95898ZM186.668 8.29785H191.15V3.20898L186.668 8.29785Z"
                  fill="#D16764"
                />
                <path
                  d="M3.62891 17.8887L4.25 18.3105C3.88672 18.8066 3.69922 19.3418 3.6875 19.916V20.7129H2.60938V20.0332C2.60938 19.6348 2.70312 19.2402 2.89062 18.8496C3.08203 18.459 3.32812 18.1387 3.62891 17.8887ZM5.47461 17.8887L6.0957 18.3105C5.73242 18.8066 5.54492 19.3418 5.5332 19.916V20.7129H4.45508V20.0332C4.45508 19.6348 4.54883 19.2402 4.73633 18.8496C4.92773 18.459 5.17383 18.1387 5.47461 17.8887ZM13.508 27H12.3772V19.3945H8.17016V27H7.04516V18.4688H13.508V27ZM134.234 27.1172C133.375 27.1172 132.676 26.8359 132.136 26.2734C131.597 25.707 131.328 24.9512 131.328 24.0059V23.8066C131.328 23.1777 131.447 22.6172 131.685 22.125C131.928 21.6289 132.263 21.2422 132.693 20.9648C133.127 20.6836 133.595 20.543 134.099 20.543C134.924 20.543 135.564 20.8145 136.021 21.3574C136.478 21.9004 136.707 22.6777 136.707 23.6895V24.1406H132.412C132.428 24.7656 132.609 25.2715 132.957 25.6582C133.308 26.041 133.754 26.2324 134.293 26.2324C134.676 26.2324 135 26.1543 135.265 25.998C135.531 25.8418 135.763 25.6348 135.963 25.377L136.625 25.8926C136.094 26.709 135.297 27.1172 134.234 27.1172ZM134.099 21.4336C133.662 21.4336 133.295 21.5938 132.998 21.9141C132.701 22.2305 132.517 22.6758 132.447 23.25H135.623V23.168C135.592 22.6172 135.443 22.1914 135.178 21.8906C134.912 21.5859 134.553 21.4336 134.099 21.4336ZM174.273 23.9004C174.273 24.8652 174.052 25.6426 173.611 26.2324C173.169 26.8223 172.571 27.1172 171.818 27.1172C171.048 27.1172 170.443 26.873 170.001 26.3848V29.4375H168.917V20.6602H169.907L169.96 21.3633C170.402 20.8164 171.015 20.543 171.8 20.543C172.562 20.543 173.163 20.8301 173.605 21.4043C174.05 21.9785 174.273 22.7773 174.273 23.8008V23.9004ZM173.189 23.7773C173.189 23.0625 173.036 22.498 172.732 22.084C172.427 21.6699 172.009 21.4629 171.478 21.4629C170.821 21.4629 170.329 21.7539 170.001 22.3359V25.3652C170.325 25.9434 170.821 26.2324 171.489 26.2324C172.009 26.2324 172.421 26.0273 172.726 25.6172C173.034 25.2031 173.189 24.5898 173.189 23.7773ZM182.119 27V20.6602H184.591C185.435 20.6602 186.082 20.8086 186.531 21.1055C186.984 21.3984 187.211 21.8301 187.211 22.4004C187.211 22.6934 187.123 22.959 186.947 23.1973C186.771 23.4316 186.511 23.6113 186.168 23.7363C186.55 23.8262 186.857 24.002 187.088 24.2637C187.322 24.5254 187.439 24.8379 187.439 25.2012C187.439 25.7832 187.224 26.2285 186.795 26.5371C186.369 26.8457 185.765 27 184.984 27H182.119ZM183.203 24.2168V26.127H184.996C185.449 26.127 185.787 26.043 186.009 25.875C186.236 25.707 186.349 25.4707 186.349 25.166C186.349 24.5332 185.884 24.2168 184.955 24.2168H183.203ZM183.203 23.3496H184.603C185.619 23.3496 186.127 23.0527 186.127 22.459C186.127 21.8652 185.646 21.5586 184.685 21.5391H183.203V23.3496Z"
                  fill="#FF944F"
                />
                <path
                  d="M20.5044 23.9004C20.5044 24.8652 20.2837 25.6426 19.8423 26.2324C19.4009 26.8223 18.8032 27.1172 18.0493 27.1172C17.2798 27.1172 16.6743 26.873 16.2329 26.3848V29.4375H15.1489V20.6602H16.1391L16.1919 21.3633C16.6333 20.8164 17.2466 20.543 18.0317 20.543C18.7934 20.543 19.395 20.8301 19.8364 21.4043C20.2817 21.9785 20.5044 22.7773 20.5044 23.8008V23.9004ZM19.4204 23.7773C19.4204 23.0625 19.268 22.498 18.9634 22.084C18.6587 21.6699 18.2407 21.4629 17.7095 21.4629C17.0532 21.4629 16.561 21.7539 16.2329 22.3359V25.3652C16.5571 25.9434 17.0532 26.2324 17.7212 26.2324C18.2407 26.2324 18.6528 26.0273 18.9575 25.6172C19.2661 25.2031 19.4204 24.5898 19.4204 23.7773ZM188.348 23.7715C188.348 23.1504 188.469 22.5918 188.711 22.0957C188.957 21.5996 189.297 21.2168 189.73 20.9473C190.168 20.6777 190.666 20.543 191.225 20.543C192.088 20.543 192.785 20.8418 193.316 21.4395C193.851 22.0371 194.119 22.832 194.119 23.8242V23.9004C194.119 24.5176 194 25.0723 193.762 25.5645C193.527 26.0527 193.189 26.4336 192.748 26.707C192.31 26.9805 191.807 27.1172 191.236 27.1172C190.377 27.1172 189.68 26.8184 189.144 26.2207C188.613 25.623 188.348 24.832 188.348 23.8477V23.7715ZM189.437 23.9004C189.437 24.6035 189.6 25.168 189.924 25.5938C190.252 26.0195 190.689 26.2324 191.236 26.2324C191.787 26.2324 192.225 26.0176 192.549 25.5879C192.873 25.1543 193.035 24.5488 193.035 23.7715C193.035 23.0762 192.869 22.5137 192.537 22.084C192.209 21.6504 191.771 21.4336 191.225 21.4336C190.689 21.4336 190.258 21.6465 189.93 22.0723C189.601 22.498 189.437 23.1074 189.437 23.9004Z"
                  fill="#D16764"
                />
                <path
                  d="M21.3601 23.7715C21.3601 23.1504 21.4812 22.5918 21.7234 22.0957C21.9695 21.5996 22.3093 21.2168 22.7429 20.9473C23.1804 20.6777 23.6784 20.543 24.237 20.543C25.1003 20.543 25.7976 20.8418 26.3288 21.4395C26.864 22.0371 27.1316 22.832 27.1316 23.8242V23.9004C27.1316 24.5176 27.0124 25.0723 26.7741 25.5645C26.5398 26.0527 26.2019 26.4336 25.7605 26.707C25.323 26.9805 24.8191 27.1172 24.2488 27.1172C23.3894 27.1172 22.6921 26.8184 22.157 26.2207C21.6257 25.623 21.3601 24.832 21.3601 23.8477V23.7715ZM22.4499 23.9004C22.4499 24.6035 22.612 25.168 22.9363 25.5938C23.2644 26.0195 23.7019 26.2324 24.2488 26.2324C24.7995 26.2324 25.237 26.0176 25.5613 25.5879C25.8855 25.1543 26.0476 24.5488 26.0476 23.7715C26.0476 23.0762 25.8816 22.5137 25.5495 22.084C25.2214 21.6504 24.7839 21.4336 24.237 21.4336C23.7019 21.4336 23.2702 21.6465 22.9421 22.0723C22.614 22.498 22.4499 23.1074 22.4499 23.9004ZM161.61 21.5566H158.686V27H157.596V20.6602H161.61V21.5566Z"
                  fill="#57DAD7"
                />
                <path
                  d="M33.4482 20.6602V27H32.3584V21.5566H30.2021L30.0732 23.9297C30.0029 25.0195 29.8193 25.7988 29.5224 26.2676C29.2295 26.7363 28.7627 26.9805 28.122 27H27.6884V26.0449L27.999 26.0215C28.3505 25.9824 28.6025 25.7793 28.7548 25.4121C28.9072 25.0449 29.0048 24.3652 29.0478 23.373L29.165 20.6602H33.4482ZM37.5793 27.1172C36.7199 27.1172 36.0207 26.8359 35.4816 26.2734C34.9426 25.707 34.673 24.9512 34.673 24.0059V23.8066C34.673 23.1777 34.7922 22.6172 35.0305 22.125C35.2727 21.6289 35.6086 21.2422 36.0383 20.9648C36.4719 20.6836 36.9406 20.543 37.4445 20.543C38.2687 20.543 38.9094 20.8145 39.3664 21.3574C39.8234 21.9004 40.052 22.6777 40.052 23.6895V24.1406H35.757C35.7727 24.7656 35.9543 25.2715 36.302 25.6582C36.6535 26.041 37.0988 26.2324 37.6379 26.2324C38.0207 26.2324 38.3449 26.1543 38.6105 25.998C38.8762 25.8418 39.1086 25.6348 39.3078 25.377L39.9699 25.8926C39.4387 26.709 38.6418 27.1172 37.5793 27.1172ZM37.4445 21.4336C37.007 21.4336 36.6398 21.5938 36.343 21.9141C36.0461 22.2305 35.8625 22.6758 35.7922 23.25H38.968V23.168C38.9367 22.6172 38.7883 22.1914 38.5227 21.8906C38.257 21.5859 37.8977 21.4336 37.4445 21.4336Z"
                  fill="#49C69D"
                />
                <path
                  d="M45.7827 21.5391H43.6557V27H42.5717V21.5391H40.4858V20.6602H45.7827V21.5391ZM46.8259 20.8711L46.2106 20.4492C46.5739 19.9414 46.7614 19.4062 46.7731 18.8438V18H47.8454V18.7617C47.8415 19.1523 47.7438 19.543 47.5524 19.9336C47.3649 20.3203 47.1227 20.6328 46.8259 20.8711ZM48.6247 20.8711L48.0095 20.4492C48.3727 19.9414 48.5602 19.4062 48.572 18.8438V18H49.6442V18.7617C49.6403 19.1523 49.5427 19.543 49.3512 19.9336C49.1637 20.3203 48.9216 20.6328 48.6247 20.8711ZM120.728 26.4316C120.728 26.2441 120.783 26.0879 120.892 25.9629C121.005 25.8379 121.173 25.7754 121.396 25.7754C121.618 25.7754 121.786 25.8379 121.9 25.9629C122.017 26.0879 122.075 26.2441 122.075 26.4316C122.075 26.6113 122.017 26.7617 121.9 26.8828C121.786 27.0039 121.618 27.0645 121.396 27.0645C121.173 27.0645 121.005 27.0039 120.892 26.8828C120.783 26.7617 120.728 26.6113 120.728 26.4316ZM129.98 18.4688V27H128.849V23.4668C128.439 23.584 128.066 23.666 127.73 23.7129C127.394 23.7559 127.011 23.7773 126.582 23.7773C125.609 23.7773 124.886 23.5664 124.414 23.1445C123.941 22.7227 123.699 22.0762 123.687 21.2051V18.4688H124.818V21.1758C124.822 21.7695 124.957 22.1973 125.222 22.459C125.492 22.7207 125.945 22.8516 126.582 22.8516C127.324 22.8516 128.08 22.7461 128.849 22.5352V18.4688H129.98ZM149.405 27H148.321V24.293H145.408V27H144.319V20.6602H145.408V23.4082H148.321V20.6602H149.405V27Z"
                  fill="#EABA00"
                />
                <path
                  d="M50.6933 28.6992L50.078 28.2773C50.4452 27.7656 50.6366 27.2383 50.6523 26.6953V25.7168H51.7128V26.5664C51.7128 26.9609 51.6152 27.3555 51.4198 27.75C51.2284 28.1445 50.9863 28.4609 50.6933 28.6992Z"
                  fill="#F1D258"
                />
                <path
                  d="M56.3891 17.8887L57.0102 18.3105C56.6469 18.8066 56.4594 19.3418 56.4477 19.916V20.7129H55.3695V20.0332C55.3695 19.6348 55.4633 19.2402 55.6508 18.8496C55.8422 18.459 56.0883 18.1387 56.3891 17.8887ZM58.2348 17.8887L58.8559 18.3105C58.4926 18.8066 58.3051 19.3418 58.2934 19.916V20.7129H57.2152V20.0332C57.2152 19.6348 57.309 19.2402 57.4965 18.8496C57.6879 18.459 57.934 18.1387 58.2348 17.8887ZM73.1476 26.1152L73.5226 25.6523C73.9445 25.1055 74.1847 24.2852 74.2433 23.1914L74.3429 20.6602H78.4269V26.1152H79.2413V28.8633H78.1573V27H73.7335V28.8633H72.6495L72.6554 26.1152H73.1476ZM74.4308 26.1152H77.3429V21.6621H75.3917L75.3273 23.1738C75.2609 24.4355 74.962 25.416 74.4308 26.1152ZM89.3492 26.2324C89.7359 26.2324 90.0738 26.1152 90.3629 25.8809C90.652 25.6465 90.8121 25.3535 90.8434 25.002H91.8688C91.8492 25.3652 91.7242 25.7109 91.4938 26.0391C91.2633 26.3672 90.9547 26.6289 90.568 26.8242C90.1852 27.0195 89.7789 27.1172 89.3492 27.1172C88.4859 27.1172 87.7984 26.8301 87.2867 26.2559C86.7789 25.6777 86.525 24.8887 86.525 23.8887V23.707C86.525 23.0898 86.6383 22.541 86.8648 22.0605C87.0914 21.5801 87.4156 21.207 87.8375 20.9414C88.2633 20.6758 88.7652 20.543 89.3434 20.543C90.0543 20.543 90.6441 20.7559 91.1129 21.1816C91.5855 21.6074 91.8375 22.1602 91.8688 22.8398H90.8434C90.8121 22.4297 90.6559 22.0938 90.3746 21.832C90.0973 21.5664 89.7535 21.4336 89.3434 21.4336C88.7926 21.4336 88.3648 21.6328 88.0602 22.0312C87.7594 22.4258 87.609 22.998 87.609 23.748V23.9531C87.609 24.6836 87.7594 25.2461 88.0602 25.6406C88.3609 26.0352 88.7906 26.2324 89.3492 26.2324ZM162.026 23.7715C162.026 23.1504 162.147 22.5918 162.39 22.0957C162.636 21.5996 162.976 21.2168 163.409 20.9473C163.847 20.6777 164.345 20.543 164.903 20.543C165.767 20.543 166.464 20.8418 166.995 21.4395C167.53 22.0371 167.798 22.832 167.798 23.8242V23.9004C167.798 24.5176 167.679 25.0723 167.44 25.5645C167.206 26.0527 166.868 26.4336 166.427 26.707C165.989 26.9805 165.485 27.1172 164.915 27.1172C164.056 27.1172 163.358 26.8184 162.823 26.2207C162.292 25.623 162.026 24.832 162.026 23.8477V23.7715ZM163.116 23.9004C163.116 24.6035 163.278 25.168 163.602 25.5938C163.931 26.0195 164.368 26.2324 164.915 26.2324C165.466 26.2324 165.903 26.0176 166.227 25.5879C166.552 25.1543 166.714 24.5488 166.714 23.7715C166.714 23.0762 166.548 22.5137 166.216 22.084C165.888 21.6504 165.45 21.4336 164.903 21.4336C164.368 21.4336 163.936 21.6465 163.608 22.0723C163.28 22.498 163.116 23.1074 163.116 23.9004ZM175.128 23.7715C175.128 23.1504 175.249 22.5918 175.492 22.0957C175.738 21.5996 176.078 21.2168 176.511 20.9473C176.949 20.6777 177.447 20.543 178.005 20.543C178.869 20.543 179.566 20.8418 180.097 21.4395C180.632 22.0371 180.9 22.832 180.9 23.8242V23.9004C180.9 24.5176 180.781 25.0723 180.542 25.5645C180.308 26.0527 179.97 26.4336 179.529 26.707C179.091 26.9805 178.587 27.1172 178.017 27.1172C177.158 27.1172 176.46 26.8184 175.925 26.2207C175.394 25.623 175.128 24.832 175.128 23.8477V23.7715ZM176.218 23.9004C176.218 24.6035 176.38 25.168 176.705 25.5938C177.033 26.0195 177.47 26.2324 178.017 26.2324C178.568 26.2324 179.005 26.0176 179.33 25.5879C179.654 25.1543 179.816 24.5488 179.816 23.7715C179.816 23.0762 179.65 22.5137 179.318 22.084C178.99 21.6504 178.552 21.4336 178.005 21.4336C177.47 21.4336 177.039 21.6465 176.71 22.0723C176.382 22.498 176.218 23.1074 176.218 23.9004Z"
                  fill="#3BB190"
                />
                <path
                  d="M60.8776 23.6602V27H59.7526V18.4688H62.8991C63.8327 18.4688 64.5631 18.707 65.0905 19.1836C65.6217 19.6602 65.8873 20.291 65.8873 21.0762C65.8873 21.9043 65.6276 22.543 65.108 22.9922C64.5924 23.4375 63.8522 23.6602 62.8873 23.6602H60.8776ZM60.8776 22.7402H62.8991C63.5006 22.7402 63.9616 22.5996 64.2819 22.3184C64.6022 22.0332 64.7623 21.623 64.7623 21.0879C64.7623 20.5801 64.6022 20.1738 64.2819 19.8691C63.9616 19.5645 63.5221 19.4062 62.9635 19.3945H60.8776V22.7402ZM117.206 26.2324C117.593 26.2324 117.931 26.1152 118.22 25.8809C118.509 25.6465 118.669 25.3535 118.7 25.002H119.726C119.706 25.3652 119.581 25.7109 119.351 26.0391C119.12 26.3672 118.812 26.6289 118.425 26.8242C118.042 27.0195 117.636 27.1172 117.206 27.1172C116.343 27.1172 115.655 26.8301 115.144 26.2559C114.636 25.6777 114.382 24.8887 114.382 23.8887V23.707C114.382 23.0898 114.495 22.541 114.722 22.0605C114.948 21.5801 115.272 21.207 115.694 20.9414C116.12 20.6758 116.622 20.543 117.2 20.543C117.911 20.543 118.501 20.7559 118.97 21.1816C119.442 21.6074 119.694 22.1602 119.726 22.8398H118.7C118.669 22.4297 118.513 22.0938 118.231 21.832C117.954 21.5664 117.61 21.4336 117.2 21.4336C116.649 21.4336 116.222 21.6328 115.917 22.0312C115.616 22.4258 115.466 22.998 115.466 23.748V23.9531C115.466 24.6836 115.616 25.2461 115.917 25.6406C116.218 26.0352 116.647 26.2324 117.206 26.2324Z"
                  fill="#F48F03"
                />
                <path
                  d="M70.827 27C70.7645 26.875 70.7138 26.6523 70.6747 26.332C70.1708 26.8555 69.5692 27.1172 68.87 27.1172C68.245 27.1172 67.7313 26.9414 67.329 26.5898C66.9305 26.2344 66.7313 25.7852 66.7313 25.2422C66.7313 24.582 66.9813 24.0703 67.4813 23.707C67.9852 23.3398 68.6923 23.1562 69.6024 23.1562H70.6571V22.6582C70.6571 22.2793 70.5438 21.9785 70.3173 21.7559C70.0907 21.5293 69.7567 21.416 69.3153 21.416C68.9286 21.416 68.6044 21.5137 68.3427 21.709C68.0809 21.9043 67.9501 22.1406 67.9501 22.418H66.8602C66.8602 22.1016 66.9716 21.7969 67.1942 21.5039C67.4208 21.207 67.7255 20.9727 68.1083 20.8008C68.495 20.6289 68.9188 20.543 69.3798 20.543C70.1102 20.543 70.6825 20.7266 71.0966 21.0938C71.5106 21.457 71.7255 21.959 71.7411 22.5996V25.5176C71.7411 26.0996 71.8153 26.5625 71.9638 26.9062V27H70.827ZM69.0282 26.1738C69.368 26.1738 69.6903 26.0859 69.995 25.9102C70.2997 25.7344 70.5204 25.5059 70.6571 25.2246V23.9238H69.8075C68.4794 23.9238 67.8153 24.3125 67.8153 25.0898C67.8153 25.4297 67.9286 25.6953 68.1552 25.8867C68.3817 26.0781 68.6727 26.1738 69.0282 26.1738ZM97.5584 21.5391H95.4315V27H94.3475V21.5391H92.2616V20.6602H97.5584V21.5391ZM98.6016 20.8711L97.9864 20.4492C98.3497 19.9414 98.5372 19.4062 98.5489 18.8438V18H99.6212V18.7617C99.6173 19.1523 99.5196 19.543 99.3282 19.9336C99.1407 20.3203 98.8985 20.6328 98.6016 20.8711ZM100.4 20.8711L99.7852 20.4492C100.149 19.9414 100.336 19.4062 100.348 18.8438V18H101.42V18.7617C101.416 19.1523 101.318 19.543 101.127 19.9336C100.94 20.3203 100.697 20.6328 100.4 20.8711Z"
                  fill="#63D0C9"
                />
                <path
                  d="M79.9154 23.7715C79.9154 23.1504 80.0365 22.5918 80.2787 22.0957C80.5248 21.5996 80.8646 21.2168 81.2982 20.9473C81.7357 20.6777 82.2337 20.543 82.7923 20.543C83.6556 20.543 84.3529 20.8418 84.8841 21.4395C85.4193 22.0371 85.6869 22.832 85.6869 23.8242V23.9004C85.6869 24.5176 85.5677 25.0723 85.3295 25.5645C85.0951 26.0527 84.7572 26.4336 84.3158 26.707C83.8783 26.9805 83.3744 27.1172 82.8041 27.1172C81.9447 27.1172 81.2474 26.8184 80.7123 26.2207C80.181 25.623 79.9154 24.832 79.9154 23.8477V23.7715ZM81.0052 23.9004C81.0052 24.6035 81.1673 25.168 81.4916 25.5938C81.8197 26.0195 82.2572 26.2324 82.8041 26.2324C83.3548 26.2324 83.7923 26.0176 84.1166 25.5879C84.4408 25.1543 84.6029 24.5488 84.6029 23.7715C84.6029 23.0762 84.4369 22.5137 84.1048 22.084C83.7767 21.6504 83.3392 21.4336 82.7923 21.4336C82.2572 21.4336 81.8255 21.6465 81.4974 22.0723C81.1693 22.498 81.0052 23.1074 81.0052 23.9004Z"
                  fill="#90BA60"
                />
                <path
                  d="M109.342 20.6602H110.426V27H109.342V22.377L106.419 27H105.335V20.6602H106.419V25.2891L109.342 20.6602ZM150.624 23.7715C150.624 23.1504 150.745 22.5918 150.987 22.0957C151.233 21.5996 151.573 21.2168 152.006 20.9473C152.444 20.6777 152.942 20.543 153.5 20.543C154.364 20.543 155.061 20.8418 155.592 21.4395C156.127 22.0371 156.395 22.832 156.395 23.8242V23.9004C156.395 24.5176 156.276 25.0723 156.038 25.5645C155.803 26.0527 155.465 26.4336 155.024 26.707C154.586 26.9805 154.083 27.1172 153.512 27.1172C152.653 27.1172 151.956 26.8184 151.42 26.2207C150.889 25.623 150.624 24.832 150.624 23.8477V23.7715ZM151.713 23.9004C151.713 24.6035 151.875 25.168 152.2 25.5938C152.528 26.0195 152.965 26.2324 153.512 26.2324C154.063 26.2324 154.5 26.0176 154.825 25.5879C155.149 25.1543 155.311 24.5488 155.311 23.7715C155.311 23.0762 155.145 22.5137 154.813 22.084C154.485 21.6504 154.047 21.4336 153.5 21.4336C152.965 21.4336 152.534 21.6465 152.206 22.0723C151.877 22.498 151.713 23.1074 151.713 23.9004Z"
                  fill="#B2342A"
                />
                <path
                  d="M143.082 23.9004C143.082 24.8652 142.861 25.6426 142.42 26.2324C141.979 26.8223 141.381 27.1172 140.627 27.1172C139.857 27.1172 139.252 26.873 138.811 26.3848V29.4375H137.727V20.6602H138.717L138.77 21.3633C139.211 20.8164 139.824 20.543 140.609 20.543C141.371 20.543 141.973 20.8301 142.414 21.4043C142.859 21.9785 143.082 22.7773 143.082 23.8008V23.9004ZM141.998 23.7773C141.998 23.0625 141.846 22.498 141.541 22.084C141.236 21.6699 140.818 21.4629 140.287 21.4629C139.631 21.4629 139.139 21.7539 138.811 22.3359V25.3652C139.135 25.9434 139.631 26.2324 140.299 26.2324C140.818 26.2324 141.23 26.0273 141.535 25.6172C141.844 25.2031 141.998 24.5898 141.998 23.7773Z"
                  fill="#F6BA66"
                />
              </svg>
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-right">
            <Nav.Link href="/#more">Услугите</Nav.Link>
            <Nav.Link href="/#care">
                За нас
            </Nav.Link>
            <Nav.Link href="/#news">
                Новини
            </Nav.Link>
            <Link href="/documents" >
                  <a className="nav-link">Документи</a>
                </Link>
            <Link href="/gallery">
                  <a className="nav-link">Галерия</a>
                </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
