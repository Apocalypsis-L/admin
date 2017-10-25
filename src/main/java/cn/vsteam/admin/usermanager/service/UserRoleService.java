package cn.vsteam.admin.usermanager.service;

import cn.vsteam.admin.s.dao.UserRoleDAO;
import cn.vsteam.admin.s.entity.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserRoleService {

    @Autowired
    UserRoleDAO userRoleDAO;

    public List<UserRole> findByUid(Long uid) {
        List<UserRole> userRoleList = userRoleDAO.findByUid(uid);
        return userRoleList;
    }
}
