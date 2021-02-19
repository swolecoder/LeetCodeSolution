class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        N = len(nums)-1;
        i =0;
        
        arr = [-1,-1]
        a = self.searchL(nums,i,N,target)
        if(a > -1):
            arr[0] = a
        b = self.searchH(nums,i,N,target)
        if(b > -1):
            arr[1] = b
        print(a,b)
        
        return arr
        
        
        
        
        
    def searchL(self,arr,low, high, x):
        
        start = low
        end = high
        
        while start<=end:
            mid = (start+end)//2
            
            if arr[mid] > x:
                end = mid -1
            elif arr[mid] < x:
                start = mid +1
            else:
                if(mid == 0 or arr[mid-1] != arr[mid]):
                    return mid
                else:
                    end = mid -1
        return -1
    
    
    def searchH(self,arr, low, high, x):
        
        
        while low <= high:
            mid = (low+high)//2
            
            if arr[mid] < x:
                low = mid +1
            elif arr[mid] > x:
                high = mid -1
            else:
                
                if(mid == len(arr)-1 or arr[mid+1] != arr[mid]):
                    return mid
                else:
                    low = mid +1
        return -1
        
        
        