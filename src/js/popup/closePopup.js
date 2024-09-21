export default function closePopup(popup) {
    function checkClick({target}) {
        if (target === popup.querySelector('.popup__close') || target === popup) {
            popup.close();
            document.body.classList.remove('scroll-lock');
            document.removeEventListener('click', checkClick);
        }
    }
    document.addEventListener('click', checkClick);
}