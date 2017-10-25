package cn.vsteam.admin.p.dao;

import cn.vsteam.admin.p.entity.Invitation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.query.Param;

public interface InvitationDAO extends JpaRepository<Invitation, Long>, JpaSpecificationExecutor {

    Invitation findByTeamIdAndInvitee(@Param("teamId") long teamid, @Param("invitee") long invitee);
}
