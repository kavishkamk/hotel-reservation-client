export const getStarsAsUnicode = (rateNumber) => {

    const stars = {rate: "", dark: ""}

    for (let i = 0; i < rateNumber; i++) {
        stars.rate = stars.rate + "\u2605";
    }
    for (let i = 0; i < 5 - rateNumber; i++) {
        stars.dark = stars.dark + "\u2605";
    }
    return stars;
}