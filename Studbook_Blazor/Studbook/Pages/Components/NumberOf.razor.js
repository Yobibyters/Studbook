export class NumberOf {
    static Init(input, up, down) {
        up.addEventListener('click', e => {
            input.stepUp()
        });

        down.addEventListener('click', e => {
            input.stepDown()
        });
    }
}