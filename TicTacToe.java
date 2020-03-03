import java.util.Scanner;

public class TicTacToe {
	
	static Scanner input;
	static String[] board;
	static String playerTurn;
	static boolean win; 
	
	public static void main(String[] args) {
		int playerInput;
		int moves = 9;
		input = new Scanner(System.in);
	    board = new String[9];
		playerTurn = "O";
		win = false;
		
		populateBoard();
		printGameBoard();
		
		while(moves > 0) {
			System.out.println("It is player " + playerTurn + "'s turn");
			System.out.println("Choose a space on the board (1-9)");
			playerInput = input.nextInt();
			while (playerInput > 9 || playerInput <= 0 || !board[playerInput-1].equals(String.valueOf(playerInput))) {
				System.out.println("That is an invalid move player " + playerTurn + ". Please choose another number ");
				playerInput = input.nextInt();
			}
			board[playerInput-1] = playerTurn;
			printGameBoard();
			win = checkWinner();
			if (win) {
				break;
			}
			if (playerTurn.equals("O")) {
				playerTurn = "X";
			} else {
				playerTurn = "O";
			}
			moves--;
		}
		
		if (moves == 0) {
			System.out.println("The game has resulted in a tie, nobody wins!");
		} else {
			System.out.println("Player " + playerTurn + " wins!");
		}
	}

	static boolean checkWinner() {
		for (int i = 0; i < board.length-1; i++) {
			String check = null;
			switch(i) {
			case 0: 
				check = board[0] + board[1] + board[2];
				break;
			case 1:
				check = board[3] + board[4] + board[5];
				break;
			case 2:
				check = board[6] + board[7] + board[8];
				break;
			case 3:
				check = board[0] + board[3] + board[6];
				break;
			case 4:
				check = board[1] + board[4] + board[7];
				break;
			case 5:
				check = board[2] + board[5] + board[8];
				break;
			case 6:
				check = board[0] + board[4] + board[8];
				break;
			case 7:
				check = board[2] + board[4] + board[6];
				break;
			}
			if (check.equals("XXX") || check.equals("OOO")) {
				return true;
			}
		}
		
		return false;
	}
	
	static void printGameBoard() {
		System.out.println(" " + board[0] + " | " + board[1] + " | " + board[2] + " ");
		System.out.println("-----------");
		System.out.println(" " + board[3] + " | " + board[4] + " | " + board[5] + " ");
		System.out.println("-----------");
		System.out.println(" " + board[6] + " | " + board[7] + " | " + board[8] + " ");
	}

	static void populateBoard() {
		for (int a = 0; a < 9; a++) {
			board[a] = String.valueOf(a+1);
		}
	}

}
