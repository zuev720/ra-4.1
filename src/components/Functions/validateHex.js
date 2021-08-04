export function validateHex (value) {
    const hexRegex = /^#([A-Fa-f0-9]{6})$/i;
    return (hexRegex.test(value));
}
