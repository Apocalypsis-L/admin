package cn.vsteam.admin.primary.dao;

import cn.vsteam.admin.primary.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TeamDAO extends JpaRepository<Team, Long>, JpaSpecificationExecutor {

    @Query("from Team team where team.id=:id and team.deleted=0")
    Team findById(@Param("id") long id);

    @Query(value = "select * from football_team team where team.teamName like CONCAT('%',:teamName,'%') and team.deleted=0", nativeQuery = true)
    Team findByName(@Param("teamName") String teamName);
}
