public class JDBSTransactionHandling {
    public static void main(String[] args) {
        try (java.sql.Connection con = java.sql.DriverManager.getConnection("jdbc:sqlite:bank.db")) {
            con.setAutoCommit(false);
            java.sql.Statement stmt = con.createStatement();
            stmt.executeUpdate("UPDATE accounts SET balance = balance - 100 WHERE id = 1");
            stmt.executeUpdate("UPDATE accounts SET balance = balance + 100 WHERE id = 2");
            con.commit();
            System.out.println("Transfer successful");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
}
