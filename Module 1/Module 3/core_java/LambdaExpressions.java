public class LambdaExpressions {
    public static void main(String[] args) {
        java.util.List<String> list = java.util.Arrays.asList("Java", "Python", "C++");
        list.sort((a, b) -> a.compareTo(b));
        list.forEach(System.out::println);
    }
    
}
