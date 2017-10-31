package cn.vsteam.admin.primary.dao;

import cn.vsteam.admin.primary.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PUserDAO extends JpaRepository<User, Long>, JpaSpecificationExecutor {

    @Query("from User user where user.username=:username")
    User findByUsername(@Param("username") String username);

    User findById(@Param("id") long id);
}
