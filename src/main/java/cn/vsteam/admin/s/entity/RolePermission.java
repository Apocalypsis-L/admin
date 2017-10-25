package cn.vsteam.admin.s.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "role_permission")
public class RolePermission {
    @Id
    @Column
    private Long rpid;
    @Column
    private Long rid;
    @Column
    private Long pid;

    public Long getRpid() {
        return rpid;
    }

    public void setRpid(Long rpid) {
        this.rpid = rpid;
    }

    public Long getRid() {
        return rid;
    }

    public void setRid(Long rid) {
        this.rid = rid;
    }

    public Long getPid() {
        return pid;
    }

    public void setPid(Long pid) {
        this.pid = pid;
    }
}
