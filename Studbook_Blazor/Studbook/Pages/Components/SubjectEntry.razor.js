export class SubjectEntry {
    static Init(dotNet, subject, removeBtn, removeBtnContainer) {
        removeBtn.addEventListener('click', () => {
            subject.classList.remove("subject-add");
            void subject.offsetWidth;
            subject.classList.add("subject-remove");
        });

        removeBtn.addEventListener('transitionend', () => {
            if (!window.matchMedia('(max-device-width: 800px)').matches) {
                let style = getComputedStyle(removeBtn);
                if (style.opacity < 0.1) {
                    removeBtnContainer.style.display = 'none';
                }
            }
        });

        subject.addEventListener('mouseenter', () => {
            if (!window.matchMedia('(max-device-width: 800px)').matches) {
                removeBtnContainer.style.display = 'block';
                document.body.offsetHeight;
                removeBtn.style.opacity = '1';
                removeBtn.style.right = '-70px';
            }
        });

        subject.addEventListener('mouseleave', () => {
            if (!window.matchMedia('(max-device-width: 800px)').matches) {
                removeBtn.style.opacity = '0';
                removeBtn.style.right = '-50px';
            }
        });

        subject.addEventListener('animationend', () => {
            if (subject.classList.contains("subject-remove")) {
                dotNet.invokeMethodAsync("RemoveSubject");
            }
        });
    }
}