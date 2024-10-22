import classes from "./ReceivedMessage.module.scss";


// MESSENGER SENT MESSAGE COMPONENT
export default function ReceivedMessage({message, time}) {
    // HANDLE THE DATE TO GET THE TIME IN FORMAT HH:MM AM/PM AND ALWAYS 2 DIGITS AND 12-HOUR FORMAT
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeForPreview = `${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? `0${minutes}` : minutes} ${hours > 12 ? 'PM' : 'AM'}`;

    return (
        <section className={classes.received_message}>
            <div className={classes.overflow__arrow}></div>
            <div className={classes.received_message_top}>
                <span className={classes.received_message_time}>
                    {timeForPreview}
                </span>
            </div>
            <div className={classes.received_message_bottom}>
                <p className={classes.received_message_text}>
                    {message}
                </p>
            </div>
        </section>
    );
}