package cn.vsteam.admin.p.controller;

import cn.vsteam.admin.p.entity.*;
import cn.vsteam.admin.p.pojo.GamePojo;
import cn.vsteam.admin.p.pojo.PracticePojo;
import cn.vsteam.admin.p.pojo.StepContext;
import cn.vsteam.admin.p.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/statistics")
public class StatisticsController {

    @Autowired
    StatisticsService statisticsService;
    @Resource(name = "pUserService")
    UserService pUserService;
    @Autowired
    GameService gameService;
    @Autowired
    TeamService teamService;
    @Autowired
    PracticeService practiceService;

    @RequestMapping(value = "/getMidMoveCalorie")
    @ResponseBody
    public String getMidMoveCalorie() {
        List<StatisticsPlayer> list = statisticsService.findAll();
        StatisticsPlayer obj = list.get(list.size() - 1);
        String midMoveCalorie = obj.getMidMoveCalorie();
        return midMoveCalorie;
    }

    @RequestMapping(value = "/getMoveCalorie")
    @ResponseBody
    public StepContext getMoveCalorie(@RequestHeader HttpHeaders headers) {
        Long id = Long.parseLong(headers.getFirst("id"));
        List<StatisticsPlayer> list = statisticsService.findById(id);
        StatisticsPlayer obj = list.get(list.size() - 1);
        StepContext stepContext = new StepContext();
        String midMoveCalorie = obj.getMidMoveCalorie();
        String lowMoveCalorie = obj.getLowMoveCalorie();
        String highMoveCalorie = obj.getHighMoveCalorie();
        String normalMoveCalorie = obj.getNormalMoveCalorie();
        stepContext.setMidMoveCalorie(midMoveCalorie);
        stepContext.setLowMoveCalorie(lowMoveCalorie);
        stepContext.setHighMoveCalorie(highMoveCalorie);
        stepContext.setNormalMoveCalorie(normalMoveCalorie);
        return stepContext;
    }

    @RequestMapping(value = "/findAllUser")
    @ResponseBody
    public List<User> findAllUser() {
        return pUserService.findAll();
    }


    @RequestMapping(value = "/findByUserId")
    @ResponseBody
    public Map<String, List> findByUserId2(@RequestHeader HttpHeaders headers) {
        headers.add("userId", "100003");
        Map<String, List> map = new HashMap<>();
        List<GamePojo> gamePojoList = getGame(headers);
        List<PracticePojo> practicePojoList = getPractice(headers);
        map.put("game", gamePojoList);
        map.put("practice", practicePojoList);
        return map;
    }

    @RequestMapping(value = "/getGame")
    @ResponseBody
    public List<GamePojo> getGame(@RequestHeader HttpHeaders headers) {
        long userId = Long.parseLong(headers.getFirst("userId"));
//        long userId = 100003L;
        List<StatisticsPlayer> list = statisticsService.findGameByUserId(userId);
        List<Long> idList = new ArrayList<>();
        for (StatisticsPlayer obj : list) {
            idList.add(obj.getTeamGameId());
        }
        Map<Long, Game> gameMap = gameService.findByIdList(idList);
        List<GamePojo> resultList = new ArrayList<>();
        GamePojo gamePojo;
        Game game;
        Team team;
        for (StatisticsPlayer obj : list) {
            game = gameMap.get(obj.getTeamGameId());
            gamePojo = new GamePojo(game);
            team = teamService.findById(game.getTeamId());
            gamePojo.setTeamName(team.getTeamName());
            gamePojo.setStatisticsId(obj.getId());
            resultList.add(gamePojo);
        }
        return resultList;
    }

    @RequestMapping(value = "/getPractice")
    @ResponseBody
    public List<PracticePojo> getPractice(@RequestHeader HttpHeaders headers) {
        long userId = Long.parseLong(headers.getFirst("userId"));
//        long userId = 100003L;
        List<StatisticsPlayer> list = statisticsService.findPracticeByUserId(userId);
        List<Long> idList = new ArrayList<>();
        for (StatisticsPlayer obj : list) {
            idList.add(obj.getHardwarePracticeId());
        }
        Map<Long, Practice> practiceMap = practiceService.findByIdList(idList);
        List<PracticePojo> resultList = new ArrayList<>();
        PracticePojo practicePojo;
        Practice practice;
        for (StatisticsPlayer obj : list) {
            practice = practiceMap.get(obj.getHardwarePracticeId());
            practicePojo = new PracticePojo(practice);
            practicePojo.setStatisticsId(obj.getId());
            resultList.add(practicePojo);
        }
        return resultList;
    }
}
