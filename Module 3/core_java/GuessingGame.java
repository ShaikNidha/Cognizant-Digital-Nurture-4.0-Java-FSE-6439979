import java.util.*;

public class GuessingGame {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number = new Random().nextInt(100) + 1, guess;
        do {
            System.out.print("Guess the number: ");
            guess = sc.nextInt();
            if (guess < number) System.out.println("Too low!");
            else if (guess > number) System.out.println("Too high!");
            else System.out.println("Correct!");
        } while (guess != number);
        sc.close();
    }
}
