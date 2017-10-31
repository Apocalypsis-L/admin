package cn.vsteam.admin.secondary.dao;

import cn.vsteam.admin.secondary.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDAO extends JpaRepository<User, Long>, JpaSpecificationExecutor {

    @Query(value = "from User user where user.enable = true")
    List<User> findAll();

    //    @Query(value = "from User user where user.loginname = @loginname")
    User findByUsername(@Param("username") String username);
}
