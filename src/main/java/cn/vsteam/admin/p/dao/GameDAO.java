package cn.vsteam.admin.p.dao;

import cn.vsteam.admin.p.entity.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface GameDAO extends JpaRepository<Game, Long>, JpaSpecificationExecutor {

    @Query("from Game game where game.id=:id and game.deleted=0")
    Game findById(@Param("id") long id);

    @Query("from Game game where game.id in :idList and game.deleted=0")
    List<Game> findByIdList(@Param("idList") List<Long> idList);
}
