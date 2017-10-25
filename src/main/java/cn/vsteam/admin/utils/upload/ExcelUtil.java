package cn.vsteam.admin.utils.upload;

import cn.vsteam.admin.p.entity.Invitation;
import cn.vsteam.admin.p.entity.Team;
import cn.vsteam.admin.p.entity.Tokens;
import cn.vsteam.admin.p.entity.User;
import cn.vsteam.admin.p.service.InvitationService;
import cn.vsteam.admin.p.service.TeamService;
import cn.vsteam.admin.p.service.TokensService;
import cn.vsteam.admin.p.service.UserService;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.io.*;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Component
public class ExcelUtil {
    //默认单元格内容为数字时格式
    private static DecimalFormat df = new DecimalFormat("0");
    // 默认单元格格式化日期字符串
    private static SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    // 格式化数字
    private static DecimalFormat nf = new DecimalFormat("0.00");

    private static String IP = "www.vsteam.cn";
//    @Autowired
//    private RestTemplate template;

    //    @Autowired
//    private RestTemplateBuilder builder;
    private final TeamService teamService;
    private final UserService userService;
    private final TokensService tokensService;
    private final InvitationService invitationService;

    public ExcelUtil(TeamService teamService, UserService userService, TokensService tokensService, InvitationService invitationService) {
        this.teamService = teamService;
        this.userService = userService;
        this.tokensService = tokensService;
        this.invitationService = invitationService;
    }

    public static ArrayList<ArrayList<Object>> readExcel(File file) {
        if (file == null) {
            return null;
        }
        if (file.getName().endsWith("xlsx")) {
            //处理ecxel2007
            return readExcel2007(file);
        } else {
            //处理ecxel2003
            return readExcel2003(file);
        }
    }

    /*
     * @return 将返回结果存储在ArrayList内，存储结构与二位数组类似
     * lists.get(0).get(0)表示过去Excel中0行0列单元格
     */
    public static ArrayList<ArrayList<Object>> readExcel2003(File file) {
        try {
            ArrayList<ArrayList<Object>> rowList = new ArrayList<ArrayList<Object>>();
            ArrayList<Object> colList;
            HSSFWorkbook wb = new HSSFWorkbook(new FileInputStream(file));
            HSSFSheet sheet = wb.getSheetAt(0);
            HSSFRow row;
            HSSFCell cell;
            Object value;
            for (int i = sheet.getFirstRowNum(), rowCount = 0; rowCount < sheet.getPhysicalNumberOfRows(); i++) {
                row = sheet.getRow(i);
                colList = new ArrayList<Object>();
                if (row == null) {
                    //当读取行为空时
                    if (i != sheet.getPhysicalNumberOfRows()) {//判断是否是最后一行
                        rowList.add(colList);
                    }
                    continue;
                } else {
                    rowCount++;
                }
                for (int j = row.getFirstCellNum(); j <= row.getLastCellNum(); j++) {
                    cell = row.getCell(j);
                    if (cell == null || cell.getCellType() == HSSFCell.CELL_TYPE_BLANK) {
                        //当该单元格为空
                        if (j != row.getLastCellNum()) {//判断是否是该行中最后一个单元格
                            colList.add("");
                        }
                        continue;
                    }
                    switch (cell.getCellType()) {
                        case XSSFCell.CELL_TYPE_STRING:
                            System.out.println(i + "行" + j + " 列 is String type");
                            value = cell.getStringCellValue();
                            break;
                        case XSSFCell.CELL_TYPE_NUMERIC:
                            if ("@".equals(cell.getCellStyle().getDataFormatString())) {
                                value = df.format(cell.getNumericCellValue());
                            } else if ("General".equals(cell.getCellStyle()
                                    .getDataFormatString())) {
                                value = nf.format(cell.getNumericCellValue());
                            } else {
                                value = sdf.format(HSSFDateUtil.getJavaDate(cell
                                        .getNumericCellValue()));
                            }
                            System.out.println(i + "行" + j
                                    + " 列 is Number type ; DateFormt:"
                                    + value.toString());
                            break;
                        case XSSFCell.CELL_TYPE_BOOLEAN:
                            System.out.println(i + "行" + j + " 列 is Boolean type");
                            value = Boolean.valueOf(cell.getBooleanCellValue());
                            break;
                        case XSSFCell.CELL_TYPE_BLANK:
                            System.out.println(i + "行" + j + " 列 is Blank type");
                            value = "";
                            break;
                        default:
                            System.out.println(i + "行" + j + " 列 is default type");
                            value = cell.toString();
                    }// end switch
                    colList.add(value);
                }//end for j
                rowList.add(colList);
            }//end for i

            return rowList;
        } catch (Exception e) {
            return null;
        }
    }

    public static ArrayList<ArrayList<Object>> readExcel2007(File file) {
        try {
            ArrayList<ArrayList<Object>> rowList = new ArrayList<ArrayList<Object>>();
            ArrayList<Object> colList;
            XSSFWorkbook wb = new XSSFWorkbook(new FileInputStream(file));
            XSSFSheet sheet = wb.getSheetAt(0);
            XSSFRow row;
            XSSFCell cell;
            Object value;
            for (int i = sheet.getFirstRowNum(), rowCount = 0; rowCount < sheet.getPhysicalNumberOfRows(); i++) {
                row = sheet.getRow(i);
                colList = new ArrayList<Object>();
                if (row == null) {
                    //当读取行为空时
                    if (i != sheet.getPhysicalNumberOfRows()) {//判断是否是最后一行
                        rowList.add(colList);
                    }
                    continue;
                } else {
                    rowCount++;
                }
                for (int j = row.getFirstCellNum(); j <= row.getLastCellNum(); j++) {
                    cell = row.getCell(j);
                    if (cell == null || cell.getCellType() == HSSFCell.CELL_TYPE_BLANK) {
                        //当该单元格为空
                        if (j != row.getLastCellNum()) {//判断是否是该行中最后一个单元格
                            colList.add("");
                        }
                        continue;
                    }
                    switch (cell.getCellType()) {
                        case XSSFCell.CELL_TYPE_STRING:
                            System.out.println(i + "行" + j + " 列 is String type");
                            value = cell.getStringCellValue();
                            break;
                        case XSSFCell.CELL_TYPE_NUMERIC:
                            if ("@".equals(cell.getCellStyle().getDataFormatString())) {
                                value = df.format(cell.getNumericCellValue());
                            } else if ("General".equals(cell.getCellStyle()
                                    .getDataFormatString())) {
                                value = nf.format(cell.getNumericCellValue());
                            } else {
                                value = sdf.format(HSSFDateUtil.getJavaDate(cell
                                        .getNumericCellValue()));
                            }
                            System.out.println(i + "行" + j
                                    + " 列 is Number type ; DateFormt:"
                                    + value.toString());
                            break;
                        case XSSFCell.CELL_TYPE_BOOLEAN:
                            System.out.println(i + "行" + j + " 列 is Boolean type");
                            value = Boolean.valueOf(cell.getBooleanCellValue());
                            break;
                        case XSSFCell.CELL_TYPE_BLANK:
                            System.out.println(i + "行" + j + " 列 is Blank type");
                            value = "";
                            break;
                        default:
                            System.out.println(i + "行" + j + " 列 is default type");
                            value = cell.toString();
                    }// end switch
                    colList.add(value);
                }//end for j
                rowList.add(colList);
            }//end for i

            return rowList;
        } catch (Exception e) {
            System.out.println("exception");
            return null;
        }
    }

    public static void writeExcel(ArrayList<ArrayList<Object>> result, String path) {
        if (result == null) {
            return;
        }
        HSSFWorkbook wb = new HSSFWorkbook();
        HSSFSheet sheet = wb.createSheet("sheet1");
        for (int i = 0; i < result.size(); i++) {
            HSSFRow row = sheet.createRow(i);
            if (result.get(i) != null) {
                for (int j = 0; j < result.get(i).size(); j++) {
                    HSSFCell cell = row.createCell(j);
                    cell.setCellValue(result.get(i).get(j).toString());
                }
            }
        }
        ByteArrayOutputStream os = new ByteArrayOutputStream();
        try {
            wb.write(os);
        } catch (IOException e) {
            e.printStackTrace();
        }
        byte[] content = os.toByteArray();
        File file = new File(path);//Excel文件生成后存储的位置。
        OutputStream fos = null;
        try {
            fos = new FileOutputStream(file);
            fos.write(content);
            os.close();
            fos.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static DecimalFormat getDf() {
        return df;
    }

    public static void setDf(DecimalFormat df) {
        ExcelUtil.df = df;
    }

    public static SimpleDateFormat getSdf() {
        return sdf;
    }

    public static void setSdf(SimpleDateFormat sdf) {
        ExcelUtil.sdf = sdf;
    }

    public static DecimalFormat getNf() {
        return nf;
    }

    public static void setNf(DecimalFormat nf) {
        ExcelUtil.nf = nf;
    }

    public void findError() {
        File file = new File("C:\\Users\\39762\\Desktop\\yonghuzhanghao.xlsx");
        ArrayList<ArrayList<Object>> result = ExcelUtil.readExcel(file);
        long username = 13800000000L;
        RegistPojo registPojo;
        Team tmpTeam = new Team();
        String tmpName = "";
        int count = 0;
        for (int i = 0, length = result.size(); i < length; i++) {
            String teamName = result.get(i).get(0).toString();
//            Team team = teamService.findByTeamName(teamName);
            if (!tmpName.equals(teamName)) {
                System.out.println(teamName);
                tmpName = teamName;
                count++;
            }
        }
        System.out.println(count);
    }

    public void regist() {
        File file = new File("C:\\Users\\39762\\Desktop\\yonghuzhanghao.xlsx");
        ArrayList<ArrayList<Object>> result = ExcelUtil.readExcel(file);
        long username = 13800001236L;
        RegistPojo registPojo;
        Team tmpTeam = new Team();
        for (int i = 0, length = result.size(); i < length; i++) {
            username++;
            //个人信息注册
            ArrayList<Object> tmp = result.get(i);
            String nickName = tmp.get(2).toString();
            registPojo = new RegistPojo();
            registPojo.setUserName(String.valueOf(username));
            registPojo.setNickName(nickName);
            registPojo.setPassWord("123456");
            registPojo.setTeamsType("footballTeams");
            registPojo.setTerminalMode("web");
            registPojo.setClientMode("mail");
            postRegister(registPojo);
            //获取球队
            if (tmp.get(0) != null && !"".equals(tmp.get(0))) {
                //球队信息
                Team team = teamService.findByTeamName(tmp.get(0).toString());
                if (team != null) {
                    tmpTeam = team;
                } else {
                    System.out.println(tmp.get(0).toString() + " not found!");
                    break;
                }
            }
            //加入球队
            User user = userService.findByUsername(String.valueOf(username));
            Tokens tokens = tokensService.findById(user.getTokenid());
            User inviter = userService.findById(tmpTeam.getOwner());
            Tokens inviterTokens = tokensService.findById(inviter.getTokenid());
//            postJoin(tokens, "footballTeams", String.valueOf(tmpTeam.getId()));
            postInvite(inviterTokens, String.valueOf(tmpTeam.getId()), String.valueOf(user.getId()));
            Invitation invitation = invitationService.findByTeamIdAndInvitee(tmpTeam.getId(), user.getId());
            postHandleInvite(tokens, String.valueOf(tmpTeam.getId()), String.valueOf(invitation.getId()));

        }
    }

    public void postRegister(RegistPojo registPojo) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<RegistPojo> requestEntity = new HttpEntity<>(registPojo, headers);
        RestTemplate template = new RestTemplate();
        RegistPojo registPojo2 = template.postForObject(
                "https://" + IP + "/vsteam/rest/1.0/users/register", requestEntity,
                RegistPojo.class);
        System.out.println(registPojo2);
    }

    public void postJoin(Tokens tokens, String teamsType, String teamsid) {
        String url = "https://" + IP + "/vsteam/rest/1.0/teams/" + teamsType + "/" + teamsid
                + "/users/appliedJoinTeams";
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        headers.add("Authorization", tokens.getAccesstoken());
        HttpEntity requestEntity = new HttpEntity<>(headers);
        RestTemplate template = new RestTemplate();
        template.postForObject(url, requestEntity, RegistPojo.class);
    }

    public void postInvite(Tokens tokens, String teamsId, String inviteeId) {
        String url = "https://" + IP + "/vsteam/rest/1.0/teams/footballTeams/" + teamsId + "/" + inviteeId + "/inviteUser";
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        headers.add("Authorization", tokens.getAccesstoken());
        HttpEntity requestEntity = new HttpEntity<>(headers);
        RestTemplate template = new RestTemplate();
        template.postForObject(url, requestEntity, RegistPojo.class);
    }

    public void postHandleInvite(Tokens tokens, String teamsId, String inviteeId) {
        String url = "https://" + IP + "/vsteam/rest/1.0/teams/footballTeams/" + teamsId + "/" + inviteeId + "/userHandleInvitation";
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        headers.add("Authorization", tokens.getAccesstoken());
        Map<String, String> map = new HashMap<>();
        map.put("dealResult", "agree");
        HttpEntity<Map<String, String>> requestEntity = new HttpEntity<>(map, headers);
        RestTemplate template = new RestTemplate();
        template.postForObject(url, requestEntity, RegistPojo.class);
    }

}