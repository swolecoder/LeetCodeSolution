/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    
    let hData = [0,...horizontalCuts,h];
    let wData = [0,...verticalCuts,w]
    
     hData.sort((a,b)=> a-b);
      wData.sort((a,b)=> a-b)
    
    let hMax =0;
    let wMax = 0;
    
    for(let i=1; i <hData.length; i++){
        hMax = Math.max(hMax,hData[i] -hData[i-1] )
    }
    
     for(let i=1; i <wData.length; i++){
        wMax = Math.max(wMax,wData[i] -wData[i-1] )
    }
    
    
    return (hMax * wMax) % (Math.pow(10,9) + 7)
};