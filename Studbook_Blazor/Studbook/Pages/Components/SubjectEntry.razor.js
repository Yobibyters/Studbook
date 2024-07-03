export class SubjectScore {
    static Init(dotNet, subject, removeBtn) {
        removeBtn.addEventListener('click', () => {
            subject.classList.remove("subject-add");
            void subject.offsetWidth;
            subject.classList.add("subject-remove");
        });

        subject.addEventListener('animationend', () => {
            if (subject.classList.contains("subject-remove")) {
                dotNet.invokeMethodAsync("RemoveSubject");
            }
        });
    }
}