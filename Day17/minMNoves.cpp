#include <iostream>
using namespace std; //to support namespaces

class Solution
{
public:
    int minMoves(vector<int> &nums)
    {
        int moves = 0;
        int min = INT_MAX;

        for (int i = 0; i < size(nums); i++)
        {
            if (min > nums[i])
            {
                min = nums[i];
            }
        }

        for (int i = 0; i < size(nums); i++)
        {

            moves += nums[i] - min;
        }
        return moves;
    }
};