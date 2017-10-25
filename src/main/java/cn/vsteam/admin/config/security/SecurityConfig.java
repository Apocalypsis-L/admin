package cn.vsteam.admin.config.security;

import cn.vsteam.admin.config.security.service.SpitterUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    SpitterUserService spitterUserService;

    @Override
    public void configure(WebSecurity web) throws Exception {
        //取消静态资源目录拦截
        web.ignoring().antMatchers("/assets/**", "/loginresource/**");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //路由策略和访问权限的简单配置
        http
//                .csrf().disable()   //禁用csrf
                .authorizeRequests()
//                .antMatchers("/assets/**", "/loginresource/**").permitAll()
//                .antMatchers("/table").access("hasRole('admin')")
//                .antMatchers("/chart").access("hasAuthority('guest')")
                .antMatchers("/chart/**")
//                .hasAnyAuthority("admin")
                .hasAnyRole("admin")
                .anyRequest().authenticated()
                .and()
                .formLogin()                        //启用默认登陆页面
                .loginPage("/login")
//                .loginProcessingUrl("/login")
                .failureUrl("/login?error")         //登陆失败返回URL:/login?error
                .defaultSuccessUrl("/index")         //登陆成功跳转URL
                .permitAll()                       //登陆页面全部权限可访问
                .and()
                .logout()
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                .logoutSuccessUrl("/login?logout")
                .permitAll();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        //内置用户
//        auth.inMemoryAuthentication()
//                .withUser("admin")
//                .password("admin")
//                .roles("USER");
        //数据库载入用户信息
        auth.userDetailsService(spitterUserService);
    }
}
