package cn.vsteam.admin.usermanager.service;

import cn.vsteam.admin.s.dao.UserDAO;
import cn.vsteam.admin.s.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserDAO userDAO;

    public List<User> findAll() {
        return userDAO.findAll();
    }

    public User findByUsername(String username) {
        return userDAO.findByUsername(username);
    }

}
