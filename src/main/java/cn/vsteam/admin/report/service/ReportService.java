package cn.vsteam.admin.report.service;

import cn.vsteam.admin.s.dao.ReportDAO;
import cn.vsteam.admin.s.entity.Report;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportService {
    @Autowired
    ReportDAO reportDAO;

    public List<Report> findAll() {
        return reportDAO.findAll();
    }
}
