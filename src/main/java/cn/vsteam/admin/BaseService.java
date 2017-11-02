package cn.vsteam.admin;

import cn.vsteam.admin.secondary.entity.User;
import cn.vsteam.admin.secondary.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

@Service
public class BaseService {

    @Resource(name = "sUserService")
    UserService sUserService;

    @Transactional(value = "transactionManagerSecondary", rollbackFor = Exception.class)
    public void test() throws Exception {
        User user = new User();
        user.setEnable(true);
        user.setNickname("009");
        user.setPassword("123");
        user.setUid(5L);
        user.setUsername("123");

        try {
            System.out.println("try");
            sUserService.save(user);
            return;
        } catch (Exception e) {
            System.out.println("catch");
            return;
        } finally {
            System.out.println("finally");
//            throw new Exception();
            Thread.sleep(3000);
        }
    }
}
