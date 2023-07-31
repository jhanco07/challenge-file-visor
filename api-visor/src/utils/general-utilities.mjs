export default class GeneralUtilities {
  static sortStringsByNumber (array) {
    const customSort = function (a, b) {
      const aMatch = a.match(/\d+/g)
      const bMatch = b.match(/\d+/g)

      if (aMatch && bMatch) {
        return Number(aMatch[0]) - Number(bMatch[0])
      } else if (aMatch) {
        return -1
      } else if (bMatch) {
        return 1
      } else {
        return 0
      }
    }

    const arraySort = array.sort(customSort)
    return arraySort
  }

  static validHexa (cadena) {
    const regex = /^[0-9a-fA-F]{32}$/
    const res = regex.test(cadena)
    return res
  }

  static isNumber (str) {
    return /^\d+$/.test(str)
  }
}
