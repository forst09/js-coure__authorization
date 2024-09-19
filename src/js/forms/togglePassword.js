export default function togglePassword(form) {
    const btn = form.querySelector('.form__password-toggle');
    btn.addEventListener('click', () => {
        btn.classList.toggle('form__password-toggle--show');

        if (btn.classList.contains('form__password-toggle--show')) {
            form.querySelector('.form__password-input').type = 'text';
            btn.querySelector('.form__password-toggle-text').textContent = 'Hide';
        }
        else {
            form.querySelector('.form__password-input').type = 'password';
            btn.querySelector('.form__password-toggle-text').textContent = 'Show';
        }
    })

}