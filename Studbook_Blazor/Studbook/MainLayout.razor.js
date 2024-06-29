export class MainLayout {
    static Init(hamburger, menu) {
        let dropdownBtns = menu.querySelectorAll('.dropdown-btn');
        dropdownBtns.forEach((item) => {
            let dropdownElems = menu.querySelectorAll('.dropdown');
            dropdownElems.forEach((elem) => {
                elem.addEventListener("click", (e) => {
                    e.stopPropagation();
                });
            });

            item.addEventListener("click", () => {
                item.classList.toggle("show");
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
