package cn.vsteam.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/test")
public class TestController {

    @Autowired
    BaseService baseService;

    @RequestMapping("/test")
    @ResponseBody
    public String test() {
        try {
            baseService.test();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "index";
    }
}
