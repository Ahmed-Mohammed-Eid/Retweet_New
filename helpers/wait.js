// FUNCTION TO WAIT N MILLISECONDS
export default async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}