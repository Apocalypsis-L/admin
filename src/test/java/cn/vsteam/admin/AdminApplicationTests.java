package cn.vsteam.admin;

import cn.vsteam.admin.p.service.InvitationService;
import cn.vsteam.admin.p.service.TeamService;
import cn.vsteam.admin.p.service.TokensService;
import cn.vsteam.admin.p.service.UserService;
import cn.vsteam.admin.utils.upload.ExcelUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminApplicationTests {

    @Autowired
    private TeamService teamService;
    @Resource(name = "pUserService")
    private UserService userService;
    @Autowired
    private TokensService tokensService;
    @Autowired
    private InvitationService invitationService;

    @Test
    public void post() {
        ExcelUtil o = new ExcelUtil(teamService, userService, tokensService, invitationService);
        o.regist();
    }

    @Test
    public void find(){
        ExcelUtil o = new ExcelUtil(teamService, userService, tokensService, invitationService);
        o.findError();
    }

}
