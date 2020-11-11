#include <iostream>
using namespace std;

class Solution {
public:
    string toLowerCase(string str) {
        string res = "";

        for(int i=0; i < str.size(); i++){
            res += tolower(str[i]);
        }

        return res;
    }
};