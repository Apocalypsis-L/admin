package cn.vsteam.admin.p.service;

import cn.vsteam.admin.p.dao.InvitationDAO;
import cn.vsteam.admin.p.entity.Invitation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvitationService {
    @Autowired
    InvitationDAO invitationDAO;

    public Invitation findByTeamIdAndInvitee(long teamId, long invitee) {
        return invitationDAO.findByTeamIdAndInvitee(teamId, invitee);
    }
}
