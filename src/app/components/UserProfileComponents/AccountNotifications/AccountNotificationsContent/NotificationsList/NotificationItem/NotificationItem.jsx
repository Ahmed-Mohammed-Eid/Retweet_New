import classes from "./NotificationItem.module.scss";
import Image from "next/image";


export default function NotificationItem({notification}) {
    return (
        <div className={classes.NotificationItem}>
            {/*  NOTIFICATION  */}
            <div className={classes.NotificationItem__BellAndTitle}>
                <span className={classes.NotificationItem__Bell}>
                    <Image src={'/assets/profile/bell.svg'} alt={'House'} width={24} height={24}/>
                </span>
                <h3 className={classes.NotificationItem__Title}>
                    {new Date(notification?.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                    })}
                </h3>
            </div>
            <p className={classes.NotificationItem__Text}>
                {notification?.message || 'No message'}
            </p>
        </div>
    );
}