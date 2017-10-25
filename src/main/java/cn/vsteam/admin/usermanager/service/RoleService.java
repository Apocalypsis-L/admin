package cn.vsteam.admin.usermanager.service;

import cn.vsteam.admin.s.dao.RoleDAO;
import cn.vsteam.admin.s.entity.Role;
import cn.vsteam.admin.s.entity.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoleService {
    @Autowired
    RoleDAO roleDAO;

    @Autowired
    UserRoleService userRoleService;

    public Role findByRid(Long rid) {
        return roleDAO.findByRid(rid);
    }

    public List<Role> findByUserRoleList(List<UserRole> userRoleList) {
        List<Role> roleList = new ArrayList<>();
        for (UserRole userRole : userRoleList) {
            Role role = this.findByRid(userRole.getRid());
            roleList.add(role);
        }
        return roleList;
    }
}
