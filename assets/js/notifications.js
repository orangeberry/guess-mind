const body = document.querySelector("body")

const fireNotification = (text, color) => {
    const notification = document.createElement("div");
    notification.innerText = text;
    notification.style.backgroundColor = color;
    notification.className = "notification";
    body.appendChild(notification);
};

export const handleNewUser = ({ nickname }) =>
    fireNotification(`${nickname} is joined!!!`, "rgb(255, 149, 0)")



export const handleDisconnected = ({ nickname }) =>
    fireNotification(`${nickname} is left...`, "rgb(76, 217, 100)")

