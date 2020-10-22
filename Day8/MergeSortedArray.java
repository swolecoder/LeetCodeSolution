class MergeSortedArray {
    /*
    Time complexity : O(n)
    Space complexity: O(1)
    */
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int p1 = m-1;
	int p2 = n-1;
	int p = m+n-1;

	while(p >= 0){
		int v1 = p1 >= 0 ? nums1[p1] : Integer.MIN_VALUE;
		int v2 = p2 >= 0 ? nums2[p2] : Integer.MIN_VALUE;

		if(v1 >= v2){
			nums1[p] = v1;
			p1--;
		}else{
			nums1[p] = v2;
			p2--;
		}
		p--;
	}
    }
}
