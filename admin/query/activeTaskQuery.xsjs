function getDataFromTable(){
    var conn = $.db.getConnection();
    var pstmt;
    var rs;
    var query;
    var output = {results: [] };
    try {
        query = 'SELECT * FROM EMS.TASKS WHERE STATUS=1';
        pstmt = conn.prepareStatement(query);
        //pstmt.setString(1,name);
        rs = pstmt.executeQuery();
        
        while (rs.next()) {
               var record = {};
                record.id = rs.getString(1);
                record.e_id = rs.getString(2);
                record.title = rs.getString(3);
                record.description = rs.getString(4);
                record.start_date = rs.getString(5);
                record.deadline = rs.getString(6);
                record.sub_date = rs.getString(7);
                record.status = rs.getString(8);
                record.t_prior = rs.getString(9);
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
