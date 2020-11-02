#include <iostream>
using namespace std;

int lenOfLongIncSubArr(int arr[], int n)
{
    int maxLength = 0;
    int length = 0;

    for (int i = 0; i < n; i++)
    {
        if (arr[i] < arr[i + 1])
        {
            length++;
        }
        else
        {
            maxLength = max(length + 1, maxLength);
            length = 0;
        }
    }

    return maxLength;
}
int main()
{
    int arr[] = {5, 6, 3, 5, 7, 8, 9, 1, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    std::cout << lenOfLongIncSubArr(arr, n) << std::endl;

    int arr1[] = {12, 13, 1, 5, 4, 7, 8, 10, 10, 11};
    int m = sizeof(arr1) / sizeof(arr1[0]);
    std::cout << lenOfLongIncSubArr(arr1, m) << std::endl;
}
