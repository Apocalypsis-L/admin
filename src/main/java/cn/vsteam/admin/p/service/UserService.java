package cn.vsteam.admin.p.service;

import cn.vsteam.admin.p.dao.PUserDAO;
import cn.vsteam.admin.p.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("pUserService")
public class UserService {

    @Autowired
    PUserDAO PUserDAO;

    public List<User> findAll() {
        return PUserDAO.findAll();
    }

    public User findByUsername(String username) {
        return PUserDAO.findByUsername(username);
    }

    public User findById(long id) {
        return PUserDAO.findById(id);
    }
}
