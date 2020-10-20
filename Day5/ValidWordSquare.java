    public ValidWordSquare{
       public boolean IsValidWordSquare(List<String> words) {
         for(int i=0;i<words.size();i++){
              char[] sc  = words.get(i).toCharArray();
              for(int j=0;j<sc.length;j++){
                  if(j >= words.size() || i >= words.get(j).length()) return false;
                  if(sc[j] != words.get(j).charAt(i)) return  false;
              }
          }        
          return true;
      }
    }
