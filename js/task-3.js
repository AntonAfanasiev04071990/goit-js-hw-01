function getElementWidth(content, padding, border) {
    contentWidth = parseFloat(content);
    paddingWidth = parseFloat(padding) * 2; // Падінг з кожної сторони (лівий і правий)
    borderWidth = parseFloat(border) * 2; // Бордер з кожної сторони (лівий і правий)
    const totalWidth = contentWidth + paddingWidth + borderWidth;
    return Number(totalWidth);
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200