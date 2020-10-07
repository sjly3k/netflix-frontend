import React from "react";

export const Globe = ( { size } ) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/>
    </svg>
)

export const Chevron = ( { size } ) => (
    <svg
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd">
        <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/>
    </svg>
)

export const Plus = ( { size } ) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24">
        <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
    </svg>
)

export const Search = ( { size } ) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24">
        <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/>
    </svg>
)

export const Gift = ( { size } ) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24">
        <path d="M11 24h-9v-12h9v12zm0-18h-11v4h11v-4zm2 18h9v-12h-9v12zm0-18v4h11v-4h-11zm4.369-6c-2.947 0-4.671 3.477-5.369 5h5.345c3.493 0 3.53-5 .024-5zm-.796 3.621h-2.043c.739-1.121 1.439-1.966 2.342-1.966 1.172 0 1.228 1.966-.299 1.966zm-9.918 1.379h5.345c-.698-1.523-2.422-5-5.369-5-3.506 0-3.469 5 .024 5zm.473-3.345c.903 0 1.603.845 2.342 1.966h-2.043c-1.527 0-1.471-1.966-.299-1.966z"/>
    </svg>
)

export const Bell = ( { size } ) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24">
        <path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z"/>
    </svg>
)
export const Information = ( { size } ) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24">
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 18h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z"/>
    </svg>
)

export const Play = ( { size } ) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24">
        <path d="M3 22v-20l18 10-18 10z"/>
    </svg>
)

export const User = ( { size }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
    >
        <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
    </svg>
);

export const Kids = ( { size }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24">
        <path d="M21.174 8.205c-.427-4.943-4.082-7.205-9.174-7.205-5.143 0-8.751 2.311-9.174 7.205-2.026.142-2.826 2.079-2.826 4.221 0 1.888.861 4.627 3.176 5.159 1.193 3.546 4.229 5.415 8.824 5.415s7.631-1.869 8.824-5.415c2.315-.532 3.176-3.271 3.176-5.159 0-2.128-.794-4.079-2.826-4.221zm-1.141 7.471c-.449.009-.836.315-.949.749-.787 3.036-3.17 4.575-7.084 4.575s-6.297-1.539-7.083-4.575c-.113-.434-.5-.74-.949-.749-2.135-.041-2.438-4.65-1.336-5.367.272-.177.614-.104.756-.041.671.3 1.427-.207 1.406-.941-.071-2.526.931-4.647 3.23-5.706-.663 2.823 2.205 5.638 6.672 4.598-4.012-1.098-1.056-6.221 2.352-3.954 1.608 1.217 2.214 3.072 2.16 5.063-.021.739.743 1.239 1.406.941.142-.064.483-.137.756.041 1.101.716.798 5.325-1.337 5.366zm-3.533-4.176c0 .828-.56 1.5-1.25 1.5s-1.25-.672-1.25-1.5.56-1.5 1.25-1.5 1.25.672 1.25 1.5zm-7.75 1.5c-.69 0-1.25-.672-1.25-1.5s.56-1.5 1.25-1.5 1.25.672 1.25 1.5-.56 1.5-1.25 1.5zm-.75 3h8s-.844 2.875-4 2.875c-3.25 0-4-2.875-4-2.875z"/>
    </svg>
)

export const Facebook = ( { size } ) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
    </svg>
)

export const Twitter = ({size}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24">
        <path d="M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z"/>
    </svg>
)

export const Youtube = ({size}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
    </svg>
)

export const Instagram = ({size}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
)

export const ThumbsUpEmpty = ({size}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24">
        <path d="M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z"/>
    </svg>
)

export const ThumbsUpFull = ({size}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24">
        <path d="M5 22h-5v-12h5v12zm17.615-8.412c-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.666-.198-4.979-.885.906-3.656.688-8.781-1.688-8.781-1.594 0-1.896 1.807-2.375 3.469-1.221 4.242-3.312 6.017-5.687 6.885v10.878c4.382.701 6.345 2.768 10.505 2.768 3.198 0 4.852-1.735 4.852-2.666 0-.335-.272-.573-.96-.626-.811-.062-.734-.812.031-.953 1.268-.234 1.826-.914 1.826-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.133-.09 1.688-.764 1.688-1.41 0-.565-.424-1.109-1.26-1.221z"/>
    </svg>
)

export const ThumbsDownEmpty = ({size}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24">
        <path d="M24 11.936c0-1-.986-6.373-1.486-8.25-.714-2.689-2.471-3.686-5.009-3.686-2.283 0-4.079.617-5.336 1.158-2.05.883-3.791 1.519-6.169 1.746v-.904h-6v12h6v-.73c2.454.585 4.852 2.066 6.4 7.402.483 1.66.972 3.328 2.833 3.328 3.448 0 3.005-5.531 2.196-8.814 1.106-.466 2.767-.692 3.977-.744 1.426-.06 2.594-.858 2.594-2.506zm-20 .064h-2v-8h2v8zm15.755-1.302l1.394.167c1.075.129 1.105 1.525.051 1.584-2.749.154-5.06 1.013-6.12 1.556.43 1.748.92 3.463.92 5.534 0 2.505-.781 3.666-1.679.574-1.993-6.859-5.057-8.364-8.321-9.113v-6c2.521-.072 4.72-1.041 6.959-2.005 1.731-.745 4.849-1.495 6.416-.614 1.295.836 1.114 1.734.292 1.661l-.771-.032c-.815-.094-.92 1.068-.109 1.141 0 0 1.321.062 1.745.115.976.123 1.028 1.607-.04 1.551-.457-.024-1.143-.041-1.143-.041-.797-.031-.875 1.078-.141 1.172 0 0 .714.005 1.761.099s1.078 1.609-.004 1.563c-.868-.037-1.069-.027-1.069-.027-.75.005-.875 1.028-.141 1.115z"/>
    </svg>
)

export const ThumbsDownFull = ({size}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24">
        <path d="M5 14h-5v-12h5v12zm18.875-4.809c0-.646-.555-1.32-1.688-1.41-.695-.055-.868-.623-.031-.812.701-.159 1.098-.652 1.098-1.181 0-.629-.559-1.309-1.826-1.543-.766-.141-.842-.891-.031-.953.688-.053.96-.291.96-.626-.001-.931-1.654-2.666-4.852-2.666-4.16 0-6.123 2.067-10.505 2.768v10.878c2.375.869 4.466 2.644 5.688 6.886.478 1.661.781 3.468 2.374 3.468 2.375 0 2.594-5.125 1.688-8.781 1.312-.688 3.751-.936 4.979-.885 1.771.072 2.271-.818 2.271-1.49 0-1.011-.833-1.35-1.354-1.51-.609-.188-.889-.807-.031-.922.836-.112 1.26-.656 1.26-1.221z"/>
    </svg>
)

export const MaturityRating_18 = ({size}) => (
    <svg
        width={size}
        height={size}
        viewBox="442.6 442.6 114.8 114.8">
        <path fill="#CC2E32" d="M500,557.4c31.7,0,57.4-25.7,57.4-57.4c0-31.7-25.7-57.4-57.4-57.4c-31.7,0-57.4,25.7-57.4,57.4 C442.6,531.6,468.3,557.4,500,557.4"></path>
        <path fill="#FFFFFF" d="M482,488.6c-1.6-0.3-4.3-1.9-5.2-3.3c-0.7,1.5-3.5,3.4-5.3,3.8l-1.5-1.7c4.8-1.6,5.5-4.2,5.5-5h-4.1v-1.8h10.7 v1.8h-4.2c0,0.8,1.6,3.6,5.2,4.4L482,488.6z M488.1,493.5c0,2.2-2.5,3.8-7.4,3.8s-7.5-1.6-7.5-3.8c0-2.2,2.6-3.8,7.4-3.8 C485.5,489.7,488.1,491.3,488.1,493.5z M473.7,479.1v-1.8h6.2v1.8H473.7z M480.7,491.4c-3.1,0-4.9,0.8-4.9,2.1 c0,1.2,1.8,2.1,4.9,2.1c3,0,4.8-0.8,4.8-2C485.5,492.2,483.7,491.4,480.7,491.4z M485.8,489.4v-4.7h-3.9v-1.8h3.9v-5.6h2.2v12.1 H485.8z M490.2,494.5v-1.9h8.7v-4.2h2.2v4.2h8.7v1.9H490.2z M492.8,489.1l-1.6-1.6c6.7-2.3,7.6-6.1,7.6-8v-1.6h2.4v1.6 c0,1.9,1.1,5.8,7.6,8l-1.6,1.6c-3-0.9-6.2-3.7-7.2-5.9C499.1,485.6,495.7,488.3,492.8,489.1z M517.1,488.7h-4.9v-10.6h2.2v8.7h2.7 c2.7,0,5.5-0.4,7-0.7v1.8C522.9,488.2,520.1,488.6,517.1,488.7z M514.4,496.5v-5.9h2.2v4.1h12.3v1.9h-14.5V496.5z M526.2,491.5 v-6.7h-5.6V483h5.6v-1.8h-5.6v-1.8h5.6v-2.1h2.2v14.2H526.2z"></path>
        <path fill="#FFFFFF" d="M462.1,515.6h-2.6v-1.9h3.8v-4.3h2.2v4.3c1.6,0,6.2-0.3,8.1-0.6v1.8C470.9,515.3,467,515.6,462.1,515.6z  M470.8,511.7h-2.2c0-0.2,0.7-2.9,0.8-5.1h-8.6v-1.9h11C471.8,506.1,471.4,510,470.8,511.7z M462.9,522.8V517h2.2v3.9h12.2v1.9 L462.9,522.8L462.9,522.8z M476.6,511.8v6.3h-2.2v-14.5h2.2v6.3h2.7v1.9L476.6,511.8L476.6,511.8z M486.2,514.5h-5v-5.8h7.5v-2.2 h-7.5v-1.9h9.7v5.8h-7.5v2.1h3.7c1.9,0,4.8-0.3,6.2-0.4v1.8C491.8,514.2,488.7,514.4,486.2,514.5z M483.2,523.1v-6.8h13.7v6.8 H483.2z M494.7,518.1h-9.3v3.1h9.3V518.1z M496.9,510.5v4.8h-2.2v-11.6h2.2v4.9h2.8v1.9L496.9,510.5L496.9,510.5z M509.1,513.8 h-8.6v-1.7h19.6v1.7h-8.7v1.6h6.1v4.7h-12.2v1.3H518v1.7h-15v-4.6h12.2v-1.3H503v-1.7h6.1L509.1,513.8L509.1,513.8z M503,510.7V504 h2.2v1.8h10.1V504h2.2v6.7H503z M515.3,507.4h-10.1v1.6h10.1V507.4z M523.1,519.9l-1.7-1.3c5.9-2.6,8-7.8,8.2-10.8h-7v-1.9h9.6 C532.2,510.5,529.3,517,523.1,519.9z M538,503.7v8.1h3v2h-3v9.5h-2.2v-19.6L538,503.7L538,503.7z"></path>
    </svg>
)

export const MaturityRating_15 = ({size}) => (
    <svg
        width={size}
        height={size}
        viewBox="442.6 442.6 114.8 114.8">
        <path fill="#EF9B3A" d="M500.7,557.2c31.7,0,57.4-25.7,57.4-57.4c0-31.7-25.7-57.4-57.4-57.4c-31.7,0-57.4,25.7-57.4,57.4 C443.2,531.5,469,557.2,500.7,557.2"></path>
        <path fill="#252122" d="M512.7,493.9c-1.4-1.1-3.5-3.7-3.9-5.4c-0.5,1.9-2.3,4.4-4.1,5.9l-1.8-1.3c3.5-2.3,4.8-6.1,4.8-10.2v-3.3h2.3 v3.3c0,4,1.4,7.3,4.3,9.6L512.7,493.9z M515.5,496.8v-10h-3.1v-2h3.1v-6.3h2.2v18.3H515.5z M519.7,497.6V478h2.2v19.6H519.7z"></path>
        <path fill="#252122" d="M473.1,516.3h-2.6v-1.9h3.8v-4.3h2.2v4.3c1.6,0,6.2-0.3,8-0.6v1.8C481.8,516,478,516.3,473.1,516.3z  M481.8,512.4h-2.2c0-0.2,0.7-2.9,0.8-5.1h-8.6v-1.9h11C482.7,506.8,482.4,510.7,481.8,512.4z M473.8,523.5v-5.8h2.2v3.9h12.2v1.9 H473.8z M487.6,512.5v6.3h-2.2v-14.5h2.2v6.3h2.7v1.9H487.6z M497.1,515.2l-5,0v-5.8h7.5v-2.2h-7.5v-1.9h9.7v5.8h-7.5v2.1l3.7,0 c1.9,0,4.8-0.3,6.2-0.4v1.8C502.7,514.9,499.6,515.1,497.1,515.2z M494.1,523.8v-6.8h13.8v6.8H494.1z M505.6,518.8h-9.3v3.1h9.3 V518.8z M507.9,511.2v4.8h-2.2v-11.6h2.2v4.9h2.8v1.9H507.9z M513.5,520.6l-1.7-1.3c5.9-2.6,8-7.8,8.2-10.8h-7v-1.9h9.6 C522.6,511.2,519.7,517.7,513.5,520.6z M528.4,504.4v8.1h3v2h-3v9.5h-2.2v-19.6H528.4z"></path> <path fill="#000100" d="M483.5,495.3l0-12H480v-1.8c0.5,0,1-0.1,1.5-0.2c0.5-0.1,0.9-0.3,1.3-0.6c0.3-0.2,0.6-0.5,0.8-0.9 c0.2-0.4,0.4-0.8,0.4-1.3h1.7l0,16.8H483.5z"></path> <path fill="#000100" d="M500.4,485.5c1.2,0.9,1.8,2.3,1.8,4.4c0,1.9-0.6,3.3-1.8,4.3c-1.2,1-2.5,1.5-3.8,1.5c-1.7,0-3-0.5-4-1.5 c-1-1-1.5-2.1-1.7-3.3h2.1c0.1,0.7,0.5,1.4,1.1,1.9c0.6,0.6,1.4,0.9,2.4,0.9c1,0,1.7-0.4,2.4-1.1c0.6-0.7,0.9-1.6,0.9-2.7 c0-1.1-0.3-2-0.9-2.7c-0.6-0.7-1.4-1.1-2.4-1.1c-0.8,0-1.4,0.1-1.9,0.4c-0.5,0.3-0.9,0.6-1.2,1l-2.1,0l1.3-8.8h8.9v2h-7l-0.7,4.2 c0.5-0.3,1.1-0.5,1.7-0.7c0.6-0.1,1.2-0.2,1.7-0.1C498.2,484.2,499.2,484.7,500.4,485.5z"></path>
    </svg>
)

export const MaturityRating_12 = ({size}) => (
    <svg
        width={size}
        height={size}
        viewBox="442.6 442.6 114.8 114.8">
        <path fill="#23A5DB" d="M500.5,557.2c31.7,0,57.4-25.7,57.4-57.4c0-31.7-25.7-57.4-57.4-57.4c-31.7,0-57.4,25.7-57.4,57.4 C443,531.5,468.7,557.2,500.5,557.2"></path>
        <path fill="#252122" d="M512.5,492.3c-1.4-1.1-3.5-3.7-3.9-5.4c-0.5,1.9-2.3,4.4-4.1,5.9l-1.8-1.3c3.5-2.3,4.8-6.1,4.8-10.1V478h2.3 v3.3c0,4,1.4,7.3,4.3,9.6L512.5,492.3z M515.3,495.1v-10h-3.1v-2h3.1v-6.3h2.2v18.3H515.3z M519.4,496v-19.6h2.2V496H519.4z"></path>
        <path fill="#252122" d="M472.8,514.7h-2.6v-1.9h3.8v-4.3h2.2v4.3c1.6,0,6.2-0.3,8.1-0.6v1.8C481.6,514.4,477.7,514.7,472.8,514.7z  M481.5,510.8h-2.2c0-0.2,0.7-2.9,0.8-5.1h-8.6v-1.9h11C482.5,505.2,482.1,509.1,481.5,510.8z M473.6,521.9v-5.8h2.2v3.9H488v1.9 H473.6z M487.3,510.9v6.3h-2.2v-14.5h2.2v6.3h2.7v1.9H487.3z M496.9,513.6l-5,0v-5.8h7.5v-2.2h-7.5v-1.9h9.7v5.8h-7.5v2.1l3.7,0 c1.9,0,4.8-0.3,6.2-0.4v1.8C502.5,513.3,499.4,513.5,496.9,513.6z M493.9,522.1v-6.8h13.8v6.8H493.9z M505.4,517.2h-9.3v3.1h9.3 V517.2z M507.6,509.6v4.7h-2.2v-11.6h2.2v4.9h2.8v1.9H507.6z M513.3,519l-1.7-1.3c5.9-2.6,8-7.8,8.2-10.8h-7V505h9.6 C522.4,509.6,519.5,516.1,513.3,519z M528.2,502.7v8.1h3v2h-3v9.5h-2.2v-19.6H528.2z"></path> <path fill="#000100" d="M483.3,494.3l0-12h-3.5v-1.8c0.5,0,1-0.1,1.5-0.2c0.5-0.1,0.9-0.3,1.3-0.6c0.3-0.2,0.6-0.5,0.8-0.9 c0.2-0.4,0.4-0.8,0.4-1.3h1.7l0,16.8H483.3z"></path> <path fill="#000100" d="M500.4,478.5c0.9,1,1.3,2.2,1.3,3.5c0,1.3-0.4,2.4-1.1,3.3c-0.8,0.8-1.5,1.5-2.2,2l-2.7,1.9 c-0.4,0.3-0.9,0.7-1.4,1.3c-0.5,0.6-0.9,1.1-1,1.8l8.5,0v1.9l-11.2,0c0-1.2,0.3-2.3,0.8-3.4c0.5-1.1,1.5-2.2,3.1-3.3l2.8-1.9 c0.6-0.4,1.1-0.9,1.5-1.5c0.4-0.6,0.6-1.2,0.6-1.9c0-1-0.2-1.7-0.7-2.3c-0.5-0.5-1.2-0.8-2.2-0.8c-1.2,0-2,0.3-2.5,1 c-0.5,0.7-0.7,1.5-0.7,2.3H491c0-1.4,0.5-2.6,1.3-3.7c0.9-1.1,2.2-1.6,4-1.6C498.1,477,499.5,477.5,500.4,478.5z"></path>
    </svg>
)

export const MaturityRating_ALL = ({size}) => (
    <svg
        width={size}
        height={size}
        viewBox="442.6 442.6 114.8 114.8">
        <path fill="#4FA855" d="M500,557.4c31.7,0,57.4-25.7,57.4-57.4c0-31.7-25.7-57.4-57.4-57.4c-31.7,0-57.4,25.7-57.4,57.4 C442.6,531.7,468.3,557.4,500,557.4"></path>
        <path fill="#252122" d="M491.2,488.1c-1.9-0.7-3.8-2.3-5-3.9c-0.5,1.7-2.9,3.6-5.1,4.6l-1.7-1.7c5.1-2.1,5.6-5.3,5.6-6.6v-0.6h-4.1 V478h10.7v1.9h-4.1v0.6c0,1.2,0.7,4.2,5,5.8L491.2,488.1z M483.2,496v-6.3h2.2v4.4h12.5v1.9H483.2z M495.3,491.1v-7.7h-3.9v-2h3.9 v-4.6h2.2V491h-2.2V491.1z M509.2,492.9c-1.1-0.5-3.3-2.6-3.7-4.1c-0.4,1.8-2.8,3.8-4.2,4.5l-1.7-1.5c2.7-1.4,4.7-3.8,4.7-6.9v-1 h-3.6V482h9.5v1.9h-3.5v1c0,1.5,0.5,4.5,3.9,6.4L509.2,492.9z M502.7,480v-1.8h5.5v1.9h-5.5V480z M512,495.6v-8.3h-3.1v-1.9h3.1 v-8.1h2.2v18.3H512z M516.1,496.5v-19.6h2.2v19.6H516.1z"></path>
        <path fill="#252122" d="M471.5,515.1h-2.6v-1.9h3.8v-4.3h2.2v4.3c1.6,0,6.2-0.3,8.1-0.6v1.8C480.3,514.9,476.4,515.1,471.5,515.1z M480.2,511.3H478c0-0.2,0.7-2.9,0.8-5.1h-8.6v-1.9h11C481.2,505.7,480.8,509.6,480.2,511.3z M472.3,522.4v-5.8h2.2v3.9h12.2v1.9 H472.3L472.3,522.4z M486,511.4v6.3h-2.2v-14.5h2.2v6.3h2.7v1.9L486,511.4L486,511.4z M495.6,514h-5v-5.8h7.5V506h-7.5v-1.8h9.7 v5.8h-7.5v2.1h3.7c1.9,0,4.8-0.3,6.2-0.4v1.8C501.2,513.8,498.1,514,495.6,514z M492.6,522.6v-6.8h13.8v6.8H492.6z M504.1,517.6 h-9.3v3.1h9.3V517.6z M506.3,510.1v4.8h-2.2v-11.7h2.2v4.9h2.8v1.9h-2.8V510.1z M512,519.4l-1.7-1.3c5.9-2.6,8-7.8,8.2-10.8h-7 v-1.9h9.6C521.1,510.1,518.2,516.6,512,519.4z M526.9,503.2v8.1h3v2h-3v9.5h-2.2v-19.6H526.9z"></path>
    </svg>
)

export const BackButtonArrow = ({size}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24">
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
    </svg>
)

export const Check = ({size}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        className="svg-icon svg-icon-check-mark"
        focusable="false">
        <g id="check-mark">
            <path
                d="M14.133 23.5l12.767-12.467c0.033-0.033 0.1-0.1 0.133-0.167l-3.1-3.133c-0.067 0.033-0.133 0.1-0.2 0.167l-11.267 10.933-4.267-4.333-3.233 2.933c0.033 0 1.067 1.067 1.1 1.067l4.767 5 0.133 0.133c0.433 0.4 0.967 0.633 1.5 0.633s1.1-0.233 1.5-0.633z"></path>
        </g>
    </svg>
)