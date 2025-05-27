public class JDBCInsertUpdate {
    public static void main(String[] args) throws Exception {
        java.sql.Connection con = java.sql.DriverManager.getConnection("jdbc:sqlite:sample.db");
        java.sql.PreparedStatement ps = con.prepareStatement("INSERT INTO students(name) VALUES (?)");
        ps.setString(1, "John");
        ps.executeUpdate();
        ps = con.prepareStatement("UPDATE students SET name=? WHERE id=?");
        ps.setString(1, "Johnny");
        ps.setInt(2, 1);
        ps.executeUpdate();
        con.close();
    }
    
}
