class Solution
{
public:
    int minMeetingRooms(vector<vector<int>> &intervals)
    {

        vector<int> x(intervals.size()); //start time
        vector<int> y(intervals.size()); //end time

        for (auto i = 0; i < intervals.size(); i++)
        {
            x[i] = intervals[i][0];
            y[i] = intervals[i][1];
        }

        //sort
        sort(begin(x), end(x));
        sort(begin(y), end(y));

        int room = 0;
        int j = 0;

        for (int i = 0; i < intervals.size(); i++)
        {
            //start time is less than end time that means the metting is not over yet
            if (x[i] < y[j])
            {
                room++;
            }
            else
            {
                j++;
            }
        }

        return room;
    }
};