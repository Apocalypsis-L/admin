package leetcode;

import java.util.ArrayList;
import java.util.List;

public class BaseClass {

    public static void main(String[] args) {
        List<List<String>> fatherList = new ArrayList<>();
        List<String> childList = new ArrayList<>();
        childList.add("before");
        fatherList.add(childList);
        childList.add("after");
        System.out.println(fatherList.size());
        System.out.println(fatherList.get(0));
    }
}
