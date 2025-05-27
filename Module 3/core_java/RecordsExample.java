record Person(String name, int age) {}

public class RecordsExample {
    public static void main(String[] args) {
        java.util.List<Person> people = java.util.List.of(new Person("Alice", 22), new Person("Bob", 17));
        people.stream().filter(p -> p.age() >= 18).forEach(System.out::println);
    }
}
