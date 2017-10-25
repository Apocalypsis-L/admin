package cn.vsteam.admin.p.entity;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "football_team", schema = "vsteam_db", catalog = "")
public class Team {
    private long id;
    private String teamName;
    private String teamAbbreviation;
    private Integer hostColor;
    private Integer guestColor;
    private long owner;
    private Timestamp teamCreateTime;
    private Integer credits;
    private String creditsRank;
    private String winRateRank;
    private String vsteamNumber;
    private Short selfEvaluation;
    private String description;
    private String slogan;
    private String countryCode;
    private String provinceCode;
    private String cityCode;
    private String countyCode;
    private String teamHeadImgNetUrl;
    private String teamHeadImgUrl;
    private String teamHeadImgName;
    private Long teamHeadImgLength;
    private String teamPennantNetUrl;
    private String teamPennantUrl;
    private String teamPennantName;
    private Long teamPennantLength;
    private String teamBadgeNetUrl;
    private String teamBadgeUrl;
    private String teamBadgeName;
    private Long teamBadgeLength;
    private String teamWeixinQrcodeNetUrl;
    private String teamWeixinQrcodeUrl;
    private String teamWeixinQrcodeName;
    private Long teamWeixinQrcodeLength;
    private Short favorRules;
    private Short isConscribe;
    private Short isHistory;
    private Byte isCampusTeam;
    private String teamRecord;
    private String teamHonour;
    private String playerList;
    private String playGround;
    private String playStar;
    private String leader;
    private String coach;
    private String wechatGroup;
    private String telephone;
    private String contact;
    private Short audit;
    private Timestamp auditTime;
    private Timestamp createTime;
    private Timestamp updateTime;
    private byte enabled;
    private byte deleted;
    private String schoolName;

    @Id
    @Column(name = "id")
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Basic
    @Column(name = "teamname")
    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    @Basic
    @Column(name = "teamabbreviation")
    public String getTeamAbbreviation() {
        return teamAbbreviation;
    }

    public void setTeamAbbreviation(String teamAbbreviation) {
        this.teamAbbreviation = teamAbbreviation;
    }

    @Basic
    @Column(name = "hostcolor")
    public Integer getHostColor() {
        return hostColor;
    }

    public void setHostColor(Integer hostColor) {
        this.hostColor = hostColor;
    }

    @Basic
    @Column(name = "guestcolor")
    public Integer getGuestColor() {
        return guestColor;
    }

    public void setGuestColor(Integer guestColor) {
        this.guestColor = guestColor;
    }

    @Column(name = "owner")
    public long getOwner() {
        return owner;
    }

    public void setOwner(long owner) {
        this.owner = owner;
    }

    @Basic
    @Column(name = "teamcreatetime")
    public Timestamp getTeamCreateTime() {
        return teamCreateTime;
    }

    public void setTeamCreateTime(Timestamp teamCreateTime) {
        this.teamCreateTime = teamCreateTime;
    }

    @Basic
    @Column(name = "credits")
    public Integer getCredits() {
        return credits;
    }

    public void setCredits(Integer credits) {
        this.credits = credits;
    }

    @Basic
    @Column(name = "creditsrank")
    public String getCreditsRank() {
        return creditsRank;
    }

    public void setCreditsRank(String creditsRank) {
        this.creditsRank = creditsRank;
    }

    @Basic
    @Column(name = "winraterank")
    public String getWinRateRank() {
        return winRateRank;
    }

    public void setWinRateRank(String winRateRank) {
        this.winRateRank = winRateRank;
    }

    @Basic
    @Column(name = "vsteamnumber")
    public String getVsteamNumber() {
        return vsteamNumber;
    }

    public void setVsteamNumber(String vsteamNumber) {
        this.vsteamNumber = vsteamNumber;
    }

    @Basic
    @Column(name = "selfevaluation")
    public Short getSelfEvaluation() {
        return selfEvaluation;
    }

    public void setSelfEvaluation(Short selfEvaluation) {
        this.selfEvaluation = selfEvaluation;
    }

    @Basic
    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Basic
    @Column(name = "slogan")
    public String getSlogan() {
        return slogan;
    }

    public void setSlogan(String slogan) {
        this.slogan = slogan;
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
    @Column(name = "teamheadimgneturl")
    public String getTeamHeadImgNetUrl() {
        return teamHeadImgNetUrl;
    }

    public void setTeamHeadImgNetUrl(String teamHeadImgNetUrl) {
        this.teamHeadImgNetUrl = teamHeadImgNetUrl;
    }

    @Basic
    @Column(name = "teamheadimgurl")
    public String getTeamHeadImgUrl() {
        return teamHeadImgUrl;
    }

    public void setTeamHeadImgUrl(String teamHeadImgUrl) {
        this.teamHeadImgUrl = teamHeadImgUrl;
    }

    @Basic
    @Column(name = "teamheadimgname")
    public String getTeamHeadImgName() {
        return teamHeadImgName;
    }

    public void setTeamHeadImgName(String teamHeadImgName) {
        this.teamHeadImgName = teamHeadImgName;
    }

    @Basic
    @Column(name = "teamheadimglength")
    public Long getTeamHeadImgLength() {
        return teamHeadImgLength;
    }

    public void setTeamHeadImgLength(Long teamHeadImgLength) {
        this.teamHeadImgLength = teamHeadImgLength;
    }

    @Basic
    @Column(name = "teampennantneturl")
    public String getTeamPennantNetUrl() {
        return teamPennantNetUrl;
    }

    public void setTeamPennantNetUrl(String teamPennantNetUrl) {
        this.teamPennantNetUrl = teamPennantNetUrl;
    }

    @Basic
    @Column(name = "teampennanturl")
    public String getTeamPennantUrl() {
        return teamPennantUrl;
    }

    public void setTeamPennantUrl(String teamPennantUrl) {
        this.teamPennantUrl = teamPennantUrl;
    }

    @Basic
    @Column(name = "teampennantname")
    public String getTeamPennantName() {
        return teamPennantName;
    }

    public void setTeamPennantName(String teamPennantName) {
        this.teamPennantName = teamPennantName;
    }

    @Basic
    @Column(name = "teampennantlength")
    public Long getTeamPennantLength() {
        return teamPennantLength;
    }

    public void setTeamPennantLength(Long teamPennantLength) {
        this.teamPennantLength = teamPennantLength;
    }

    @Basic
    @Column(name = "teambadgeneturl")
    public String getTeamBadgeNetUrl() {
        return teamBadgeNetUrl;
    }

    public void setTeamBadgeNetUrl(String teamBadgeNetUrl) {
        this.teamBadgeNetUrl = teamBadgeNetUrl;
    }

    @Basic
    @Column(name = "teambadgeurl")
    public String getTeamBadgeUrl() {
        return teamBadgeUrl;
    }

    public void setTeamBadgeUrl(String teamBadgeUrl) {
        this.teamBadgeUrl = teamBadgeUrl;
    }

    @Basic
    @Column(name = "teambadgename")
    public String getTeamBadgeName() {
        return teamBadgeName;
    }

    public void setTeamBadgeName(String teamBadgeName) {
        this.teamBadgeName = teamBadgeName;
    }

    @Basic
    @Column(name = "teambadgelength")
    public Long getTeamBadgeLength() {
        return teamBadgeLength;
    }

    public void setTeamBadgeLength(Long teamBadgeLength) {
        this.teamBadgeLength = teamBadgeLength;
    }

    @Basic
    @Column(name = "teamweixinqrcodeneturl")
    public String getTeamWeixinQrcodeNetUrl() {
        return teamWeixinQrcodeNetUrl;
    }

    public void setTeamWeixinQrcodeNetUrl(String teamWeixinQrcodeNetUrl) {
        this.teamWeixinQrcodeNetUrl = teamWeixinQrcodeNetUrl;
    }

    @Basic
    @Column(name = "teamweixinqrcodeurl")
    public String getTeamWeixinQrcodeUrl() {
        return teamWeixinQrcodeUrl;
    }

    public void setTeamWeixinQrcodeUrl(String teamWeixinQrcodeUrl) {
        this.teamWeixinQrcodeUrl = teamWeixinQrcodeUrl;
    }

    @Basic
    @Column(name = "teamweixinqrcodename")
    public String getTeamWeixinQrcodeName() {
        return teamWeixinQrcodeName;
    }

    public void setTeamWeixinQrcodeName(String teamWeixinQrcodeName) {
        this.teamWeixinQrcodeName = teamWeixinQrcodeName;
    }

    @Basic
    @Column(name = "teamweixinqrcodelength")
    public Long getTeamWeixinQrcodeLength() {
        return teamWeixinQrcodeLength;
    }

    public void setTeamWeixinQrcodeLength(Long teamWeixinQrcodeLength) {
        this.teamWeixinQrcodeLength = teamWeixinQrcodeLength;
    }

    @Basic
    @Column(name = "favorrules")
    public Short getFavorRules() {
        return favorRules;
    }

    public void setFavorRules(Short favorRules) {
        this.favorRules = favorRules;
    }

    @Basic
    @Column(name = "isconscribe")
    public Short getIsConscribe() {
        return isConscribe;
    }

    public void setIsConscribe(Short isConscribe) {
        this.isConscribe = isConscribe;
    }

    @Basic
    @Column(name = "ishistory")
    public Short getIsHistory() {
        return isHistory;
    }

    public void setIsHistory(Short isHistory) {
        this.isHistory = isHistory;
    }

    @Basic
    @Column(name = "iscampusteam")
    public Byte getIsCampusTeam() {
        return isCampusTeam;
    }

    public void setIsCampusTeam(Byte isCampusTeam) {
        this.isCampusTeam = isCampusTeam;
    }

    @Basic
    @Column(name = "teamrecord")
    public String getTeamRecord() {
        return teamRecord;
    }

    public void setTeamRecord(String teamRecord) {
        this.teamRecord = teamRecord;
    }

    @Basic
    @Column(name = "teamhonour")
    public String getTeamHonour() {
        return teamHonour;
    }

    public void setTeamHonour(String teamHonour) {
        this.teamHonour = teamHonour;
    }

    @Basic
    @Column(name = "playerlist")
    public String getPlayerList() {
        return playerList;
    }

    public void setPlayerList(String playerList) {
        this.playerList = playerList;
    }

    @Basic
    @Column(name = "playground")
    public String getPlayGround() {
        return playGround;
    }

    public void setPlayGround(String playGround) {
        this.playGround = playGround;
    }

    @Basic
    @Column(name = "playstar")
    public String getPlayStar() {
        return playStar;
    }

    public void setPlayStar(String playStar) {
        this.playStar = playStar;
    }

    @Basic
    @Column(name = "leader")
    public String getLeader() {
        return leader;
    }

    public void setLeader(String leader) {
        this.leader = leader;
    }

    @Basic
    @Column(name = "coach")
    public String getCoach() {
        return coach;
    }

    public void setCoach(String coach) {
        this.coach = coach;
    }

    @Basic
    @Column(name = "wechatgroup")
    public String getWechatGroup() {
        return wechatGroup;
    }

    public void setWechatGroup(String wechatGroup) {
        this.wechatGroup = wechatGroup;
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
    @Column(name = "audit")
    public Short getAudit() {
        return audit;
    }

    public void setAudit(Short audit) {
        this.audit = audit;
    }

    @Basic
    @Column(name = "audittime")
    public Timestamp getAuditTime() {
        return auditTime;
    }

    public void setAuditTime(Timestamp auditTime) {
        this.auditTime = auditTime;
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
    @Column(name = "enabled")
    public byte getEnabled() {
        return enabled;
    }

    public void setEnabled(byte enabled) {
        this.enabled = enabled;
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
    @Column(name = "schoolname")
    public String getSchoolName() {
        return schoolName;
    }

    public void setSchoolName(String schoolName) {
        this.schoolName = schoolName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Team that = (Team) o;

        if (id != that.id) return false;
        if (enabled != that.enabled) return false;
        if (deleted != that.deleted) return false;
        if (teamName != null ? !teamName.equals(that.teamName) : that.teamName != null) return false;
        if (teamAbbreviation != null ? !teamAbbreviation.equals(that.teamAbbreviation) : that.teamAbbreviation != null)
            return false;
        if (hostColor != null ? !hostColor.equals(that.hostColor) : that.hostColor != null) return false;
        if (guestColor != null ? !guestColor.equals(that.guestColor) : that.guestColor != null) return false;
        if (teamCreateTime != null ? !teamCreateTime.equals(that.teamCreateTime) : that.teamCreateTime != null)
            return false;
        if (credits != null ? !credits.equals(that.credits) : that.credits != null) return false;
        if (creditsRank != null ? !creditsRank.equals(that.creditsRank) : that.creditsRank != null) return false;
        if (winRateRank != null ? !winRateRank.equals(that.winRateRank) : that.winRateRank != null) return false;
        if (vsteamNumber != null ? !vsteamNumber.equals(that.vsteamNumber) : that.vsteamNumber != null) return false;
        if (selfEvaluation != null ? !selfEvaluation.equals(that.selfEvaluation) : that.selfEvaluation != null)
            return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;
        if (slogan != null ? !slogan.equals(that.slogan) : that.slogan != null) return false;
        if (countryCode != null ? !countryCode.equals(that.countryCode) : that.countryCode != null) return false;
        if (provinceCode != null ? !provinceCode.equals(that.provinceCode) : that.provinceCode != null) return false;
        if (cityCode != null ? !cityCode.equals(that.cityCode) : that.cityCode != null) return false;
        if (countyCode != null ? !countyCode.equals(that.countyCode) : that.countyCode != null) return false;
        if (teamHeadImgNetUrl != null ? !teamHeadImgNetUrl.equals(that.teamHeadImgNetUrl) : that.teamHeadImgNetUrl != null)
            return false;
        if (teamHeadImgUrl != null ? !teamHeadImgUrl.equals(that.teamHeadImgUrl) : that.teamHeadImgUrl != null)
            return false;
        if (teamHeadImgName != null ? !teamHeadImgName.equals(that.teamHeadImgName) : that.teamHeadImgName != null)
            return false;
        if (teamHeadImgLength != null ? !teamHeadImgLength.equals(that.teamHeadImgLength) : that.teamHeadImgLength != null)
            return false;
        if (teamPennantNetUrl != null ? !teamPennantNetUrl.equals(that.teamPennantNetUrl) : that.teamPennantNetUrl != null)
            return false;
        if (teamPennantUrl != null ? !teamPennantUrl.equals(that.teamPennantUrl) : that.teamPennantUrl != null)
            return false;
        if (teamPennantName != null ? !teamPennantName.equals(that.teamPennantName) : that.teamPennantName != null)
            return false;
        if (teamPennantLength != null ? !teamPennantLength.equals(that.teamPennantLength) : that.teamPennantLength != null)
            return false;
        if (teamBadgeNetUrl != null ? !teamBadgeNetUrl.equals(that.teamBadgeNetUrl) : that.teamBadgeNetUrl != null)
            return false;
        if (teamBadgeUrl != null ? !teamBadgeUrl.equals(that.teamBadgeUrl) : that.teamBadgeUrl != null) return false;
        if (teamBadgeName != null ? !teamBadgeName.equals(that.teamBadgeName) : that.teamBadgeName != null)
            return false;
        if (teamBadgeLength != null ? !teamBadgeLength.equals(that.teamBadgeLength) : that.teamBadgeLength != null)
            return false;
        if (teamWeixinQrcodeNetUrl != null ? !teamWeixinQrcodeNetUrl.equals(that.teamWeixinQrcodeNetUrl) : that.teamWeixinQrcodeNetUrl != null)
            return false;
        if (teamWeixinQrcodeUrl != null ? !teamWeixinQrcodeUrl.equals(that.teamWeixinQrcodeUrl) : that.teamWeixinQrcodeUrl != null)
            return false;
        if (teamWeixinQrcodeName != null ? !teamWeixinQrcodeName.equals(that.teamWeixinQrcodeName) : that.teamWeixinQrcodeName != null)
            return false;
        if (teamWeixinQrcodeLength != null ? !teamWeixinQrcodeLength.equals(that.teamWeixinQrcodeLength) : that.teamWeixinQrcodeLength != null)
            return false;
        if (favorRules != null ? !favorRules.equals(that.favorRules) : that.favorRules != null) return false;
        if (isConscribe != null ? !isConscribe.equals(that.isConscribe) : that.isConscribe != null) return false;
        if (isHistory != null ? !isHistory.equals(that.isHistory) : that.isHistory != null) return false;
        if (isCampusTeam != null ? !isCampusTeam.equals(that.isCampusTeam) : that.isCampusTeam != null) return false;
        if (teamRecord != null ? !teamRecord.equals(that.teamRecord) : that.teamRecord != null) return false;
        if (teamHonour != null ? !teamHonour.equals(that.teamHonour) : that.teamHonour != null) return false;
        if (playerList != null ? !playerList.equals(that.playerList) : that.playerList != null) return false;
        if (playGround != null ? !playGround.equals(that.playGround) : that.playGround != null) return false;
        if (playStar != null ? !playStar.equals(that.playStar) : that.playStar != null) return false;
        if (leader != null ? !leader.equals(that.leader) : that.leader != null) return false;
        if (coach != null ? !coach.equals(that.coach) : that.coach != null) return false;
        if (wechatGroup != null ? !wechatGroup.equals(that.wechatGroup) : that.wechatGroup != null) return false;
        if (telephone != null ? !telephone.equals(that.telephone) : that.telephone != null) return false;
        if (contact != null ? !contact.equals(that.contact) : that.contact != null) return false;
        if (audit != null ? !audit.equals(that.audit) : that.audit != null) return false;
        if (auditTime != null ? !auditTime.equals(that.auditTime) : that.auditTime != null) return false;
        if (createTime != null ? !createTime.equals(that.createTime) : that.createTime != null) return false;
        if (updateTime != null ? !updateTime.equals(that.updateTime) : that.updateTime != null) return false;
        if (schoolName != null ? !schoolName.equals(that.schoolName) : that.schoolName != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + (teamName != null ? teamName.hashCode() : 0);
        result = 31 * result + (teamAbbreviation != null ? teamAbbreviation.hashCode() : 0);
        result = 31 * result + (hostColor != null ? hostColor.hashCode() : 0);
        result = 31 * result + (guestColor != null ? guestColor.hashCode() : 0);
        result = 31 * result + (teamCreateTime != null ? teamCreateTime.hashCode() : 0);
        result = 31 * result + (credits != null ? credits.hashCode() : 0);
        result = 31 * result + (creditsRank != null ? creditsRank.hashCode() : 0);
        result = 31 * result + (winRateRank != null ? winRateRank.hashCode() : 0);
        result = 31 * result + (vsteamNumber != null ? vsteamNumber.hashCode() : 0);
        result = 31 * result + (selfEvaluation != null ? selfEvaluation.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (slogan != null ? slogan.hashCode() : 0);
        result = 31 * result + (countryCode != null ? countryCode.hashCode() : 0);
        result = 31 * result + (provinceCode != null ? provinceCode.hashCode() : 0);
        result = 31 * result + (cityCode != null ? cityCode.hashCode() : 0);
        result = 31 * result + (countyCode != null ? countyCode.hashCode() : 0);
        result = 31 * result + (teamHeadImgNetUrl != null ? teamHeadImgNetUrl.hashCode() : 0);
        result = 31 * result + (teamHeadImgUrl != null ? teamHeadImgUrl.hashCode() : 0);
        result = 31 * result + (teamHeadImgName != null ? teamHeadImgName.hashCode() : 0);
        result = 31 * result + (teamHeadImgLength != null ? teamHeadImgLength.hashCode() : 0);
        result = 31 * result + (teamPennantNetUrl != null ? teamPennantNetUrl.hashCode() : 0);
        result = 31 * result + (teamPennantUrl != null ? teamPennantUrl.hashCode() : 0);
        result = 31 * result + (teamPennantName != null ? teamPennantName.hashCode() : 0);
        result = 31 * result + (teamPennantLength != null ? teamPennantLength.hashCode() : 0);
        result = 31 * result + (teamBadgeNetUrl != null ? teamBadgeNetUrl.hashCode() : 0);
        result = 31 * result + (teamBadgeUrl != null ? teamBadgeUrl.hashCode() : 0);
        result = 31 * result + (teamBadgeName != null ? teamBadgeName.hashCode() : 0);
        result = 31 * result + (teamBadgeLength != null ? teamBadgeLength.hashCode() : 0);
        result = 31 * result + (teamWeixinQrcodeNetUrl != null ? teamWeixinQrcodeNetUrl.hashCode() : 0);
        result = 31 * result + (teamWeixinQrcodeUrl != null ? teamWeixinQrcodeUrl.hashCode() : 0);
        result = 31 * result + (teamWeixinQrcodeName != null ? teamWeixinQrcodeName.hashCode() : 0);
        result = 31 * result + (teamWeixinQrcodeLength != null ? teamWeixinQrcodeLength.hashCode() : 0);
        result = 31 * result + (favorRules != null ? favorRules.hashCode() : 0);
        result = 31 * result + (isConscribe != null ? isConscribe.hashCode() : 0);
        result = 31 * result + (isHistory != null ? isHistory.hashCode() : 0);
        result = 31 * result + (isCampusTeam != null ? isCampusTeam.hashCode() : 0);
        result = 31 * result + (teamRecord != null ? teamRecord.hashCode() : 0);
        result = 31 * result + (teamHonour != null ? teamHonour.hashCode() : 0);
        result = 31 * result + (playerList != null ? playerList.hashCode() : 0);
        result = 31 * result + (playGround != null ? playGround.hashCode() : 0);
        result = 31 * result + (playStar != null ? playStar.hashCode() : 0);
        result = 31 * result + (leader != null ? leader.hashCode() : 0);
        result = 31 * result + (coach != null ? coach.hashCode() : 0);
        result = 31 * result + (wechatGroup != null ? wechatGroup.hashCode() : 0);
        result = 31 * result + (telephone != null ? telephone.hashCode() : 0);
        result = 31 * result + (contact != null ? contact.hashCode() : 0);
        result = 31 * result + (audit != null ? audit.hashCode() : 0);
        result = 31 * result + (auditTime != null ? auditTime.hashCode() : 0);
        result = 31 * result + (createTime != null ? createTime.hashCode() : 0);
        result = 31 * result + (updateTime != null ? updateTime.hashCode() : 0);
        result = 31 * result + (int) enabled;
        result = 31 * result + (int) deleted;
        result = 31 * result + (schoolName != null ? schoolName.hashCode() : 0);
        return result;
    }
}
