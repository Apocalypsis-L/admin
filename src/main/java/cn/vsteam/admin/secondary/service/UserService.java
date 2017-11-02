package cn.vsteam.admin.secondary.service;

import cn.vsteam.admin.secondary.dao.UserDAO;
import cn.vsteam.admin.secondary.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("sUserService")
public class UserService {

    @Autowired
    UserDAO userDAO;

    public User save(User user) {
        return userDAO.save(user);
    }
}
