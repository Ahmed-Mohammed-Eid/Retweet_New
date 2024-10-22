import { Button } from "primereact/button";
import subClasses from "@/src/app/components/LayoutAndHomeComponents/Navbar/Sidebar.module.scss";
import Image from "next/image";
import { Badge } from "primereact/badge";
import React from "react";

// REDUX
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function NotificationButtonMobile({ auth, locale }) {
	const router = useRouter();
	const { notifications } = useSelector((state) => state.mainLayout);

	return (
		<Button
			className={subClasses.Sidebar__icons__icon}
			onClick={() => {
				router.push("/profile/notifications");
			}}
		>
			<Image
				src={"/assets/home/notification.svg"}
				alt={"notification"}
				width={18}
				height={18}
			/>
			<span>{locale === "en" ? "Notifications" : "الإشعارات"}</span>
			{auth &&
				notifications.hasNotifications &&
				notifications.notificationCount > 0 && (
					<Badge
						value={notifications.notificationCount}
						severity="danger"
						style={{
							marginLeft: "0",
							position: "absolute",
							top: "0",
							right: "10px",
							color: "#FFFFFF",
						}}
					/>
				)}
		</Button>
	);
}
