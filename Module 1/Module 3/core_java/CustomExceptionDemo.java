class InvalidAgeException extends Exception {
    InvalidAgeException(String message) {
        super(message);
    }
}

public class CustomExceptionDemo {
    public static void main(String[] args) {
        try {
            int age = 16;
            if (age < 18)
                throw new InvalidAgeException("Age must be 18 or older.");
            System.out.println("Valid age: " + age);
        } catch (InvalidAgeException e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}

