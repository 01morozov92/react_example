export const getPagesCount = (pagesCount, pagesLimit) => {
    return Math.ceil(pagesCount / pagesLimit)
}