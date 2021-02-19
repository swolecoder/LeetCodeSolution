class Solution {
public:
    int findMaxValueOfEquation(vector<vector<int>>& points, int k) {
        priority_queue<pair<int,int>, vector<pair<int,int>>> pq;
        int ans = INT_MIN;
        for(int i = 0 ; i < points.size() ; ++i){
            while(int(pq.size()) and (points[i][0] - pq.top().second > k)) pq.pop();
            if(int(pq.size())){
                ans = max(ans , points[i][0] + points[i][1] + pq.top().first);
            }
            pq.push({points[i][1] - points[i][0] , points[i][0]});
        }
        return ans; 
    }
};