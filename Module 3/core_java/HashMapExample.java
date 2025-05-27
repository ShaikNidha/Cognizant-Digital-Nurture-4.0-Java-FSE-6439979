public class HashMapExample {
    public static void main(String[] args) {
        java.util.Scanner sc = new java.util.Scanner(System.in);
        java.util.HashMap<Integer, String> students = new java.util.HashMap<>();
        students.put(1, "Alice");
        students.put(2, "Bob");
        System.out.print("Enter student ID: ");
        int id = sc.nextInt();
        System.out.println("Name: " + students.getOrDefault(id, "Not found"));
        sc.close();
    }
}
