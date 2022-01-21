const fakeLastmonth = () => {
    return Math.floor(Math.random()*400000);
}

const fakeProfit = () => {
    return Math.floor(Math.random()*200000);
}

const fakeBill = () => {
    return Math.floor(Math.random()*4000);
}

const fakePercent = () => {
    return fakeLastmonth() - fakeProfit();
}

export { fakeProfit, fakeBill, fakePercent };