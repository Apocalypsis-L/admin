package cn.vsteam.admin.utils;

public class Constant {

    public static final String MD5Salt = "VSteam20150115";
    public static final String MD5Algorithm = "MD5"; //'MD5"或"SHA"选一个；
    public static final Long TokenTenYears = 315360000000L; //10年(yr)=315360000000毫秒(ms)

    public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        for (int i = 0,length = nums.length; i < length; i++) {
            for (int j = i + 1; j < length; j++) {
                if (nums[i] + nums[j] == target) {
                    result[0] = i;
                    result[1] = j;
                    break;
                }
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int[] nums = {2,7,11,15};
        Constant a = new Constant();
        int[] result = a.twoSum(nums,9);
        System.out.println(result[0]);
        System.out.println(result[1]);
    }
}
