package cn.vsteam.admin.s.dao;

import cn.vsteam.admin.s.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleDAO extends JpaRepository<Role, Long>, JpaSpecificationExecutor {

    Role findByRid(@Param("rid") Long rid);

}
