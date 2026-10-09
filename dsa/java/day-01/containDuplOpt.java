import java.util.HashSet;


public class containDuplOpt {
    public static boolean containDup(int[] nums){
        HashSet<Integer> set =  new HashSet<>();
        for(int i : nums){
            if(set.contains(i)){
                return true;
            }
            set.add(i);
        }
        return false;
    }
    public static void main(String[] args){
        int[] nums = {1,2,1,3,4,5,6,7,8,9,10};
    
        System.out.println(containDup(nums));
    }
    
}
