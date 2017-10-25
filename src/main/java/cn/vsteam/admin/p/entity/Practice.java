package cn.vsteam.admin.p.entity;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "user_hardware_practice", schema = "vsteam_db", catalog = "")
public class Practice {
    private long id;
    private String practiceName;
    private String hardwareIdentification;
    private Timestamp createTime;
    private Timestamp updateTime;
    private byte deleted;

    @Id
    @Column(name = "id")
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Basic
    @Column(name = "practicename")
    public String getPracticeName() {
        return practiceName;
    }

    public void setPracticeName(String practiceName) {
        this.practiceName = practiceName;
    }

    @Basic
    @Column(name = "hardwareidentification")
    public String getHardwareIdentification() {
        return hardwareIdentification;
    }

    public void setHardwareIdentification(String hardwareIdentification) {
        this.hardwareIdentification = hardwareIdentification;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Practice that = (Practice) o;

        if (id != that.id) return false;
        if (deleted != that.deleted) return false;
        if (practiceName != null ? !practiceName.equals(that.practiceName) : that.practiceName != null) return false;
        if (hardwareIdentification != null ? !hardwareIdentification.equals(that.hardwareIdentification) : that.hardwareIdentification != null)
            return false;
        if (createTime != null ? !createTime.equals(that.createTime) : that.createTime != null) return false;
        if (updateTime != null ? !updateTime.equals(that.updateTime) : that.updateTime != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + (practiceName != null ? practiceName.hashCode() : 0);
        result = 31 * result + (hardwareIdentification != null ? hardwareIdentification.hashCode() : 0);
        result = 31 * result + (createTime != null ? createTime.hashCode() : 0);
        result = 31 * result + (updateTime != null ? updateTime.hashCode() : 0);
        result = 31 * result + (int) deleted;
        return result;
    }
}
