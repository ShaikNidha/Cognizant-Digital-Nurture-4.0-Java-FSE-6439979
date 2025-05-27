public class StreamAPI {
    public static void main(String[] args) {
        java.util.List<Integer> nums = java.util.Arrays.asList(1, 2, 3, 4, 5, 6);
        java.util.List<Integer> evens = nums.stream().filter(n -> n % 2 == 0).toList();
        System.out.println("Even numbers: " + evens);
    }
}
