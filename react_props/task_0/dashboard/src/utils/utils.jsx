export function getCurrentYear() {
    const dateTime = new Date();
    return dateTime.getFullYear();
}

export function getFooterCopy(isIndex) {
    if (isIndex) {
        const str = "<strong>Holberton School</strong>";
        return <span dangerouslySetInnerHTML={{ __html: str }} />;
    } else {
        const str = "<strong>Holberton School main dashboard</strong>";
        return <span dangerouslySetInnerHTML={{ __html: str }} />;
    }
}

export function getLatestNotification() {
    return "<strong>Urgent requirement</strong> - complete by EOD";
}