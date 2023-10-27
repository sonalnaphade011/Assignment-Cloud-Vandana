package ShuffleArray;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ShuffleArray {
    public static void main(String[] args) {
        Integer[] array = {1, 2, 3, 4, 5, 6, 7};

        // Convert array to list for shuffling
        List<Integer> list = Arrays.asList(array);

        // Shuffle the list
        Collections.shuffle(list);

        // Convert back to array
        array = list.toArray(new Integer[0]);

        // Print the shuffled array
        System.out.println(Arrays.toString(array));
    }
}
