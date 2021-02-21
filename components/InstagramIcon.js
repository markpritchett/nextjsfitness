const InstagramIcon = () => (
    <svg className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-label="Instagram"
        viewBox="0 0 512 512"
    >
        <rect id="b" width="512" height="512" rx="15%"></rect>
        <use fill="url(#a)" xlinkHref="#b"></use>
        <use fill="url(#c)" xlinkHref="#b"></use>
        <radialGradient id="a" cx="0.4" cy="1" r="1">
            <stop offset="0.1" stopColor="#fd5"></stop>
            <stop offset="0.5" stopColor="#ff543e"></stop>
            <stop offset="1" stopColor="#c837ab"></stop>
        </radialGradient>
        <linearGradient id="c" x2="0.2" y2="1">
            <stop offset="0.1" stopColor="#3771c8"></stop>
            <stop offset="0.5" stopColor="#60f" stopOpacity="0"></stop>
        </linearGradient>
        <g fill="none" stroke="#fff" strokeWidth="30">
            <rect width="308" height="308" x="102" y="102" rx="81"></rect>
            <circle cx="256" cy="256" r="72"></circle>
            <circle cx="347" cy="165" r="6"></circle>
        </g>
    </svg>
)

export default InstagramIcon