public class BasicJDBCConnection {
    public static void main(String[] args) {
        try {
            java.sql.Connection con = java.sql.DriverManager.getConnection("jdbc:sqlite:sample.db");
            java.sql.Statement stmt = con.createStatement();
            java.sql.ResultSet rs = stmt.executeQuery("SELECT name FROM students");
            while (rs.next())
                System.out.println(rs.getString("name"));
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
}
