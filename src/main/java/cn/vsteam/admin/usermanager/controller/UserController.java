package cn.vsteam.admin.usermanager.controller;

import cn.vsteam.admin.secondary.entity.User;
import cn.vsteam.admin.usermanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/test02")
    @ResponseBody
    public List<User> get() {
        return userService.findAll();
    }

}
