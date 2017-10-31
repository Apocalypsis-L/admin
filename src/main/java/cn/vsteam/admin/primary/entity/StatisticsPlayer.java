package cn.vsteam.admin.primary.entity;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "football_team_game_statistics_player", schema = "vsteam_db")
public class StatisticsPlayer {
    private long id;
    private Long teamGameId;
    private Long teamId;
    private Long hardwarePracticeId;
    private Long userId;
    private String identification;
    private Integer touchCounts;
    private Integer passBallCounts;
    private Integer oneFootPassCount;
    private Integer carryCount;
    private Integer carryTime;
    private Integer highMoveCount;
    private Long highMoveDistance;
    private String highMoveCalorie;
    private Integer midMoveCount;
    private Long midMoveDistance;
    private String midMoveCalorie;
    private Integer lowMoveCount;
    private Long lowMoveDistance;
    private String lowMoveCalorie;
    private Integer normalMoveCount;
    private Long normalMoveDistance;
    private String normalMoveCalorie;
    private Long wholeMoveDistance;
    private Long moveCalorie;
    private String calorieCurveData;
    private Integer shoots;
    private Integer assists;
    private Timestamp createTime;
    private Timestamp updateTime;
    private byte deleted;
    private Integer carryDistance;
    private Integer highCarryDistance;
    private Integer midCarryDistance;
    private Integer lowCarryDistance;
    private Integer normalCarryDistance;

    @Id
    @Column(name = "id")
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Basic
    @Column(name = "identification")
    public String getIdentification() {
        return identification;
    }

    public void setIdentification(String identification) {
        this.identification = identification;
    }

    @Basic
    @Column(name = "touchcounts")
    public Integer getTouchCounts() {
        return touchCounts;
    }

    public void setTouchCounts(Integer touchCounts) {
        this.touchCounts = touchCounts;
    }

    @Basic
    @Column(name = "passballcounts")
    public Integer getPassBallCounts() {
        return passBallCounts;
    }

    public void setPassBallCounts(Integer passBallCounts) {
        this.passBallCounts = passBallCounts;
    }

    @Basic
    @Column(name = "onefootpasscount")
    public Integer getOneFootPassCount() {
        return oneFootPassCount;
    }

    public void setOneFootPassCount(Integer oneFootPassCount) {
        this.oneFootPassCount = oneFootPassCount;
    }

    @Basic
    @Column(name = "carrycount")
    public Integer getCarryCount() {
        return carryCount;
    }

    public void setCarryCount(Integer carryCount) {
        this.carryCount = carryCount;
    }

    @Basic
    @Column(name = "carrytime")
    public Integer getCarryTime() {
        return carryTime;
    }

    public void setCarryTime(Integer carryTime) {
        this.carryTime = carryTime;
    }

    @Basic
    @Column(name = "highmovecount")
    public Integer getHighMoveCount() {
        return highMoveCount;
    }

    public void setHighMoveCount(Integer highMoveCount) {
        this.highMoveCount = highMoveCount;
    }

    @Basic
    @Column(name = "highmovedistance")
    public Long getHighMoveDistance() {
        return highMoveDistance;
    }

    public void setHighMoveDistance(Long highMoveDistance) {
        this.highMoveDistance = highMoveDistance;
    }

    @Basic
    @Column(name = "highmovecalorie")
    public String getHighMoveCalorie() {
        return highMoveCalorie;
    }

    public void setHighMoveCalorie(String highMoveCalorie) {
        this.highMoveCalorie = highMoveCalorie;
    }

    @Basic
    @Column(name = "midmovecount")
    public Integer getMidMoveCount() {
        return midMoveCount;
    }

    public void setMidMoveCount(Integer midMoveCount) {
        this.midMoveCount = midMoveCount;
    }

    @Basic
    @Column(name = "midmovedistance")
    public Long getMidMoveDistance() {
        return midMoveDistance;
    }

    public void setMidMoveDistance(Long midMoveDistance) {
        this.midMoveDistance = midMoveDistance;
    }

    @Basic
    @Column(name = "midmovecalorie")
    public String getMidMoveCalorie() {
        return midMoveCalorie;
    }

    public void setMidMoveCalorie(String midMoveCalorie) {
        this.midMoveCalorie = midMoveCalorie;
    }

    @Basic
    @Column(name = "lowmovecount")
    public Integer getLowMoveCount() {
        return lowMoveCount;
    }

    public void setLowMoveCount(Integer lowMoveCount) {
        this.lowMoveCount = lowMoveCount;
    }

    @Basic
    @Column(name = "lowmovedistance")
    public Long getLowMoveDistance() {
        return lowMoveDistance;
    }

    public void setLowMoveDistance(Long lowMoveDistance) {
        this.lowMoveDistance = lowMoveDistance;
    }

    @Basic
    @Column(name = "lowmovecalorie")
    public String getLowMoveCalorie() {
        return lowMoveCalorie;
    }

    public void setLowMoveCalorie(String lowMoveCalorie) {
        this.lowMoveCalorie = lowMoveCalorie;
    }

    @Basic
    @Column(name = "normalmovecount")
    public Integer getNormalMoveCount() {
        return normalMoveCount;
    }

    public void setNormalMoveCount(Integer normalMoveCount) {
        this.normalMoveCount = normalMoveCount;
    }

    @Basic
    @Column(name = "normalmovedistance")
    public Long getNormalMoveDistance() {
        return normalMoveDistance;
    }

    public void setNormalMoveDistance(Long normalMoveDistance) {
        this.normalMoveDistance = normalMoveDistance;
    }

    @Basic
    @Column(name = "normalmovecalorie")
    public String getNormalMoveCalorie() {
        return normalMoveCalorie;
    }

    public void setNormalMoveCalorie(String normalMoveCalorie) {
        this.normalMoveCalorie = normalMoveCalorie;
    }

    @Basic
    @Column(name = "wholemovedistance")
    public Long getWholeMoveDistance() {
        return wholeMoveDistance;
    }

    public void setWholeMoveDistance(Long wholeMoveDistance) {
        this.wholeMoveDistance = wholeMoveDistance;
    }

    @Basic
    @Column(name = "movecalorie")
    public Long getMoveCalorie() {
        return moveCalorie;
    }

    public void setMoveCalorie(Long moveCalorie) {
        this.moveCalorie = moveCalorie;
    }

    @Basic
    @Column(name = "caloriecurvedata")
    public String getCalorieCurveData() {
        return calorieCurveData;
    }

    public void setCalorieCurveData(String calorieCurveData) {
        this.calorieCurveData = calorieCurveData;
    }

    @Basic
    @Column(name = "shoots")
    public Integer getShoots() {
        return shoots;
    }

    public void setShoots(Integer shoots) {
        this.shoots = shoots;
    }

    @Basic
    @Column(name = "assists")
    public Integer getAssists() {
        return assists;
    }

    public void setAssists(Integer assists) {
        this.assists = assists;
    }

    @Basic
    @Column(name = "createtime")
    public Timestamp getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Timestamp createTime) {
        this.createTime = createTime;
    }

    @Basic
    @Column(name = "updatetime")
    public Timestamp getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Timestamp updateTime) {
        this.updateTime = updateTime;
    }

    @Basic
    @Column(name = "deleted")
    public byte getDeleted() {
        return deleted;
    }

    public void setDeleted(byte deleted) {
        this.deleted = deleted;
    }

    @Basic
    @Column(name = "carrydistance")
    public Integer getCarryDistance() {
        return carryDistance;
    }

    public void setCarryDistance(Integer carryDistance) {
        this.carryDistance = carryDistance;
    }

    @Basic
    @Column(name = "highcarrydistance")
    public Integer getHighCarryDistance() {
        return highCarryDistance;
    }

    public void setHighCarryDistance(Integer highCarryDistance) {
        this.highCarryDistance = highCarryDistance;
    }

    @Basic
    @Column(name = "midcarrydistance")
    public Integer getMidCarryDistance() {
        return midCarryDistance;
    }

    public void setMidCarryDistance(Integer midCarryDistance) {
        this.midCarryDistance = midCarryDistance;
    }

    @Basic
    @Column(name = "lowcarrydistance")
    public Integer getLowCarryDistance() {
        return lowCarryDistance;
    }

    public void setLowCarryDistance(Integer lowCarryDistance) {
        this.lowCarryDistance = lowCarryDistance;
    }

    @Basic
    @Column(name = "normalcarrydistance")
    public Integer getNormalCarryDistance() {
        return normalCarryDistance;
    }

    public void setNormalCarryDistance(Integer normalCarryDistance) {
        this.normalCarryDistance = normalCarryDistance;
    }

    @Column(name = "teamgameid")
    public Long getTeamGameId() {
        return teamGameId;
    }

    public void setTeamGameId(Long teamGameId) {
        this.teamGameId = teamGameId;
    }

    @Column(name = "teamid")
    public Long getTeamId() {
        return teamId;
    }

    public void setTeamId(Long teamId) {
        this.teamId = teamId;
    }

    @Column(name = "hardwarepracticeid")
    public Long getHardwarePracticeId() {
        return hardwarePracticeId;
    }

    public void setHardwarePracticeId(Long hardwarePracticeId) {
        this.hardwarePracticeId = hardwarePracticeId;
    }

    @Column(name = "userid")
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
