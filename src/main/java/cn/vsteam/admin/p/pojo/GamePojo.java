package cn.vsteam.admin.p.pojo;

import cn.vsteam.admin.p.entity.Game;

import java.sql.Timestamp;

public class GamePojo {

    private long statisticsId;
    private long id;
    private long publisherId;
    private String teamName;
    private String guestTeamName;
    private Timestamp competitionTime;

    public GamePojo() {

    }

    public GamePojo(Game game) {
        this.id = game.getId();
        this.publisherId = game.getPublisherId();

        this.guestTeamName = game.getOpponent();
        this.competitionTime = game.getCompetitionTime();
    }

    public long getStatisticsId() {
        return statisticsId;
    }

    public void setStatisticsId(long statisticsId) {
        this.statisticsId = statisticsId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getPublisherId() {
        return publisherId;
    }

    public void setPublisherId(long publisherId) {
        this.publisherId = publisherId;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public String getGuestTeamName() {
        return guestTeamName;
    }

    public void setGuestTeamName(String guestTeamName) {
        this.guestTeamName = guestTeamName;
    }

    public Timestamp getCompetitionTime() {
        return competitionTime;
    }

    public void setCompetitionTime(Timestamp competitionTime) {
        this.competitionTime = competitionTime;
    }
}
