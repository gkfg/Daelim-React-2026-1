export default function handleClick(message) {
    alert(message);
}

export function handlePlay(message) {
    const videoPlayer = document.querySelector(message);
    if (videoPlayer) {
        videoPlayer.play();
    }
}

export function handleStop(message) {
    const videoPlayer = document.querySelector(message);
    if (videoPlayer) {
        videoPlayer.pause();
    }
}