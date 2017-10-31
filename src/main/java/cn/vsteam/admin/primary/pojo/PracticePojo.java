package cn.vsteam.admin.primary.pojo;

import cn.vsteam.admin.primary.entity.Practice;

import java.sql.Timestamp;

public class PracticePojo {
    private long statisticsId;
    private long id;
    private String practiceName;
    private Timestamp createTime;

    public PracticePojo() {

    }

    public PracticePojo(Practice practice) {
        this.id = practice.getId();
        this.practiceName = practice.getPracticeName();
        this.createTime = practice.getCreateTime();
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

    public String getPracticeName() {
        return practiceName;
    }

    public void setPracticeName(String practiceName) {
        this.practiceName = practiceName;
    }

    public Timestamp getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Timestamp createTime) {
        this.createTime = createTime;
    }
}
