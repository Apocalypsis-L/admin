package cn.vsteam.admin.p.service;

import cn.vsteam.admin.p.dao.TokensDAO;
import cn.vsteam.admin.p.entity.Tokens;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TokensService {

    @Autowired
    TokensDAO tokensDAO;

    public Tokens findById(long id) {
        return tokensDAO.findById(id);
    }
}
