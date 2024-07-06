export function SaveToClipboard(element) {
    domtoimage.toBlob(element)
        .then(function (blob) {
            navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
        });
}

export function SaveToPng(element) {
    domtoimage.toPng(element)
        .then(function (dataUrl) {
            let link = document.createElement('a');
            link.download = 'rating.png';
            link.href = dataUrl;
            link.click();
        })
        .catch(function (error) {
            console.error('Something went wrong!', error);
        });
}

export function SaveToJpeg(element) {
    domtoimage.toJpeg(element, { quality: 0.95 })
        .then(function (dataUrl) {
            let link = document.createElement('a');
            link.download = 'rating.jpeg';
            link.href = dataUrl;
            link.click();
        })
        .catch(function (error) {
            console.error('Something went wrong!', error);
        });
}