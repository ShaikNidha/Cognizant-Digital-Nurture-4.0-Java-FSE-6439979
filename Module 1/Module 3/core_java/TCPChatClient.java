public class TCPChatClient {
    public static void main(String[] args) throws java.io.IOException {
        java.net.Socket s = new java.net.Socket("localhost", 1234);
        java.io.BufferedReader br = new java.io.BufferedReader(new java.io.InputStreamReader(s.getInputStream()));
        java.io.PrintWriter pw = new java.io.PrintWriter(s.getOutputStream(), true);
        System.out.println(br.readLine());
        pw.println("Hi Server!");
        s.close();
    }
}