// CREATE A FUNCTION THAT ACCEPTS AN ARRAY OF VALUES AND THE MAIN ARRAY OF OBJECTS AND BASED ON THE ARRAY OF VALUES SELECTS THE VALUES FROM THE MAIN ARRAY OF OBJECTS
export default function getTheValues(values, data, objKey) {
    return data.filter(item => values.includes(item[objKey]));
}
