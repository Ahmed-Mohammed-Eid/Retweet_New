import {Dropdown} from "primereact/dropdown";

export default function DropDown({options, value, onChange, placeholder, filter = false}) {
    return (
        <Dropdown
            value={value}
            options={options}
            onChange={onChange}
            placeholder={placeholder || "Select"}
            filter={filter}
            style={{
                width: "100%",
                height: "50px",
                border: "1px solid #EBF5F8",
                borderRadius: "5px",
                fontSize: "15px",
                outline: "none",
            }}
        />
    );
}