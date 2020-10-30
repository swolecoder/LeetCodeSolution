#include <iostream>
#include <unordered_map>
using namespace std;

class Solution
{
public:
    int numOfMinutes(int n, int headID, vector<int> &manager, vector<int> &informTime)
    {
        unordered_map<int, vector<int>> m;
        for (int i = 0; i < manager.size(); i++)
        {
            if (i == headID)
                continue;
            m[manager[i]].push_back(i);
        }

        //create quieue
        queue<pair<int, int>> q;
        q.push(make_pair(headID, 0));
        int res = 0;

        while (!q.empty())
        {
            int size = q.size();
            for (int i = 0; i < size; i++)
            {
                int emp = q.front().first;
                int time = q.front().second;

                q.pop(); //pop data

                int duration = informTime[emp] + time;
                res = max(res, duration);

                for (auto it : m[emp])
                {
                    q.push(make_pair(it, duration));
                }
            }
        }

        return res;
    }
};