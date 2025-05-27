public class ReflectionDemo {
    public static void main(String[] args) throws Exception {
        Class<?> cls = Class.forName("java.lang.String");
        java.lang.reflect.Method[] methods = cls.getDeclaredMethods();
        for (java.lang.reflect.Method m : methods)
            System.out.println(m.getName());
    }
}