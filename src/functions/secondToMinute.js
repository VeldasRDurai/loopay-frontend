const giveZeroforLengthOne = timeNum =>
    String(timeNum).length === 1 ?
        '0':''

const secondToMinute = second => {
    const minutes = Math.floor(second/60) ;
    const seconds = second%60 ;
    return `${giveZeroforLengthOne(minutes)}${minutes} : ${giveZeroforLengthOne(seconds)}${seconds}`;
}

export default secondToMinute;