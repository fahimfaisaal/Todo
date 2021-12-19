const getCurrentDate = () => {
    const date = new Date();
    const CurrentDate = {
        date: date.toDateString(),
        time: date.toLocaleTimeString()
    }

    return CurrentDate;
}

export default getCurrentDate;