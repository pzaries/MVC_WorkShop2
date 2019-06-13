
 
$(document).ready(function () {

    //搜尋視窗
    $("#search_book_category").kendoDropDownList({
        optionLabel: "請選擇...",
        dataTextField: "text",
        dataValueField: "value",
        dataSource: "",
    });

    $("#search_book_keeper").kendoDropDownList({
        optionLabel: "請選擇...",
        dataTextField: "text",
        dataValueField: "value",
        dataSource: "",
    });

    $("#search_book_status").kendoDropDownList({
        optionLabel: "請選擇...",
        dataTextField: "text",
        dataValueField: "value",
        dataSource: "",
    });

    //新增視窗
    $("#save_book").click(function () {
        $("#add_window").data("kendoWindow").center().open();
    });

    $("#add_window").kendoWindow({
        width: "600",
        title: "新增書籍",
        visible: false,
        actions: [
            "Pin",
            "Minimize",
            "Maximize",
            "Close"
        ],
    });

    $("#add_bought_datepicker").kendoDatePicker({
        format: 'yyyy-MM-dd',
        value: new Date(),
    });

    $("#add_book_category").kendoDropDownList({
        optionLabel: "請選擇...",
        dataTextField: "text",
        dataValueField: "value",
        dataSource: "",
    });
});

////連線字串，資料庫資訊依實際狀況調整
//string connStr =@"Data Source=KENNY-HSU-XPS\SQLEXPRESS; Initial Catalog = TSQL2012; User ID = sa; Password = gss";
////建立Connection物件
//SqlConnection conn = new Sq1Connection(connStr);
////撰寫SQL語法
////Where 條件使用 @Paramter帶入
//string sql = "Select * From [HR].[Employees] Where EmployeeID=@EmployeeID";
////宣告一個SqiCommand 物件
//SqlCommand cmd = new SqlCommand(sql, conn);
////指定 Paramter 
//cmd.Parameters.Add(new SqlParameter("@EmployeeID", this.textBox1.Text));
//// 宣告一個SqlDataAdapter 並傳入Sq1Command物件 
//SqlDataAdapter dataAdapter = new SqlDataAdapter(cmd);
////宣告DataSet 物件
//DataSet ds = new DataSet();
////填入資料
//dataAdapter.Fil1(ds);


////新增
////連線字串，資料庫資訊依實際狀況調整
//string connStr=this.GetConnStr();
////建立Connectiont 物件
//SqlConnection conn = new SqlConnection(connStr);
//// 撰寫SQL 語法
//string sql =@"Insert Into [Sales]. [Shippers] (CompanyName, Phone) Values(@CompanyName,@Phone) Select SCOPE_IDENTITY( )";
//SqlCommand cmd =new SqlCommand(sql, conn);
//cmd.Parameters.Add(new SqlParameter("@CompanyName", "GSS"));
//cmd.Parameters.Add(new SqlParameter("@Phone", "25867890"));
//conn.Open();
//int newId = Convert.ToInt32(cmd.ExecuteScalar());

//conn.Close();

////修改
////連線字串，資料庫資訊依實際狀況調整
//string connStr=this.GetConnStr();
////建立Connectiont 物件
//SqlConnection conn = new Sq1Connection(connStr);
////撰寫SQL 語法
//string sql=@"Update [Sales].[Shippers] Set CompanyName=@CompanyName Where ShipperID=@ShipperID";

//SqlCommand cmd=new SqlCommand(sql, conn);
//cmd.Parameters.Add(new SqlParameter("@ShipperID", "4"));
//cmd.Parameters.Add(new SqlParameter("@CompanyName", "叡揚資訊"));

//conn.Open();

//cmd.ExecuteNonQuery();

//conn.Close();