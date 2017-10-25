package cn.vsteam.admin.s.dao;

import cn.vsteam.admin.s.entity.RolePermission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RolePermissionDAO extends JpaRepository<RolePermission,Long>,JpaSpecificationExecutor {

    List<RolePermission> findByRid(@Param("rid") Long rid);
}
