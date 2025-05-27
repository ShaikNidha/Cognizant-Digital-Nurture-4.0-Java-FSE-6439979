public class ArrayListExample {
    public static void main(String[] args) {
        java.util.Scanner sc = new java.util.Scanner(System.in);
        java.util.ArrayList<String> names = new java.util.ArrayList<>();
        System.out.println("Enter names (type 'exit' to stop):");
        while (true) {
            String name = sc.nextLine();
            if (name.equalsIgnoreCase("exit")) break;
            names.add(name);
        }
        System.out.println("Students: " + names);
    }
    
}
