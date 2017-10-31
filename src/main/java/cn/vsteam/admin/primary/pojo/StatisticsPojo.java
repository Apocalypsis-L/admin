package cn.vsteam.admin.primary.pojo;

public class StatisticsPojo {

    private Long id;
    private Long teamGameId;
    private Long teamId;
    private Long PracticeId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTeamGameId() {
        return teamGameId;
    }

    public void setTeamGameId(Long teamGameId) {
        this.teamGameId = teamGameId;
    }

    public Long getTeamId() {
        return teamId;
    }

    public void setTeamId(Long teamId) {
        this.teamId = teamId;
    }

    public Long getPracticeId() {
        return PracticeId;
    }

    public void setPracticeId(Long practiceId) {
        PracticeId = practiceId;
    }
}
