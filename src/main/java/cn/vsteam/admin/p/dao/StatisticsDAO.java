package cn.vsteam.admin.p.dao;

import cn.vsteam.admin.p.entity.StatisticsPlayer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StatisticsDAO extends JpaRepository<StatisticsPlayer, Long>, JpaSpecificationExecutor {

    @Query("from StatisticsPlayer statisticsPlayer where statisticsPlayer.userId = :userId and statisticsPlayer.deleted=0")
    List<StatisticsPlayer> findByUserId(@Param("userId") long userId);

    List<StatisticsPlayer> findById(@Param("id") long id);

    @Query("from StatisticsPlayer statisticsPlayer where statisticsPlayer.userId=:userId and statisticsPlayer.teamGameId<>'' and statisticsPlayer.deleted=0")
    List<StatisticsPlayer> findGameByUserId(@Param("userId") long userId);

    @Query("from StatisticsPlayer statisticsPlayer where statisticsPlayer.userId=:userId and statisticsPlayer.hardwarePracticeId<>'' and statisticsPlayer.deleted=0")
    List<StatisticsPlayer> findPracticeByUserId(@Param("userId") long userId);
}
