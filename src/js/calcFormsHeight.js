export default function calcFormsHeight() {
    const formsWrap = document.querySelectorAll('.tab-wrap');
    let formsHeight = [];
    formsWrap.forEach(wrap => {
        formsHeight.push(wrap.scrollHeight);
    });
    const maxHeight = Math.max(...formsHeight);
    console.log(formsHeight, maxHeight);
    
    document.querySelector('.main__form-wrapper').style.minHeight = `${maxHeight}px`;
    if (window.innerWidth > 1365) {
        document.querySelector('.main').style.maxHeight = `${maxHeight}px`;
    }
}