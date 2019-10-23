#include<stdio.h>
#define GRID_SIZE 3

void print_board(int **Matrix){
	printf("====================");
	for(int i = 0;i < GRID_SIZE;i++){
		for(int j = 0;j < GRID_SIZE;j++)
			printf("%c ",Matrix[i][j]);
		printf("\n");
	}
	printf("====================");
}

void placeQueens(int **Matrix, int row)
{
	if(row == 8)
		print_board();

	for(int i = 0;i < GRID_SIZE;i++){
		// choose
		for(int j = 0;j<GRID_SIZE;j++)
			if(isValid(Matrix[i][j]))
				Matrix[i][j] = 1;

		// explore
		placeQueens()
		// unchoose
		choosen /= 10;
		dices++;
	}
}

void isValid(int **Matrix,row,col)
{
	for(int i = 0;i<row;i++){
		// check for in the same row or the same col
		if(Matrix[i][col] || Matrix[row][i])
			return 0;
		for(int j = 0;j<row;j++){
			coulmnDistance = i - col;
			rowDistance = j - row;
			if(!(coulmnDistance == rowDistance))
				return 0;
		}
	}
 
	return 1;
}

int main()
{
	int x = 3;
	int Matrix[GRID_SIZE][GRID_SIZE] = {0};
	placeQueens(Matrix,0);
	return (0);
}
