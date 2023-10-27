package PangramChecker;
import java.util.Scanner;
public class PangramChecker {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog"; 
        boolean isPangram = isPangram(input);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String s) {
       
        s = s.toLowerCase();
        
        
        boolean[] letters = new boolean[26];

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c >= 'a' && c <= 'z') {
                int index = c - 'a';
                letters[index] = true;
            }
        }

      
        for (boolean letterPresent : letters) {
            if (!letterPresent) {
                return false;
            }
        }

        return true;
    }
} 