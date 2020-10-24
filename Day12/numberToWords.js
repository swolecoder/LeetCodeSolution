/**
 * @param {number} num
 * @return {string}
 */

var numberToWords = function (num) {

    if (num == 0) return "Zero";
    return helper(num);


    function helper(num) {
        let underTen = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", 'Nine'];

        let underTwety = {
            '10': 'Ten',
            "11": 'Eleven',
            "12": "Twelve",
            "13": "Thirteen",
            "14": "Fourteen",
            "15": "Fifteen",
            "16": "Sixteen",
            "17": "Seventeen",
            "18": "Eighteen",
            "19": "Nineteen"
        }

        let underHundred = [null, null, 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];




        let n = num;
        switch (true) {
            case (n < 10): {
                return underTen[n]
            }
            case (n < 20): {
                return underTwety[n]
            }
            case (n < 100): {
                return (underHundred[parseInt(n / 10)] + " " + helper(n % 10)).trim()
            }
            //1000
            case (n < 1000): {
                return (numberToWords(parseInt(n / 100)) + " Hundred " + helper(n % 100)).trim()
            }
            //million
            case (n < 1000000): {
                return (numberToWords(parseInt(n / 1000)) + " Thousand " + helper(n % 1000)).trim()
            }

            case (n < 1000000000): {
                return (numberToWords(parseInt(n / 1000000)) + " Million " + helper(n % 1000000)).trim()
            }
            case (n < 1000000000000): {
                return (numberToWords(parseInt(n / 1000000000)) + " Billion " + helper(n % 1000000000)).trim()
            }
        }

        return ""
    }

};