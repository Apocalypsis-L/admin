package cn.vsteam.admin.config.security.service;

import cn.vsteam.admin.config.security.entity.MUserDetails;
import cn.vsteam.admin.secondary.entity.User;
import cn.vsteam.admin.usermanager.service.PermissionService;
import cn.vsteam.admin.usermanager.service.RoleService;
import cn.vsteam.admin.usermanager.service.UserService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@Service
public class SpitterUserService implements UserDetailsService {

    private boolean enableAuthorities = true;//是否支持权限验证
    private boolean enableGroups;//是否支持组

    @Resource(name = "userService")
    UserService userService;

    @Autowired
    RoleService roleService;

    @Autowired
    PermissionService permissionService;

    private Log log = LogFactory.getLog(this.getClass().getName());

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException, DataAccessException {
        User user = userService.findByUsername(username);
        if (user != null) {
            HashSet dbAuthSet = new HashSet();
            if (this.enableAuthorities) {
                dbAuthSet.addAll(this.loadUserAuthorities(user));
            }
            if (this.enableGroups) {

            }
            ArrayList dbAuthList = new ArrayList(dbAuthSet);
            return this.createUserDetails(user, dbAuthList);
        } else {
            throw new UsernameNotFoundException("用户不存在");
        }
    }

    public UserDetails createUserDetails(User user, List<GrantedAuthority> combinedAuthorities) {
        return new MUserDetails(user.getUsername(), user.getPassword(), user.isEnable(), combinedAuthorities);
    }

    /**
     * 根据用户加载用户权限
     *
     * @param user
     * @return
     */
    public List<SimpleGrantedAuthority> loadUserAuthorities(User user) {
        List<String> pnameList;
        pnameList = permissionService.findPnameListByUser(user);
        return this.createUserAuthorities(pnameList);
    }

    public List<SimpleGrantedAuthority> createUserAuthorities(List<String> list) {
        List<SimpleGrantedAuthority> list1 = new ArrayList<>();
        for (String pname : list) {
            SimpleGrantedAuthority auto;
            if (pname != null) {
                auto = new SimpleGrantedAuthority(pname);
            } else {
                auto = new SimpleGrantedAuthority("");
            }
            list1.add(auto);
        }
        return list1;
    }

}
