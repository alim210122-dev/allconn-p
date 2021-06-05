const bizNoFormatter = (num, type) => {
    var formatNum = '';
    try{
         if (num.length === 10) {
              if (type === 0) {
                   formatNum = num.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-*****');
              } else {
                    formatNum = num.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
              }
         }else{
            formatNum = num;
         }
    } catch(e) {
         formatNum = num;
         console.log(e);
    }
    return formatNum;
}
export default bizNoFormatter;

// 출처    https://sesok808.tistory.com/555