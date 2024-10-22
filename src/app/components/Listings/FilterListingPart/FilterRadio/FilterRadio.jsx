import classes from './FilterRadio.module.scss';


export default function FilterRadio({ name, text, value, change = () => {}, checked = false}) {
    return (
        <label className={classes.RadioInput}>
            <input type="radio" className="mr-2" value={value} name={name} onChange={change} checked={checked} />
            <div className={classes.RadioInput__icon}></div>
            <span>{text}</span>
        </label>
    );
}
