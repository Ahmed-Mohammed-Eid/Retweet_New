"use client";
import { useEffect, useRef, useState } from "react";
// NAVIGATION
import { useSearchParams, useRouter } from "next/navigation";
// STYLE
import classes from "./Messages.module.scss";
// COMPONENTS
import ChatUser from "../../../components/UserProfileComponents/Messages/ChatUser";
import SecondaryNavigation from "../../../components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import SentMessage from "../../../components/UserProfileComponents/Messages/SentMessage";
import ReceivedMessage from "../../../components/UserProfileComponents/Messages/ReceivedMessage";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import {
	updateCreatorId,
	updateMessage,
	updateMessages,
	addMessage,
	updateSendersList,
	updateUserId,
	updateSelectedUser,
} from "../../../../../redux/Slices/chatSlice";
// HELPERS
import axios from "axios";
import toast from "react-hot-toast";

export default function MessagesPage({ params: { locale } }) {
	const chatBoxRef = useRef(null);

	// REDUX // REMEMBER THE LOGIC OF LOADING THE CREATOR ID
	const dispatch = useDispatch();
	const { message, creatorId, messages, sendersList, userId, selectedUser } =
		useSelector((state) => state.chat);

	// NAVIGATION
	const router = useRouter();
	const searchParams = useSearchParams();

	// STATE
	const [isUsersMenuOpen, setIsUsersMenuOpen] = useState(false);

	// SCROLL TO BOTTOM OF THE CHAT HANDLER
	function scrollToBottom() {
		//     MAKE THE SCROLL SMOOTH
		chatBoxRef.current.scrollTo({
			top: chatBoxRef.current.scrollHeight,
			behavior: "smooth",
		});
	}

	// SEND MESSAGE HANDLER
	const sendMessageHandler = () => {
		// GET TOKEN
		const token = localStorage.getItem("retweet-token");

		if (!token) {
			return toast.error("You need to be logged in to send a message");
		}

		if (!message) {
			return toast.error("Please type a message");
		}

		if (!creatorId) {
			return toast.error("Please select a user to send a message to");
		}

		// SEND MESSAGE
		axios
			.post(
				`${process.env.BASE_URL}/send/message`,
				{
					message: message,
					receiverUserId: creatorId,
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			.then((_) => {
				// CLEAR MESSAGE
				dispatch(updateMessage(""));
				// ADD MESSAGE
				dispatch(
					addMessage({
						message: message,
						senderUserId: userId,
						createdAt: new Date(),
					})
				);
				// SCROLL TO BOTTOM
				const timer = setTimeout(() => {
					scrollToBottom();
					clearTimeout(timer);
				}, 100);
			})
			.catch((error) => {
				toast.error(
					error.response?.data?.message || "An error occurred"
				);
			});
	};

	// GET THE CHAT
	function getChat(partnerId, fullName) {
		const token = localStorage.getItem("retweet-token");

		axios
			.get(
				`${process.env.BASE_URL}/messages/history?partnerId=${partnerId}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((response) => {
				// UPDATE MESSAGES
				dispatch(
					updateMessages(response?.data?.incomingMessages || [])
				);

				// UPDATE THE MESSAGES PART TO USER INFO
				dispatch(
					updateSelectedUser({
						id: partnerId,
						fullName: fullName,
					})
				);

				// SCROLL TO BOTTOM
				const waitingMessagesMountTimer = setTimeout(() => {
					scrollToBottom();
					clearTimeout(waitingMessagesMountTimer);
				}, 500);
			})
			.catch((error) => {
				console.log(error);
				toast.error("An error occurred while fetching the chat");
			});
	}

	// GET SENDERS LIST
	const getSendersList = (partnerId) => {
		// GET TOKEN
		const token = localStorage.getItem("retweet-token");

		if (!token) {
			return toast.error("You need to be logged in to view messages");
		}

		axios
			.get(
				`${process.env.BASE_URL}/senders/list?receiverId=${
					partnerId || ""
				}`,
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			.then((response) => {
				dispatch(updateUserId(response?.data?.userId || ""));

				// RECIEVER
				const receiver = response?.data?.receiver || null;
				const inList = response?.data?.inList || false;

				// ADD THE RECIEVER TO THE LIST IF THE INLIST IS FALSE
				if (receiver && !inList) {
					// MAKE A COPY OF THE USERS LIST
					const sendersListCopy = [...response?.data?.sendersList];
					// CREATE A NEW SENDER ITEM FROM THE RECEIVER OBJECT
					const objectData = {
						message: "Start a new conversation or send a message!",
						senderUserId: receiver?._id,
						receiverUserId: receiver?._id,
						createdAt: receiver?.createdAt,
						fullName: receiver?.fullName,
						email: receiver?.email,
					};
					const newSender = {
						...objectData,
						senderDetails: {
							...objectData,
						},
					};

					const newSendersList = [newSender, ...sendersListCopy];
					// UPDATE THE SENDERS LIST IN THE REDUX STATE
					dispatch(updateSendersList(newSendersList));
					// UPDATE THE SELECTED USER TO SHOW THE OPEN USER INFO
					dispatch(
						updateSelectedUser({
							fullName: newSender.fullName,
							id: receiver?._id,
						})
					);

					// GET THE USER CHAT
					getChat(receiver?._id, newSender.fullName);
				} else {
					// SET THE SENDERS LIST WITHOUT THE NEW USER
					dispatch(
						updateSendersList(response?.data?.sendersList || [])
					);
					// SET THE PARTNER ID TO THE FIRST USER IN THE LIST
					dispatch(
						updateCreatorId(response?.data?.sendersList[0]?._id)
					);

					// GET THE FIRST USER CHAT
					const partner = response?.data?.sendersList[0];
					const partnerFullName = partner?.senderDetails?.fullName;
					const partnerId = partner?._id;
					getChat(partnerId, partnerFullName);
				}
			})
			.catch((error) => {
				toast(error.response?.data?.message || "An error occurred");
			});
	};

	useEffect(() => {
		// CLEAR THE OLD MESSAGES
		dispatch(updateMessage([]));
		// CLEAR THE CREATOR ID
		dispatch(updateCreatorId(""));

		// GET THE PARTNER ID FROM THE URL
		const searchParams_PartnerId = searchParams.get("creatorId");

		// IF THE ID EXISTS IN URL GET THE CHAT WITH IT IF NOT GET THE FIRST CHAT IN THE LIST
		if (searchParams_PartnerId) {
			dispatch(updateCreatorId(searchParams_PartnerId));
			getSendersList(searchParams_PartnerId);
		} else {
			getSendersList();
		}
	}, []);

	return (
		<>
			<SecondaryNavigation
				arrayOfLinks={[
					{
						href: `/${locale}/`,
						icon: "/assets/home/House.svg",
						arrow: true,
					},
					{
						href: `/${locale}/profile/messages`,
						text: "Messages",
						arrow: false,
					},
				]}
			/>
			<div className={"py-8"} id={"chat__box-hash"}>
				<div className={[classes.messages].join(" ")}>
					<div
						className={[
							classes.messages_left,
							isUsersMenuOpen ? classes.active : "",
						].join(" ")}
					>
						<div className={classes.messages_left_header}>
							<button
								className={
									"btn btn-primary flex items-center " +
									classes.Menu
								}
								onClick={() =>
									setIsUsersMenuOpen(!isUsersMenuOpen)
								}
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M13 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H13C13.2652 18 13.5196 17.8946 13.7071 17.7071C13.8946 17.5196 14 17.2652 14 17C14 16.7348 13.8946 16.4804 13.7071 16.2929C13.5196 16.1054 13.2652 16 13 16ZM3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z"
										fill="black"
									/>
								</svg>
							</button>
						</div>
						<div className={classes.messages_left_body}>
							{sendersList &&
								sendersList.map((sender, index) => {
									return (
										<ChatUser
											key={index}
											user={sender}
											onClick={(partnerId, fullName) => {
												// CHANGE THE PARTNER ID IN URL
												router.push(
													`/${locale}/profile/messages?creatorId=${partnerId}`
												);
												// GET THE CHAT
												getChat(partnerId, fullName);
												// CLOSE THE LIST OF SENDERS IF IT'S OPEN
												setIsUsersMenuOpen(false);
											}}
										/>
									);
								})}
						</div>
					</div>
					<div className={classes.messages_right}>
						<div className={classes.messages_right_header}>
							<h3 className={"text-l font-bold uppercase"}>
								<button
									className={
										"btn btn-primary flex items-center " +
										classes.Menu
									}
									onClick={() =>
										setIsUsersMenuOpen(!isUsersMenuOpen)
									}
								>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M13 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H13C13.2652 18 13.5196 17.8946 13.7071 17.7071C13.8946 17.5196 14 17.2652 14 17C14 16.7348 13.8946 16.4804 13.7071 16.2929C13.5196 16.1054 13.2652 16 13 16ZM3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z"
											fill="black"
										/>
									</svg>
								</button>
								{selectedUser?.fullName || ""}
							</h3>
						</div>
						<div
							className={classes.messages_right_body}
							ref={chatBoxRef}
						>
							{messages &&
								messages.map((message, index) => {
									if (message.senderUserId === userId) {
										return (
											<SentMessage
												key={index}
												message={message.message}
												time={message?.createdAt}
											/>
										);
									} else {
										return (
											<ReceivedMessage
												key={index}
												message={message.message}
												time={message?.createdAt}
											/>
										);
									}
								})}
						</div>
						{selectedUser?.id && (
							<div className={classes.messages_right_footer}>
								<input
									type="text"
									className={"input input-primary"}
									placeholder={"Type a message"}
									onChange={(e) =>
										dispatch(updateMessage(e.target.value))
									}
									value={message}
									// ON CLICK ENTER AND FOCUS THE INPUT FIELD RUN THE HANDLER
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											sendMessageHandler();
										}
									}}
								/>
								<button
									className={
										"btn btn-primary flex items-center mr-2"
									}
									onClick={sendMessageHandler}
								>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M3.00007 11H9.00007V13H3.00007V22.154C3.00008 22.2409 3.02274 22.3263 3.0658 22.4017C3.10887 22.4772 3.17085 22.5401 3.24565 22.5844C3.32044 22.6286 3.40547 22.6525 3.49234 22.6539C3.57922 22.6552 3.66494 22.6339 3.74107 22.592L22.2031 12.438C22.2815 12.3949 22.3468 12.3314 22.3924 12.2544C22.4379 12.1774 22.4619 12.0895 22.4619 12C22.4619 11.9105 22.4379 11.8227 22.3924 11.7456C22.3468 11.6686 22.2815 11.6052 22.2031 11.562L3.74107 1.40802C3.66494 1.36614 3.57922 1.34482 3.49234 1.34616C3.40547 1.34751 3.32044 1.37146 3.24565 1.41567C3.17085 1.45988 3.10887 1.52283 3.0658 1.59829C3.02274 1.67375 3.00008 1.75913 3.00007 1.84602L3.00007 11Z"
											fill="#00ACEE"
										/>
									</svg>
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
