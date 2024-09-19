import calcFormsHeight from "./calcFormsHeight";

export default function pasteError(input, message) {
    const errorEl = document.createElement('p');
    errorEl.classList.add('form__error');
    errorEl.innerHTML = message;
    input.after(errorEl);

    calcFormsHeight();
}