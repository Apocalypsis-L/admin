package cn.vsteam.admin.p.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "football_team_invitation", schema = "vsteam_db", catalog = "")
public class Invitation {
    private long id;
    private long creatorId;
    private long teamId;
    private long invitee;

    @Id
    @Column(name = "id")
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "creatorid")
    public long getCreatorId() {
        return creatorId;
    }

    public void setCreatorId(long creatorId) {
        this.creatorId = creatorId;
    }

    @Column(name = "teamid")
    public long getTeamId() {
        return teamId;
    }

    public void setTeamId(long teamId) {
        this.teamId = teamId;
    }

    @Column(name = "invitee")
    public long getInvitee() {
        return invitee;
    }

    public void setInvitee(long invitee) {
        this.invitee = invitee;
    }
}
