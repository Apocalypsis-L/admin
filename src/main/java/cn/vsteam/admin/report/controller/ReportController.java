package cn.vsteam.admin.report.controller;

import cn.vsteam.admin.primary.service.StatisticsService;
import cn.vsteam.admin.report.pojo.UserLoginPojo;
import cn.vsteam.admin.report.service.ReportService;
import cn.vsteam.admin.report.service.UserLoginService;
import cn.vsteam.admin.secondary.entity.Report;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping(value = "/report")
public class ReportController {

    @Autowired
    ReportService reportService;
    @Autowired
    UserLoginService userLoginService;
    @Autowired
    StatisticsService statisticsService;


    @RequestMapping(value = "/loginCount")
    public String report() {

        return "report/loginCount";
    }

    //每日登录用户表
    @RequestMapping("/userlogin")
    @ResponseBody
    public List<UserLoginPojo> getUserLogin() {
        try {
            return userLoginService.findLoginCount();
        } catch (JSONException e) {
            e.printStackTrace();
            return null;
        }
    }


    @RequestMapping(value = "/getAll", method = RequestMethod.POST)
    @ResponseBody
    public List<Report> getAll() {
        return reportService.findAll();
    }

    @RequestMapping(value = "/stepCount")
    public String getStepCount() {
        return "report/stepCount";
    }

}
