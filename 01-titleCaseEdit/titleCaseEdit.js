function titleCaseEdit(title) {
  let lower = title.toLowerCase().split(' ')
  for(var i = 0; i < lower.length; i++ ){
    lower[i] = lower[i].replace(lower[i].charAt(0),lower[i].charAt(0).toUpperCase());
  }
  return lower.join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;