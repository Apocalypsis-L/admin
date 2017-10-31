package cn.vsteam.admin.primary.dao;

import cn.vsteam.admin.primary.entity.Practice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PracticeDAO extends JpaRepository<Practice, Long>, JpaSpecificationExecutor {

    @Query("from Practice practice where practice.id=:id and practice.deleted=0")
    Practice findById(@Param("id") long id);

    @Query("from Practice practice where practice.id in :idList and practice.deleted=0")
    List<Practice> findByIdList(@Param("idList") List<Long> idList);
}
