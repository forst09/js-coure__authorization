export default function pastePreloader(form) {
    const preloader = document.createElement('div');
    preloader.innerHTML = `
        <svg class="preloader__icon" version="1.1"
            id="L3"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 0 0"
            xml:space="preserve">
            <circle fill="none"
                stroke="#fff"
                stroke-width="4"
                cx="50"
                cy="50"
                r="44"
                style="opacity:0.5;" />
            <circle fill="#fff" class="preloader__circle"
                stroke="#B898C4"
                stroke-width="3"
                cx="8"
                cy="54"
                r="6">
            </circle>
        </svg>
    `;
    preloader.classList.add('preloader', 'img');
    form.append(preloader);
}