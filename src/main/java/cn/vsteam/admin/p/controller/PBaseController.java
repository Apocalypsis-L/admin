package cn.vsteam.admin.p.controller;

import cn.vsteam.admin.p.entity.User;
import cn.vsteam.admin.p.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/base")
public class PBaseController {

    @Resource(name = "pUserService")
    UserService userService;

    @RequestMapping("/user")
    @ResponseBody
    public List<User> getUser() {
        return userService.findAll();
    }

}