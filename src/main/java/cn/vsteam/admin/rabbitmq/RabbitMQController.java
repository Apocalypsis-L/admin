package cn.vsteam.admin.rabbitmq;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class RabbitMQController {

    @Autowired
    private Sender sender;

    @GetMapping("/send")
    public String send(HttpServletRequest request, String msg) {
        sender.send(msg);
        return "Send OK.";
    }
}
