package cn.vsteam.admin.primary.dao;

import cn.vsteam.admin.primary.entity.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserLoginDAO extends JpaRepository<UserLogin, Long> {

    @Query(value = "select count(DISTINCT(userId)) as count,DATE(loginTIme) as loginDate from user_login group by loginDate order by loginDate", nativeQuery = true)
    List<Object> findLoginCount();

    @Query(value = "select count(*) from user_login ", nativeQuery = true)
    Object findTest();
}
