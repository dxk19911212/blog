/**
 * 数字千位格式化
 */
export function formatNum(num) {
    return num.toString().replace(/(?=(\B)(\d{3})+$)/g, ',');
}

/**
 * 获取分页总页数
 */
export function getLastPage(total, pageSize) {
    pageSize = pageSize || 9;
    return Math.ceil(total / pageSize);
}