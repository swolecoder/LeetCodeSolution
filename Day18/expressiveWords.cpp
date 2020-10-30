#include <iostream>
using namespace std; //to support namespaces

class Solution
{
public:
    int expressiveWords(string S, vector<string> &words)
    {

        int count = 0;
        for (string word : words)
        {
            if (canStrech(S, word))
            {

                cout << word << endl;
                count++;
            }
        }

        return count;
    }

    bool canStrech(string S, string w)
    {
        int i = 0;
        int j = 0;

        while (i < S.size() && j < w.size())
        {

            char c1 = S[i];
            char c2 = w[j];

            if (c1 != c2)
                return false;

            int e1 = i;
            int e2 = j;

            while (e1 < S.size() && S[e1] == c1)
                e1++;

            while (e2 < w.size() && w[e2] == c2)
                e2++;

            int len1 = e1 - i;
            int len2 = e2 - j;

            if ((len1 < len2) || (len1 < 3 && len1 != len2))
            {
                return false;
            }

            i = e1;
            j = e2;
        }

        if (i == S.size() && j == w.size())
            return true;

        return false;
    }
};
{
    public :
        int expressiveWords(string S, vector<string> &words){

            int count = 0;
for (string word : words)
{
    if (canStrech(S, word))
    {
        count++;
    }
}

return count;
}

bool canStrech(string S, string w)
{
    int i = 0;
    int j = 0;

    while (i < S.size() && j < w.size())
    {

        char c1 = S[i];
        char c2 = w[j];

        if (c1 != c2)
            return false;

        int e1 = i;
        int e2 = j;

        while (e1 < S.size() && S[e1] == c1)
            e1++;

        while (e2 < w.size() && w[e2] == c2)
            e2++;

        int len1 = e1 - i;
        int len2 = e2 - j;

        if ((len1 < len2) && (len1 < 3 && len1 != len2))
            return false;

        i = e1;
        j = e2;
    }

    if (i == S.size() && j == w.size())
        return true;

    return false;
}
}
;