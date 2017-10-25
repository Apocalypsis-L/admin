package cn.vsteam.admin.config.security.entity;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

public class MUserDetails implements UserDetails {

    private Collection<GrantedAuthority> collection;

    private String username;

    private String password;

    private boolean enabled;

    public MUserDetails(String username, String password, boolean enabled) {
        this.username = username;
        this.password = password;
        this.enabled = enabled;
    }

    public MUserDetails(String username, String password, boolean enabled, List<GrantedAuthority> list) {
        this.username = username;
        this.password = password;
        this.enabled = enabled;
        this.collection = list;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.collection;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return this.enabled;
    }
}
