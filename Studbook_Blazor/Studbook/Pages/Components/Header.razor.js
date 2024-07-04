export class Header {
    static Init(hamburger, menu) {
        let dropdownBtns = menu.querySelectorAll('.dropdown-btn');
        dropdownBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                if (!e.target.closest('.dropdown')) {
                    btn.classList.toggle("show");
                }
            });
        });

        hamburger.addEventListener('click', () => {
            menu.classList.toggle("show");
            dropdownBtns.forEach((item) => {
                item.classList.remove("show");
            });
        });
    }
}
