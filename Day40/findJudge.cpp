#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    int findJudge(int N, vector<vector<int>> &trust)
    {
        vector<int> trusting(N + 1);
        vector<int> trusted(N + 1);

        fill(trusting.begin(), trusting.end(), 0);
        fill(trusted.begin(), trusted.end(), 0);

        for (int i = 0; i < trust.size(); i++)
        {
            int a = trust[i][0];
            int b = trust[i][1];
            trusting[a]++;
            trusted[b]++;
        }

        for (int i = 1; i <= N; i++)
        {
            if (trusting[i] == 0 && trusted[i] == N - 1)
            {
                return i;
            }
        }

        return -1;
    }
};