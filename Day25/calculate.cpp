class Solution
{
public:
    int calculate(string s)
    {
        int result = 0;
        int lastNum = 0;
        string preSign = "+";
        string currentNum = "";
        int n = sizeof(s);

        for (int i = 0; i <= s.length(); i++)
        {
            if (isspace(s[i]))
                continue; // ehite space

            //is digit
            if (isdigit(s[i]))
            {
                currentNum += s[i];
            }

            if (!isdigit(s[i]))
            {

                if (preSign == "+")
                {
                    result += lastNum;
                    lastNum = stoi(currentNum);
                }
                else if (preSign == "-")
                {
                    result += lastNum;
                    lastNum = -stoi(currentNum);
                }
                else if (preSign == "/")
                {
                    lastNum /= stoi(currentNum);
                }
                else if (preSign == "*")
                {
                    lastNum *= stoi(currentNum);
                }
                currentNum = "";
                preSign = s[i];
            }
        }

        int ans = result + lastNum;
        return ans;
    }
};