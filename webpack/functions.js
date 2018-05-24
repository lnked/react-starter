module.exports.randomInteger = (min, max) => {
    const rand = min + Math.random() * (max - min);
    return Math.round(rand);
}
