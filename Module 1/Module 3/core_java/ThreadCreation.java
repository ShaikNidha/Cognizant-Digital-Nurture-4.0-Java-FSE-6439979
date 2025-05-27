public class ThreadCreation extends Thread {
    public void run() {
        for (int i = 1; i <= 3; i++)
            System.out.println(getName() + ": Running " + i);
    }

    public static void main(String[] args) {
        new ThreadCreation().start();
        new ThreadCreation().start();
    }
    
}
