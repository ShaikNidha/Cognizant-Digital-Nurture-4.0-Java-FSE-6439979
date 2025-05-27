public class FileReading {
    public static void main(String[] args) {
        try {
            java.io.BufferedReader br = new java.io.BufferedReader(new java.io.FileReader("output.txt"));
            String line;
            while ((line = br.readLine()) != null)
                System.out.println(line);
            br.close();
        } catch (java.io.IOException e) {
            e.printStackTrace();
        }
    }
}
