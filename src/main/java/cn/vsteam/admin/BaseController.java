package cn.vsteam.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

@Controller
public class BaseController {

    @RequestMapping(value = "/login")
    public String login(HttpSession session) {
        System.out.println("login");
        if (session.getAttribute("SPRING_SECURITY_CONTEXT") == null) {
            return "login";
        } else {
            return "index";
        }
    }

    @RequestMapping(value = {"/index", "/"})
    public String index() {
        System.out.println("index");
        return "index";
    }

    @RequestMapping(value = "/ui-elements")
    public String uielements() {
        System.out.println("ui-elements");
        return "ui-elements";
    }

    @RequestMapping(value = "/chart")
//    @PreAuthorize("hasRole('admin')")
    public String chart() {
        System.out.println("chart");
        return "chart";
    }

    @RequestMapping(value = "/tab-panel")
    public String tabpanel() {
        System.out.println("tab-panel");
        return "tab-panel";
    }

    @RequestMapping(value = "/table")
//    @PreAuthorize("hasRole('guest')")
    public String table() {
        System.out.println("table");
        return "table";
    }

    @RequestMapping(value = "/form")
    public String form() {
        System.out.println("form");
        return "form";
    }

    @RequestMapping(value = "/empty")
    public String empty() {
        System.out.println("empty");
        return "empty";
    }

    @RequestMapping(value = "/post")
    public void post() {
//        ExcelUtil o = new ExcelUtil();
//        o.regist();
    }

}
