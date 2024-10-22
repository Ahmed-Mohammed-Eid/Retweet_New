import classes from "./ChatUser.module.scss";

// REDUX
import { useDispatch, useSelector } from "react-redux";

// NAME - TIME - \N - SVG - MESSAGE
export default function ChatUser({ user, onClick }) {
    // HANDLE THE DATE TO GET THE TIME IN FORMAT HH:MM AM/PM AND ALWAYS 2 DIGITS AND 12-HOUR FORMAT
    const date = new Date(user.createdAt);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${hours > 12 ? hours - 12 : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    } ${hours > 12 ? "PM" : "AM"}`;

    // REDUX
    const { userId, selectedUser } = useSelector(
        (state) => state.chat
    );

    // CHECK IF THE SELECTED USER RIGHT NOW IS THIS USER OR NO TO MAKE IT ACTIVE || NOT
    const active = selectedUser.id === user.receiverUserId || selectedUser.id === user.senderUserId;
    // GET THE ID OF THIS USER TO USE IT
    const partnerId = userId === user.senderUserId ? user.receiverUserId : user.senderUserId;
    // GET THIS USER FULL NAME
    const fullName = user?.senderDetails?.fullName;
    return (
        <section
            // ADD THE ACTIVE CLASS BASED ON THE ACTIVE CONST 
            className={[classes.chat_user, active ? classes.active : ""].join(" ")}
            // SAVE THE USER ID
            data-id={partnerId}
            onClick={() => {
                // GET THE CHAT AND UPDATE THE SELECTED USER DATA
                onClick(partnerId, fullName);
            }}
        >
            <div className={classes.chat_user_top}>
                <h4 className={classes.chat_user_name}>
                    {!user?.isRead && !active && (
                        <span className={classes.has_new_message}>!</span>
                    )}
                    {fullName}
                </h4>
                <span className={classes.chat_user_time}>{time}</span>
            </div>
            <div className={classes.chat_user_bottom}>
                <svg
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 6H8C6.35962 6.00052 4.7503 5.5527 3.34596 4.70495C1.94162 3.8572 0.795687 2.64177 0.0319996 1.19C0.0106659 1.45667 0 1.72667 0 2C0 4.65216 1.05357 7.1957 2.92893 9.07107C4.8043 10.9464 7.34784 12 10 12V17.5L20.5 9L10 0.5V6ZM8 8L12 8L12 4.692L17.321 9L12 13.308V10H10C8.85025 10.0013 7.71379 9.75418 6.66839 9.27558C5.62299 8.79698 4.69332 8.09818 3.943 7.227C5.23432 7.73878 6.61096 8.00108 8 8Z"
                        fill="#A7A7A7"
                    />
                </svg>
                <p className={classes.chat_user_message}>{user.message}</p>
            </div>
        </section>
    );
}
