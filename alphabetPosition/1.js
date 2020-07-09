function alphabetPosition(text) {
    return text
     .split("") // 分割成字元
     .filter(f => f.toLowerCase() != f.toUpperCase()) // 判定是否为英文
     .map(m => m.toLowerCase().charCodeAt(0) - 96 ) // 转换成小写取得 ascii 并减去 96
     .join(" ") // 再把這些分割的字元组合在一起并且用空格分隔;
  }

  console.log(alphabetPosition(" My love is zero !"));