package cn.vsteam.admin.primary.service;

import cn.vsteam.admin.primary.dao.StatisticsDAO;
import cn.vsteam.admin.primary.entity.StatisticsPlayer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatisticsService {

    @Autowired
    StatisticsDAO statisticsDAO;

    public List<StatisticsPlayer> findAll() {
        return statisticsDAO.findAll();
    }

    public List<StatisticsPlayer> findByUserId(long userId) {
        return statisticsDAO.findByUserId(userId);
    }

    public List<StatisticsPlayer> findById(long id) {
        return statisticsDAO.findById(id);
    }

    public List<StatisticsPlayer> findGameByUserId(long userId) {
        return statisticsDAO.findGameByUserId(userId);
    }

    public List<StatisticsPlayer> findPracticeByUserId(long userId) {
        return statisticsDAO.findPracticeByUserId(userId);
    }
}
