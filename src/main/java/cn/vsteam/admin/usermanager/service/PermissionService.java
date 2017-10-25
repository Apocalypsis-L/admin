package cn.vsteam.admin.usermanager.service;

import cn.vsteam.admin.s.dao.PermissionDAO;
import cn.vsteam.admin.s.dao.RolePermissionDAO;
import cn.vsteam.admin.s.dao.UserRoleDAO;
import cn.vsteam.admin.s.entity.Permission;
import cn.vsteam.admin.s.entity.User;
import cn.vsteam.admin.s.entity.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class PermissionService {

    @Autowired
    PermissionDAO permissionDAO;

    @Autowired
    RolePermissionDAO rolePermissionDAO;

    @Autowired
    UserRoleDAO userRoleDAO;

    @Autowired
    UserRoleService userRoleService;

    @Autowired
    RolePermissionService rolePermissionService;

    public Permission findByPid(Long pid) {
        return permissionDAO.findByPid(pid);
    }

    public List<Permission> findByPidSet(Set<Long> pidSet) {
        List<Permission> permissionList = new ArrayList<>();
        for (Long pid : pidSet) {
            permissionList.add(this.findByPid(pid));
        }
        return permissionList;
    }

    public List<Permission> findByUser(User user) {
        List<UserRole> userRoleList = userRoleService.findByUid(user.getUid());
        Set<Long> pidSet = rolePermissionService.findByUserRoleList(userRoleList);
        List<Permission> permissionList = this.findByPidSet(pidSet);
        return permissionList;
    }

    public List<String> findPnameListByUser(User user) {
        List<String> pnameList = new ArrayList<>();
        List<Permission> permissionList = this.findByUser(user);
        for (Permission permission : permissionList) {
            pnameList.add(permission.getPname());
        }
        return pnameList;
    }

}
