package cn.vsteam.admin.report.controller;

import cn.vsteam.admin.p.service.StatisticsService;
import cn.vsteam.admin.p.entity.StatisticsPlayer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping(value = "/report/ajax")
public class ReportAjaxController {

    @Autowired
    StatisticsService statisticsService;

    @RequestMapping(value = "/stepCount")
    @ResponseBody
    public List<StatisticsPlayer> getStepCount() {
        return statisticsService.findAll();
    }

}
