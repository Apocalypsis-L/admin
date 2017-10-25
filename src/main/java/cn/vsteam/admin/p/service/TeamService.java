package cn.vsteam.admin.p.service;

import cn.vsteam.admin.p.dao.TeamDAO;
import cn.vsteam.admin.p.entity.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeamService {

    @Autowired
    TeamDAO teamDAO;

    public Team findById(long id) {
        return teamDAO.findById(id);
    }

    public Team findByTeamName(String teamName) {
        return teamDAO.findByName(teamName);
    }
}
