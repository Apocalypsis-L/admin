package cn.vsteam.admin.report.pojo;

import java.math.BigInteger;

public class UserLoginPojo {

    private BigInteger count;
    private String loginDate;

    public BigInteger getCount() {
        return count;
    }

    public void setCount(BigInteger count) {
        this.count = count;
    }

    public String getLoginDate() {
        return loginDate;
    }

    public void setLoginDate(String loginDate) {
        this.loginDate = loginDate;
    }
}
