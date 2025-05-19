export const formatTime = (t: number): string => {
    const hours = Math.floor(t / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((t % 3600) / 60).toString().padStart(2, "0");
    const seconds = (t % 60).toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
};