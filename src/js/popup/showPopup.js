import closePopup from "./closePopup";

export default function showPopup(popup) {
    popup.showModal();
    document.body.classList.add('scroll-lock');
    closePopup(popup);
}