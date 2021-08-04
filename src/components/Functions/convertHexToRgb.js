export function convertHexToRgb (value) {
    const color = value.replace('#', '');
    return `rgb(${parseInt(color.slice(0, 2), 16)}, ${parseInt(color.slice(2, 4), 16)}, ${parseInt(color.slice(4, 6), 16)})`;
}
