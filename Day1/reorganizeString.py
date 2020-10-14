import collections,heapq

class Solution:
    def reorganizeString(self, S: str) -> str:
        counts = collections.Counter(S)
        heap = []
        O = []
        for char,freq in counts.items():
            print(char,freq)
            heap.append((-freq,char))

        heapq.heapify(heap)



        while heap:
            first_freq, first_char = heapq.heappop(heap)
            O.append(first_char)

            if not heap:
                if first_freq < -1:
                    return ""
                break

            second_freq, second_char = heapq.heappop(heap)
            O.append(second_char)

            if first_freq < -1:
                heapq.heappush(heap,(first_freq+1, first_char))
            if second_freq < -1:
                heapq.heappush(heap,(second_freq+1, second_char))


        return "".join(O)

