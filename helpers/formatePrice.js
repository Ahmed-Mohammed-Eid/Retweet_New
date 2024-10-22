// FORMATE PRICE FUNCTION
export const formatePrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}