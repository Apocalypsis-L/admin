package cn.vsteam.admin.primary.service;

import cn.vsteam.admin.primary.dao.PracticeDAO;
import cn.vsteam.admin.primary.entity.Practice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PracticeService {
    @Autowired
    PracticeDAO practiceDAO;

    public Practice findById(long id) {
        return practiceDAO.findById(id);
    }

    public Map<Long, Practice> findByIdList(List<Long> idList) {
        if (idList == null || idList.size() == 0) {
            return null;
        }
        return translate(practiceDAO.findByIdList(idList));
    }

    public Map<Long, Practice> translate(List<Practice> list) {
        Map<Long, Practice> map = new HashMap<>();
        for (Practice obj : list) {
            map.put(obj.getId(), obj);
        }
        return map;
    }
}
