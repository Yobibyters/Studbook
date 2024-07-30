export class NumericUpDown {
    static Init(input, up, down) {
        up.addEventListener('click', e => {
            input.stepUp();
            input.dispatchEvent(new Event('input', { bubbles: true }));

        });

        down.addEventListener('click', e => {
            input.stepDown();
            input.dispatchEvent(new Event('input', { bubbles: true }));
        });

        input.addEventListener('wheel', function (event) {
            event.preventDefault();
            if (event.deltaY < 0) {
                input.stepUp();
                input.dispatchEvent(new Event('input', { bubbles: true }));
            }
            else if (event.deltaY > 0) {
                input.stepDown();
                input.dispatchEvent(new Event('input', { bubbles: true }));
            }
        });
    }
}