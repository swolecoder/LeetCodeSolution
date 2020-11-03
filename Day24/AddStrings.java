class Solution {
    public String addStrings(String num1, String num2) {
        if(num1 == null) return num2;
        if(num2 == null) return num1;
        
        StringBuilder sb = new StringBuilder();
        int i = num1.length()-1;
        int j = num2.length()-1;
        
        int carry  = 0;
        
        while(i >= 0 || j >= 0){
            int a = i >= 0 ? num1.charAt(i--)-'0' : 0; 
            int b = j >= 0 ? num2.charAt(j--)-'0' : 0;
            int sum = a + b + carry;
            
            carry  = sum / 10;
            sb.append(sum % 10);
        }
        
        if(carry != 0) sb.append(carry);
        return sb.reverse().toString();
    }
}
