class Solution
{
public:
    string addStrings(string num1, string num2)
    {
        int n1 = num1.size() - 1;
        int n2 = num2.size() - 1;

        string s = "";
        int carry = 0;

        while (n1 >= 0 || n2 >= 0 || carry >= 1)
        {

            int digit1 = n1 >= 0 ? num1[n1--] - '0' : 0; //- '0' converst. char to int
            int digit2 = n2 >= 0 ? num2[n2--] - '0' : 0;

            int sum = digit1 + digit2 + carry;
            cout << sum << endl;
            s = to_string(sum % 10) + s;
            carry = sum / 10;
        }
        return s == "" ? "0" : s;
    }
};