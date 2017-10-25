package cn.vsteam.admin.p.dao;

import cn.vsteam.admin.p.entity.Tokens;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TokensDAO extends JpaRepository<Tokens, Long>, JpaSpecificationExecutor {

    @Query("from Tokens tokens where tokens.id=:id")
    Tokens findById(@Param("id") long id);
}
