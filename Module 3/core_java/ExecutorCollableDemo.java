public class ExecutorCollableDemo {
    public static void main(String[] args) throws Exception {
        java.util.concurrent.ExecutorService executor = java.util.concurrent.Executors.newFixedThreadPool(2);
        java.util.concurrent.Callable<String> task = () -> "Task completed";
        java.util.concurrent.Future<String> result = executor.submit(task);
        System.out.println(result.get());
        executor.shutdown();
    }
    
}
