package cn.vsteam.admin.secondary.dao;

import cn.vsteam.admin.secondary.entity.Permission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PermissionDAO extends JpaRepository<Permission, Long>, JpaSpecificationExecutor {

    List<Permission> findAll();

    Permission findByPid(@Param("pid") Long pid);
}
