// FUNCTION THAT ACCEPTS A FILE AND RETURNS A PROMISE THAT RESOLVES TO THE FILE'S DATA URL
export default function readImage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}