#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    vector<string> buildArray(vector<int> &target, int n)
    {
        vector<string> res;

        int size = target.size();
        int j = 0;

        for (int i = 1; i <= n; i++)
        {

            if (i == target[j])
            {
                res.push_back("Push");
                j++;
            }
            else
            {
                res.push_back("Push");
                res.push_back("Pop");
            }

            if (j == size)
                break;
        }

        return res;
    }
};