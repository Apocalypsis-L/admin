package cn.vsteam.admin.primary.entity;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "football_team_game", schema = "vsteam_db")
public class Game {
    private long id;
    private long teamId;
    private long publisherId;
    private Timestamp publishTime;
    private Short typeName;
    private Short clothColor;
    private Integer guestClothColor;
    private Timestamp competitionTime;
    private String opponent;
    private Short opponentClothColor;
    private Integer opponentGuestClothColor;
    private String attention;
    private String longitude;
    private String latitude;
    private String countryCode;
    private String provinceCode;
    private String cityCode;
    private String countyCode;
    private String fieldLocation;
    private String location;
    private String judge;
    private String judgeFee;
    private String competitionFee;
    private String drinkFee;
    private String notice;
    private String telephone;
    private String contact;
    private Byte isLive;
    private Byte isOver;
    private Integer hostScore;
    private Integer guestScore;
    private Short contestRule;
    private byte deleted;
    private Timestamp createTime;
    private Timestamp updateTime;
    private Long typeIn;
    private Long typeInG;
    private byte competition;
    private Long matchVersusId;
    private Long matchId;

    @Id
    @Column(name = "id")
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Basic
    @Column(name = "publishtime")
    public Timestamp getPublishTime() {
        return publishTime;
    }

    public void setPublishTime(Timestamp publishTime) {
        this.publishTime = publishTime;
    }

    @Basic
    @Column(name = "typename")
    public Short getTypeName() {
        return typeName;
    }

    public void setTypeName(Short typeName) {
        this.typeName = typeName;
    }

    @Basic
    @Column(name = "clothcolor")
    public Short getClothColor() {
        return clothColor;
    }

    public void setClothColor(Short clothColor) {
        this.clothColor = clothColor;
    }

    @Basic
    @Column(name = "guestclothcolor")
    public Integer getGuestClothColor() {
        return guestClothColor;
    }

    public void setGuestClothColor(Integer guestClothColor) {
        this.guestClothColor = guestClothColor;
    }

    @Basic
    @Column(name = "competitiontime")
    public Timestamp getCompetitionTime() {
        return competitionTime;
    }

    public void setCompetitionTime(Timestamp competitionTime) {
        this.competitionTime = competitionTime;
    }

    @Basic
    @Column(name = "opponent")
    public String getOpponent() {
        return opponent;
    }

    public void setOpponent(String opponent) {
        this.opponent = opponent;
    }

    @Basic
    @Column(name = "opponentclothcolor")
    public Short getOpponentClothColor() {
        return opponentClothColor;
    }

    public void setOpponentClothColor(Short opponentClothColor) {
        this.opponentClothColor = opponentClothColor;
    }

    @Basic
    @Column(name = "opponentguestclothcolor")
    public Integer getOpponentGuestClothColor() {
        return opponentGuestClothColor;
    }

    public void setOpponentGuestClothColor(Integer opponentGuestClothColor) {
        this.opponentGuestClothColor = opponentGuestClothColor;
    }

    @Basic
    @Column(name = "attention")
    public String getAttention() {
        return attention;
    }

    public void setAttention(String attention) {
        this.attention = attention;
    }

    @Basic
    @Column(name = "longitude")
    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    @Basic
    @Column(name = "latitude")
    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    @Basic
    @Column(name = "countrycode")
    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    @Basic
    @Column(name = "provincecode")
    public String getProvinceCode() {
        return provinceCode;
    }

    public void setProvinceCode(String provinceCode) {
        this.provinceCode = provinceCode;
    }

    @Basic
    @Column(name = "citycode")
    public String getCityCode() {
        return cityCode;
    }

    public void setCityCode(String cityCode) {
        this.cityCode = cityCode;
    }

    @Basic
    @Column(name = "countycode")
    public String getCountyCode() {
        return countyCode;
    }

    public void setCountyCode(String countyCode) {
        this.countyCode = countyCode;
    }

    @Basic
    @Column(name = "fieldlocation")
    public String getFieldLocation() {
        return fieldLocation;
    }

    public void setFieldLocation(String fieldLocation) {
        this.fieldLocation = fieldLocation;
    }

    @Basic
    @Column(name = "location")
    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Basic
    @Column(name = "judge")
    public String getJudge() {
        return judge;
    }

    public void setJudge(String judge) {
        this.judge = judge;
    }

    @Basic
    @Column(name = "judgefee")
    public String getJudgeFee() {
        return judgeFee;
    }

    public void setJudgeFee(String judgeFee) {
        this.judgeFee = judgeFee;
    }

    @Basic
    @Column(name = "competitionfee")
    public String getCompetitionFee() {
        return competitionFee;
    }

    public void setCompetitionFee(String competitionFee) {
        this.competitionFee = competitionFee;
    }

    @Basic
    @Column(name = "drinkfee")
    public String getDrinkFee() {
        return drinkFee;
    }

    public void setDrinkFee(String drinkFee) {
        this.drinkFee = drinkFee;
    }

    @Basic
    @Column(name = "notice")
    public String getNotice() {
        return notice;
    }

    public void setNotice(String notice) {
        this.notice = notice;
    }

    @Basic
    @Column(name = "telephone")
    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    @Basic
    @Column(name = "contact")
    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    @Basic
    @Column(name = "islive")
    public Byte getIsLive() {
        return isLive;
    }

    public void setIsLive(Byte isLive) {
        this.isLive = isLive;
    }

    @Basic
    @Column(name = "isover")
    public Byte getIsOver() {
        return isOver;
    }

    public void setIsOver(Byte isOver) {
        this.isOver = isOver;
    }

    @Basic
    @Column(name = "hostscore")
    public Integer getHostScore() {
        return hostScore;
    }

    public void setHostScore(Integer hostScore) {
        this.hostScore = hostScore;
    }

    @Basic
    @Column(name = "guestscore")
    public Integer getGuestScore() {
        return guestScore;
    }

    public void setGuestScore(Integer guestScore) {
        this.guestScore = guestScore;
    }

    @Basic
    @Column(name = "contestrule")
    public Short getContestRule() {
        return contestRule;
    }

    public void setContestRule(Short contestRule) {
        this.contestRule = contestRule;
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
    @Column(name = "typein")
    public Long getTypeIn() {
        return typeIn;
    }

    public void setTypeIn(Long typeIn) {
        this.typeIn = typeIn;
    }

    @Basic
    @Column(name = "typeing")
    public Long getTypeInG() {
        return typeInG;
    }

    public void setTypeInG(Long typeInG) {
        this.typeInG = typeInG;
    }

    @Basic
    @Column(name = "competition")
    public byte getCompetition() {
        return competition;
    }

    public void setCompetition(byte competition) {
        this.competition = competition;
    }

    @Basic
    @Column(name = "matchversusid")
    public Long getMatchVersusId() {
        return matchVersusId;
    }

    public void setMatchVersusId(Long matchVersusId) {
        this.matchVersusId = matchVersusId;
    }

    @Basic
    @Column(name = "matchid")
    public Long getMatchId() {
        return matchId;
    }

    public void setMatchId(Long matchId) {
        this.matchId = matchId;
    }

    @Column(name = "teamid")
    public long getTeamId() {
        return teamId;
    }

    public void setTeamId(long teamId) {
        this.teamId = teamId;
    }

    @Column(name = "publisherid")
    public long getPublisherId() {
        return publisherId;
    }

    public void setPublisherId(long publisherId) {
        this.publisherId = publisherId;
    }
}
