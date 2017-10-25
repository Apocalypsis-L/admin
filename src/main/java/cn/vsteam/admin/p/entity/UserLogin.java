package cn.vsteam.admin.p.entity;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "user_login", schema = "vsteam_db", catalog = "")
public class UserLogin {
    private Long id;
    private Long userId;
    private Long deviceId;
    private String loginMode;
    private String clientMode;
    private String longitude;
    private String latitude;
    private Timestamp loginTime;
    private byte deleted;

    @Id
    @Column(name = "id")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Basic
    @Column(name = "userid")
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "deviceid")
    public Long getDeviceId() {
        return deviceId;
    }

    public void setDeviceId(Long deviceId) {
        this.deviceId = deviceId;
    }

    @Basic
    @Column(name = "loginmode")
    public String getLoginMode() {
        return loginMode;
    }

    public void setLoginMode(String loginMode) {
        this.loginMode = loginMode;
    }

    @Basic
    @Column(name = "clientmode")
    public String getClientMode() {
        return clientMode;
    }

    public void setClientMode(String clientMode) {
        this.clientMode = clientMode;
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
    @Column(name = "logintime")
    public Timestamp getLoginTime() {
        return loginTime;
    }

    public void setLoginTime(Timestamp loginTime) {
        this.loginTime = loginTime;
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

        UserLogin userLogin = (UserLogin) o;

        if (id != userLogin.id) return false;
        if (userId != userLogin.userId) return false;
        if (deleted != userLogin.deleted) return false;
        if (deviceId != null ? !deviceId.equals(userLogin.deviceId) : userLogin.deviceId != null) return false;
        if (loginMode != null ? !loginMode.equals(userLogin.loginMode) : userLogin.loginMode != null) return false;
        if (clientMode != null ? !clientMode.equals(userLogin.clientMode) : userLogin.clientMode != null) return false;
        if (longitude != null ? !longitude.equals(userLogin.longitude) : userLogin.longitude != null) return false;
        if (latitude != null ? !latitude.equals(userLogin.latitude) : userLogin.latitude != null) return false;
        if (loginTime != null ? !loginTime.equals(userLogin.loginTime) : userLogin.loginTime != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + (int) (userId ^ (userId >>> 32));
        result = 31 * result + (deviceId != null ? deviceId.hashCode() : 0);
        result = 31 * result + (loginMode != null ? loginMode.hashCode() : 0);
        result = 31 * result + (clientMode != null ? clientMode.hashCode() : 0);
        result = 31 * result + (longitude != null ? longitude.hashCode() : 0);
        result = 31 * result + (latitude != null ? latitude.hashCode() : 0);
        result = 31 * result + (loginTime != null ? loginTime.hashCode() : 0);
        result = 31 * result + (int) deleted;
        return result;
    }
}
