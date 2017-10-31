package cn.vsteam.admin.secondary.dao;

import cn.vsteam.admin.secondary.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportDAO extends JpaRepository<Report, Long>, JpaSpecificationExecutor {


}
