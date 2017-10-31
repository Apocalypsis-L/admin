package cn.vsteam.admin.usermanager.service;

import cn.vsteam.admin.secondary.dao.RolePermissionDAO;
import cn.vsteam.admin.secondary.entity.Role;
import cn.vsteam.admin.secondary.entity.RolePermission;
import cn.vsteam.admin.secondary.entity.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class RolePermissionService {

    @Autowired
    RolePermissionDAO rolePermissionDAO;

    public List<RolePermission> findByRid(Long rid) {
        return rolePermissionDAO.findByRid(rid);
    }

    public Set<Long> findByRoleList(List<Role> roleList) {
        Set<Long> pidSet = new HashSet<>();
        for (Role role : roleList) {
            List<RolePermission> rolePermissionList = this.findByRid(role.getRid());
            for (RolePermission rolePermission : rolePermissionList) {
                pidSet.add(rolePermission.getPid());
            }
        }
        return pidSet;
    }

    public Set<Long> findByRidList(List<Long> ridList) {
        Set<Long> pidSet = new HashSet<>();
        for (Long rid : ridList) {
            List<RolePermission> rolePermissionList = this.findByRid(rid);
            for (RolePermission rolePermission : rolePermissionList) {
                pidSet.add(rolePermission.getPid());
            }
        }
        return pidSet;
    }

    public Set<Long> findByUserRoleList(List<UserRole> userRoleList) {
        List<Long> ridList = new ArrayList<>();
        for (UserRole userRole : userRoleList) {
            ridList.add(userRole.getRid());
        }
        return this.findByRidList(ridList);
    }
}
