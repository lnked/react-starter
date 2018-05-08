export const formatMoney = (num, penny) => {
	if (typeof penny === 'undefined') {
		penny = false
	}

    // const numberFormatter = new Intl.NumberFormat('ru');

	const formatter = new Intl.NumberFormat("ru", {
		style: "currency",
		currency: "RUB",
		minimumFractionDigits: 2
	});

    return formatter.format(Math.round(num, 0))
}

export const declOfNum = (n, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    n = Math.abs(n);
    return [n, titles[(n % 100 > 4 && n % 100 < 20) ? 2 : cases[(n % 10 < 5) ? n % 10 : 5]]].join(' ');
}