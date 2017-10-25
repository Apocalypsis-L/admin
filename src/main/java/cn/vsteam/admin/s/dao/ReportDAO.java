package cn.vsteam.admin.s.dao;

import cn.vsteam.admin.s.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportDAO extends JpaRepository<Report, Long>, JpaSpecificationExecutor {


}
