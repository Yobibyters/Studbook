export function SaveToClipboard(element, toToggle) {
    toToggle.classList.add("show");
    document.body.offsetHeight;
    domtoimage.toBlob(element)
        .then(function (blob) {
            navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
        })
        .then(function () {
            toToggle.classList.remove("show");

        });
}

export function SaveToPng(element, toToggle) {
    toToggle.classList.add("show");
    domtoimage.toPng(element)
        .then(function (dataUrl) {
            let link = document.createElement('a');
            link.download = 'rating.png';
            link.href = dataUrl;
            link.click();
        })
        .then(function () {
            toToggle.classList.remove("show");

        })
        .catch(function (error) {
            console.error('Something went wrong!', error);
        });
}

export function SaveToJpeg(element, toToggle) {
    toToggle.classList.add("show");
    domtoimage.toJpeg(element, { quality: 0.95 })
        .then(function (dataUrl) {
            let link = document.createElement('a');
            link.download = 'rating.jpeg';
            link.href = dataUrl;
            link.click();
        })
        .then(function () {
            toToggle.classList.remove("show");

        })
        .catch(function (error) {
            console.error('Something went wrong!', error);
        });
}