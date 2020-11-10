class Solution
{
public:
    int subarraySum(vector<int> &nums, int k)
    {
        std::unordered_map<int, int> map{{0, 1}};
        int total = 0;
        int sum = 0;

        for (int i = 0; i < nums.size(); i++)
        {
            sum += nums[i];

            if (map.count(sum - k))
            {
                total += map[sum - k];
            }

            map[sum]++;
        }

        return total;
    }
};