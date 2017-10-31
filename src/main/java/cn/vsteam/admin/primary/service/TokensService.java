package cn.vsteam.admin.primary.service;

import cn.vsteam.admin.primary.dao.TokensDAO;
import cn.vsteam.admin.primary.entity.Tokens;
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
