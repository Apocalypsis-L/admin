package cn.vsteam.admin.p.service;

import cn.vsteam.admin.p.dao.GameDAO;
import cn.vsteam.admin.p.entity.Game;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GameService {

    @Autowired
    GameDAO gameDAO;

    public List<Game> findAll() {
        return gameDAO.findAll();
    }

    public Game findById(long id) {
        return gameDAO.findById(id);
    }

    public Map<Long, Game> findByIdList(List<Long> idList) {
        if (idList == null || idList.size() == 0) {
            return null;
        }
        return translate(gameDAO.findByIdList(idList));
    }

    public Map<Long, Game> translate(List<Game> gameList) {
        Map<Long, Game> map = new HashMap<>();
        for (Game game : gameList) {
            map.put(game.getId(), game);
        }
        return map;
    }

}
