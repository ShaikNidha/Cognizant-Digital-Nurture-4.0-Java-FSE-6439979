public class FileWriting {
    public static void main(String[] args) {
        try {
            java.util.Scanner sc = new java.util.Scanner(System.in);
            java.io.FileWriter fw = new java.io.FileWriter("output.txt");
            System.out.print("Enter text: ");
            String text = sc.nextLine();
            fw.write(text);
            fw.close();
            System.out.println("Data written to output.txt");
            sc.close();
        } catch (java.io.IOException e) {
            e.printStackTrace();
        }
    }
}