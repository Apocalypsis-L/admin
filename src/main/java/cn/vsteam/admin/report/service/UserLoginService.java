package cn.vsteam.admin.report.service;

import cn.vsteam.admin.report.pojo.UserLoginPojo;
import cn.vsteam.admin.primary.dao.UserLoginDAO;
import org.json.JSONArray;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserLoginService {

    @Autowired
    UserLoginDAO userLoginDAO;

    public List<UserLoginPojo> findLoginCount() throws JSONException {
        List<Object> resultList = userLoginDAO.findLoginCount();
        JSONArray jsonArray = new JSONArray(resultList);
        JSONArray objArray;
        List<UserLoginPojo> pojoList = new ArrayList<>();
        for (int i = 0, length = jsonArray.length(); i < length; i++) {
            objArray = (JSONArray) jsonArray.get(i);
            UserLoginPojo userLoginPojo = new UserLoginPojo();
            userLoginPojo.setCount(new BigInteger(objArray.get(0).toString()));
            userLoginPojo.setLoginDate(objArray.get(1).toString());
            pojoList.add(userLoginPojo);
        }
        return pojoList;
    }
}
