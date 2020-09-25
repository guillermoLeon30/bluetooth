const roundTo = require('round-to')

const getDataCypressBeacon = (minor, major) => {
  let minorHex = minor.toString(16)
  let tempHex = minorHex.slice(2, 4)
  let HumHex = minorHex.slice(0, 2)
  let tempDec = parseInt(tempHex, 16)
  let HumDec = parseInt(HumHex, 16)

  // TEMP [℃] = 175.72 x (103 x 256) / 65536 – 46.85 = 23.85[℃]
  let temp = 175.72 * (tempDec * 256) / 65536 - 46.85
  temp = roundTo(temp, 2)

  // RH[%] = 125 x (HUMIDITY x 256) / 65536 – 6
  let rh = 125 * (HumDec * 256) / 65536 -6
  rh = roundTo(rh, 2)

  return {
    id: major,
    temp,
    rh
  }
}

module.exports = getDataCypressBeacon
