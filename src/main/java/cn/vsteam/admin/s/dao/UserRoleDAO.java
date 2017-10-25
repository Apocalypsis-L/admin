package cn.vsteam.admin.s.dao;

import cn.vsteam.admin.s.entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRoleDAO extends JpaRepository<UserRole, Long>, JpaSpecificationExecutor {

    List<UserRole> findByUid(@Param("uid") Long uid);

}
