/*
 * @Author: F
 * @Date: 2020-10-23
 * @Description: counter
 */

/**
 * @description: CTC加密算法
 * @param {String} text 原文本
 * @param {String} keyWord 不可有重复字母，默认值为'star'
 * @return {*}
 */
const ctcEncrypt = (keyWord='star') => {
  const text = document.getElementById('plainText').value
  const textArr = text.split('')
  const keyWordArr = keyWord.split('')
  
  // 构造加密矩阵
  let encryptArr = []
  for (let i = 0; i <= keyWord.length; i++) {
    let charArr = []
    const allNum = Math.ceil(text.length/keyWord.length)*keyWord.length
    for (let j = 1; j <= allNum; j++) {
      if (j%keyWord.length == i) {
        textArr[j-1] ? charArr.push(textArr[j-1]) : charArr.push('✨')
      } 
    }
    if (charArr.length!==0) {
      encryptArr.push(charArr)
    }
  }
  encryptArr.push(encryptArr[0])
  encryptArr.shift()

  keyWordArr.sort()
  let encryptText = ''

  keyWordArr.map(item => {
    encryptText += encryptArr[keyWord.indexOf(item)].join('')
  })

  alert(encryptText)
}


/**
 * @description: CTC解密算法
 * @param {*} encryptText 加密后的文本
 * @param {*} keyWord 须与加密的参数一致，不可有重复字母，默认值为'star'
 * @return {*}
 */
const ctcDecrypt = (keyWord='star') => {
  const encryptText = document.getElementById('encryptText').value
  const charArrLen = encryptText.length / keyWord.length
  const encryptTextArr = encryptText.split('')

  // encryptText拆分后的矩阵
  let decryptArr = []

  for (let i = 0; i < keyWord.length; i++) {
    let charArr = []
    for (let j = 0; j < charArrLen; j++) {
      charArr.push(encryptTextArr[charArrLen*i + j])
    }
    decryptArr.push(charArr)
  }

  // 复原加密矩阵
  let encryptArr = []
  const keyWordArr = keyWord.split('')
  keyWordArr.sort()

  keyWordArr.map((item, index) => {
    encryptArr[keyWord.indexOf(item)] = decryptArr[index]
  })

  let plainText = ''
  for (let i = 0; i < charArrLen; i++) {
    for (let j = 0; j < encryptArr.length; j++) {
      plainText += encryptArr[j][i]
    }
  }

  alert(plainText)
}