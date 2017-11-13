function getDataFromTable(){
    var conn = $.db.getConnection();
    var pstmt;
    var rs;
    var query;
    var output = {results: [] };
    try {
        query = 'SELECT * FROM EMS.EMS_DATA';
        pstmt = conn.prepareStatement(query);
        //pstmt.setString(1,name);
        rs = pstmt.executeQuery();
        
        while (rs.next()) {
               var record = {};
                record.id = rs.getString(1);
                record.fname = rs.getString(2);
                record.lname = rs.getString(3);
                record.mail = rs.getString(4);
                record.mobile = rs.getString(6);
                record.state = rs.getString(7);
                record.city = rs.getString(8);
                record.address = rs.getString(9);
                record.country = rs.getString(10);
                record.fblink = rs.getString(11);
                record.linkedin = rs.getString(12);
                record.twitter = rs.getString(13);
                record.skills = rs.getString(14);
                record.dob = rs.getString(15);
                record.github = rs.getString(16);
                record.salary = rs.getString(17);
                record.domain = rs.getString(18);
                record.dept = rs.getString(19);
                record.hire_date = rs.getString(20);
                record.gender = rs.getString(21);
                record.about = rs.getString(22);
                record.clg_name = rs.getString(23);
                record.clg_info = rs.getString(24);
                record.sch_info = rs.getString(25);
                record.sch_name = rs.getString(26);
                output.results.push(record);
        }
        rs.close();
        pstmt.close();
        conn.close();
                } 
    catch (e) {
        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
        
        $.response.setBody(e.message);
        return;
    }
    var body = JSON.stringify(output);
   // window.location = "index.html?x=" + body;
    $.response.contentType = 'application/json';
    $.response.setBody(body);
    //$.response.status = $.net.http.OK;
}


getDataFromTable();

//$.trace.debug("Type your log comments here");
